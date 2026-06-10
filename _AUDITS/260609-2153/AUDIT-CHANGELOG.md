# AUDIT CHANGELOG — run 260609-2153

This file carries ALL run and process traceability for the audit whose atemporal report
is `AUDIT-REPORT-260609-2153.md` and whose machine-readable canonical findings are
`findings.json` (the baseline for the next run's diff).

## Run identity

| Field | Value |
|---|---|
| Run label | **260609-2153** |
| Run date | 2026-06-09 |
| Suite | SUIT — Sustainable University IT Infrastructure & Technology |
| Audit kind | Recurring 7-track + INST-track adversarial audit |
| Repository git HEAD | `1b9a35a77effb9ca1ba050fbd91faba3dca8bc97` (`1b9a35a` — "chore(audit): ratify standing genericity decisions in docs/dispositions.json", branch `main`) |
| Working-tree state | Dirty at audit time: modified `README.md`; the 8 instantiation render wrappers (`instantiations/_TEMPLATE/render/*.tex`, `instantiations/lu-university-of-luxembourg/render/*.tex`) modified; logo asset churn under `logo/` (deleted/modified SVG/PNG variants, untracked `logo/others/`, `logo/rushes/`, three new SVGs). No `.tex` document-body or `.bib` modifications beyond the wrappers; the wrapper modifications are themselves subject matter of the INST findings. |
| Scope | Repository-internal only; repo-relative paths; no source/migration/upstream repository read or cited |
| Dispositions file honoured | `docs/dispositions.json` (11 accepted dispositions; none re-raised) |

## Tracks exercised

SCI, TECH, XCOH (including the Policy↔Solution traceability sub-track), LEG, CITE,
APP, INST (gates BUILD / COMPLETENESS / FIDELITY / CURRENCY over
`instantiations/lu-university-of-luxembourg/`), DEF (personas CISO / DPO / CTO / CIO).

## Baseline

| Field | Value |
|---|---|
| Baseline dir | `_AUDITS/2026-06-09-genericity` |
| Baseline findings file | `_AUDITS/2026-06-09-genericity/findings.json` (103 findings, GEN-* namespace, single-track genericity scope) |
| Diff result | 74 NEW / 103 RESOLVED / 0 REGRESSED / 0 UNCHANGED |
| Diff note | The GEN-* baseline namespace shares no stable ids with this run's content-derived 8-track ids; all 103 baseline ids have no current confirmed match and are marked RESOLVED (including the 3 left-by-decision items, whose standing decisions are now ratified in `docs/dispositions.json`); all 74 canonical findings of this run are NEW. |

## Stable-id convention

Every finding id is content-derived and stable across runs:
`<TRACK>-<short stable hash of {document-or-instance, normalised claim-stem, defect-type}>`.
The same unresolved defect reproduces the same id on the next run; ids are never
assigned by emission order.

## Adversarial verification

| Field | Value |
|---|---|
| Skeptic count | **N = 3** per candidate; kill rule: majority refute (≥2/3) |
| Candidate findings emitted by the tracks | **81** |
| Confirmed canonical findings | **74** (67 defects: 1 CRITICAL, 9 HIGH, 28 MODERATE, 29 LOW; plus 7 INFO verification records) |
| Candidates merged as duplicates | **7** (consolidated into canonical survivors before tallying — not kills) |
| Candidates killed by majority refute | **0** |

### Killed candidates (with refute tallies)

None. No candidate reached the ≥2/3 refute threshold in this run; the refute-tally
list is therefore empty.

### Merged duplicate candidates (consolidations, not kills)

| Merged candidate id | Canonical survivor |
|---|---|
| SCI-9f7c1ace | XCOH-c630d6a9 |
| CITE-3a7f52ac | SCI-6df85895 |
| TECH-6a2be5bb | XCOH-d810f76f |
| XCOH-89ad866f | LEG-2ad40b28 |
| DEF-15289ba5 | LEG-bb4208eb |
| DEF-0df1d0a6 | TECH-41812198 |
| DEF-2a90f01f | CITE-8842bca6 |

### Per-survivor skeptic tallies

Every canonical survivor was upheld by all three skeptics (uphold 3/3, refute 0/3);
no survivor carried a dissenting skeptic in this run. Tallies by id:

- **CRITICAL — uphold 3/3, refute 0/3:** DEF-2103e86b.
- **HIGH — uphold 3/3, refute 0/3:** DEF-9e37ed00, TECH-dc26120f, XCOH-255bb89e,
  LEG-8fef6364, LEG-bb4208eb, CITE-bc8406d2, APP-2e0b498, INST-4b50d235, INST-47f3e9e5.
- **MODERATE — uphold 3/3, refute 0/3:** SCI-78f94649, SCI-2515d068, SCI-0d9dfdff,
  TECH-41812198, TECH-d4d3a9d6, XCOH-030aedd4, XCOH-9e1161fd, XCOH-44cc9a8e,
  XCOH-d810f76f, XCOH-cefea1ca, XCOH-c630d6a9, XCOH-a30dfa73, XCOH-f68743df,
  XCOH-419ca4bc, LEG-60ad59bc, LEG-3347f033, LEG-645f6fcd, LEG-507dbd7d, LEG-7e877e71,
  LEG-836cabba, LEG-8612a572, CITE-8842bca6, CITE-6a358c98, APP-5c8e5d0, INST-45020063,
  INST-4cc1a1cf, DEF-fd5ee91b, DEF-77aabcb5.
- **LOW — uphold 3/3, refute 0/3:** SCI-6df85895, SCI-e7eaf411, SCI-3127b0a9,
  SCI-fc809139, SCI-7220fe72, SCI-f1fd2d3a, SCI-e1761640, TECH-96ae359c, TECH-3d01eb5d,
  TECH-ae79e1ca, TECH-7830e17d, XCOH-878f33f2, XCOH-ba5c0388, XCOH-f1ef774a,
  XCOH-ea6b9404, LEG-a76778dc, LEG-0eb021ce, LEG-11d5aacd, LEG-2ad40b28, LEG-0a4ceaf2,
  LEG-3cbf3746, LEG-2b334d82, CITE-52a4fec9, APP-dcaec21, APP-f292d51, APP-d9618d3,
  APP-b80369d, INST-4fbe80b2, DEF-5b8c6b81.
- **INFO (verification records; recorded, not subject to the kill rule):** SCI-2ea68f21,
  SCI-0b5c070a, TECH-519e256d, LEG-OK-VERIFIED-BASE, CITE-aa80e781, CITE-4bafbd34,
  DEF-1d43ae52.

## Scores recorded by this run

SCI 84, TECH 81, XCOH 60 (Policy↔Solution traceability sub-score 80), LEG 54, CITE 84,
APP 84, DEF 62, INST 75 — suite aggregate **73**. Method: per dimension, 100 minus
weighted deductions (CRITICAL −22, HIGH −9, MODERATE −3, LOW −1, INFO 0) over the
canonical post-merge findings.

## Blocking gates recorded by this run

10 (1 CRITICAL + 9 HIGH): DEF-2103e86b, DEF-9e37ed00, TECH-dc26120f, XCOH-255bb89e,
LEG-8fef6364, LEG-bb4208eb, CITE-bc8406d2, APP-2e0b498, INST-4b50d235, INST-47f3e9e5.

## Deliverables of this run

- `_AUDITS/260609-2153/AUDIT-REPORT-260609-2153.md` — atemporal report body
- `_AUDITS/260609-2153/AUDIT-CHANGELOG.md` — this file (all run/process traceability)
- `_AUDITS/260609-2153/findings.json` — machine-readable canonical findings; the
  baseline for the next run's diff per the `_AUDITS/README.md` convention
