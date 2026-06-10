---
name: /suit-ticket
description: Accompany the user in composing and submitting a SUIT GitHub ticket (document change request, instantiation contribution, localization request, or question) — gather the template's fields, preview the full ticket, and submit via `gh issue create` only after explicit approval.
---

# /suit-ticket — Compose and Submit a SUIT Ticket

SUIT is governed ticket-centralized (`GOVERNANCE.md`): every change request,
instantiation deposit, localization request or question enters through a
GitHub issue. The repository's issue FORMS (`.github/ISSUE_TEMPLATE/*.yml`)
are web-only, so a CLI submission must replicate their fields as markdown
sections. This skill does that, conversationally.

## Process

1. **Pick the template.** Ask which ticket the user wants (or infer from
   their request) among:
   - `change` — Document change request → title `[change] <document> — <short
     summary>`, label `change-request`, sections: Target document, Section /
     location, Current text, Proposed change, Rationale, Supporting evidence /
     citations.
   - `instantiation` — Instantiation contribution → title `[instantiation]
     <institution> (<country>) — <archetype>`, label `instantiation`,
     sections: Institution, Country / jurisdiction, Chosen archetype (Layer
     1), Local deltas recorded in set.tex, Completeness checklist,
     Build-clean confirmation, Notes for the maintainer (optional).
   - `localization` — Localization request → title `[localization]
     <institution / context> — <short summary>`, label `localization`,
     sections: Institution / context, What you are trying to localize, Gap in
     the localization guide (if any).
   - `question` — Question → title `[question] <short summary>`, label
     `question`, sections: Your question, Context.
2. **Gather the fields.** Fill what you can from the conversation and the
   repository (e.g. quote the exact current text from the target file for a
   change request; pull archetype and deltas from `set.tex` for an
   instantiation); ask the user only for what is missing. Each section
   becomes a `### <label>` markdown block.
3. **Preview.** Show the complete ticket (title, label, full body) to the
   user.
4. **Submit ONLY after explicit approval.** This is an outward-facing,
   irreversible action: never run the submission without the user's clear
   go-ahead on the previewed content. Then:
   `gh issue create --title "<title>" --label "<label>" --body-file <tmpfile>`
   (check `gh auth status` first; on failure, report and hand the composed
   body back to the user for web submission).
5. **Report** the created issue URL.

## Non-interactive alternative

`tools/file-ticket.sh <change|instantiation|localization|question>` is the
self-service script version of this flow (prompts, preview, confirm, submit)
for users working outside Claude.
