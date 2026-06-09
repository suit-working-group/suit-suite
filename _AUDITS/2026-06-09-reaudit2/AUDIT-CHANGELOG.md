# SUIT Suite Audit — Run Traceability Changelog

**Run date:** 2026-06-09-reaudit2
**Suite:** SUIT (SUIT Policy / SUIT Solution + shared single-source bibliography and glossary)
**Repository state at run:** branch `main`, HEAD `934c14d`, working tree dirty at run (pre-existing modified render PDFs and logo assets outside audit scope; audit ran against canonical `.tex` files only).

> This file holds ALL run/process traceability for the 2026-06-09-reaudit2. The report body (`AUDIT-REPORT-2026-06-09-reaudit2.md`) carries none of it: it reads as a single atemporal version.

---

## 1. Tracks Run

Seven tracks were exercised this run; track codes match the report's dimension scores.

| Track | Code | Confirmed findings |
|---|---|---|
| Scientific accuracy / evidence | SCI | 1 |
| Technical fidelity | TECH | 1 |
| Cross-coherence | XCOH | 0 |
| Legal/regulatory | LEG | 1 |
| Citation coherence | CITE | 0 |
| Applicability | APP | 0 |
| Defensibility / rejection-resistance | DEF | 2 |
| **Total confirmed** | — | **5** |

NB: this run's focus shifted to the SUIT Solution Technical Reference (conformance framework, wave roadmap, regulatory mapping). The dominant confirmed defect (Crypto-layer roadmap coverage) surfaced on two tracks — structurally on TECH and as a persona-rejection gap on DEF — and is recorded once per track.

---

## 2. Candidate vs Confirmed Counts

| Stage | Count |
|---|---|
| Candidates raised (all tracks) | 21 |
| Candidates confirmed (survived skeptic panel) | 5 |
| Candidates killed (refuted / weakened / merged) | 16 |
| Confirmation rate | 24% |

### Confirmed by severity

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 3 |
| MODERATE | 1 |
| LOW | 1 |
| **Total** | **5** |

---

## 3. Survivors — confirmed findings, per track and severity

These candidates survived the skeptic panel and appear as canonical findings in the report.

| Finding ID | Track | Severity | Verdict |
|---|---|---|---|
| TECH-cryptolayer-no-wave-roadmap-coverage-gap | TECH | HIGH | CONFIRMED |
| LEG-ch33aiact-systemicrisk-art53-articlenumber | LEG | HIGH | CONFIRMED |
| DEF-3e71-ciso-crypto-wave-coverage-gap | DEF | HIGH | CONFIRMED |
| DEF-5b82-cto-exit-confidence-index-unreachable | DEF | MODERATE | CONFIRMED |
| SCI-b7c2-sciencedmz100-citation | SCI | LOW | CONFIRMED |

---

## 4. Kill Statistics

16 candidates were tested and did not survive to the report.

| Kill reason | Count |
|---|---|
| Refuted unanimously | 7 |
| Refute-dominant | 5 |
| Weaken-dominant / not actionable | 3 |
| Merged into a surviving finding | 1 |
| **Total killed** | **16** |

### Kills by track

| Track | Candidates raised | Confirmed | Killed |
|---|---|---|---|
| SCI | 4 | 1 | 3 |
| TECH | 4 | 1 | 3 |
| XCOH | 3 | 0 | 3 |
| LEG | 3 | 1 | 2 |
| CITE | 2 | 0 | 2 |
| APP | 1 | 0 | 1 |
| DEF | 4 | 2 | 2 |
| **Total** | **21** | **5** | **16** |

---

## 5. Root-Cause Clusters (process view)

The 5 confirmed findings collapse into 4 root causes; the report body carries the atemporal cluster narrative. Note that GATE-1 (TECH) and GATE-3 (DEF) share a single root cause — the same Crypto-layer coverage defect viewed structurally and through the CISO persona.

| Root cause | Findings | Count |
|---|---|---|
| RC-crypto-layer-uncovered-by-roadmap | TECH-cryptolayer-no-wave-roadmap-coverage-gap, DEF-3e71-ciso-crypto-wave-coverage-gap | 2 |
| RC-aiact-systemic-risk-article-misattribution | LEG-ch33aiact-systemicrisk-art53-articlenumber | 1 |
| RC-reference-suite-illustrative-gap | DEF-5b82-cto-exit-confidence-index-unreachable | 1 |
| RC-thin-citation-at-load-bearing-count | SCI-b7c2-sciencedmz100-citation | 1 |

---

## 6. Blocking Gates (process view)

Every CRITICAL and HIGH finding is a blocking gate. CRITICAL = 0, HIGH = 3 → three gates open. GATE-1 and GATE-3 close together under one Crypto-layer coverage decision propagated across the Technical Reference.

| Gate | Finding | Severity | Root cause |
|---|---|---|---|
| GATE-1 | TECH-cryptolayer-no-wave-roadmap-coverage-gap | HIGH | RC-crypto-layer-uncovered-by-roadmap |
| GATE-2 | LEG-ch33aiact-systemicrisk-art53-articlenumber | HIGH | RC-aiact-systemic-risk-article-misattribution |
| GATE-3 | DEF-3e71-ciso-crypto-wave-coverage-gap | HIGH | RC-crypto-layer-uncovered-by-roadmap |

---

## 7. Source Stability & Scope Notes

- Audit ran against canonical `.tex` files only; pre-existing dirty working-tree items (modified render PDFs, logo assets) are outside audit scope and were not read as canonical.
- Shared bibliography `suit-consolidated.bib` resolves to a single source per pillar (symlink/relative path); doc-dir copies are byte-identical by construction, not divergent forks.
- Standing disposition note: DISPO-WAVES-10 protects the count of waves (10), not the completeness of architecture-layer coverage across those waves; the Crypto-layer gap (TECH-cryptolayer, DEF-3e71) is a net-new finding the disposition does not mask. Recorded inline in the report's (b3) section.
- Stable-ID continuity for the next run is provided by this run's finding IDs (see §3).
