#!/usr/bin/env bash
# ============================================================================
# bump-version.sh — bump the generic SUIT suite version (semver X.Y.Z).
# ----------------------------------------------------------------------------
# Single source of truth: shared/suite-version.tex (\setloc{suite-version}{...}).
# One bump per release, regardless of how many changes it bundles:
#   patch (default) -> Z+1
#   minor           -> Y+1, Z=0
#   major           -> X+1, Y=0, Z=0
# Optional: --tag creates the git tag vX.Y.Z (never automatic).
#
# Usage:
#   tools/bump-version.sh [patch|minor|major] [--tag]
#   tools/bump-version.sh --show         # print current version, do nothing
# Exit: 0 ok; non-zero on error.
# ============================================================================
set -euo pipefail
cd "$(dirname "$0")/.."
FILE="shared/suite-version.tex"

LEVEL="patch"; TAG=0; SHOW=0
for a in "$@"; do
  case "$a" in
    patch|minor|major) LEVEL="$a" ;;
    --tag)             TAG=1 ;;
    --show)            SHOW=1 ;;
    *) echo "usage: $0 [patch|minor|major] [--tag] | --show" >&2; exit 2 ;;
  esac
done

[ -f "$FILE" ] || { echo "error: $FILE not found" >&2; exit 1; }
cur=$(grep -oE '\\setloc\{suite-version\}\{[0-9]+\.[0-9]+\.[0-9]+\}' "$FILE" \
      | grep -oE '[0-9]+\.[0-9]+\.[0-9]+' | head -1)
[ -n "$cur" ] || { echo "error: cannot parse current version in $FILE" >&2; exit 1; }

if [ "$SHOW" -eq 1 ]; then echo "$cur"; exit 0; fi

IFS=. read -r X Y Z <<EOF
$cur
EOF
case "$LEVEL" in
  patch) Z=$((Z+1)) ;;
  minor) Y=$((Y+1)); Z=0 ;;
  major) X=$((X+1)); Y=0; Z=0 ;;
esac
new="$X.$Y.$Z"

perl -0pi -e "s/\\\\setloc\\{suite-version\\}\\{[0-9.]+\\}/\\\\setloc{suite-version}{$new}/" "$FILE"
echo "suite-version: $cur -> $new  ($LEVEL)"

if [ "$TAG" -eq 1 ]; then
  git tag "v$new"
  echo "git tag v$new created (push with: git push origin v$new)"
fi
