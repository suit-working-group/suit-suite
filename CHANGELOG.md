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
| `_AUDITS/2026-06-09-genericity` | suite-wide (≈42 body/shared files; dispositions in the audit `findings.json`) | Genericity & maintainability remediation of the 103 audited findings (families A–L). Trajectory label unified to `brownfield single-suite-centric`, vendor names (Microsoft/Entra/M365/Sentinel) demoted to labelled examples; NIS2/GDPR/AI-Act/Schrems/eIDAS routed through the `\loc{}` regime keys with EU instruments kept as `in the EU, …` examples; `institution-type` / `R1` routed through `\loc{institution-type}`; NREN, identity-federation and sector-body (REN-ISAC/EDUCAUSE/Jisc/JRES) exemplars demoted to labelled regional examples; `world-leading`→peer/reference framing; ICRADP deadlines, the assurance-recency window and the 80% / per-layer test-count magic numbers centralised or softened; University-of-Luxembourg origin confirmed edition-only. Localization consumption coverage substantially increased (e.g. `institution-type` 1→11, `data-protection-regime` 1→10, `cybersecurity-baseline-regime` 1→9 `\loc{}` sites) with 0 dead bindings across the 57 Layer-0 keys; 3 keys created (`icradp-decision-deadline`, `icradp-emergency-deadline`, `assurance-recency-window`). | latexmk: 6 generic documents + the Luxembourg reference edition build clean — 0 undefined citations/refs, 0 undefined localization keys, 0 `??key??` tokens | 2026-06-09 |
