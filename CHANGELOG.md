# Changelog — SUIT Infrastructure-Policy Document Suite

All notable changes to the SUIT suite are recorded here. From the first public
release onward, each applied change references the **ticket id** of the request
that motivated it (see `CONTRIBUTING.md` and `GOVERNANCE.md`). Document bodies
remain atemporal; all traceability lives in this file.

## v1.0.0 — 2026-06-09 — Initial public release of the SUIT suite

The first public release of the SUIT reference suite: four institution-neutral
documents for building, operating, and sustaining university IT infrastructure.

- **SUIT Policy** (`suit-policy/policy-EN.tex`) — the governance reference.
- **SUIT Policy Summary** (`suit-policy/companion/policy-summary-EN.tex`) — its executive companion.
- **SUIT Solution** (`suit-solution/solution-EN.tex`) — the technical reference.
- **SUIT Solution Summary** (`suit-solution/summary/solution-summary-EN.tex`) — its operational executive summary.

Each pillar ships a per-layer anticipatory **argumentation** module. The suite is
parameterised for per-institution adoption through a shared localization system
(`shared/localization.sty` and `shared/localization-defaults.tex`), with category
archetypes under `categories/` and a worked reference edition under
`instantiations/lu-university-of-luxembourg/`. A single curated bibliography
(`shared/suit-consolidated.bib`) is shared across all four documents. A versioned
quality baseline is shipped under `_AUDITS/v1.0.0/`.

This suite builds on a first version created by **Nicolas Guelfi**, chairman of the
SUIT working group, originally developed at the University of Luxembourg and
generalised by the working group into an institution-neutral reference.

All four documents build cleanly (`latexmk`: 0 undefined citations, 0 undefined references).

## Working-group change log

From v1.0.0 onward, applied changes are recorded one row per change, each tied to
the ticket that motivated it.

| Ticket | Document(s) | Change | Verification | Date |
|---|---|---|---|---|
| — | — | _v1.0.0 — initial public release (no ticket)._ | latexmk: 0 undefined citations/refs | 2026-06-09 |
