# SUIT Infrastructure-Policy Suite — Audit Report

**Suite:** SUIT (SUIT Policy / SUIT Solution + shared single-source bibliography and glossary)
**Scope audited:** `suit-policy/` argumentation pillar, `suit-solution/` conceptual frame and wave chapters, shared regulatory-applicability and glossary assets.

---

## (a) Executive Header

### Dimension Scores

| Dimension | Code | Score | One-line justification |
|---|---|---|---|
| Scientific accuracy | SCI | 74 | The argument is sound, but one load-bearing convergence statistic ("100-plus universities operating a Science DMZ") is attached to a source that does not carry it, denting the empirical layer at a high-visibility point. |
| Technical fidelity | TECH | 80 | Architecture is internally coherent; one figure-vs-text defect (sequence-diagram lifelines do not realise the nine functional roles the caption and prose claim) is a fidelity slip, not a structural fault, and does not touch the ratified nine-layer constant. |
| Cross-coherence | XCOH | 90 | Terminology, colours, stakeholder names and constants hold across both pillars; no cross-document drift surfaced this cycle. |
| Legal/regulatory | LEG | 80 | Regulatory mapping is rigorous; the only legal defect is a cosmetic COBIT process-title tense, with the substantive Schrems-II shortfall accounted under defensibility. |
| Citation coherence | CITE | 70 | Two source-precision defects — a DBIR segmentation/lateral-movement attribution and a Rennes "remained contained" over-read — assert findings beyond what the cited sources substantiate. |
| Applicability | APP | 85 | Size-invariance and localisation framing remain intact; no net-new applicability defect this cycle. |
| Defensibility | DEF | 55 | Three hostile-reader paths stay open: no live-incident emergency containment authority, a mutable audit store underwriting the strongest accountability and GDPR moves, and a Q4.2 cross-border answer sitting below the suite's own ratified Schrems-II standard. |

### Suite Aggregate

**Suite score: 72 / 100** (mean of the seven dimension scores, rounded).

Defensibility is the binding ceiling: two HIGH hostile-reader gaps and one MODERATE below-own-standard rebuttal concentrate the suite's exposure on the rejection-resistance surface rather than on its scientific or architectural core.

### Finding Counts by Severity

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 3 |
| MODERATE | 4 |
| LOW | 1 |
| **Total** | **8** |

---

## (a2) Root-Cause Clusters

Confirmed findings cluster into five root causes. Fixing each root resolves its whole cluster; symptoms should not be patched individually.

### RC-source-precision — Source-precision and over-reading of cited evidence

**Theme:** Three findings share one defect class — a claim asserts more than its cited source substantiates, or is attached to a source that does not carry it. The Science DMZ "100-plus universities" convergence statistic is pinned to a funding-mechanism source; the Verizon DBIR is credited with a specific segmentation/lateral-movement framing and a verbatim phrase not localised in the source; and the Rennes incident is read as evidence a breach "remained contained" when it documents an entry vector.

**Proposed root fix:** Reconcile each datapoint to a source that actually carries it, and soften any inference to what the source supports. Repoint the deployment-count statistic to the source that states it; either substantiate the DBIR attribution with a specific section/page or attribute the segmentation-defends inference to the NIST/ISO controls already cited; reframe the Rennes citation to attack-surface illustration (or substitute a source documenting segmentation-limited blast radius). Run a sourced-claim check matching every external number, named incident and quoted phrase against its carrying source.

**Resolves:** SCI-85e483be, CITE-93a6753d, CITE-66b9bd9a

**Residual if unfixed:** A reviewer can challenge the empirical layer of the convergence argument and two named-evidence inferences as unsupported by, or stronger than, their citations.

### RC-live-containment-authority — Live-incident containment-authority chain absent

**Theme:** The federated model grants every zone an identified owner with operational autonomy and answers the "strips the security function of authority" objection only at the governance/policy-override level. No document establishes who holds the emergency power, during an active breach, to forcibly isolate or quarantine a non-cooperating autonomous zone over its owner's objection, nor what procedurally overrides zone autonomy in real time.

**Proposed root fix:** Add a Policy Q&A item and a binding charter clause pre-granting the central security function a scoped, auditable, time-bounded **emergency containment authority** (forced network isolation/quarantine on defined incident criteria, logged, post-hoc reviewed by the digital-policy commission). Concede the autonomy tension, then rebut across three layers — legal (NIS2 Art.21 technical/operational measures + Art.23 reporting clock already vest a central duty), standards (NIST CSF Respond/Contain, ISO 27035), institutional precedent (Oxford/ETH unit-head accountability already subordinates the unit to a central isolation model). Cross-reference into the wave-7 audit/IR runbooks so the authority is operationalised, not merely asserted.

**Resolves:** DEF-7a1c9e3

**Residual if unfixed:** A CISO can refuse the federated model on the ground that no one can isolate a hostile or compromised autonomous zone in real time.

### RC-audit-integrity — Audit store has no integrity guarantee

**Theme:** The audit/observability pipeline is load-bearing for the suite's two strongest defensive moves — granular accountability ("auditable record") and GDPR data-subject-rights / proportionate-monitoring legality (RoPA as deterministic locator, bounded-retention metadata). Yet the observability and audit/IR chapters specify schema, retention and tiering but provide no integrity guarantee for the audit store itself: no tamper-evidence, append-only/WORM, cryptographic signing or hash-chaining, and no separation of duties between operators, SOC analysts who read the logs, and the ability to alter or delete them. The break-glass "does not bypass audit" check gestures at the need but no control backs it.

**Proposed root fix:** Add an explicit audit-integrity design point (D-number): append-only / WORM cold tier; per-record or per-batch cryptographic signing or hash-chaining for tamper-evidence; and a separation-of-duties / least-privilege rule splitting system operators from audit-readers and barring unilateral mutation/deletion (four-eyes for retention expiry). Anchor across three layers — legal (GDPR Art.32 integrity-of-processing + Art.5(1)(f); NIS2 Art.21 logging integrity), standards (ISO 27001 A.8.15/A.8.16; NIST 800-53 AU-9 Protection of Audit Information, AU-6), institutional/sector (REN-ISAC/FIRST evidentiary practice). Add a Policy Q&A item closing the "the audit log that proves accountability is itself mutable" path so the rebuttal lives in the Policy pillar, not only the Solution.

**Resolves:** DEF-4b2f8d6

**Residual if unfixed:** The accountability and GDPR-rights defences rest on an evidence store an insider could alter or selectively delete, undermining the suite's strongest claims at their root.

### RC-below-own-standard — Policy answer below the suite's own ratified standard

**Theme:** The single answer a hostile DPO lands on for cross-border transfer of personal data to commercial AI services stops at "standard contractual clauses (SCCs)". The suite itself defines the post-Schrems-II standard elsewhere — the glossary states SCCs are valid only when supplemented by a Transfer Impact Assessment and supplementary measures, and the regulatory-mapping chapter, storage and pilot chapters, and the shared regulatory-applicability asset operationalise TIA + supplementary technical measures + adequacy/EU-US DPF route. The load-bearing answer therefore sits below the suite's own ratified standard and reads as the pre-Schrems-II "SCCs are enough" position the suite explicitly rejects.

**Proposed root fix:** Upgrade the answer to the suite's own standard: transfer to a non-EEA AI provider requires an adequacy route where one exists (EU-US DPF for certified providers) OR SCCs **plus** a documented Transfer Impact Assessment and supplementary technical measures (encryption/pseudonymisation, key custody), citing the Schrems II judgment, the 2021 SCCs, the 2023 DPF adequacy decision and the TIA/SCC glossary terms. Cross-reference the regulatory-mapping Schrems-II table so the Policy answer inherits the Solution's rigour, converting a below-standard rebuttal into a concession-then-rebuttal meeting the suite's own multi-layer bar. (EU regime remains the baseline anchor, localisable per the Localisation Guide.)

**Resolves:** DEF-2e9c5a1

**Residual if unfixed:** A DPO can quote the suite's own glossary and regulatory chapter against the Policy answer, which presents a position the suite elsewhere rejects.

### RC-figure-text-fidelity — Figure does not realise the text it claims

**Theme:** A self-contained fidelity defect, plus one cosmetic legal-title slip. The activation sequence diagram's caption states the sequence runs "across the nine functional roles", and the prose enumerates nine functional roles excluding the human Subject (Identity, Policy, Network, Compute, Storage, Endpoint, Crypto, Audit, Orchestration), but the diagram lifelines do not realise those nine roles. Separately, the COBIT 2019 EDM05 process is given its title in the wrong tense.

**Proposed root fix:** Redraw the sequence diagram so the lifelines are the nine functional roles — add a Crypto lifeline, keep the Subject as an external initiating actor outside the nine, and route the key-acquisition step to the Crypto lifeline; or amend the caption/prose to "eleven steps across the subject and the nine functional roles" while still adding the missing Crypto lifeline. This is a figure-vs-text fidelity defect, not a challenge to the ratified nine-layer constant. Render the COBIT process under its official title, EDM05 "Ensured Stakeholder Engagement".

**Resolves:** TECH-2cf-activation-nine-roles-diagram-mismatch, LEG-cobit-edm05-title-tense-ensured-stakeholder-engagement

**Residual if unfixed:** A technical reviewer finds the figure contradicts its own caption; a standards reviewer notes the COBIT title is mis-rendered.

---

## (b) Canonical Findings

Grouped by severity, then by track.

### CRITICAL

None this state.

### HIGH

#### DEF-7a1c9e3 — track: DEF (defensibility / rejection-resistance)

- **Claim:** The federated model gives every zone an identified owner with operational autonomy (enclave charters) and answers the "strips the security function of authority" objection only at the governance/policy-override level. No document establishes a live-incident containment-authority chain: during an active breach, who holds the emergency power to forcibly isolate, quarantine or disconnect a non-cooperating autonomous zone over its owner's objection, and what procedurally overrides zone autonomy in real time.
- **Location:** `suit-policy/argumentation/argumentation-policy-EN.tex` (governance section Q2.x, Q8.1) and `suit-solution/ch25-wave7-audit-ir-EN.tex`.
- **Root cause:** RC-live-containment-authority.
- **Evidence:** L1 binding instruments (NIS2 Art.21 technical/operational measures + Art.23 reporting clock vest a central duty); L2 standards (NIST CSF Respond/Contain, ISO 27035 incident response); L5 institutional precedent (Oxford/ETH unit-head accountability subordinates the unit to a central isolation model — eth-baseline isolation, oxford-infosec) — the converging answer (a named emergency-isolation authority) is absent from the objection map.
- **Recommended fix:** Add a Policy Q&A item (e.g. Q2.5, "Federation means no one can pull the plug during a live breach") and a binding charter clause: each enclave charter pre-grants the central security function a scoped, auditable, time-bounded **emergency containment authority** (forced network isolation/quarantine) triggered on defined incident criteria, logged, with post-hoc review by the digital-policy commission. Concede the autonomy tension, then rebut across the three layers above. Cross-reference into the wave-7 IR runbooks so the authority is operationalised.

#### DEF-4b2f8d6 — track: DEF (defensibility / rejection-resistance)

- **Claim:** The audit/observability pipeline is load-bearing for the suite's two strongest defensive moves — granular accountability (Q2.1, "auditable record") and GDPR data-subject-rights / proportionate-monitoring legality (Q8.4, Q8.6 — Art.30 RoPA as the deterministic locator, bounded-retention metadata). Yet the observability and audit/IR chapters specify schema, retention and tiering but provide **no integrity guarantee for the audit store itself**: no tamper-evidence, append-only/WORM, cryptographic signing or hash-chaining, and no separation of duties between operators, SOC analysts who read the logs, and the ability to alter or selectively delete them. The break-glass "does not bypass audit" check gestures at the need but no control backs it.
- **Location:** `suit-solution/ch12-observability-EN.tex`, `suit-solution/ch25-wave7-audit-ir-EN.tex`; relied on by `suit-policy/argumentation/argumentation-policy-EN.tex` Q8.4 (ll.902-910) and Q8.6 (ll.937-948).
- **Root cause:** RC-audit-integrity.
- **Evidence:** L1 legal (GDPR Art.32 integrity-of-processing + Art.5(1)(f); NIS2 Art.21 logging integrity); L2 standards (ISO 27001 A.8.15/A.8.16 logging & monitoring; NIST 800-53 AU-9 Protection of Audit Information, AU-6); L5 institutional/sector (REN-ISAC/FIRST evidentiary practice cited in O7.1) — the control that would satisfy all three is absent.
- **Recommended fix:** Add to the observability and audit/IR chapters an explicit audit-integrity design point (D-number): append-only / WORM cold tier; per-record or per-batch cryptographic signing or hash-chaining for tamper-evidence; and a separation-of-duties / least-privilege rule splitting system operators from audit-readers and barring unilateral mutation/deletion (four-eyes for retention expiry). Add a Policy Q&A item (Q8.7 — "the audit log that proves accountability is itself mutable") so the hostile-reader path is closed in the Policy pillar, not only the Solution.

#### SCI-85e483be — track: SCI (scientific accuracy / evidence)

- **Claim:** The load-bearing convergence statistic "over 100 universities / 100-plus universities operating a Science DMZ" is attributed to `\cite{nsf-cc}`.
- **Location:** `suit-policy/argumentation/argumentation-policy-EN.tex`.
- **Root cause:** RC-source-precision.
- **Evidence:** L5 institutional — the cited nsf-cc entry carries the funding-mechanism claim, not the deployment count; the deployment count is carried by esnet-history. The convergence argument's empirical layer is currently attached to a source that does not state the figure.
- **Recommended fix:** Repoint the quantitative "100-plus / over 100 campuses" claim to `\cite{esnet-history}` (which states it), or add esnet-history alongside nsf-cc at each occurrence. Keep nsf-cc only for the funding-mechanism claim, not the deployment count.

### MODERATE

#### CITE-93a6753d — track: CITE (citation coherence)

- **Claim:** Text asserts a specific source finding — "The Verizon 2024 DBIR independently and consistently identifies segmentation as a defence against lateral movement" — and quotes "compartmentalisation and segmentation" as defences (line 826).
- **Location:** `suit-policy/argumentation/argumentation-policy-EN.tex`; `suit-solution/argumentation/argumentation-solution-EN.tex`.
- **Root cause:** RC-source-precision.
- **Evidence:** L3 sector report (Verizon DBIR 2024) cited for a specific framing and verbatim phrase not localised to a section/page; the general lateral-movement thesis remains carried by NIST/ISO controls.
- **Recommended fix:** Either (a) enrich the verizon-dbir2024 note/fetch_note to point to the specific DBIR section/page substantiating the segmentation/lateral-movement framing and the quoted phrase, or (b) soften the prose to what the source supports (DBIR documents lateral movement as a dominant breach pattern) and attribute the "segmentation defends against it" inference to the NIST/ISO controls already cited alongside.

#### CITE-66b9bd9a — track: CITE (citation coherence)

- **Claim:** Text: "…a segmented architecture is designed to confine a breach to a single subnet, as seen where an incident remained contained~\cite{rennes-cyber}." — presenting the Rennes case as evidence a breach "remained contained".
- **Location:** `suit-policy/argumentation/argumentation-policy-EN.tex`.
- **Root cause:** RC-source-precision.
- **Evidence:** L4 empirical (named incident) — the cited source documents a breach entering via a subnet/VPN (an attack-surface illustration), not a breach that "remained contained"; the prose over-reads the source.
- **Recommended fix:** Reframe the Rennes citation to what the source supports (breach entered via a subnet/VPN, illustrating attack surface) rather than asserting it "remained contained"; or substitute a source that documents segmentation-limited blast radius. Strengthen the rennes-cyber note with the specific containment evidence if it exists.

#### DEF-2e9c5a1 — track: DEF (defensibility / rejection-resistance)

- **Claim:** Q4.2 ("non-EU AI cloud creates GDPR liability") is the single answer a hostile DPO lands on for cross-border transfer of personal data to commercial AI services. Its transfer mechanism stops at "standard contractual clauses (SCCs)". The suite itself defines the post-Schrems-II standard elsewhere — the glossary states SCCs are valid under Schrems II only when supplemented by a Transfer Impact Assessment and supplementary measures; ch33 §33.2 / tab:rm-schrems2, ch10, ch23 and the shared regulatory-applicability asset operationalise TIA + supplementary technical measures + adequacy/EU-US DPF route. Q4.2 invokes none of this, so the load-bearing hostile-DPO answer sits below the suite's own ratified standard and reads as the pre-Schrems-II "SCCs are enough" position the suite explicitly rejects.
- **Location:** `suit-policy/argumentation/argumentation-policy-EN.tex`.
- **Root cause:** RC-below-own-standard.
- **Evidence:** L1 binding instrument + case law (Schrems II judgment; 2021 SCCs; 2023 DPF adequacy decision); intra-suite canonical recompute (glossary, ch33 §33.2/tab:rm-schrems2, ch10, ch23, shared regulatory-applicability concur against Q4.2); the Policy answer is the lone below-standard surface.
- **Recommended fix:** Upgrade Q4.2 item 1 to the suite's own standard: transfer of personal data to a non-EEA AI provider requires an adequacy route where one exists (EU-US DPF for DPF-certified providers) OR SCCs **plus** a documented Transfer Impact Assessment and supplementary technical measures (encryption/pseudonymisation, key custody) — citing schrems2020, eu-sccs2021, eu-dpf-adequacy-2023 and the `\gls{tia}` / `\gls{scc}` terms. Cross-reference ch33 §33.2 (tab:rm-schrems2) so the Policy answer inherits the Solution's rigour. (Does not touch the EU-baseline invariance: EU regime remains the anchor, localisable per the Localisation Guide row.)

#### TECH-2cf-activation-nine-roles-diagram-mismatch — track: TECH (technical fidelity)

- **Claim:** The caption states the sequence runs "across the nine functional roles", and the prose role list (ll.175-186) enumerates nine functional roles excluding the human Subject: Identity, Policy, Network, Compute, Storage, Endpoint, Crypto, Audit, Orchestration. The diagram lifelines do not realise those nine roles.
- **Location:** `suit-solution/ch02-conceptual-frame-EN.tex`.
- **Root cause:** RC-figure-text-fidelity.
- **Evidence:** L2 internal consistency — caption/prose vs the figure they describe diverge (a Crypto lifeline is missing and step 7's key-acquisition message has no functional-role target).
- **Recommended fix:** Redraw the sequence diagram so the lifelines are the nine functional roles (add a Crypto lifeline; keep the Subject as an external initiating actor outside the nine), and route step 7's key-acquisition message to the Crypto lifeline. Alternatively, amend the caption/prose to "eleven steps across the subject and the nine functional roles" and still add the missing Crypto lifeline. This is a figure-vs-text fidelity defect, **not** a challenge to the ratified nine-layer constant (DISPO-ARCH-9LAYERS).

### LOW

#### LEG-cobit-edm05-title-tense-ensured-stakeholder-engagement — track: LEG (legal/regulatory)

- **Claim:** "the COBIT 2019 process EDM05 (Ensure Stakeholder Engagement)".
- **Location:** `suit-policy/argumentation/argumentation-policy-EN.tex`.
- **Root cause:** RC-figure-text-fidelity (cosmetic title-precision member of the cluster).
- **Evidence:** L2 normative framework — COBIT 2019 names the EDM05 process "Ensured Stakeholder Engagement" (past participle).
- **Recommended fix:** Render the official title: EDM05 "Ensured Stakeholder Engagement".

---

## (b2) Defensibility & Rejection-Resistance — by persona

DEF findings organised by reviewer persona. Coverage states: **Answered §X** | **Partially answered** | **UNANSWERED-gap**.

### CISO

| Finding | Rejection vector | Current coverage | Closure |
|---|---|---|---|
| DEF-7a1c9e3 | During a live breach, no one holds the emergency authority to forcibly isolate a non-cooperating autonomous zone over its owner's objection | UNANSWERED-gap — autonomy and policy-override answered at governance level (Q2.1, Q2.3, Q8.1); no real-time containment-authority chain | Add Policy Q2.5 + a binding charter emergency-containment-authority clause; rebut across NIS2 Art.21/23, NIST CSF Respond/Contain + ISO 27035, and Oxford/ETH precedent; operationalise in the wave-7 IR runbooks. |
| DEF-4b2f8d6 | The audit log underwriting accountability is itself mutable — an insider can alter or selectively delete it | UNANSWERED-gap — schema, retention and tiering specified (ch12, ch25); integrity (tamper-evidence, SoD) absent | Add an audit-integrity design point (WORM/append-only, signing or hash-chaining, SoD splitting operators from audit-readers); add Policy Q8.7. |

### DPO

| Finding | Rejection vector | Current coverage | Closure |
|---|---|---|---|
| DEF-4b2f8d6 | GDPR rights and proportionate-monitoring legality rest on an audit store with no integrity guarantee | UNANSWERED-gap — RoPA-as-locator and bounded retention answered (Q8.4, Q8.6); audit-store integrity absent | Anchor the integrity design point on GDPR Art.32 + Art.5(1)(f) and surface it in the Policy pillar via Q8.7. |
| DEF-2e9c5a1 | Q4.2 cross-border transfer answer stops at "SCCs", below the suite's own post-Schrems-II standard | Partially answered — the correct TIA + supplementary-measures + DPF standard exists in the glossary, ch33 §33.2, ch10, ch23 and the shared asset, but Q4.2 does not inherit it | Upgrade Q4.2 item 1 to adequacy-route OR SCCs + TIA + supplementary measures, citing schrems2020 / eu-sccs2021 / eu-dpf-adequacy-2023; cross-reference ch33 §33.2. |

### CTO

No open DEF finding this state.

### CIO

No open DEF finding this state.

---

## (b3) Settled by Disposition

No findings were settled by disposition in the current state. Standing constraints — the ratified nine-layer constant (DISPO-ARCH-9LAYERS) and the EU-baseline invariance (DISPO-INVARIANCE) — remain in force and are referenced inline where they bear on a finding's scope (TECH-2cf and DEF-2e9c5a1 respectively); neither produced a net-new dispositioned suppression this state.

---

## (c) Blocking Gates

Every CRITICAL and HIGH finding is a blocking gate. The suite does not pass until each is closed.

| Gate | Finding | Severity | Root cause | Closure summary |
|---|---|---|---|---|
| GATE-1 | DEF-7a1c9e3 | HIGH | RC-live-containment-authority | Pre-grant a scoped, time-bounded, logged emergency containment authority in the enclave charters; add Policy Q2.5; operationalise in the wave-7 IR runbooks. |
| GATE-2 | DEF-4b2f8d6 | HIGH | RC-audit-integrity | Add an audit-integrity design point (WORM/append-only, signing or hash-chaining, SoD); add Policy Q8.7. |
| GATE-3 | SCI-85e483be | HIGH | RC-source-precision | Repoint the "100-plus universities" Science DMZ statistic to esnet-history (or add it alongside nsf-cc); keep nsf-cc for the funding-mechanism claim only. |

No CRITICAL findings this state; the three HIGH findings are the binding gates.
