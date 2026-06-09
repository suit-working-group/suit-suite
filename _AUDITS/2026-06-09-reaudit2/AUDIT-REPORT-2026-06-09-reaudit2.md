# SUIT Infrastructure-Policy Suite — Audit Report

**Suite:** SUIT (SUIT Policy / SUIT Solution + shared single-source bibliography and glossary)
**Scope audited:** `suit-policy/` argumentation pillar; `suit-solution/` Technical Reference — conformance framework, wave roadmap (ch16-ch27), regulatory mapping (ch33) and the conceptual/synthesis frame; shared regulatory-applicability assets.

---

## (a) Executive Header

### Dimension Scores

| Dimension | Code | Score | One-line justification |
|---|---|---|---|
| Scientific accuracy | SCI | 90 | One LOW sourcing slip only: the "100+ universities" Science DMZ count is cited to `nsf-cc` at two sites where the corroborating `esnet-history` reference (already used elsewhere in the pillar) is the source that actually carries the count. The claim is true and supportable; only the citation pointer is thin at those two sites. |
| Technical fidelity | TECH | 74 | The architecture and sizing hold, but a layer-coverage completeness defect is confirmed: the 10-wave roadmap exercises only 8 of the 9 architecture layers — the Crypto layer (Ch.13) has three conformance tests defined but no wave closes against them and no wave chapter mentions crypto/ACME/HSM/PKI. The 9-layer / 10-wave coverage claim is not self-consistent as shipped. |
| Cross-coherence | XCOH | 86 | No standalone cross-coherence fault confirmed this cycle; the crypto coverage gap surfaces structurally under TECH and as a persona gap under DEF, and the conformance-index reachability issue under DEF. Terminology, colours, stakeholder names and design constants (9 layers, 10 waves, 5-dim grid) otherwise hold across both pillars. |
| Legal/regulatory | LEG | 76 | One HIGH misattribution: the systemic-risk GPAI obligations are attributed to AI Act Article 53 in the ch33 intro, conflating the baseline GPAI-provider duties (Art. 53) with the systemic-risk classification/threshold (Art. 51) and the additional systemic-risk obligations (Art. 55). The substantive mapping is sound; the article pointer mislabels which provision carries the systemic-risk threshold. |
| Citation coherence | CITE | 88 | No standalone citation-precision finding confirmed this cycle. The Science DMZ thin-citation slip is scored at its substantive home (SCI); the bibliography remains single-source per pillar. |
| Applicability | APP | 90 | Size-invariance, localisation framing and the minimal-necessary-set anchor remain intact; no applicability defect confirmed this cycle. |
| Defensibility | DEF | 72 | Two persona-rejection gaps confirmed. The CISO "where is crypto in the rollout?" rejection is unanswered in-document (HIGH, distinct from the wave-count disposition, which protects the count not the layer-coverage completeness); and the CTO can read the exit-confidence index's top grade (3/Robust) as structurally unreachable under the shipped reference suite (MODERATE, partial pre-empt only). |

### Suite Aggregate

**Suite score: 82 / 100** (mean of the seven dimension scores, rounded).

Defensibility and technical fidelity are the binding ceilings, and they bind on the same underlying defect viewed from two angles: the Crypto layer is fully specified (Ch.13, three conformance tests) but is never closed by the wave roadmap, leaving both a structural coverage gap (TECH) and an unanswered CISO rejection (DEF). The legal misattribution (LEG) is a one-line article-number correction. The remaining exposures — the exit-confidence index's unreachable top grade and the thin Science DMZ citation — are precision defects on otherwise sound material. The architecture, regulatory substance and applicability framing are not in question; the exposure is concentrated on roadmap-to-layer coverage completeness and a small number of precision points, all low-effort to close.

### Finding Counts by Severity

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 3 |
| MODERATE | 1 |
| LOW | 1 |
| **Total** | **5** |

---

## (a2) Root-Cause Clusters

The five confirmed findings collapse into four root causes. Fixing each root resolves its whole cluster; symptoms should not be patched individually.

### RC-crypto-layer-uncovered-by-roadmap — The Crypto layer is fully specified but never closed by the wave roadmap

**Theme:** Two findings (both HIGH, across TECH and DEF) share one defect: the Crypto layer (Ch.13) carries three conformance tests in the reference suite (Table `tab:cf-suite`: ACME / RFC 8555 issuance, key-escrow recovery, HSM migration), but the 10-wave roadmap closes against only 8 of the 9 architecture layers — no wave closes a Crypto conformance subset and no wave chapter mentions crypto / ACME / HSM / PKI. Viewed structurally this is a 9-layer / 10-wave coverage inconsistency (TECH); viewed through the CISO persona it is an unanswered "where is crypto in the rollout?" rejection (DEF) — the wave-count disposition protects the count of waves, not the completeness of layer coverage, so the two are distinct symptoms of one root and neither is pre-empted in-document.

**Proposed root fix:** Decide and state crypto's place in the rollout once, then propagate. Either (a) explicitly fold the Crypto layer into an existing wave (most naturally Wave 0 / Wave 1 foundations, since PKI underpins identity assertions), adding the Crypto conformance subset to that wave's exit criteria and to the `sec:cf-linkage` mapping; or (b) state explicitly in ch16/ch17 that the Crypto layer is a cross-cutting foundation (not a discrete wave), conformance-gated at the conformance-day cadence rather than at a wave closure, with its three `tab:cf-suite` tests mapped to a named foundations baseline. Update the summary/synthesis wave tables so the 9-layer / 10-wave coverage reads complete and self-consistent, and add the same note as the CISO pre-empt so the "crypto is never closed" rejection is answered in-document.

**Resolves:** TECH-cryptolayer-no-wave-roadmap-coverage-gap, DEF-3e71-ciso-crypto-wave-coverage-gap

**Residual if unfixed:** A technical reviewer mapping the 9 layers to the 10 waves finds one layer with conformance tests but no closing wave; a CISO reads that the Crypto layer is specified but never gated in the rollout, and the document offers no answer.

### RC-aiact-systemic-risk-article-misattribution — Systemic-risk GPAI obligations cited under the wrong AI Act article

**Theme:** One HIGH finding: the ch33 intro attributes the systemic-risk-threshold GPAI obligations to Article 53 of the AI Act. Article 53 carries the baseline GPAI-provider obligations; the systemic-risk classification/threshold is Article 51 and the additional systemic-risk obligations are Article 55. The supporting concept (GPAI obligations scale with systemic-risk classification) is correct; the article pointer conflates three distinct provisions.

**Proposed root fix:** Separate the provisions in the intro sentence: baseline GPAI-provider obligations are Art. 53; the systemic-risk classification/threshold is Art. 51; the additional systemic-risk obligations are Art. 55 — e.g. "...use or hosting of general-purpose AI models (Art.~53), with additional obligations where a model meets the systemic-risk threshold (Arts.~51 and~55)." Optionally add an Art. 55 row to Table `tab:rm-aiact`. Verify against the consolidated AI Act text before re-citing any article number.

**Resolves:** LEG-ch33aiact-systemicrisk-art53-articlenumber

**Residual if unfixed:** A legal reviewer checking the citation finds the systemic-risk threshold attributed to a provision that does not carry it, denting confidence in the surrounding regulatory mapping.

### RC-reference-suite-illustrative-gap — Reference conformance data is illustrative but read literally as the full gate

**Theme:** One MODERATE finding: the exit-confidence index's top grade (3/Robust) is literally unreachable for every layer under the shipped reference suite, because `tab:cf-suite` gives no layer tests in all four categories. The "maturity trajectory, not a day-one gate" paragraph (ch16) explains why an institution need not reach 3, but does not close the literal-reading inconsistency — it explains why 3 is not required, not why 3 is structurally unreachable in the reference data (partial pre-empt only, weak-(b)).

**Proposed root fix:** Add one sentence to the "illustrative suite" note (ch16, index definition): state that the reference suite samples categories per layer for illustration and that reaching index 3 requires the adopter to complete the four-category suite for that layer — so 3 is reachable on the adopter's instantiated suite, not on the reference sample. Converts weak-(b) to strong-(b).

**Resolves:** DEF-5b82-cto-exit-confidence-index-unreachable

**Residual if unfixed:** A CTO reading the index literally concludes the top grade can never be earned, reading the reference sample as the definitional gate.

### RC-thin-citation-at-load-bearing-count — A supportable count is cited to a source thinner than the corroborating one already in the pillar

**Theme:** One LOW finding: the "Science DMZ deployed at over 100 universities through NSF funding" count is cited at two sites to `nsf-cc` only, while the corroborating `esnet-history` reference that actually states the count is already used elsewhere in the same pillar (at line 3836). The claim is true and supportable; only the citation pointer is thin at those two sites.

**Proposed root fix:** At the two sites add the corroborating reference, i.e. `\cite{esnet-history,nsf-cc}`, so each instance of the "100+ universities" count carries a citation that actually states it.

**Resolves:** SCI-b7c2-sciencedmz100-citation

**Residual if unfixed:** A reviewer checking the "100+ universities" count at those two sites finds the cited source thinner than the corroborating one already in the pillar.

---

## (b) Canonical Findings

Grouped by severity, then by track.

### CRITICAL

None this state.

### HIGH

#### TECH-cryptolayer-no-wave-roadmap-coverage-gap — track: TECH (technical fidelity)

- **Claim:** The 10-wave roadmap exercises only 8 of the 9 architecture layers: the Crypto layer (Ch.13) has three conformance tests in the reference suite (Table `tab:cf-suite`: ACME/RFC 8555 issuance, key-escrow recovery, HSM migration) but no wave closes against a Crypto conformance subset and no wave chapter mentions crypto/ACME/HSM/PKI.
- **Location:** `suit-solution/solution-EN.tex` (Technical Reference) — wave roadmap (ch16-ch27) and the synthesis/summary wave tables.
- **Root cause:** RC-crypto-layer-uncovered-by-roadmap.
- **Evidence:** L2 internal consistency — the Crypto layer is a defined architecture layer with three `tab:cf-suite` conformance tests, yet no wave in the 10-wave roadmap closes a Crypto conformance subset and no wave chapter references crypto/ACME/HSM/PKI. The 9-layer / 10-wave coverage claim is therefore not complete or self-consistent as shipped.
- **Recommended fix:** Either (a) fold the Crypto layer into an existing wave (most naturally Wave 0 / Wave 1 foundations, since PKI underpins identity assertions, or a dedicated crypto step), adding the Crypto conformance subset to that wave's exit criteria and to the `sec:cf-linkage` mapping; or (b) state explicitly in ch16 and ch17 that the Crypto layer is established as a cross-cutting prerequisite (not a wave), conformance-gated at the conformance-day cadence rather than at a wave closure. Update the summary/synthesis wave tables so the 9-layer / 10-wave coverage is complete and self-consistent.

#### LEG-ch33aiact-systemicrisk-art53-articlenumber — track: LEG (legal/regulatory)

- **Claim:** The chapter intro attributes the systemic-risk-threshold GPAI obligations to Article 53 of the EU AI Act (Regulation (EU) 2024/1689).
- **Location:** `suit-solution/ch33-regulatory-mapping-EN.tex` (chapter intro; Table `tab:rm-aiact`).
- **Root cause:** RC-aiact-systemic-risk-article-misattribution.
- **Evidence:** L1 binding instrument — Article 53 carries the baseline GPAI-provider obligations; the systemic-risk classification/threshold is Article 51 and the additional systemic-risk obligations are Article 55. The intro conflates the three provisions, attributing the systemic-risk threshold to the article that does not carry it.
- **Recommended fix:** Separate the two in the intro sentence: baseline GPAI provider obligations are Art. 53; the systemic-risk classification/threshold is Art. 51 and the additional systemic-risk obligations are Art. 55, e.g. "...use or hosting of general-purpose AI models (Art.~53), with additional obligations where a model meets the systemic-risk threshold (Arts.~51 and~55)." Optionally add an Art. 55 row to Table `tab:rm-aiact`.

#### DEF-3e71-ciso-crypto-wave-coverage-gap — track: DEF (defensibility / rejection-resistance)

- **Claim:** The 10-wave roadmap exercises only 8 of the 9 architecture layers; the Crypto layer (Ch.13) has conformance tests defined but no wave closes against them and no wave chapter mentions crypto/ACME/HSM/PKI. There is no in-document answer pre-empting the "where is crypto in the rollout?" rejection — a defensibility gap for the CISO persona, distinct from the wave-count disposition (which protects the count, not the layer-coverage completeness).
- **Location:** `suit-solution/solution-EN.tex` (Technical Reference); `ch16-conformance-EN.tex`; ch18-ch27 wave chapters.
- **Root cause:** RC-crypto-layer-uncovered-by-roadmap.
- **Evidence:** L4 hostile-reader — a CISO reading the roadmap sees the Crypto layer specified (Ch.13, three `tab:cf-suite` tests) but never closed by any wave and never named in a wave chapter, with no in-document statement explaining where crypto sits in the rollout. The wave-count disposition protects the number of waves, not the completeness of layer coverage, so the rejection is not pre-empted.
- **Recommended fix:** Add either (a) an explicit wave-to-layer coverage note in ch17/ch16 stating crypto is delivered as a Wave-0 / foundations cross-cutting capability with its conformance tests run at a named baseline, or (b) a short clarification box acknowledging crypto is treated as a continuous foundation rather than a discrete wave, with its three `tab:cf-suite` tests mapped to the foundations baseline. Pre-empts the CISO "crypto is never closed" rejection.

### MODERATE

#### DEF-5b82-cto-exit-confidence-index-unreachable — track: DEF (defensibility / rejection-resistance)

- **Claim:** The exit-confidence index's top grade (3/Robust) is literally unreachable for every layer under the shipped reference suite, because `tab:cf-suite` gives no layer tests in all four categories. The "maturity trajectory, not a day-one gate" paragraph (ch16 lines 213+) softens expectation but does not close the literal-reading inconsistency — it explains why an institution need not reach 3, not why 3 is structurally unreachable in the reference data. Partial pre-empt only (weak-(b)).
- **Location:** `suit-solution/ch16-conformance-EN.tex` (index definition, line ~92; "illustrative suite" note; lines 213+).
- **Root cause:** RC-reference-suite-illustrative-gap.
- **Evidence:** L4 hostile-reader — under a literal reading of the reference suite, no layer has tests in all four categories, so the 3/Robust grade is unattainable for every layer. The maturity-trajectory paragraph explains why 3 is not required but not why it is structurally unreachable in the reference data, leaving the inconsistency open to a CTO reading the index literally.
- **Recommended fix:** Add one sentence to the "illustrative suite" note (ch16 line ~92) or the index definition: state explicitly that the reference suite samples categories per layer for illustration and that reaching index 3 requires the adopter to complete the four-category suite for that layer — so 3 is reachable on the adopter's instantiated suite, not on the reference sample. Converts weak-(b) to strong-(b).

### LOW

#### SCI-b7c2-sciencedmz100-citation — track: SCI (scientific accuracy / evidence)

- **Claim:** The Science DMZ is "deployed at over 100 universities through NSF funding," cited at these sites to `nsf-cc` only.
- **Location:** `suit-policy/argumentation/argumentation-policy-body-EN.tex` (lines 117 and 323; corroborating reference already used at line 3836).
- **Root cause:** RC-thin-citation-at-load-bearing-count.
- **Evidence:** L5 institutional — the "100+ universities" count is true and supportable, but at lines 117 and 323 it is cited to `nsf-cc` only, while the corroborating `esnet-history` reference that actually states the count is already in the pillar (used at line 3836). The pointer is thinner than the corroborating source already available.
- **Recommended fix:** At lines 117 and 323 add the corroborating reference already used at line 3836 (`esnet-history`), i.e. `\cite{esnet-history,nsf-cc}`, so each instance of the "100+ universities" count carries a citation that actually states it.

---

## (b2) Defensibility & Rejection-Resistance — by persona

Two persona-rejection gaps confirmed this state, both addressed in the blocking gates and root-cause clusters above.

### CISO

Open gap (HIGH): DEF-3e71. The Crypto layer is specified (Ch.13, three conformance tests) but no wave closes it and no wave chapter names it, and the document offers no in-document answer to "where is crypto in the rollout?". The wave-count disposition does not cover this — it protects the count of waves, not the completeness of layer coverage. Closed by the RC-crypto-layer-uncovered-by-roadmap fix.

### CTO

Open gap (MODERATE): DEF-5b82. The exit-confidence index's top grade is readable as structurally unreachable under the shipped reference suite; the maturity-trajectory paragraph is a partial pre-empt only. Closed by the one-sentence "illustrative suite" clarification (strong-(b)).

### DPO / CIO

No open DEF finding this state.

---

## (b3) Settled by Disposition

No findings were settled by disposition in the current state. The standing wave-count disposition (DISPO-WAVES-10) is referenced inline at TECH-cryptolayer and DEF-3e71 to record what it does **not** cover: it protects the count of waves (10), not the completeness of architecture-layer coverage across those waves, so the Crypto-layer gap is a net-new finding the disposition does not mask. The ratified nine-layer constant and the EU-baseline invariance remain in force; neither produced a net-new dispositioned suppression this state.

---

## (c) Blocking Gates

Every CRITICAL and HIGH finding is a blocking gate. The suite does not pass until each is closed.

| Gate | Finding | Severity | Root cause | Closure summary |
|---|---|---|---|---|
| GATE-1 | TECH-cryptolayer-no-wave-roadmap-coverage-gap | HIGH | RC-crypto-layer-uncovered-by-roadmap | Fold the Crypto layer into a wave (Wave 0/1 foundations) with its conformance subset in the exit criteria and `sec:cf-linkage` mapping, or state it as a cross-cutting prerequisite conformance-gated at the conformance-day cadence; update summary/synthesis wave tables so 9-layer / 10-wave coverage is complete and self-consistent. |
| GATE-2 | LEG-ch33aiact-systemicrisk-art53-articlenumber | HIGH | RC-aiact-systemic-risk-article-misattribution | Separate the provisions: baseline GPAI obligations Art. 53; systemic-risk threshold Art. 51; additional systemic-risk obligations Art. 55. Optionally add an Art. 55 row to `tab:rm-aiact`. |
| GATE-3 | DEF-3e71-ciso-crypto-wave-coverage-gap | HIGH | RC-crypto-layer-uncovered-by-roadmap | Add an explicit wave-to-layer coverage note (crypto as Wave-0 / foundations cross-cutting capability with its tests at a named baseline) or a clarification box that crypto is a continuous foundation, mapping its three `tab:cf-suite` tests to the foundations baseline; pre-empts the CISO "crypto is never closed" rejection. |

No CRITICAL findings this state; the three HIGH findings are the binding gates. GATE-1 and GATE-3 share root cause RC-crypto-layer-uncovered-by-roadmap and close together under a single coverage decision propagated across the Technical Reference.
