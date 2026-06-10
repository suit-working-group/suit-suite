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

echo
if [ "$fail" -ne 0 ]; then echo "SUITE GATES: FAIL"; exit 1; else echo "SUITE GATES: PASS"; fi
