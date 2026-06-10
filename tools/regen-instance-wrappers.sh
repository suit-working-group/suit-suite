#!/usr/bin/env bash
# ============================================================================
# regen-instance-wrappers.sh — regenerate an instantiation's render wrappers
# from the CURRENT generic sources, applying ONLY the sanctioned delta
# (instantiation-model.md; audit 260609-2153, lot 15):
#   1. a fixed banner comment;
#   2. \genericroot / \catdir newcommands right after \documentclass;
#   3. shared-path remap (../shared, ../../shared -> \genericroot/shared);
#   4. \input{../set} immediately BEFORE \begin{document} — i.e. AFTER any
#      document-scope \setloc override in the generic shell's preamble, so the
#      edition's Layer-1/Layer-2 values always win (a generic shell may
#      legitimately carry document-scope \setloc deltas; the edition set must
#      load last).
# Wrappers are BUILD MACHINERY: never edit their content by hand — edit the
# generic source and regenerate. This script is the executable definition of
# the sanctioned delta; suite-gates.sh (G6) reuses it in --check mode.
#
# Usage:
#   tools/regen-instance-wrappers.sh instantiations/<institution>          # write
#   tools/regen-instance-wrappers.sh instantiations/<institution> --check  # drift check
# Exit: 0 ok; 1 drift detected (--check) or error.
# ============================================================================
set -euo pipefail
cd "$(dirname "$0")/.."
INST="${1:?usage: $0 instantiations/<institution> [--check]}"
MODE="${2:-write}"
[ -d "$INST/render" ] || { echo "no render/ dir in $INST" >&2; exit 1; }

regen_one() {
  local src="$1" doc="$2" out="$3"
  awk -v doc="$doc" '
    BEGIN{
      print "% ============================================================================"
      print "% RENDER WRAPPER (" doc ") --- instantiated edition. GENERATED FILE."
      print "% Produced by tools/regen-instance-wrappers.sh from the generic source."
      print "% Sanctioned delta ONLY: \\genericroot remap of shared paths + \\input{../set}"
      print "% after the Layer-0 defaults. Do NOT edit content here; edit the generic"
      print "% source and regenerate. Build: latexmk -pdf " doc ".tex"
      print "% ============================================================================"
    }
    {
      line=$0
      gsub(/\\input\{\.\.\/shared\//, "\\input{\\genericroot/shared/", line)
      gsub(/\\input\{\.\.\/\.\.\/shared\//, "\\input{\\genericroot/shared/", line)
      gsub(/\\addbibresource\{\.\.\/shared\//, "\\addbibresource{\\genericroot/shared/", line)
      gsub(/\\addbibresource\{\.\.\/\.\.\/shared\//, "\\addbibresource{\\genericroot/shared/", line)
      if (line ~ /^\\begin\{document\}/ && !setdone) {
        print "\\input{../set}% Layer-1+2: archetype + institution values (sanctioned delta; loaded LAST so edition values override any document-scope \\setloc of the generic shell)"
        setdone=1
      }
      print line
      if (line ~ /^\\documentclass/) {
        print "% --- instantiation paths (sanctioned delta) ---"
        print "\\newcommand{\\genericroot}{../../..}"
        print "\\newcommand{\\catdir}{\\genericroot/categories}% consumed by ../set.tex"
      }
    }
  ' "$src" > "$out"
}

rc=0
while IFS=: read -r src doc; do
  if [ "$MODE" = "--check" ]; then
    tmp="$(mktemp)"
    regen_one "$src" "$doc" "$tmp"
    if ! diff -q "$tmp" "$INST/render/$doc.tex" > /dev/null 2>&1; then
      echo "DRIFT: $INST/render/$doc.tex differs from regeneration of $src"
      diff "$tmp" "$INST/render/$doc.tex" | head -12
      rc=1
    fi
    rm -f "$tmp"
  else
    regen_one "$src" "$doc" "$INST/render/$doc.tex"
    echo "regenerated $INST/render/$doc.tex from $src"
  fi
done <<'MAP'
suit-policy/policy-EN.tex:policy-EN
suit-policy/companion/policy-summary-EN.tex:policy-summary-EN
suit-solution/solution-EN.tex:solution-EN
suit-solution/summary/solution-summary-EN.tex:solution-summary-EN
MAP
exit $rc
