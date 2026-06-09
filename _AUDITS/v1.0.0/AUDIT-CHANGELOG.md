# Audit run metadata — v1.0.0 baseline

| Field | Value |
|---|---|
| Suite | SUIT — Sustainable University IT Infrastructure & Technology |
| Version audited | v1.0.0 |
| Date | 2026-06-09 |
| Tracks exercised | SCI, TECH, XCOH, LEG, CITE, APP, DEF, INST |
| Scope | 4 documents + 2 argumentation modules; reference instantiation (INST) |
| Methodology | `_AUDITS/AUDIT-PLAN.md` |

## Finding counts

| Severity | Open | Remediated this cycle | Candidate (unverified) |
|---|---|---|---|
| CRITICAL | 0 | 0 | 0 |
| HIGH | 0 | 4 | 0 |
| MODERATE | 0 | 4 | 0 |
| LOW | 0 | 5 | 2 |

**Open blocking gates (CRITICAL + HIGH): 0.**

## Notes

- This is the shipped release baseline. All CRITICAL and HIGH findings raised across
  the release audit cycle were remediated before release; the open-findings set is
  empty.
- Dimension scores and the open/candidate finding set are recorded in `findings.json`.
- `findings.json` is the diff anchor for the next audit run.
- All four documents build with `latexmk`: 0 undefined citations, 0 undefined references.
