# SUIT Infrastructure-Policy Suite — Audit Report

**Suite:** SUIT (SUIT Policy / SUIT Solution + shared single-source bibliography and glossary)
**Scope audited:** `suit-policy/` main report body, argumentation pillar and executive companion; `suit-solution/` synthesis, conceptual frame and wave chapters; shared regulatory-applicability and glossary assets.

---

## (a) Executive Header

### Dimension Scores

| Dimension | Code | Score | One-line justification |
|---|---|---|---|
| Scientific accuracy | SCI | 68 | Two load-bearing claims overstate what their sources carry — a Science DMZ adoption count ("500 NSF awards since 2012") and a "decades without legal challenge" categorical on the charter model — and one regulatory provision is misattributed (AI Act Art.25(1)); the underlying arguments hold but their empirical and legal anchors are over-read at high-visibility points. |
| Technical fidelity | TECH | 85 | Architecture is internally coherent and sizing realism holds (the 25k/1.5k/500 profile and per-layer ranges are consistent and properly caveated); the only defect is a self-referential cross-reference leak in one wave chapter, a cosmetic rendering slip, not a structural fault. |
| Cross-coherence | XCOH | 82 | An off-by-one in the Synthesis reading-map count (thirty-one vs the thirty-two remaining chapters) is a factual structural self-reference error; a companion layer-summary omits one of the five named structural layers. Terminology, colours, stakeholder names and constants otherwise hold across both pillars. |
| Legal/regulatory | LEG | 88 | The AI Act misattribution surfaces under SCI as a sourcing defect; no independent legal-mapping fault arose this cycle, and the substantive regulatory architecture (GDPR / NIS2 / AI Act exemptions and sandbox route) remains rigorous. |
| Citation coherence | CITE | 80 | No standalone citation-precision finding confirmed this cycle; the two over-reach claims and the provision misattribution are scored at their substantive home (SCI), and the bibliography remains single-source per pillar. |
| Applicability | APP | 90 | Size-invariance, localisation framing and the minimal-necessary-set anchor remain intact; no applicability defect this cycle. |
| Defensibility | DEF | 82 | No open hostile-reader gap confirmed this cycle; the standing live-containment and audit-integrity exposures are carried in prior dispositions and did not re-confirm as net-new gaps here. The residual rejection surface is the two SCI over-claims, addressed under SCI. |

### Suite Aggregate

**Suite score: 82 / 100** (mean of the seven dimension scores, rounded).

Scientific accuracy is the binding ceiling: the two HIGH findings are both over-claims where a sound argument is anchored to evidence that does not carry the asserted figure or categorical. The architecture, regulatory mapping and applicability framing are not in question; the exposure is concentrated on a narrow band of empirical/legal precision in load-bearing sentences, which is high-visibility but low-effort to close.

### Finding Counts by Severity

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 2 |
| MODERATE | 3 |
| LOW | 2 |
| **Total** | **7** |

---

## (a2) Root-Cause Clusters

Confirmed findings cluster into four root causes. Fixing each root resolves its whole cluster; symptoms should not be patched individually. One finding is a confirmed-clean verification carrying no remediation.

### RC-overclaim-beyond-source — Load-bearing claim asserts more than its source carries

**Theme:** Two HIGH findings share one defect class — a rhetorically load-bearing sentence states a number or a categorical that its cited source does not substantiate. The Science DMZ / CC* pattern is credited with "more than 500 NSF awards to universities since 2012", a figure no cited source carries (the verifiable adjacent figure is "over 100 university campuses" via `esnet-history`); and the ETH Zurich / Oxford charter model is said to have "operated for decades without legal challenge", a no-litigation categorical that a current policy page cannot substantiate. Both arguments survive without the overclaim; the defect is the unsupported amplifier, not the thesis.

**Proposed root fix:** Reconcile each claim to what its source supports. Replace the "500 awards since 2012" figure with the sourced "over 100 university campuses" count (`\cite{esnet-history}`), or add a source that explicitly states the CC*/CC-NIE award count and start year — and if none can be verified, drop the numeric claim; make the two occurrences citation-consistent. Soften the charter categorical to "an established, long-standing practice at ETH Zurich and Oxford" and drop "for decades without legal challenge" unless an independent litigation survey or institutional statement is cited. Run a sourced-claim pass matching every external number and categorical against its carrying source.

**Resolves:** SCI-a7f3-nsf500awards-unsupported-quant, SCI-b2c9-charter-decades-no-legal-challenge-overclaim

**Residual if unfixed:** A reviewer can challenge two of the suite's most quotable empirical/legal anchors as unsupported by their citations, denting the convergence and precedent arguments at their most visible points.

### RC-provision-misattribution — Regulatory provision cited by the wrong article number

**Theme:** One MODERATE finding: the AI Act research-support principle is attributed to "Article 25(1)" alongside Recital 25, but Article 25(1) is not the operative provision for innovation support. The supporting concept (research/innovation not unduly restricted) is correct; the article pointer is wrong.

**Proposed root fix:** Remove "and Article 25(1)" (keep "Recital 25"), or replace it with the correct operative provision for innovation support — the regulatory-sandbox / measures-in-support-of-innovation chapter (Arts. 57 ff.) and the Art. 2(6)/2(8) exemptions already cited. Verify against the consolidated AI Act text before re-citing any article number.

**Resolves:** SCI-3e81-aiact-article25-misattribution

**Residual if unfixed:** A legal reviewer checking the citation finds the article number does not match the cited principle, undermining confidence in the surrounding regulatory mapping.

### RC-structural-self-reference-drift — Internal navigational self-reference does not match the artefact it describes

**Theme:** Three findings (one MODERATE, two LOW) share one defect class — a document's own internal map, count or cross-reference does not match the artefact it points at. The Synthesis reading-map states the Technical Reference has "thirty-one" remaining chapters where there are thirty-two (33 total minus the Synthesis itself); one wave chapter carries a circular cross-reference plus a stray editorial "recursive aside" note that should not render; and the companion's concentric-layers summary enumerates four of the five structural layers the main report names, omitting the exposed/public-facing layer. Each is a self-reference that drifted from its target.

**Proposed root fix:** Correct each pointer to its target. Change "thirty-one" to "thirty-two" at `ch01-synthesis-EN.tex` lines 24 and 539, and re-verify the count against any future chapter add/remove. Render the wave-6 cross-reference as `(D11.3, \trchap{ch:endpoint}{Endpoint management})`, removing the circular pointer and the stray "recursive aside" editorial note. Optionally add a brief mention of the exposed/public-facing layer to the companion's concentric-layers sentence, or, if left as an accepted executive simplification, ensure the companion never implies its list is exhaustive.

**Resolves:** XCOH-ch01syn-remaining-chapters-count-offbyone, TECH-c2e8a5-ch24-recursive-crossref-leak, XCOH-companion-concentric-layers-unnumbered-vs-main-five-structural

**Residual if unfixed:** A reader using the Synthesis as a reading map finds the chapter count off by one; a reader hits a circular cross-reference and an editorial artefact in the wave chapter; a reader mapping the companion to the main report's five-layer model finds one layer missing.

### RC-verified-clean — Confirmed-clean verification, no remediation

**Theme:** One LOW finding is a positive verification carrying no action. The sizing figures (25k subjects, 1.5k elevated staff, 500 projects; backbone 40-400 Gb/s; audit tens-to-hundreds of millions of events/day; FTE ranges; breakpoints at ~50k subjects / ~500 GB/day / ~5000 dec/s / multi-PB) are realistic and consistently caveated as indicative, non-additive orders of magnitude, consistent across `ch15` and the operational summary.

**Proposed root fix:** No action required. The sizing realism and caveat discipline hold; the finding is recorded as a confirmed-clean checkpoint for continuity, not a defect.

**Resolves:** TECH-f4a2d1-sizing-realism-verified

**Residual if unfixed:** None — nothing to fix.

---

## (b) Canonical Findings

Grouped by severity, then by track.

### CRITICAL

None this state.

### HIGH

#### SCI-a7f3-nsf500awards-unsupported-quant — track: SCI (scientific accuracy / evidence)

- **Claim:** The Science DMZ / CC* pattern is supported by "more than 500 NSF awards to universities since 2012."
- **Location:** `suit-policy` main report body (Science DMZ / CC* adoption passage; two occurrences differing in citation state).
- **Root cause:** RC-overclaim-beyond-source.
- **Evidence:** L5 institutional — no cited source carries the "500 awards since 2012" figure; the verifiable adjacent deployment figure is "over 100 university campuses" via `esnet-history` (the suite already uses the "over 100 universities" count at `argumentation-policy-EN.tex` l.521 and l.539, cited to `nsf-cc`). The numeric amplifier is attached to nothing that states it.
- **Recommended fix:** Either (a) replace the unsupported "500 awards since 2012" with the sourced "over 100 university campuses" figure (`\cite{esnet-history}`), or (b) add a citation to a source that explicitly states the CC*/CC-NIE award count and verify the exact number and start year; if no such source can be verified, drop the numeric claim. Make the two occurrences consistent (both currently differ in citation state).

#### SCI-b2c9-charter-decades-no-legal-challenge-overclaim — track: SCI (scientific accuracy / evidence)

- **Claim:** The ETH Zurich / Oxford responsibility-charter (administrator-rights agreement) model "has operated for decades without legal challenge."
- **Location:** `suit-policy` argumentation / Questions and Evidence-Based Answers, Q3.2 (`argumentation-policy-EN.tex` l.499; mirrored in `argumentation-policy-body-EN.tex` l.301).
- **Root cause:** RC-overclaim-beyond-source.
- **Evidence:** L5 institutional — the cited `eth-admin-agreement` and `oxford-infosec` are current policy pages; a policy page can establish that the charter model is in force, but cannot substantiate the categorical no-litigation claim "for decades without legal challenge". The supporting categorical exceeds what the sources carry.
- **Recommended fix:** Soften to what the sources support, e.g. "the charter / administrator-rights model is an established, long-standing practice at ETH Zurich and Oxford", and drop the unsourced "for decades without legal challenge." If the "without legal challenge" point is to be retained, cite an independent source (litigation survey or institutional statement); a current policy page cannot substantiate a no-litigation claim.

### MODERATE

#### SCI-3e81-aiact-article25-misattribution — track: SCI (scientific accuracy / evidence)

- **Claim:** AI Act Article 25(1) (alongside Recital 25) calls for research and innovation activities to be supported and not unduly restricted.
- **Location:** `suit-policy` main report body (`main-body-EN.tex` l.1483, "AI Act Recital~25 and Article~25(1)").
- **Root cause:** RC-provision-misattribution.
- **Evidence:** L1 binding instrument — Article 25(1) is not the operative provision for innovation support; the research/innovation-support principle lives in Recital 25 and is operationalised by the measures-in-support-of-innovation / regulatory-sandbox chapter (Arts. 57 ff.) and the Art. 2(6)/2(8) exemptions already cited elsewhere in the suite.
- **Recommended fix:** Remove "and Article~25(1)" (keep "Recital~25"), or replace with the correct operative provision for innovation support (the regulatory-sandbox / measures-in-support-of-innovation chapter, Arts. 57 ff., and the Art. 2(6)/2(8) exemptions already cited). Verify against the consolidated AI Act text before re-citing an article number.

#### TECH-c2e8a5-ch24-recursive-crossref-leak — track: TECH (technical fidelity)

- **Claim:** "This is a known limitation of the architecture (`\trchap{ch:endpoint}{}` D11.3 in `\trchap{ch:wave6-endpoint}{}`… recursive aside)."
- **Location:** `suit-solution/ch24-wave6-endpoint-EN.tex` (ll.149-150).
- **Root cause:** RC-structural-self-reference-drift.
- **Evidence:** L2 internal consistency — the cross-reference is circular (a wave-6 chapter pointing at wave-6 to describe its own content) and carries a stray editorial "recursive aside" note that should not render in the published text.
- **Recommended fix:** Remove the circular pointer and stray editorial note; render as "This is a known limitation of the architecture (D11.3, `\trchap{ch:endpoint}{Endpoint management}`)."

#### XCOH-ch01syn-remaining-chapters-count-offbyone — track: XCOH (cross-coherence)

- **Claim:** The Synthesis claims the Technical Reference has thirty-one chapters after the Synthesis chapter. The document contains 33 chapters total (ch01-ch33, verified: 33 `\chapter` macros across 33 files); after the Synthesis (Ch.1) there are 32 remaining chapters (Ch.2-Ch.33), not 31. This is an off-by-one error in a load-bearing structural self-reference the Synthesis presents as a navigational reading map.
- **Location:** `suit-solution/ch01-synthesis-EN.tex` (SUITSOLUTION, Ch.1 Synthesis), lines 24 and 539.
- **Root cause:** RC-structural-self-reference-drift.
- **Evidence:** L2 internal consistency — 33 chapter files verified; 33 minus the Synthesis itself = 32 remaining, against the asserted "thirty-one". This is a factual count error, not a stylistic self-count that the abstract-self-references disposition would mask.
- **Recommended fix:** Change "thirty-one" to "thirty-two" at `ch01-synthesis-EN.tex` lines 24 and 539 (33 total minus the Synthesis itself = 32 remaining). Re-verify against any future chapter additions/removals.

### LOW

#### XCOH-companion-concentric-layers-unnumbered-vs-main-five-structural — track: XCOH (cross-coherence)

- **Claim:** The companion's "concentric layers" description enumerates only four of the five conceptual layers the main report names (it omits the "Exposed zones" layer), while the main report explicitly labels the model "five structural layers." The companion states no count, so this is a summarization omission rather than a contradiction, but a reader mapping companion layers to the main report's five-layer model finds one layer missing.
- **Location:** `suit-policy/companion/companion-body-EN.tex` (ll.205-213) vs `suit-policy/main/main-body-EN.tex` (§ "Conceptual architecture: five structural layers", l.3126 ff.).
- **Root cause:** RC-structural-self-reference-drift.
- **Evidence:** L2 internal consistency — the companion lists infrastructure core, common services, autonomous zones and user networks (four), omitting the exposed/public-facing layer the main report names as the fifth. No count is stated, so the lists do not contradict, but the mapping is incomplete.
- **Recommended fix:** Optionally add a brief mention of the exposed/public-facing layer in the companion's concentric-layers sentence (companion-body ll.205-213), or leave as an accepted executive simplification; if left, ensure the companion never implies its list is exhaustive.

#### TECH-f4a2d1-sizing-realism-verified — track: TECH (technical fidelity)

- **Claim:** Sizing figures (25k subjects, 1.5k elevated staff, 500 projects; backbone 40-400 Gb/s; audit tens-to-hundreds of millions of events/day; FTE ranges; breakpoints at ~50k subjects / ~500 GB/day / ~5000 dec/s / multi-PB) are realistic and consistently caveated as indicative, non-additive orders of magnitude.
- **Location:** `suit-solution/ch15-sizing-EN.tex` and the operational summary.
- **Root cause:** RC-verified-clean.
- **Evidence:** L2 internal consistency — sizing realism and caveat discipline hold; the 25k/1.5k/500 profile and per-layer ranges are consistent across ch15 and the operational summary.
- **Recommended fix:** No action required. Recorded as a confirmed-clean checkpoint for continuity.

---

## (b2) Defensibility & Rejection-Resistance — by persona

No net-new DEF finding confirmed this state. The residual rejection surface is the two SCI over-claims (SCI-a7f3, SCI-b2c9), which a hostile reviewer would attack on empirical/legal-precision grounds; both are addressed under SCI and the blocking gates below. Standing defensibility exposures from prior states (live-incident containment authority, audit-store integrity) did not re-confirm as net-new gaps this cycle.

### CISO / DPO / CTO / CIO

No open DEF finding this state.

---

## (b3) Settled by Disposition

No findings were settled by disposition in the current state. Standing constraints — the ratified nine-layer constant and the EU-baseline invariance — remain in force; neither produced a net-new dispositioned suppression this state. The abstract-self-references disposition is referenced inline at XCOH-ch01syn to record that the off-by-one is a factual count error the disposition does **not** mask.

---

## (c) Blocking Gates

Every CRITICAL and HIGH finding is a blocking gate. The suite does not pass until each is closed.

| Gate | Finding | Severity | Root cause | Closure summary |
|---|---|---|---|---|
| GATE-1 | SCI-a7f3-nsf500awards-unsupported-quant | HIGH | RC-overclaim-beyond-source | Replace the "500 awards since 2012" figure with the sourced "over 100 university campuses" count (`esnet-history`), or cite a source stating the CC*/CC-NIE award count and start year; if unverifiable, drop the numeric claim. Make both occurrences citation-consistent. |
| GATE-2 | SCI-b2c9-charter-decades-no-legal-challenge-overclaim | HIGH | RC-overclaim-beyond-source | Soften to "an established, long-standing practice at ETH Zurich and Oxford"; drop "for decades without legal challenge" unless an independent litigation/institutional source is cited. |

No CRITICAL findings this state; the two HIGH findings are the binding gates.
