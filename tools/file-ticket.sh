#!/usr/bin/env bash
# ============================================================================
# file-ticket.sh — file a SUIT ticket from the command line via the GitHub CLI.
#
# GitHub issue FORMS (.github/ISSUE_TEMPLATE/*.yml) are web-only; this script
# replicates each form's fields as markdown sections so a CLI-filed ticket
# matches what the maintainer expects from the web form. Governance:
# tickets are the ONLY change path (GOVERNANCE.md — no direct write access).
#
# Usage:  tools/file-ticket.sh <change|instantiation|localization|question>
# Needs:  gh (authenticated: `gh auth status`), run from inside the repo.
# Flow:   prompts for each field (finish a multi-line answer with a single
#         "." on its own line) -> full preview -> explicit confirmation ->
#         `gh issue create`. Nothing is submitted without the confirmation.
# ============================================================================
set -euo pipefail
TYPE="${1:?usage: $0 <change|instantiation|localization|question>}"
command -v gh >/dev/null || { echo "gh (GitHub CLI) is required" >&2; exit 1; }

ask() { # ask "<Section label>" -> appends "### label\n<answer>" to $BODY
  local label="$1" line block=""
  echo "--- ${label} (end with a single '.' line):" >&2
  while IFS= read -r line; do [ "$line" = "." ] && break; block+="$line"$'\n'; done
  BODY+=$'\n'"### ${label}"$'\n'"${block}"
}

BODY=""
case "$TYPE" in
  change)
    LABEL="change-request"
    read -rp "Target document (e.g. suit-policy/main/main-body-EN.tex): " DOC
    read -rp "Short summary: " SUM
    TITLE="[change] ${DOC} — ${SUM}"
    BODY+="### Target document"$'\n'"${DOC}"$'\n'
    ask "Section / location"
    ask "Current text"
    ask "Proposed change"
    ask "Rationale"
    ask "Supporting evidence / citations"
    ;;
  instantiation)
    LABEL="instantiation"
    read -rp "Institution: " INST
    read -rp "Country / jurisdiction: " CTRY
    read -rp "Chosen archetype (Layer 1, e.g. EU-PUB-RI): " ARCH
    TITLE="[instantiation] ${INST} (${CTRY}) — ${ARCH}"
    BODY+="### Institution"$'\n'"${INST}"$'\n\n'"### Country / jurisdiction"$'\n'"${CTRY}"$'\n\n'"### Chosen archetype (Layer 1)"$'\n'"${ARCH}"$'\n'
    ask "Local deltas recorded in set.tex"
    ask "Completeness checklist"
    ask "Build-clean confirmation"
    ask "Notes for the maintainer (optional)"
    ;;
  localization)
    LABEL="localization"
    read -rp "Institution / context: " INST
    read -rp "Short summary: " SUM
    TITLE="[localization] ${INST} — ${SUM}"
    BODY+="### Institution / context"$'\n'"${INST}"$'\n'
    ask "What you are trying to localize"
    ask "Gap in the localization guide (if any)"
    ;;
  question)
    LABEL="question"
    read -rp "Short summary: " SUM
    TITLE="[question] ${SUM}"
    ask "Your question"
    ask "Context"
    ;;
  *) echo "unknown ticket type: $TYPE" >&2; exit 1 ;;
esac

echo; echo "================ PREVIEW ================"
echo "Title : $TITLE"
echo "Label : $LABEL"
echo "-----------------------------------------"
printf '%s\n' "$BODY"
echo "========================================="
read -rp "Submit this ticket? [y/N] " OKGO
[ "${OKGO:-n}" = "y" ] || { echo "Aborted — nothing submitted."; exit 0; }

TMP="$(mktemp)"; printf '%s\n' "$BODY" > "$TMP"
gh issue create --title "$TITLE" --label "$LABEL" --body-file "$TMP"
rm -f "$TMP"
