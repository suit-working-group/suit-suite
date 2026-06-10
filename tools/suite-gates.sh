#!/usr/bin/env bash
# ============================================================================
# suite-gates.sh — SUIT release gates (audit 260609-2153, lot 16).
# Run before any commit/release touching .tex/.bib. All gates must pass.
#
# NOT mechanised here (human review passes, run them at release):
#   - claim-to-record reconciliation: every numeric/institutional claim
#     adjacent to a \cite must be supported by the entry's verified
#     abstract/note (RC-source-claim-fidelity);
#   - capsule fidelity beyond the known regression tokens: a dossier capsule
#     may not name an entity its (anonymised) chapter does not name.
# ============================================================================
set -uo pipefail
cd "$(dirname "$0")/.."
fail=0
ok()  { echo "GATE $1 ok  — $2"; }
bad() { echo "GATE $1 FAIL — $2"; echo "$3" | head -12; fail=1; }

# --- G1: bare locality anchors in GENERIC bodies ----------------------------
g1=$(grep -rn "pan-European\|European backbone\|top governing board\|R-tier" \
     --include="*.tex" suit-policy suit-solution shared 2>/dev/null \
   | grep -v "/out/" \
   | grep -v "pan-European backbone network connecting" || true)
if [ -n "$g1" ]; then bad G1 "ancres nues dans les corps génériques" "$g1"; else ok G1 "0 ancre nue (pan-European / European backbone / top governing board / R-tier)"; fi

# --- G2: capsule regression tokens in the dossier shell ----------------------
# The anonymised chapters (ch30/ch31) name no institutions and no vendor PAIRS;
# their dossier capsules must not re-leak them. Per-chapter Reference/
# Alternatives capsules legitimately name the products their chapters name, so
# vendor tokens are only flagged on coexistence-pair lines (leftrightarrow).
g2a=$(grep -n "CERN\|ETH Z\|Tsinghua\|UNAM\|KU Leuven\|NUS Singapore\|USP Brazil\|ANU Australia" \
      suit-policy/policy-EN.tex 2>/dev/null || true)
g2b=$(grep -n "leftrightarrow" suit-policy/policy-EN.tex 2>/dev/null \
    | grep "Keycloak\|SCCM\|Splunk\|VMware\|NetApp\|Ansible\|OpenSearch\|K8s\|Ceph" || true)
g2="$g2a$g2b"
if [ -n "$g2" ]; then bad G2 "tokens de régression capsule (chapitres anonymisés) dans le shell du dossier" "$g2"; else ok G2 "0 token de régression dans les capsules ch30/ch31"; fi

# --- G3: hardcoded counts that drift ------------------------------------------
g3a=$(grep -rn "four-page synthesis\|five-page document" --include="*.tex" suit-policy suit-solution shared 2>/dev/null | grep -v "/out/" || true)
g3b=$(grep -rn "30-day\|30~day\|30 day" --include="*.tex" suit-policy/main shared 2>/dev/null | grep -v "/out/" | grep -i "incident\|nis2\|final report\|cadence" || true)
g3="$g3a$g3b"
if [ -n "$g3" ]; then bad G3 "comptes en dur (pages / cadence NIS2 30 jours)" "$g3"; else ok G3 "0 compte en dur connu"; fi

# --- G4: literal cross-chapter section numbers in the Technical Reference ----
g4=$(grep -rnE '\\S[0-9]+\.[0-9]' --include="*.tex" suit-solution 2>/dev/null | grep -v "/out/" || true)
if [ -n "$g4" ]; then bad G4 "renvois de section littéraux (utiliser \\S\\ref{...})" "$g4"; else ok G4 "0 renvoi littéral \\S<n>.<m>"; fi

# --- G5: localization completeness invariant ----------------------------------
# Hard error: a consumed key with no Layer-0 default (renders ??key??).
# Warning only: a Layer-0 key with no consumption site (dead binding).
missing=""
deadcount=0
keys_consumed=$(grep -rhoE '\\(loc|Loc)\{[a-z0-9-]+\}' --include="*.tex" suit-policy suit-solution shared 2>/dev/null | sed -E 's/.*\{([a-z0-9-]+)\}/\1/' | sort -u)
for k in $keys_consumed; do
  # "key" is the documentation pseudo-example (\loc{key}) in the localization
  # guide and rule comments, not a real binding.
  [ "$k" = "key" ] && continue
  grep -q "setloc{$k}" shared/localization-defaults.tex || missing="$missing $k"
done
keys_default=$(grep -oE '\\setloc\{[a-z0-9-]+\}' shared/localization-defaults.tex | sed -E 's/.*\{([a-z0-9-]+)\}/\1/' | sort -u)
for k in $keys_default; do
  if ! grep -rqE "\\\\(loc|Loc)\{$k\}" --include="*.tex" --include="*.sty" suit-policy suit-solution shared 2>/dev/null; then
    deadcount=$((deadcount+1))
  fi
done
if [ -n "$missing" ]; then bad G5 "clés consommées sans défaut Layer-0 (??key?? au rendu)" "$missing"; else ok G5 "0 clé consommée sans défaut Layer-0 (dead bindings non bloquants: $deadcount)"; fi

# --- G6: instantiation currency ------------------------------------------------
for inst in instantiations/*/; do
  inst="${inst%/}"
  [ -d "$inst/render" ] || continue
  if out6=$(tools/regen-instance-wrappers.sh "$inst" --check 2>&1); then
    ok G6 "$inst : wrappers identiques à la régénération"
  else
    bad G6 "$inst : wrapper drift (re-lancer tools/regen-instance-wrappers.sh)" "$out6"
  fi
  case "$inst" in *_TEMPLATE*) ;; *)
    g6r=$(grep -rn "REPLACE:" "$inst/set.tex" 2>/dev/null || true)
    [ -n "$g6r" ] && bad G6 "$inst : placeholders REPLACE: dans set.tex" "$g6r"
  ;; esac
done

# --- G7: machinery self-consistency -------------------------------------------
g7=""
for f in suit-policy/policy-EN.tex suit-policy/companion/policy-summary-EN.tex \
         suit-solution/solution-EN.tex suit-solution/summary/solution-summary-EN.tex \
         suit-policy/argumentation/argumentation-policy-EN.tex \
         suit-solution/argumentation/argumentation-solution-EN.tex \
         docs/dispositions.json categories/README.md; do
  [ -f "$f" ] || g7+="fichier référencé par la machinerie manquant: $f"$'\n'
done
python3 -c "import json; json.load(open('docs/dispositions.json'))" 2>/dev/null \
  || g7+="docs/dispositions.json: JSON invalide"$'\n'
for d in $(grep -ohE 'DISPO-[A-Z0-9-]+[A-Z0-9]' .claude/workflows/suit-audit.workflow.js 2>/dev/null | sort -u); do
  grep -q "\"$d\"" docs/dispositions.json || g7+="le workflow cite une disposition inconnue: $d"$'\n'
done
for s in tools/*.sh; do bash -n "$s" 2>/dev/null || g7+="erreur de syntaxe: $s"$'\n'; done
# Spec-first lockstep: the canonical plan and the orchestrator must agree.
PLANF=_AUDITS/AUDIT-PLAN.md
WF=.claude/workflows/suit-audit.workflow.js
if [ ! -f "$PLANF" ]; then
  g7+="plan canonique manquant: $PLANF"$'\n'
else
  grep -q "PLAN-VERSION:" "$PLANF" || g7+="$PLANF: marqueur PLAN-VERSION absent"$'\n'
  for k in SCI TECH XCOH LEG CITE APP GOV INST ARCH DEF; do
    grep -q "<!-- TRACK:$k -->" "$PLANF" || g7+="$PLANF: section TRACK:$k absente"$'\n'
    grep -q "<!-- /TRACK:$k -->" "$PLANF" || g7+="$PLANF: fermeture /TRACK:$k absente"$'\n'
    open_l=$(grep -n "<!-- TRACK:$k -->" "$PLANF" | head -1 | cut -d: -f1)
    close_l=$(grep -n "<!-- /TRACK:$k -->" "$PLANF" | head -1 | cut -d: -f1)
    if [ -n "$open_l" ] && [ -n "$close_l" ] && [ $((close_l - open_l)) -lt 3 ]; then
      g7+="$PLANF: section TRACK:$k vide ou quasi vide"$'\n'
    fi
    # A track is referenced either literally ("TRACK:INST") or dynamically
    # ("TRACK:' + t.k" with the key declared as k: '<K>').
    if ! grep -q "TRACK:$k" "$WF"; then
      if grep -q "TRACK:' + t.k" "$WF" && grep -q "k: '$k'" "$WF"; then :; else
        g7+="$WF: la piste $k du plan n'est référencée par aucun prompt"$'\n'
      fi
    fi
  done
  for s in SCOPE SEVERITY IDS DISPOSITIONS VERIFY SYNTHESIS REPORT; do
    grep -q "<!-- SECTION:$s -->" "$PLANF" || g7+="$PLANF: section SECTION:$s absente"$'\n'
  done
  for k in $(grep -oE "k: '[A-Z]+'" "$WF" | sed "s/k: '//;s/'//" | sort -u); do
    grep -q "<!-- TRACK:$k -->" "$PLANF" || g7+="$WF: piste $k sans section TRACK:$k dans le plan"$'\n'
  done
  for f in $(grep -oE '\.claude/rules/[a-z-]+\.md' "$PLANF" | sort -u); do
    [ -f "$f" ] || g7+="$PLANF: contrat pointé manquant: $f"$'\n'
  done
fi
if [ -n "$g7" ]; then bad G7 "auto-cohérence machinerie + lockstep plan<->orchestrateur" "$g7"; else ok G7 "chemins DOCS, dispositions, syntaxe tools/, et lockstep plan<->workflow cohérents"; fi

# --- G8: governance / diffusion coherence --------------------------------------
g8=""
# 8a — relative markdown links resolve (README, library front door, contributing)
for md in README.md CONTRIBUTING.md instantiations/README.md \
          instantiations/lu-university-of-luxembourg/README.md; do
  [ -f "$md" ] || { g8+="fichier manquant: $md"$'\n'; continue; }
  base=$(dirname "$md")
  while IFS= read -r tgt; do
    case "$tgt" in http*|mailto:*|\#*) continue ;; esac
    tgt="${tgt%%#*}"; [ -z "$tgt" ] && continue
    [ -e "$base/$tgt" ] || g8+="$md -> lien mort: $tgt"$'\n'
  done < <(grep -oE '\]\([^)]+\)' "$md" | sed -E 's/^\]\((.*)\)$/\1/')
done
# 8b — deposited editions track their four PDFs (deposit bar vs .gitignore)
for inst in instantiations/*/; do
  inst="${inst%/}"
  case "$inst" in *_TEMPLATE*) continue ;; esac
  for doc in policy-EN policy-summary-EN solution-EN solution-summary-EN; do
    p="$inst/render/$doc.pdf"
    [ -f "$p" ] || g8+="PDF déposé manquant: $p"$'\n'
    git check-ignore -q "$p" 2>/dev/null && g8+="PDF déposé ignoré par .gitignore: $p"$'\n'
  done
done
if [ -n "$g8" ]; then bad G8 "cohérence gouvernance/diffusion" "$g8"; else ok G8 "liens des READMEs et dépôt des PDFs d'édition cohérents"; fi

echo
if [ "$fail" -ne 0 ]; then echo "SUITE GATES: FAIL"; exit 1; else echo "SUITE GATES: PASS"; fi
