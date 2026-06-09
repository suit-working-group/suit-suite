# SUIT Suite Audit — Run Traceability Changelog

**Run date:** 2026-06-09-reaudit
**Suite:** SUIT (SUIT Policy / SUIT Solution + shared single-source bibliography and glossary)
**Repository state at run:** branch `main`, HEAD `16e883a`, working tree dirty at run (pre-existing untracked/modified assets outside audit scope; audit ran against canonical files only).

> This file holds ALL run/process traceability for the 2026-06-09-reaudit. The report body (`AUDIT-REPORT-2026-06-09-reaudit.md`) carries none of it: it reads as a single atemporal version.

---

## 1. Tracks Run

Seven tracks were exercised this run; track codes match the report's dimension scores.

| Track | Code | Confirmed findings |
|---|---|---|
| Scientific accuracy / evidence | SCI | 3 |
| Technical fidelity | TECH | 2 |
| Cross-coherence | XCOH | 2 |
| Legal/regulatory | LEG | 0 |
| Citation coherence | CITE | 0 |
| Applicability | APP | 0 |
| Defensibility / rejection-resistance | DEF | 0 |
| **Total confirmed** | — | **7** |

NB: one of the two TECH confirmations (TECH-f4a2d1) is a confirmed-clean verification carrying no remediation; it is counted as a confirmed finding for continuity but is not a defect.

---

## 2. Candidate vs Confirmed Counts

| Stage | Count |
|---|---|
| Candidates raised (all tracks) | 24 |
| Candidates confirmed (survived skeptic panel) | 7 |
| Candidates killed (refuted / weakened / merged) | 17 |
| Confirmation rate | 29% |

### Confirmed by severity

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 2 |
| MODERATE | 3 |
| LOW | 2 |
| **Total** | **7** |

---

## 3. Survivors — confirmed findings, per track and severity

These candidates survived the skeptic panel and appear as canonical findings in the report.

| Finding ID | Track | Severity | Verdict |
|---|---|---|---|
| SCI-a7f3-nsf500awards-unsupported-quant | SCI | HIGH | CONFIRMED |
| SCI-b2c9-charter-decades-no-legal-challenge-overclaim | SCI | HIGH | CONFIRMED |
| SCI-3e81-aiact-article25-misattribution | SCI | MODERATE | CONFIRMED |
| TECH-c2e8a5-ch24-recursive-crossref-leak | TECH | MODERATE | CONFIRMED |
| XCOH-ch01syn-remaining-chapters-count-offbyone | XCOH | MODERATE | CONFIRMED |
| XCOH-companion-concentric-layers-unnumbered-vs-main-five-structural | XCOH | LOW | CONFIRMED |
| TECH-f4a2d1-sizing-realism-verified | TECH | LOW | CONFIRMED (clean) |

---

## 4. Kill Statistics

17 candidates were tested and did not survive to the report.

| Kill reason | Count |
|---|---|
| Refuted unanimously | 8 |
| Refute-dominant | 5 |
| Weaken-dominant / not actionable | 3 |
| Merged into a surviving finding | 1 |
| **Total killed** | **17** |

### Kills by track

| Track | Candidates raised | Confirmed | Killed |
|---|---|---|---|
| SCI | 6 | 3 | 3 |
| TECH | 5 | 2 | 3 |
| XCOH | 4 | 2 | 2 |
| LEG | 2 | 0 | 2 |
| CITE | 2 | 0 | 2 |
| APP | 2 | 0 | 2 |
| DEF | 3 | 0 | 3 |
| **Total** | **24** | **7** | **17** |

---

## 5. Root-Cause Clusters (process view)

The 7 confirmed findings collapse into 4 root causes; the report body carries the atemporal cluster narrative.

| Root cause | Findings | Count |
|---|---|---|
| RC-overclaim-beyond-source | SCI-a7f3-nsf500awards-unsupported-quant, SCI-b2c9-charter-decades-no-legal-challenge-overclaim | 2 |
| RC-provision-misattribution | SCI-3e81-aiact-article25-misattribution | 1 |
| RC-structural-self-reference-drift | XCOH-ch01syn-remaining-chapters-count-offbyone, TECH-c2e8a5-ch24-recursive-crossref-leak, XCOH-companion-concentric-layers-unnumbered-vs-main-five-structural | 3 |
| RC-verified-clean | TECH-f4a2d1-sizing-realism-verified | 1 |

---

## 6. Blocking Gates (process view)

Every CRITICAL and HIGH finding is a blocking gate. CRITICAL = 0, HIGH = 2 → two gates open.

| Gate | Finding | Severity |
|---|---|---|
| GATE-1 | SCI-a7f3-nsf500awards-unsupported-quant | HIGH |
| GATE-2 | SCI-b2c9-charter-decades-no-legal-challenge-overclaim | HIGH |

---

## 7. Source Stability & Scope Notes

- Audit ran against canonical `.tex` files only; pre-existing dirty working-tree items (untracked refs/bib/version assets, conflicted-copy files) are outside audit scope and were not read as canonical.
- Shared bibliography `suit-consolidated.bib` resolves to a single source per pillar (symlink/relative path); doc-dir copies are byte-identical by construction, not divergent forks.
- Verified counts this run: 33 `\chapter` macros across 33 `suit-solution/ch*.tex` files (anchors XCOH-ch01syn).
- Stable-ID continuity for the next run is provided by this run's finding IDs (see §3).
