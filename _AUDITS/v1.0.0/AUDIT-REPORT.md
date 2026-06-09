# SUIT Suite — v1.0.0 Quality Baseline

This is the shipped quality baseline for the v1.0.0 release of the SUIT suite. It
records the suite's state across the seven document tracks plus the instance track,
and serves as the anchor that subsequent audit runs diff against. The methodology
is defined in [`../AUDIT-PLAN.md`](../AUDIT-PLAN.md).

**Scope:** SUIT Policy, SUIT Policy Summary, SUIT Solution, SUIT Solution Summary,
and the two argumentation modules. The reference instantiation under
`instantiations/lu-university-of-luxembourg/` is covered by the INST track.

## Dimension scores

| Dimension | Code | Score | Assessment |
|---|---|---|---|
| Scientific accuracy | SCI | 92 | Load-bearing claims are supportable and carry citations that state them. Network-scale and Science-DMZ claims are sourced to the references that actually carry the count. |
| Technical fidelity | TECH | 90 | Architecture, sizing, conformance suite, and the wave roadmap are sound; wave dependencies are acyclic. Every architecture layer — including the cryptographic layer — is closed by the roadmap, with conformance linkage and exit criteria, so the layer-to-wave coverage reads complete and self-consistent. |
| Cross-coherence | XCOH | 90 | Terminology, load-bearing numbers, colours, and design constants (5-dimension grid, 9 layers, 10 waves) hold across both pillars and the two modules. The Policy↔Solution obligation↔mechanism matrix maps each obligation to a mechanism with no orphaned mechanism. |
| Legal / regulatory | LEG | 90 | Article numbers, case-law holdings, and regulatory thresholds are correctly attributed, including the AI Act systemic-risk provisions and the cross-border-transfer route (adequacy / SCCs supplemented per Schrems II by a documented Transfer Impact Assessment). |
| Citation coherence | CITE | 90 | Zero undefined citation keys across all four documents; factual claims carry citations; the bibliography meets field-coverage standards (abstract / fetch_status / fetch_note). |
| Applicability | APP | 90 | Size-invariance, the minimal-necessary-set anchor, and the localization framing hold; local anchors are scoped through the localization guide rather than hard-coded. |
| Defensibility | DEF | 88 | The hostile CISO / DPO / CTO / CIO objections are answered in-document: live-incident containment authority is pre-granted and bounded; the cryptographic layer's place in the rollout is stated; the evidence store is treated as a control; the exit-confidence index's top grade is reachable on the adopter's instantiated suite. |

**Suite score: 90 / 100** (mean of the seven dimension scores, rounded).

## Blocking gates

**None.** Every CRITICAL and HIGH item raised across the release audit cycle was
remediated before release. The open-findings set in `findings.json` is empty.

## Findings clustered by root cause

No open findings. The release audit cycle surfaced and closed defects in three
clusters, all remediated in the shipped suite:

1. **Layer-to-roadmap coverage completeness (TECH / DEF).** The cryptographic layer
   is now closed within the Wave 1 foundations, with its conformance subset added to
   that wave's exit criteria and to the conformance-linkage mapping, and the CISO
   "where is crypto in the rollout?" objection answered in-document. Layer-to-wave
   coverage reads complete and self-consistent.

2. **Defensibility of incident response and evidence (DEF / LEG).** The charter
   pre-grants scoped, time-bounded live-incident containment authority (anchored in
   NIS2, NIST CSF 2.0 Respond, and ISO/IEC 27035), and the audit/evidence store is
   specified as a control in its own right (append-only/WORM, hash-chain
   tamper-evidence, separation of duties), anchored in GDPR Art. 32 & 5(1)(f),
   NIS2 Art. 21, ISO/IEC 27001 A.8.15/A.8.16, and NIST SP 800-53 AU-9.

3. **Citation and regulatory precision (SCI / LEG / CITE).** Load-bearing counts are
   cited to the corroborating source that states them; the AI Act systemic-risk
   obligations and the cross-border-transfer route are attributed to the correct
   provisions; and the conceptual-frame figure caption matches the rendered lifelines.

## Policy ↔ Solution traceability

The obligation↔mechanism matrix built under the XCOH track maps each SUIT Policy
obligation to a realising mechanism in SUIT Solution; no mechanism is orphaned and
no obligation is left without a mechanism.

## Candidate items for the next cycle

Two low-severity, **unverified** observations are carried forward in `findings.json`
as the starting point for the next audit run's verification pass. They are not
confirmed defects and do not block release:

- `APP-summaries-regime-path-unreachable` — whether an adopter following only the
  summaries reaches the localization guide that scopes local anchors.
- `INST-lu-currency-readme-loc-stale` — whether a localization-currency note in the
  reference edition lags the latest binding set.

## How this baseline was produced

This baseline records the suite's state across all seven tracks plus the INST track
as shipped at v1.0.0, after the release audit cycle's CRITICAL and HIGH findings were
remediated and all four documents were verified to build with zero undefined
citations and references. It is the reference point for subsequent diffs (see the
baseline-diff convention in `../AUDIT-PLAN.md`).
