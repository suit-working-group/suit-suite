# SUIT Suite Audit — Run Traceability Changelog

**Run date:** 2026-06-09
**Suite:** SUIT (SUIT Policy / SUIT Solution + shared single-source bibliography and glossary)
**Repository state at run:** branch `main`, HEAD `c5c4fa3`, working tree clean.

> This file holds ALL run/process traceability for the 2026-06-09 audit. The report body (`AUDIT-REPORT-2026-06-09.md`) carries none of it: it reads as a single atemporal version.

---

## 1. Tracks Run

Seven tracks were exercised this run; track codes match the report's dimension scores.

| Track | Code | Confirmed findings |
|---|---|---|
| Scientific accuracy / evidence | SCI | 1 |
| Technical fidelity | TECH | 1 |
| Cross-coherence | XCOH | 0 |
| Legal/regulatory | LEG | 1 |
| Citation coherence | CITE | 2 |
| Applicability | APP | 0 |
| Defensibility / rejection-resistance | DEF | 3 |
| **Total confirmed** | — | **8** |

---

## 2. Candidate vs Confirmed Counts

| Stage | Count |
|---|---|
| Candidates raised (all tracks) | 27 |
| Candidates confirmed (survived skeptic panel) | 8 |
| Candidates killed (refuted / weakened / merged) | 19 |
| Confirmation rate | 30% |

### Confirmed by severity

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 3 |
| MODERATE | 4 |
| LOW | 1 |
| **Total** | **8** |

---

## 3. Survivors — confirmed findings, per track and severity

These candidates survived the skeptic panel and appear as canonical findings in the report.

| Finding ID | Track | Severity | Verdict |
|---|---|---|---|
| DEF-7a1c9e3 | DEF | HIGH | CONFIRMED |
| DEF-4b2f8d6 | DEF | HIGH | CONFIRMED |
| SCI-85e483be | SCI | HIGH | CONFIRMED |
| CITE-93a6753d | CITE | MODERATE | CONFIRMED |
| CITE-66b9bd9a | CITE | MODERATE | CONFIRMED |
| DEF-2e9c5a1 | DEF | MODERATE | CONFIRMED |
| TECH-2cf-activation-nine-roles-diagram-mismatch | TECH | MODERATE | CONFIRMED |
| LEG-cobit-edm05-title-tense-ensured-stakeholder-engagement | LEG | LOW | CONFIRMED |

---

## 4. Kill Statistics

19 candidates were tested and did not survive to the report.

| Kill reason | Count |
|---|---|
| Refuted unanimously | 9 |
| Refute-dominant | 6 |
| Weaken-dominant / not actionable | 3 |
| Merged into a surviving finding | 1 |
| **Total killed** | **19** |

### Kills by track

| Track | Candidates raised | Confirmed | Killed |
|---|---|---|---|
| SCI | 3 | 1 | 2 |
| TECH | 5 | 1 | 4 |
| XCOH | 3 | 0 | 3 |
| LEG | 3 | 1 | 2 |
| CITE | 4 | 2 | 2 |
| APP | 3 | 0 | 3 |
| DEF | 6 | 3 | 3 |
| **Total** | **27** | **8** | **19** |

---

## 5. Root-Cause Clusters (process view)

The 8 confirmed findings collapse into 5 root causes; the report body carries the atemporal cluster narrative.

| Root cause | Findings | Count |
|---|---|---|
| RC-source-precision | SCI-85e483be, CITE-93a6753d, CITE-66b9bd9a | 3 |
| RC-live-containment-authority | DEF-7a1c9e3 | 1 |
| RC-audit-integrity | DEF-4b2f8d6 | 1 |
| RC-below-own-standard | DEF-2e9c5a1 | 1 |
| RC-figure-text-fidelity | TECH-2cf-activation-nine-roles-diagram-mismatch, LEG-cobit-edm05-title-tense-ensured-stakeholder-engagement | 2 |

---

## 6. Blocking Gates (process view)

Every CRITICAL and HIGH finding is a blocking gate. CRITICAL = 0, HIGH = 3 → three gates open.

| Gate | Finding | Severity |
|---|---|---|
| GATE-1 | DEF-7a1c9e3 | HIGH |
| GATE-2 | DEF-4b2f8d6 | HIGH |
| GATE-3 | SCI-85e483be | HIGH |

---

## 7. Source Stability & Scope Notes

- Working tree clean at HEAD `c5c4fa3`; audit ran against canonical files only.
- Shared bibliography `suit-consolidated.bib` resolves to a single source per pillar (symlink/relative path); doc-dir copies are byte-identical by construction, not divergent forks.
- Stable-ID continuity for the next run is provided by this run's finding IDs (see §3).
