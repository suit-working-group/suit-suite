# SUIT Genericity & Maintainability Audit Report

**Suite:** `suit-infrastructure-policy`  
**Audit:** `2026-06-09-genericity`  
**Scope:** genericity (jurisdiction-, family- and vendor-neutrality) and maintainability (single-source-of-truth) of the published document bodies.

## Executive summary

This audit identifies **103** surviving findings where the suite, which is designed to be institution-, jurisdiction- and vendor-neutral across its six adopter families (EU-PUB-RI, US-PUB-R1, US-PRIV-R1, UK-RES, LATAM-PUB, AFR-PUB), instead states a locality-specific fact, a single-family claim, or a hard-coded value as if it were universal. Each finding has been verified in context and survives adversarial refutation; correctly-scoped examples, the sovereignty grid/concept, sourced external statistics, and named design constants (the 5-dimension grid, 9 layers, 10 waves, the named pace horizons) are out of scope and are not flagged.

### Counts by severity

| Severity | Count |
|---|---|
| HIGH | 8 |
| MODERATE | 59 |
| LOW | 36 |
| **Total** | **103** |

### Counts by defect category

| Defect category | Count |
|---|---|
| Locality-as-universal | 22 |
| Category-overreach | 58 |
| Unparameterised-fact | 17 |
| Maintainability | 6 |
| **Total** | **103** |

### Per-document summary

| Document | HIGH | MODERATE | LOW | Total |
|---|---:|---:|---:|---:|
| `shared/regulatory-applicability-EN.tex` | 0 | 1 | 0 | 1 |
| `suit-policy/argumentation/argumentation-policy-body-EN.tex` | 2 | 4 | 1 | 7 |
| `suit-policy/companion/companion-body-EN.tex` | 1 | 2 | 3 | 6 |
| `suit-policy/main/main-body-EN.tex` | 0 | 4 | 2 | 6 |
| `suit-policy/policy-EN.tex` | 0 | 0 | 1 | 1 |
| `suit-solution/abstract-EN.tex` | 0 | 2 | 0 | 2 |
| `suit-solution/argumentation/argumentation-solution-EN.tex` | 0 | 1 | 5 | 6 |
| `suit-solution/ch02-conceptual-frame-EN.tex` | 0 | 0 | 1 | 1 |
| `suit-solution/ch03-sovereignty-grid-EN.tex` | 0 | 3 | 1 | 4 |
| `suit-solution/ch04-self-assessment-EN.tex` | 1 | 2 | 2 | 5 |
| `suit-solution/ch05-architectural-principles-EN.tex` | 0 | 2 | 0 | 2 |
| `suit-solution/ch06-identity-EN.tex` | 0 | 2 | 3 | 5 |
| `suit-solution/ch07-policy-EN.tex` | 0 | 2 | 1 | 3 |
| `suit-solution/ch09-compute-EN.tex` | 0 | 1 | 1 | 2 |
| `suit-solution/ch10-storage-EN.tex` | 0 | 1 | 0 | 1 |
| `suit-solution/ch11-endpoint-EN.tex` | 0 | 1 | 0 | 1 |
| `suit-solution/ch12-observability-EN.tex` | 0 | 1 | 0 | 1 |
| `suit-solution/ch13-crypto-EN.tex` | 0 | 1 | 0 | 1 |
| `suit-solution/ch14-orchestration-EN.tex` | 0 | 1 | 0 | 1 |
| `suit-solution/ch15-sizing-EN.tex` | 0 | 1 | 0 | 1 |
| `suit-solution/ch16-conformance-EN.tex` | 0 | 1 | 2 | 3 |
| `suit-solution/ch17-playbook-reading-EN.tex` | 0 | 2 | 0 | 2 |
| `suit-solution/ch18-wave0-foundations-EN.tex` | 0 | 1 | 0 | 1 |
| `suit-solution/ch19-wave1-identity-EN.tex` | 1 | 0 | 1 | 2 |
| `suit-solution/ch20-wave2-observability-EN.tex` | 0 | 1 | 0 | 1 |
| `suit-solution/ch21-wave3-network-EN.tex` | 0 | 0 | 1 | 1 |
| `suit-solution/ch22-wave4-policy-EN.tex` | 0 | 1 | 1 | 2 |
| `suit-solution/ch23-wave5-pilot-EN.tex` | 0 | 3 | 0 | 3 |
| `suit-solution/ch24-wave6-endpoint-EN.tex` | 0 | 1 | 0 | 1 |
| `suit-solution/ch25-wave7-audit-ir-EN.tex` | 1 | 1 | 0 | 2 |
| `suit-solution/ch26-wave8-workload-EN.tex` | 0 | 1 | 1 | 2 |
| `suit-solution/ch27-wave9-lifecycle-EN.tex` | 0 | 1 | 0 | 1 |
| `suit-solution/ch28-cross-cutting-EN.tex` | 0 | 1 | 0 | 1 |
| `suit-solution/ch30-coexistence-patterns-EN.tex` | 0 | 1 | 2 | 3 |
| `suit-solution/ch31-institutional-precedents-EN.tex` | 0 | 1 | 2 | 3 |
| `suit-solution/ch32-external-references-EN.tex` | 0 | 3 | 1 | 4 |
| `suit-solution/ch33-regulatory-mapping-EN.tex` | 0 | 1 | 3 | 4 |
| `suit-solution/reading-guide-EN.tex` | 0 | 0 | 1 | 1 |
| `suit-solution/solution-EN.tex` | 0 | 1 | 0 | 1 |
| `suit-solution/solution-body-EN.tex` | 2 | 4 | 0 | 6 |
| `suit-solution/summary/solution-summary-EN.tex` | 0 | 2 | 0 | 2 |
| **All documents** | **8** | **59** | **36** | **103** |

### How to treat these

Most findings resolve through one of three moves the suite already supports:

1. **Route through the localization registry.** Where `shared/localization-defaults.tex` already defines a neutral `\loc{}` key (institution-type, staffing-profile, nren-name, nren-csirt, identity-federation-profile, incumbent-identity-suite-vendor, data-protection-regime, cybersecurity-baseline-regime, cross-border-transfer-regime, ai-regulation, peer-nren-roster, research-backbone-scale, and others), the hard-coded fact should consume that key so each edition rebinds it. Several findings note keys that do **not** yet exist and must be created before routing.
2. **Demote to a labelled example.** A named instrument, vendor, federation or institution stays in the text but is explicitly framed as one worked instantiation ("in the EU, ...", "e.g. ...", "as one worked instantiation"), with a generic anchor carrying the claim.
3. **Soften the universal quantifier / centralise the constant.** Unsourced "most/majority/world-leading" claims become scoped or hedged; duplicated magic numbers and date anchors move to a single macro/key.

This report is to be treated **point by point afterward**: each finding carries an id, a repo-relative location, the quoted passage, the reason it is not generic, and a concrete fix, so it can be actioned and checked off independently.

---

## Findings

Findings are grouped first by defect category, then by file. Within a file they are ordered by severity (HIGH, MODERATE, LOW).

## Locality-as-universal (22)

*A jurisdiction-, region- or vendor-specific fact (a binding legal instrument, a named external service, a regional market reality) is stated in the document voice as if it bound or described every adopter.*

### `suit-policy/argumentation/argumentation-policy-body-EN.tex`

#### GEN-q63bindinglaw — HIGH

- **Location:** `suit-policy/argumentation/argumentation-policy-body-EN.tex:565 (Q6.3 answer, sec:q-iac)`
- **Passage:**

  > These are not abstract philosophical references. They are \emph{binding law} in the EU and Council of Europe member states. An IT policy that systematically restricts digital access and monitors communications \emph{must} satisfy the proportionality requirements of these instruments.

- **Why it is not generic:** Verified in context. The sentence asserts the EU Charter / ECHR / CJEU-ECtHR regime as 'binding law' and states an IT policy 'must satisfy' its proportionality requirements as a standing obligation of the adopter. It is NOT routed through \loc{} (the body file contains zero \loc{} macros and the shared/localization-defaults.tex and categories/ directories do not yet exist), it is NOT hedged, and it is not a labelled comparative example. For the US-PUB-R1, US-PRIV-R1, LATAM-PUB and AFR-PUB archetypes these instruments are not binding, so the 'must satisfy' obligation is jurisdiction-specific presented as universal. NOTE: the candidate fix cites a \loc{regulatory-regime} 'default already reads ...' that does not actually exist in the repo; the key must be created, not assumed.

- **Fix:** Generalise the binding claim once a regulatory-regime key exists: 'These are binding law in \loc{regulatory-regime}; where the adopter is so bound, an IT policy ... must satisfy the proportionality requirements; elsewhere they stand as a strongly persuasive proportionality benchmark.' Until the localization layer is created, hard-code the conditional softening (EU/CoE editions bound; other editions persuasive).

#### GEN-q51gdprnothreshold — MODERATE

- **Location:** `suit-policy/argumentation/argumentation-policy-body-EN.tex:448 (Q5.1 answer, sec:q-comparisons)`
- **Passage:**

  > the \gls{gdpr}~\cite{gdpr} applies to every institution processing personal data, irrespective of size. The choice a small institution faces is therefore not ...

- **Why it is not generic:** Verified in context. The minimal-necessary-set / size-invariance argument is correctly do-not-flag, but the supporting no-threshold legal anchor is pinned to the GDPR and stated as binding 'every institution' with no jurisdictional qualifier. For US/LATAM/AFR families the GDPR is not the governing regime, so 'applies to every institution' is jurisdiction-specific even though the underlying no-size-threshold duty is generalisable. Not hedged, not \loc{}-routed.

- **Fix:** Keep the size-invariance argument; generalise the legal anchor: 'a data-protection duty applies with no size threshold under the adopter's data-protection regime (the GDPR is the EU instance, applying irrespective of size)'.

#### GEN-q63charterart13 — MODERATE

- **Location:** `suit-policy/argumentation/argumentation-policy-body-EN.tex:559 (Q6.3 answer, sec:q-iac)`
- **Passage:**

  > Article~13 of the EU Charter protects academic freedom as a \emph{fundamental right}. It applies to \emph{universities} --- that is not a stretch; it is the literal scope of the provision.

- **Why it is not generic:** Verified in context. Article 13 of the EU Charter is presented as the operative academic-freedom guarantee for the adopter ('it is the literal scope of the provision'), not labelled as one jurisdiction's exemplar. No \loc{} routing, no generic anchor. US/UK/LATAM/AFR archetypes protect academic freedom under different instruments, so this reads EU-as-universal.

- **Fix:** Mark Article 13 as a labelled EU instance and add a generic anchor: 'In EU jurisdictions, Article 13 of the EU Charter protects academic freedom as a fundamental right; comparable jurisdictions protect it under their own constitutional or statutory instruments.'

#### GEN-q83q85q86clockowner — MODERATE

- **Location:** `suit-policy/argumentation/argumentation-policy-body-EN.tex:655 (Q8.1 answer) and parallel passages 727-731 (Q8.5), 742-748 (Q8.6), sec:q-regulatory`
- **Passage:**

  > the central \gls{soc} owns the \gls{nis2} Article~23 reporting clock --- the 24-hour early warning, the 72-hour notification and the one-month final report

- **Why it is not generic:** Verified in context across Q8.1, Q8.5 and Q8.6. The answers assert NIS2 Art.~23 (clock), Art.~21(2)(d) (supply-chain), and GDPR Art.~15/16/17 (rights) and Art.~30 (RoPA) as the adopter's standing obligations ('the central SOC owns the NIS2 Article 23 reporting clock', 'NIS2 Article 21(2)(d) requires ongoing management'). These bind only EU essential/important entities, not US-PRIV-R1 or non-EU families. No essential-entity classification scoping and no \loc{} routing appear. The single-owner architectural pattern is sound and generic, but it is welded to NIS2/GDPR as the assumed governing regime throughout.

- **Fix:** Frame the section as the EU instantiation of generic duties: 'where the adopter is an essential/important entity under its cybersecurity-baseline regime, the central SOC owns the NIS2 Art.~23 clock; the same single-owner pattern applies to whatever incident-reporting and data-subject-rights regime governs the adopter.'

#### GEN-readerguideregime — LOW

- **Location:** `suit-policy/argumentation/argumentation-policy-body-EN.tex:35-37 (How to read this module, evidence methodology)`
- **Passage:**

  > \keyword{Legal} --- binding instruments (EU Charter, \gls{ecthr} and \gls{cjeu} case law, \gls{gdpr}, \gls{nis2}, the \gls{aiact})

- **Why it is not generic:** Verified in context. The Legal evidence layer is enumerated exclusively with EU/CoE instruments and labelled 'binding', with no generic-regime framing. While this is partly a description of the evidence corpus actually used, the unqualified 'binding instruments' label sets the EU-as-universal frame the rest of the module inherits and is not neutralised anywhere. Survives as the soft root, LOW severity.

- **Fix:** Add a neutralising clause: 'binding instruments of the adopter's jurisdiction; in EU/CoE editions these are the EU Charter, ECtHR/CJEU case law, GDPR, NIS2 and the AI Act, used here as the worked example.'


### `suit-policy/companion/companion-body-EN.tex`

#### GEN-vendor-ai-list — HIGH

- **Location:** `suit-policy/companion/companion-body-EN.tex:404-405 (Current regulatory and operational context, item 1)`
- **Passage:**

  > major cloud-based AI services (OpenAI, Anthropic, Google, HuggingFace, AWS) is now part of the standard scientific working environment

- **Why it is not generic:** Verified verbatim at lines 404-405. A fixed roster of named US commercial AI vendors is hard-coded in prose and presented as the universal "standard scientific working environment" --- no "e.g.", no non-exhaustive label, no \loc routing. The suite is explicitly vendor-neutral by design (the Technical Reference is described as a "vendor-neutral reference architecture" at lines 489-491). Naming specific providers as the default both dates the document and misrepresents adopters under data-residency or sovereignty constraints, or with different provider ecosystems (LATAM-PUB, AFR-PUB, EU data-residency). Not the sovereignty concept, not a sourced statistic, not a labelled example.

- **Fix:** Drop the parenthetical vendor list or recast as a clearly-labelled, illustrative, non-exhaustive example ("commercial and open AI services (e.g. ...)") and/or route any named exemplar through a \loc key; keep the generic "major cloud-based AI services" framing.


### `suit-policy/main/main-body-EN.tex`

#### GEN-eu-charter-default-binding-icradp — MODERATE

- **Location:** `suit-policy/main/main-body-EN.tex:4262-4320 (ICRADP "The fundamental freedoms at stake")`
- **Passage:**

  > Restrictive university digital policies simultaneously engage several fundamental rights protected by the \textbf{Charter of Fundamental Rights of the EU} ... and the \textbf{European Convention on Human Rights}

- **Why it is not generic:** VERIFIED as surviving. The Charter/ECHR fundamental-rights block (4264-4320: EU Charter Arts.~13/11/10/7-8/1/31, ECtHR Sorguç/Yildirim/Bayatyan/Barbulescu, CJEU Scarlet) opens flatly stating that "Restrictive university digital policies simultaneously engage several fundamental rights protected by the Charter ... and the ECHR" --- presented as the generic legal basis for the adjustment right with no EU-scoping hedge and no \loc routing. The asymmetry is confirmed: the equal-treatment law IS routed through \loc{national-equal-treatment-law} (line 4189), the CRPD line hedges, the international-consensus paragraph (4322-4346) provides the jurisdiction-neutral anchor (UN HRC, UNESCO 195 countries, Magna Charta 94 countries) --- but the Charter/ECHR core is bound to "the institution" generically, misleading US/LATAM/AFR editions where neither instrument applies.

- **Fix:** Frame the EU Charter / ECHR / CJEU / ECtHR body explicitly as the EU-archetype instantiation of the proportionality principle (with the CRPD/UN-resolution layer as the jurisdiction-neutral anchor), or introduce a \loc{fundamental-rights-instruments} key so non-EU editions substitute their constitutional/human-rights basis. Add one hedge sentence ("In EU-bound jurisdictions, these rights are grounded in...; elsewhere the equivalent national instruments apply").


### `suit-solution/argumentation/argumentation-solution-EN.tex`

#### GEN-arg-nren-eu-us — MODERATE

- **Location:** `suit-solution/argumentation/argumentation-solution-EN.tex:487-491 (Sec. Sizing realism, Response O3.1)`
- **Passage:**

  > National research and education networks (\institution{GÉANT}, \institution{RENATER}, \institution{RESTENA}) exist precisely so that small institutions consume identity, connectivity, and security as shared services rather than building them alone

- **Why it is not generic:** VERIFIED in context and strongest of the set. The three named NRENs are EU-only (GÉANT pan-European, RENATER France, RESTENA Luxembourg) yet the sentence asserts NREN-as-shared-service as a universal availability for 'small institutions' generally, inside the response (O3.1) that defends whether ANY small university can run the architecture. A US-PRIV-R1, US-PUB-R1, LATAM-PUB, or AFR-PUB adopter has a different (or absent) NREN shared-service catalogue. I confirmed the localization registry actually holds the exact keys to parameterise this (\loc{nren-name}, \loc{peer-nren-roster}, \loc{nren-service-catalogue} all present in shared/localization-defaults.tex), so hard-coding three EU NRENs as the universal exemplar is a genuine unparameterised locality defect. eduroam/eduGAIN are global interfederations (generic, fine); the three named NRENs are the EU-specific, unrouted part. Not refuted.

- **Fix:** Route the exemplar through localization: 'National research and education networks (\loc{nren-name}; peer examples such as GÉANT, RENATER, RESTENA) exist precisely so that...' or cite \loc{nren-service-catalogue}/\loc{peer-nren-roster}, marking the three names as EU examples rather than the universal set.


### `suit-solution/ch03-sovereignty-grid-EN.tex`

#### GEN-geant-case1 — MODERATE

- **Location:** `suit-solution/ch03-sovereignty-grid-EN.tex:327 (sec:sg-ex-oss, Table tab:sg-ex-oss)`
- **Passage:**

  > Operational & 2 Established & Skills available; \gls{geant} community support; no supplier-only certification.

- **Why it is not generic:** Confirmed in context. Line 327 hard-codes \gls{geant} (a single named pan-European NREN) inside the worked-example comment as the source of 'community support'. The illustrative hedge at lines 300-303 governs only the SCORES ('the same instantiation in a different institution may receive different scores'), not which NREN provides support; GEANT is stated as a flat fact, unscoped, with no 'e.g.' and no \loc routing. The chapter's own canonical indicator at lines 209-211 uses the generic \gls{nren} for exactly the 'local skills availability' role, and \loc{nren-name} exists in shared/localization-defaults.tex. A US-PRIV-R1, UK-RES, LATAM-PUB or AFR-PUB adopter would not receive 'GEANT community support'. Genuinely non-generic as written.

- **Fix:** Replace \gls{geant} with the generic \gls{nren} (or \loc{nren-name}), matching line 210. If a concrete community is wanted as illustration, label it explicitly (e.g. 'the institution's NREN community, e.g. GEANT in the EU').

#### GEN-geant-case3 — MODERATE

- **Location:** `suit-solution/ch03-sovereignty-grid-EN.tex:408 (sec:sg-ex-hybrid, Table tab:sg-ex-hybrid)`
- **Passage:**

  > Operational & 2 Established & Two skill sets required; mutualisation feasible through \gls{geant}.

- **Why it is not generic:** Confirmed in context. Line 408 again hard-codes \gls{geant} as the universal mutualisation channel in a worked-example comment. The canonical 'Mutualisation feasibility' indicator (lines 218-220) and 'Local skills availability' indicator (lines 209-211) are written generically (consortium / \gls{nren} / peer institutions), and \loc{nren-name} exists. Naming the single pan-European NREN narrows this example to EU adopters; it is not scoped, not an 'e.g.', and not the sovereignty concept itself. Survives refutation.

- **Fix:** Replace \gls{geant} with \gls{nren} / \loc{nren-name}, or with the generic 'a regional NREN or sector consortium', consistent with the canonical indicator wording at lines 218-220.


### `suit-solution/ch09-compute-EN.tex`

#### GEN-co-nis2anchor — MODERATE

- **Location:** `suit-solution/ch09-compute-EN.tex:280-291 (\section{Regulatory anchoring})`
- **Passage:**

  > It operationalises NIS2~Art.~21(2)(c) (business continuity and backup, through declarative redeployability) and (e) ... The layer contributes to 27001~A.8.32 (change management) and to NIST CSF \textsf{PROTECT} (PR.PS --- platform security).

- **Why it is not generic:** Confirmed in context. The Regulatory anchoring section states in the document's own voice, with no \loc{} routing and no example/conditional frame, that the compute layer 'operationalises NIS2 Art.21(2)' and that GDPR Art.32 obligations 'rest' on it. NIS2 is an EU directive binding only EU/transposing adopters; ISO/IEC 27001 and NIST CSF are voluntary/US-origin frameworks an adopter may not have adopted. In a suite that is institution-, jurisdiction- and vendor-neutral by design, a reader in a LATAM-PUB, AFR-PUB or US-PUB-R1 family is told their compute layer satisfies obligations under regimes that do not bind them. The cross-reference to \trchap{ch:regulatory-mapping} does not hedge or scope these operative sentences. This is not a sourced statistic, not a labelled regulatory example, and not the sovereignty concept/grid.

- **Fix:** Frame the named instruments as a worked EU example or route them through the localization regime keys, e.g. open with 'Under \loc{cybersecurity-baseline-regime} (in the EU edition, NIS2 Art.21(2)...; ISO/IEC 27001 A.8.32; NIST CSF PR.PS as a cross-walk)...' and present the article-level mapping as illustrative rather than as a flat universal claim; route GDPR Art.32 via \loc{data-protection-regime}.


### `suit-solution/ch13-crypto-EN.tex`

#### GEN-nis2art21 — MODERATE

- **Location:** `suit-solution/ch13-crypto-EN.tex:228-233 (Regulatory anchoring)`
- **Passage:**

  > It is the principal anchor of NIS2~Art.~21(2)(h) (cryptography policies and procedures) and contributes to the applicable data protection regime's encryption and pseudonymisation obligations (in the European Union, GDPR~Art.~32(1)(a)).

- **Why it is not generic:** Confirmed in context (lines 228-238). Within the same sentence and paragraph, the data-protection regime and the electronic-identification/trust-services regime are both routed through a generic 'the applicable ... regime' phrasing with EU instruments demoted to a parenthetical '(in the European Union, GDPR Art. 32(1)(a))' / '(in the European Union, eIDAS 2 ...)' example qualifier. NIS2 Art. 21(2)(h) alone is asserted flatly as 'the principal anchor' with no jurisdictional scoping. NIS2 is an EU directive; a non-EU adopter (US-PUB-R1, US-PRIV-R1, UK-RES, LATAM-PUB, AFR-PUB) is bound by its own cybersecurity-baseline regime, not NIS2. As written it reads as a universal anchor, inconsistent with the surrounding GDPR/eIDAS2 treatment. Not the sovereignty concept, not a sourced external statistic, and not routed through a generic phrase or labelled as an EU example.

- **Fix:** Route through a generic regime phrase and demote NIS2 to a labelled EU example, matching the GDPR/eIDAS2 treatment in the same sentence: e.g. 'the principal anchor of the applicable cybersecurity-baseline regime's cryptography requirements (in the European Union, NIS2 Art. 21(2)(h) --- cryptography policies and procedures)'.


### `suit-solution/ch23-wave5-pilot-EN.tex`

#### GEN-aiact-applies — MODERATE

- **Location:** `suit-solution/ch23-wave5-pilot-EN.tex:275-278 (\S sec:w5-regulatory)`
- **Passage:**

  > The Researcher-LLM-API scenario is the principal locus where the EU AI Act applies: Art.~2(6) ... with Art.~50 ... still applicable

- **Why it is not generic:** VERIFIED non-generic. Line 275 asserts 'the EU AI Act applies' as the scenario's AI-governance frame with no scope to EU adopters. A suite-wide grep shows this is the ONLY bare 'AI Act applies' assertion in the solution; the established convention is conditional/exemplary (companion-body-EN.tex:419 'where one exists --- e.g. Art.~2(6) of the EU AI Act'; regulatory-applicability lists the AI Act as one instrument). The key \setloc{ai-regulation}{the adopter's applicable AI-governance regime} exists in shared/localization-defaults.tex:77 precisely so non-EU families are not told the EU AI Act binds them. NOTE: the GDPR Art.~25/35/32 and NIS2 Art.~21(2)(a) references in the same paragraph are cross-referenced to \trchap{ch:regulatory-mapping} (lines 284-286), consistent with the deliberate regulatory-mapping pattern, so the surviving defect is specifically the unconditional 'AI Act applies' assertion.

- **Fix:** Frame the AI-governance anchor via \loc{ai-regulation} and present the EU AI Act articles as the EU instantiation, e.g. '...is the principal locus where the adopter's \loc{ai-regulation} bites; in the EU, the AI Act Art.~2(6) (research exemption) is typically invoked, with Art.~50 still applicable...', matching the companion-body 'where one exists' phrasing.

#### GEN-schremsii-artefact — MODERATE

- **Location:** `suit-solution/ch23-wave5-pilot-EN.tex:141-145 (\S sec:w5-scenario-llm, "Why this scenario")`
- **Passage:**

  > A pilot that demonstrates a documented egress policy under \emph{Schrems~II} conditions produces an artefact that the institution can show to its governance body, its data protection officer, and the regulators

- **Why it is not generic:** VERIFIED non-generic. Lines 142-145 bind 'under Schrems II conditions' to every adopter of the scenario and assume a GDPR-style 'data protection officer' role universally, with no \loc{} routing and no 'in the EU' hedge. A non-EU archetype (US-PRIV-R1, AFR-PUB, LATAM-PUB) is not governed by Schrems II and may have a different or absent DPO construct. The minimal-necessary-set / sovereignty grid is generic, but this regulatory anchor and role phrase are not, and the suite elsewhere scopes both (companion-body-EN.tex:415; data-protection function routed via localization).

- **Fix:** Generalise the transfer condition via \loc{cross-border-transfer-regime} and the data-protection-function role phrase, keeping 'Schrems II conditions' only as a parenthetical EU example.

#### GEN-schremsii-egress — MODERATE

- **Location:** `suit-solution/ch23-wave5-pilot-EN.tex:124 (\S sec:w5-scenario-llm, Scenario A)`
- **Passage:**

  > third-country data egress under \gls{gdpr}~Art.~32 and the \emph{Schrems~II} framework

- **Why it is not generic:** VERIFIED non-generic as written. Line 124 presents Schrems II (CJEU C-311/18) + GDPR Art.32 as THE frame for any adopter's third-country egress, inside a chapter (lines 107-113) that states institutions of all archetypes choose this scenario. The suite's own established convention scopes this differently: companion-body-EN.tex:415 says 'in the worked EU instantiation, the \emph{Schrems~II} cumulative regime applies', and ch10-storage-EN.tex:281 routes the same fact through \loc{cross-border-transfer-regime}. The key \setloc{cross-border-transfer-regime} exists in shared/localization-defaults.tex:78 and is consumed by a sibling solution chapter, so the localization mechanism is available and the bare EU-doctrine assertion here is an anomaly, not the design pattern.

- **Fix:** Route the regime through \loc{cross-border-transfer-regime} (and \loc{data-protection-regime}) and demote Schrems II to a labelled EU example, e.g. 'third-country data egress under the adopter's \loc{cross-border-transfer-regime} (in the EU, GDPR Art.~32 read with the \emph{Schrems~II} doctrine)', matching the companion-body and ch10 framing.


### `suit-solution/ch26-wave8-workload-EN.tex`

#### GEN-w8reg-nis2 — MODERATE

- **Location:** `suit-solution/ch26-wave8-workload-EN.tex:269-272 (\section Regulatory anchoring)`
- **Passage:**

  > It operationalises NIS2~Art.~21(2)(c) (business continuity through declarative redeployability) and (e) (security in development and maintenance, through SLSA-level supply-chain attestations).

- **Why it is not generic:** Confirmed in context. The immediately preceding sentence (lines 265-269) correctly routes the obligation through the generic 'applicable data-protection regime's security-of-processing obligation' with GDPR Art. 32 / Art. 5(1)(c) as labelled 'e.g.' examples. The NIS2 sentence breaks that pattern: it asserts 'It operationalises NIS2 Art. 21(2)(c)... and (e)' as an unconditional property of the wave, with no generic-regime wrapper and no 'e.g.' scoping. NIS2 (Directive (EU) 2022/2555) is an EU-only instrument; a US-PUB-R1 / US-PRIV-R1 / UK-RES / LATAM-PUB / AFR-PUB adopter is bound by no NIS2 article. The asymmetry with the adjacent GDPR treatment makes this a genuine, non-hedged locality-as-universal assertion (not a labelled example, not the sovereignty grid, not an external statistic, not \loc-routed).

- **Fix:** Mirror the preceding GDPR sentence pattern: wrap in the generic cybersecurity-baseline regime with NIS2 as a labelled EU example, e.g. 'It contributes to the applicable cybersecurity-baseline regime's business-continuity and secure-development obligations (e.g. NIS2 Art. 21(2)(c) and (e), through declarative redeployability and SLSA-level supply-chain attestations).' If the registry exposes a key such as \loc{cybersecurity-baseline-regime}, route through it.


### `suit-solution/ch27-wave9-lifecycle-EN.tex`

#### GEN-w9aiact53 — MODERATE

- **Location:** `suit-solution/ch27-wave9-lifecycle-EN.tex:257-261 (\section Regulatory anchoring)`
- **Passage:**

  > Under the EU AI Act, Art.~53 (obligations for providers of general-purpose AI models, including model documentation and provenance) is the locus where the wave's lifecycle discipline applies to AI artefacts.

- **Why it is not generic:** Verified in context. The EU AI Act is an EU-only instrument stated as THE universal locus ('is the locus') for AI-artefact lifecycle discipline, with no scoping for non-EU adopters (US-PUB-R1, US-PRIV-R1, UK-RES, LATAM-PUB, AFR-PUB). Unlike the immediately preceding NIS2 clause, which is routed through 'applicable national ... transposition' wording, the AI Act clause carries no 'applicable' hedge, no '\loc{}' routing, and no 'in the EU' label. The suite already provides a \loc{ai-regulation} key ('the adopter's applicable AI-governance regime') precisely for this. A non-EU reader is told an inapplicable statute governs their lifecycle stage.

- **Fix:** Route the AI-governance anchor through \loc{ai-regulation} and present the EU AI Act Art.~53 as a labelled EU example, e.g. 'Under \loc{ai-regulation} (in the EU, Art.~53 of the AI Act for general-purpose AI model providers ...)'.


### `suit-solution/ch28-cross-cutting-EN.tex`

#### GEN-paneuro-fed — MODERATE

- **Location:** `suit-solution/ch28-cross-cutting-EN.tex:116-117 (\S Training and skills development, "Research-network and peer-institution mutualisation")`
- **Passage:**

  > with peer institutions through its pan-European or regional research-network federation

- **Why it is not generic:** "pan-European" names an EU-specific federation family (GEANT-style) and presents it as the primary default mutualisation channel for every adopter ("pan-European or regional"), not as a scoped EU example. A US-PUB-R1, US-PRIV-R1, UK-RES, LATAM-PUB or AFR-PUB institution has no pan-European federation. The surrounding prose already uses the generic role phrase "its national research and education network", and the localization registry (shared/localization-defaults.tex) provides verified jurisdiction-neutral keys (peer-nren-roster = "peer NRENs in comparable jurisdictions...", research-backbone-scale = "the regional research backbone...", nren-name), so the hard-coded continental geography is a non-generic outlier not routed through \loc{}.

- **Fix:** Route the federation context through localization instead of hard-coding a continent. Replace "through its pan-European or regional research-network federation" with "through \loc{peer-nren-roster}" (or add a dedicated key, e.g. \loc{research-network-federation} defaulting to "its regional research-and-education-network federation"), letting an EU edition fill in the pan-European/GEANT specifics. Minimal alternative: drop "pan-European or" and keep the neutral "regional research-network federation".


### `suit-solution/ch32-external-references-EN.tex`

#### GEN-eu-section-anchor-claims — MODERATE

- **Location:** `suit-solution/ch32-external-references-EN.tex:110-130 (European regulatory framework: GDPR, Schrems II)`
- **Passage:**

  > GDPR ... are the principal regulatory anchors of the data dimension of the sovereignty grid. ... the principal anchor of the data-dimension scoring in the sovereignty grid.

- **Why it is not generic:** Verified in context (lines 114-115, 128-130). Despite the 'European regulatory framework' section heading scoping the references as European, the prose asserts that EU-only instruments (GDPR Art.32/25/35; Schrems II C-311/18) ARE 'the principal regulatory anchor' / 'the principal anchor of the data-dimension scoring' of the sovereignty grid as an architectural property, not 'for EU adopters'. The sovereignty grid is core subject (not itself a defect), but pinning its data-dimension scoring to EU-only law is unscoped; US-PRIV/US-PUB/LATAM/AFR adopters score against HIPAA/FERPA/state law, LGPD, POPIA, abstracted as \loc{data-protection-regime} / \loc{cross-border-transfer-regime}.

- **Fix:** Frame the anchoring claim conditionally: 'For adopters under the EU data-protection regime these instruments anchor the data-dimension scoring; the generic data dimension is scored against \loc{data-protection-regime} / \loc{cross-border-transfer-regime}, of which GDPR and Schrems II are the EU instantiation.'

#### GEN-nis2-sovereignty-dimension — MODERATE

- **Location:** `suit-solution/ch32-external-references-EN.tex:117-123 (European regulatory framework: NIS2)`
- **Passage:**

  > NIS2 Directive ... the management-body accountability for security measures (Art.~20), inform the institutional sovereignty dimension and the wave-0 governance discipline.

- **Why it is not generic:** Verified in context (lines 117-123). NIS2 (an EU directive) is stated to 'inform the institutional sovereignty dimension and the wave-0 governance discipline' as a generic architectural property; the informing-of-the-architecture claim is unscoped rather than 'for adopters in NIS2 scope'. Non-EU families (US, LATAM, AFR, post-Brexit UK) derive management-body accountability from a different instrument; the registry abstracts this as \loc{cybersecurity-baseline-regime} / \loc{essential-entity-classification-basis}.

- **Fix:** Scope the claim: 'For adopters in NIS2 scope, the management-body accountability of Art.~20 informs the institutional sovereignty dimension; generically this maps to \loc{cybersecurity-baseline-regime}.' Present NIS2 as the EU instantiation of the baseline-regime role.


### `suit-solution/ch33-regulatory-mapping-EN.tex`

#### GEN-ren-isac — LOW

- **Location:** `suit-solution/ch33-regulatory-mapping-EN.tex:512-514 (ISO 27001 table)`
- **Passage:**

  > A.5.7 Threat intelligence & Observability ingest; integration with REN-ISAC / sectoral feeds

- **Why it is not generic:** REN-ISAC is a specific North-American research-and-education ISAC, named without an example marker inside the ISO/IEC 27001 table. Unlike the GDPR/NIS2/AI-Act/eIDAS2 sections, this table is NOT an EU worked instantiation: the chapter itself (l.649-652) markets ISO/IEC 27001, NIST CSF 2.0 and COBIT 2019 as "adopted worldwide and independent of any single legal regime" and the lead spine for non-EU adopters. Naming REN-ISAC inside a jurisdiction-neutral framework therefore presents one region's R&E ISAC as the universal threat-intel feed; the registry already models this via nren-csirt / national-gov-csirt.

- **Fix:** Generalise to "integration with the relevant R&E ISAC / sectoral threat-intel feeds (e.g. REN-ISAC)" or route via the NREN/CSIRT \loc keys, keeping REN-ISAC as a labelled example.


### `suit-solution/solution-body-EN.tex`

#### GEN-traj-ms-ch04 — MODERATE

- **Location:** `suit-solution/ch04-self-assessment-EN.tex: Table tab:sa-trajectory, lines 323-329`
- **Passage:**

  > Mostly 1--2, with Microsoft technologies dominant in identity, endpoint, and observability ... \textbf{Brownfield Microsoft-centric}, 7--10~year horizon. The most common European starting point; the playbook adds an open policy plane and an open observability collector layer in front of the existing Microsoft estate.

- **Why it is not generic:** VERIFIED non-generic. The self-assessment trajectory matrix carries two compounded defects, confirmed verbatim: (1) it names Microsoft as the universal dominant brownfield vendor in the row label and prose, and (2) it asserts 'The most common European starting point' (line 327) -- an EU-only, unsourced frequency claim baked into a diagnostic instrument intended for every archetype (US/UK/LATAM/AFR). A reader in a non-EU, non-Microsoft family is handed a matrix row that does not describe them plus a Europe-specific market claim with no \cite. Not hedged, not an example, not routed through \loc{} or a category archetype, not a sourced statistic.

- **Fix:** Rename the row to the vendor-neutral trajectory label (consistent with the ch17 fix) and replace 'The most common European starting point' with a jurisdiction-neutral phrase such as 'a common starting point for institutions whose estate is anchored on a single dominant productivity-suite vendor', dropping the EU-specific unsourced frequency assertion or routing any regional qualifier through a category archetype.


## Category-overreach (58)

*A claim true of one institution family (the research-intensive / well-resourced / "world-leading" archetype) is asserted across the whole neutral adopter set, or a single-family characterisation is welded to a universal mechanism.*

### `shared/regulatory-applicability-EN.tex`

#### GEN-ri-univ-spine — MODERATE

- **Location:** `shared/regulatory-applicability-EN.tex:52-55 (intro paragraph, sec:reg-applicability)`
- **Passage:**

  > they are designed against the engineering question of how a research-intensive university can be sovereign at the architectural level

- **Why it is not generic:** Verified in context: this is the framing intro paragraph, not a labelled example, not hedged, and not the sovereignty concept itself. It states 'research-intensive university' as THE design subject of the whole SUIT framework. The suite is institution-neutral and spans six archetypes including teaching-focused / public-administration profiles (LATAM-PUB, AFR-PUB); a reader from those archetypes is told the architecture was designed for a category they are not in. Confirmed that shared/localization-defaults.tex defines \setloc{institution-type}{a typical research-intensive institution}, so this exact descriptor is already a parameterisable Layer-0 default that is NOT being routed through \loc{} here — it is hard-coded in prose. Genuinely non-generic as written.

- **Fix:** Route the institution descriptor through \loc{institution-type} ("...how \loc{institution-type} can be sovereign...") or soften to "a university" / "a modern university" so the design claim is not pinned to one archetype.


### `suit-policy/argumentation/argumentation-policy-body-EN.tex`

#### GEN-q83publicuniversity — HIGH

- **Location:** `suit-policy/argumentation/argumentation-policy-body-EN.tex:692 (Q8.3 answer, sec:q-regulatory)`
- **Passage:**

  > \textbf{Lawful basis.} For a public university, the monitoring, audit and identity processing rests on Article~6(1)(e) --- processing necessary for a task carried out in the public interest ... and, where appropriate, Article~6(1)(f) legitimate interests (network and information security, expressly recognised in Recital~49) ...

- **Why it is not generic:** Verified in context. The opening 'For a public university' partially scopes institution-type, but the data-protection regime is assumed to be GDPR throughout and the analysis does not generalise to the private archetype (US-PRIV-R1, which cannot rely on 6(1)(e)) or to non-GDPR families (US-PUB-R1, LATAM-PUB, AFR-PUB). The institution-type conditional does not cure the regime assumption, and neither is parameterised in the file. The finding survives on the data-protection-regime axis.

- **Fix:** State the GDPR Art.~6(1)(e)/(f) analysis as the EU-PUB-RI instantiation and add the generic shape: 'the controller identifies a lawful basis under its data-protection regime; a public-mission body typically relies on the public-interest task, a private body on legitimate interests / consent', so non-EU and private adopters are covered.

#### GEN-q91researchintensive — MODERATE

- **Location:** `suit-policy/argumentation/argumentation-policy-body-EN.tex:776 (Q9.1 answer, sec:q-costs)`
- **Passage:**

  > The purpose is to demonstrate that the approach is \emph{architecturally sound and appropriate for a research-intensive institution}, not to substitute for a procurement exercise.

- **Why it is not generic:** Verified in context, and cross-checked against Q9.4 (line 826) which explicitly argues the architecture 'degrades to a managed or mutualised realisation as scale decreases' and is 'scalable from a teaching-led to a research-intensive institution'. Q9.1 narrows the document's stated purpose to one archetype ('appropriate for a research-intensive institution'), contradicting the suite's own down-scaling claim. Not hedged, not a labelled example, not \loc{}-routed.

- **Fix:** Generalise: 'architecturally sound and scalable from a teaching-led to a research-intensive institution', consistent with Q9.4, or route through an institution-type key once it exists.


### `suit-policy/companion/companion-body-EN.tex`

#### GEN-keybox-worldleading — MODERATE

- **Location:** `suit-policy/companion/companion-body-EN.tex:39-41 (Key messages box)`
- **Passage:**

  > the approach is validated by world-leading universities, international standards, and EU regulations

- **Why it is not generic:** Verified verbatim at lines 39-41. The clause sits in the Key-messages box with no \loc routing, no example labelling, and no archetype scoping. "world-leading universities" frames the research-intensive, well-resourced family as the validating authority, and "EU regulations" hard-codes the EU jurisdiction as the validating regime in a summary headline. This contradicts the suite's jurisdiction- and family-neutral design: elsewhere the body explicitly treats the EU as a "worked instantiation" and routes the regime through the Regulatory Applicability annex (lines 278-281, 433-436). For a US-PRIV-R1, UK-RES, LATAM-PUB or AFR-PUB adopter neither claim binds. This is not the sovereignty grid, not a sourced external statistic, and not a labelled example.

- **Fix:** Soften to family- and jurisdiction-neutral wording, e.g. "validated by peer research institutions, international standards, and the applicable regulatory framework"; route the regime reference through the Regulatory Applicability annex / \loc{regulatory-regime} rather than naming the EU as universal.

#### GEN-ref-univ-leading — MODERATE

- **Location:** `suit-policy/companion/companion-body-EN.tex:437-441 (Current regulatory and operational context, item 3)`
- **Passage:**

  > Reference universities providing comparable openness: the world's leading research universities provide their researchers with the autonomy and infrastructure described here

- **Why it is not generic:** Verified verbatim at lines 437-441. Generalises the autonomy/infrastructure model from the global research elite as the universal reference comparator, unscoped by \loc and not labelled as an example. The following sentence about \loc{nren-name} addresses national-scale connectivity but does not rescue the "world's leading" comparator framing, which overreaches for UK-RES teaching-led, LATAM-PUB or AFR-PUB adopters whose realistic peers differ and risks reading as aspirational-only rather than minimal-necessary.

- **Fix:** Reframe as "reference research institutions" or scope via \loc (e.g. a peer-set key) so the comparator matches the adopter's family rather than asserting the global elite as universal.

#### GEN-breaches-major-univ — LOW

- **Location:** `suit-policy/companion/companion-body-EN.tex:147-149 (section: Effects of uniform restriction policies)`
- **Passage:**

  > a breach can affect the institution as a whole --- as recent breaches at major research universities have shown

- **Why it is not generic:** Verified verbatim at lines 147-149. Unsourced gestural appeal to "recent breaches at major research universities" presents a research-intensive-archetype anecdote as universal evidence with no citation, in contrast to the properly-sourced alertbox immediately below (lines 167-184) which cites eu-supercomputers-2020 and is clearly labelled. Borderline but genuinely non-generic as written: it generalises from one archetype's incidents and lacks the labelled-example/citation scoping the surrounding sourced material has.

- **Fix:** Either attach a citation and keep the example clearly labelled, or generalise to "as recent breaches in the sector have shown" so it does not assume the major-research-university archetype as the universal case.

#### GEN-charters-leading — LOW

- **Location:** `suit-policy/companion/companion-body-EN.tex:302-303 (section: Governance)`
- **Passage:**

  > Responsibility charters (as practised by leading research universities)

- **Why it is not generic:** Verified verbatim at lines 302-303. Attributes a universally-recommended governance mechanism (responsibility charters, applicable across all archetypes) specifically to "leading research universities," repeating the elite-as-norm framing. Not scoped via \loc, not labelled illustrative. Minor, but it conditions a universal mechanism on a single archetype's practice.

- **Fix:** Generalise to "as practised across research institutions" or drop the parenthetical attribution; the mechanism stands on its own.

#### GEN-cobit-leading-gov — LOW

- **Location:** `suit-policy/companion/companion-body-EN.tex:299-301 (section: Governance, Digital Policy Commission item)`
- **Passage:**

  > aligned with \gls{cobit}~2019's separation of governance ... and with the governance models of leading research universities

- **Why it is not generic:** Verified verbatim at lines 299-301. The COBIT 2019 alignment is generic and fine; the trailing clause "and with the governance models of leading research universities" appends the elite as the universal governance exemplar, unscoped and not labelled as example, overreaching for non-elite adopters.

- **Fix:** Remove the "and with the governance models of leading research universities" clause or soften to "and with established academic-governance practice."


### `suit-policy/main/main-body-EN.tex`

#### GEN-eu-only-regulatory-frame — MODERATE

- **Location:** `suit-policy/main/main-body-EN.tex:509-556 (subsection "The European regulatory landscape")`
- **Passage:**

  > Four European regulatory instruments shape the cybersecurity and data-protection environment of universities ... The architecture of this report is designed to satisfy all four simultaneously.

- **Why it is not generic:** VERIFIED as surviving. The subsection lede generalises to "universities" tout court (line 509-510), and the crimson operational-consequence sentence (555-556) universalises the design claim. The localization registry DOES carry this regime through existing keys --- \loc{cybersecurity-baseline-regime}, \loc{data-protection-regime}, \loc{ai-regulation}, \loc{cross-border-transfer-regime} are defined in shared/localization-defaults.tex (lines 74-77) and bound per-archetype in every categories/*.tex (EU-PUB-RI, US-PUB-R1, US-PRIV-R1, UK-RES, LATAM-PUB, AFR-PUB) --- yet this prose subsection hard-codes the EU GDPR/NIS2/AI-Act/Schrems-II quartet instead of routing through them. The title's word "European" gives only partial scoping; the body still binds non-EU editions to facts that do not apply to them. Note the candidate's claim that the registry "already routes the regime" is correct (the keys exist and are used in the companion); the defect is that THIS subsection bypasses them.

- **Fix:** Scope the subsection title and lede as the EU-archetype instantiation (e.g. "For an adopter in the EU-PUB-RI family, four instruments shape...") or route through the existing \loc{cybersecurity-baseline-regime}/\loc{data-protection-regime}/\loc{ai-regulation}/\loc{cross-border-transfer-regime} keys with the EU quartet as a labelled example, mirroring the NIS2 item which already hedges with "Where the institution's jurisdiction has transposed..." (line 524).

#### GEN-world-leading-norm-claim — MODERATE

- **Location:** `suit-policy/main/main-body-EN.tex:743-745 (subsection "Objectives of this report")`
- **Passage:**

  > Demonstrate through \textbf{concrete examples} that decentralised and segmented architectures are the norm at world-leading universities

- **Why it is not generic:** VERIFIED as surviving. Lines 740-749 state this as a report objective with no hedge or scoping. The reference-panel section (lines 2044-2069) carefully scopes its generalisation on "principles vs.\ implementations" and size-comparability (EPFL ~12,000 students, CERN governance-translatable), but this objective statement asserts a universal norm "at world-leading universities" and is not routed through the panel's selection criteria. The reference class implied (world-leading) misrepresents the suite's neutral-by-design adopter set (UK-RES teaching-led, LATAM-PUB, AFR-PUB).

- **Fix:** Soften to "at a range of research-intensive universities" or "across the reference panel of Section~\ref{sec:exemples}", letting the panel's four selection criteria carry the generalisation rather than asserting a universal norm.

#### GEN-french-jres-proposition — LOW

- **Location:** `suit-policy/main/main-body-EN.tex:3748-3749 (Shared Security Organizations list) and 4108-4110 (Proposition: "Participate in security communities")`
- **Passage:**

  > \textbf{JRES}~\cite{jres}: biennial French conferences on academic networks ... Participate in security communities (REN-ISAC, \gls{geant} Security, \gls{first}, JRES)

- **Why it is not generic:** VERIFIED as surviving. JRES (French academic-network conference) and REN-ISAC (US, NSF-funded) appear inside the report's own actionable shared-services recommendations (enumerated as generic "security communities" a university can join), not in a labelled example survey. They are not scoped as examples-by-family and are not routed through a regional-security-community / \loc key (the \loc{nren-service-catalogue} key exists per-archetype but is not applied to these community lists). For LATAM-PUB / AFR-PUB / non-US adopters JRES and REN-ISAC do not apply, yet they are presented as universal options alongside the appropriately-generic GEANT Security / FIRST / national-CSIRT entries.

- **Fix:** Label the region-specific bodies as examples-by-family ("e.g. REN-ISAC (US), JRES (France)") or route through a \loc{regional-security-community} key so each edition lists its regional community; keep GEANT Security, FIRST and the national/NREN CSIRT (already role-based) as the generic core.


### `suit-policy/policy-EN.tex`

#### GEN-c15size — LOW

- **Location:** `suit-policy/policy-EN.tex:562-565 (Annotated TOC, Ch. 15 Sizing reference points)`
- **Passage:**

  > Ch.~15  Sizing reference points ... Indicative orders of magnitude for a large research-intensive institution; FTE envelopes per layer; scaling levers and breakpoints.

- **Why it is not generic:** The annotated-TOC line anchors the Technical Reference sizing chapter on 'a large research-intensive institution' as the sole archetype, without tying it to the size-invariant minimal-necessary-set principle and without the explicit one-instantiation hedge used for the directly comparable archetype framing at line 632 (Ch.33, where 'research-intensive university' is qualified 'as one worked EU instantiation' and folded into the 'size- and jurisdiction-invariant' anchor). It is not routed through \loc{} or a category archetype, is not a labelled regulatory example, is not the sovereignty grid, and is not a sourced external statistic. While 'indicative orders of magnitude' hedges precision and 'scaling levers and breakpoints' gestures at scalability, the anchor archetype itself is asserted as the large research-intensive case, so an adopter from a smaller or teaching-focused family (LATAM-PUB, AFR-PUB, UK teaching college) can read the sizing guidance as calibrated only for large research institutions. Survives as a genuine, borderline-but-non-refuted LOW finding.

- **Fix:** Align with the size-invariant minimal-necessary-set principle, e.g. 'Indicative orders of magnitude anchored on a large research-intensive profile as one worked instantiation, with scaling levers and breakpoints down to the minimal functional set'; or add a half-clause noting the breakpoints scale down to small institutions. Mirror the Ch.33 'as one worked instantiation' hedge. No \loc{} needed since this paraphrases an external chapter title.


### `suit-solution/abstract-EN.tex`

#### GEN-ri-univ — MODERATE

- **Location:** `suit-solution/abstract-EN.tex:6-8`
- **Passage:**

  > a practitioner-oriented technical reference and migration playbook for research-intensive universities seeking sovereignty over their digital infrastructure

- **Why it is not generic:** Confirmed in context. The opening scope sentence (lines 6-8) binds the document to the research-intensive university archetype as a bare prose phrase, not routed through \loc{} or a category archetype. The suite is designed to generalise across six families (EU-PUB-RI, US-PUB-R1, US-PRIV-R1, UK-RES, LATAM-PUB, AFR-PUB). This directly contradicts the closing sentence (lines 29-32) which asserts the architecture, playbook and mapping 'are designed to generalise across institutions and jurisdictions' and serve an 'international university network'. A reader in a non-research-intensive public family (LATAM-PUB, AFR-PUB) is told up front the reference is not for them. The institution profile is exactly the locality fact the localization layer parameterises. Not an external statistic, labelled example, or the sovereignty concept/grid.

- **Fix:** Route the addressee through the institution-type key, e.g. 'for \loc{institution-type} seeking sovereignty', or broaden to 'for universities and research-performing institutions' so the abstract opening matches the cross-family generalisation claimed in its closing sentence.


### `suit-solution/argumentation/argumentation-solution-EN.tex`

#### GEN-arg-evinst-lived — LOW

- **Location:** `suit-solution/argumentation/argumentation-solution-EN.tex:542-547 (Sec. Brownfield migration, Response O4.1)`
- **Passage:**

  > Coexistence is the lived reality at scale: federated identity overlays a heterogeneous estate at \institution{MIT} and \institution{University of Michigan} ... and \institution{Science DMZ} deployments coexist with the general campus network

- **Why it is not generic:** VERIFIED in context. Science DMZ framing is the core subject (do-not-flag, and correctly excluded from the defect). The named institutions are valid \evinst precedents. The residual defect is the prose 'Coexistence is the lived reality at scale' plus US R1 examples, presenting the research-intensive archetype's brownfield experience as the general adopter reality for a response (O4.1) that addresses whether any 'real university' can migrate. Not refuted: the universal 'lived reality at scale' framing is non-generic as written. LOW because the precedent is labelled and the Science DMZ portion is by-design.

- **Fix:** Qualify the scope: 'Coexistence is the lived reality at research-intensive institutions such as MIT and the University of Michigan' so the precedent stays an example of one archetype.

#### GEN-arg-evinst-mit — LOW

- **Location:** `suit-solution/argumentation/argumentation-solution-EN.tex:353-359 (Sec. Architecture complexity, Response O1.1)`
- **Passage:**

  > Research universities already operate this decomposition in production --- separated identity, network, and storage planes are visible at \institution{MIT} ... \institution{Stanford} ... and \institution{University of Michigan} ... None is a hyperscaler; all operate a layered decomposition along the same functional planes

- **Why it is not generic:** VERIFIED in context. The \evinst citation of MIT/Stanford/Michigan is by-design (front-matter lines 297-298 define \evinst as 'named institutional precedents'), so the citation is not the defect. The defect is the lead-in prose 'Research universities already operate this decomposition' which generalises one archetype (US R1) to the whole research-intensive family and answers an objection framed about 'a university' in general. The closing 'whatever local labels they use' partially hedges, and the clarification box (lines 368-374) scopes instantiation to smaller institutions, so severity stays LOW. Not refuted: the universal 'already operate' framing remains non-generic as written, presenting one archetype's evidence as universal.

- **Fix:** Scope the lead-in to the archetype: 'Research-intensive institutions already operate this decomposition in production --- for example at MIT, Stanford, and the University of Michigan' so the precedent reads as one archetype's illustrative example rather than a universal 'research universities already' claim.

#### GEN-arg-evinst-norm — LOW

- **Location:** `suit-solution/argumentation/argumentation-solution-EN.tex:427-432 (Sec. Open-source coverage gaps, Response O2.1)`
- **Passage:**

  > Mixed open/proprietary endpoint estates are the production norm: research universities run a dedicated Apple-platform suite alongside open configuration management

- **Why it is not generic:** VERIFIED in context. 'are the production norm: research universities run...' states an archetype-specific fleet practice (US R1 examples MIT/Stanford/Michigan named in the citation) as the universal production norm. Endpoint fleet composition varies by archetype; a teaching-led, LATAM-PUB or AFR-PUB institution may have a far smaller or differently-managed fleet. The named institutions are valid \evinst examples, but the 'production norm' prose presents one family as universal. Not refuted: not example-labelled, not \loc-routed, not a sourced statistic.

- **Fix:** Scope to the archetype: 'are the production norm at research-intensive institutions, for example MIT, Stanford, and the University of Michigan' so the named precedents read as labelled examples rather than a universal norm.

#### GEN-arg-renater-restena-lockin — LOW

- **Location:** `suit-solution/argumentation/argumentation-solution-EN.tex:604-607 (Sec. Vendor lock-in, Response O5.1)`
- **Passage:**

  > Multi-vendor, standards-pinned identity federations (\institution{eduGAIN}, \institution{InCommon}, \institution{eduroam}) demonstrate that replaceability through interfaces is an operating reality

- **Why it is not generic:** VERIFIED in context. eduGAIN and eduroam are global interfederations (generic anchor, fine); InCommon is the US-specific federation operator, presented unrouted in a trio framed as the universal demonstration of replaceability. I confirmed \loc{identity-federation-profile} exists in shared/localization-defaults.tex for exactly this exemplar. A LATAM-PUB or AFR-PUB adopter's national federation differs. Kept at LOW (not refuted) because two of three are global and the load-bearing point is the standard interface, not the named federation; but InCommon remains an unparameterised US-specific exemplar presented as universal.

- **Fix:** Keep eduGAIN/eduroam (global) as the generic anchor and present InCommon as a labelled regional example, or route the federation exemplar through \loc{identity-federation-profile}.

#### GEN-arg-renisac-first — LOW

- **Location:** `suit-solution/argumentation/argumentation-solution-EN.tex:721-724 (Sec. Observability, Response O7.1)`
- **Passage:**

  > the sector operates shared trust and incident infrastructure (\institution{REN-ISAC}, \institution{FIRST}) on this basis

- **Why it is not generic:** VERIFIED in context. REN-ISAC is the US higher-education ISAC; FIRST is global. 'the sector operates' shared incident infrastructure via these two presents a partly US-specific arrangement as the universal sector norm. I confirmed matching \loc{nren-csirt} and \loc{national-gov-csirt} keys exist in shared/localization-defaults.tex. Not refuted: REN-ISAC is unparameterised and jurisdiction-bound. LOW because FIRST is genuinely global and the underlying claim (shared incident infrastructure exists) is broadly true.

- **Fix:** Mark REN-ISAC as a regional example ('e.g. REN-ISAC in the US, FIRST globally') or generalise to '\loc{nren-csirt} and sector trust communities such as FIRST' so the claim does not bind a single jurisdiction's ISAC to every adopter.


### `suit-solution/ch02-conceptual-frame-EN.tex`

#### GEN-ec02matrix-osset — LOW

- **Location:** `suit-solution/ch02-conceptual-frame-EN.tex:329-331 (§2.3 Endpoint OS integration matrix)`
- **Passage:**

  > The endpoint operating systems encountered at a typical research-intensive institution have differing capabilities and differing maturity for TAC integration.

- **Why it is not generic:** Verified against shared/localization-defaults.tex:21, which defines \setloc{institution-type}{a typical research-intensive institution} — the passage reproduces this default value verbatim as raw prose instead of routing through \loc{institution-type}. The \loc{} mechanism is demonstrably live in this suite (e.g. \loc{institution-name}, \loc{national-dpa} in suit-solution prose), and the key is rebound per archetype (US-PRIV-R1, AFR-PUB teaching-focused, LATAM-PUB), so an edition for a non-research-intensive family cannot override this hard-coded framing. The claim is unhedged and unscoped as written; this is not the sovereignty concept/grid, not a sourced statistic, and not a labelled example.

- **Fix:** Replace the literal phrase 'a typical research-intensive institution' with \loc{institution-type} so the OS-landscape framing follows the bound archetype rather than being pinned to the research-intensive default.


### `suit-solution/ch03-sovereignty-grid-EN.tex`

#### GEN-24month-biennial — MODERATE

- **Location:** `suit-solution/ch03-sovereignty-grid-EN.tex:262-265 (sec:sg-scoring, score '3 Robust')`
- **Passage:**

  > verified by exercise ... within the last twenty-four months --- a window aligned with the biennial cadence of most internal audit cycles, beyond which operational drift renders an unverified capacity unreliable.

- **Why it is not generic:** Confirmed in context. The twenty-four-month window is fine as a Reference convention, but the justifying clause asserts 'the biennial cadence of most internal audit cycles' as an empirical universal embedded in the normative scoring scale. Audit cadence is institution- and jurisdiction-specific (annual for many public-sector bodies, risk-based elsewhere). It is unsourced, not framed as an example, not hedged, and not routed through any archetype or \loc value; the chapter elsewhere (lines 240-241) explicitly flags such reasoning as 'analytical observation rather than empirical measurement', a hedge conspicuously absent here. Survives.

- **Fix:** Soften to a design choice rather than an empirical universal: e.g. 'within a recent verification window (this Reference adopts twenty-four months by convention, to be aligned with the institution's own audit cadence)'. Optionally expose the window as a tunable constant.

#### GEN-most-universities-mutual-ignorance — LOW

- **Location:** `suit-solution/ch03-sovereignty-grid-EN.tex:454-455 (sec:sg-governance)`
- **Passage:**

  > four governance practices that, in most universities today, are conducted in mutual ignorance.

- **Why it is not generic:** Confirmed in context. 'in most universities today' is an empirical universal quantifier asserted without a source, generalising procurement/audit/operations/governance siloing across all archetypes and jurisdictions where maturity varies. It is not a sourced external statistic, not a labelled example, and not hedged. By contrast lines 240-241 model the correct hedged framing ('analytical observation rather than an empirical measurement'), making this unqualified quantifier a genuine overreach. Survives.

- **Fix:** Soften to a non-quantified observation ('practices that are frequently conducted in mutual ignorance') or attribute it as an analytical observation rather than a measured fact, mirroring the framing at lines 240-241.


### `suit-solution/ch04-self-assessment-EN.tex`

#### GEN-eubrownfield-common — HIGH

- **Location:** `suit-solution/ch04-self-assessment-EN.tex:326-329 (Table tab:sa-trajectory)`
- **Passage:**

  > Brownfield Microsoft-centric, 7--10~year horizon. The most common European starting point

- **Why it is not generic:** Verified in context (table row 323-329). "The most common European starting point" is an unsourced, region-specific (EU) empirical prevalence claim embedded in an otherwise jurisdiction-neutral trajectory matrix that classifies every adopter. It is not routed through \loc{} or a category archetype, is not a sourced external statistic, and is not a labelled example; readers in US/UK/LATAM/AFR families are told the European case is theirs. Non-generic as written.

- **Fix:** Soften to a jurisdiction-neutral condition, e.g. "A common starting point for institutions with a consolidated commercial productivity estate", or route the regional-prevalence claim through a category archetype (categories/<archetype>.tex) so each family states its own typical starting point. If an EU prevalence figure is retained, mark it as a labelled EU-PUB-RI example with a source.

#### GEN-msft-centric-vendor — MODERATE

- **Location:** `suit-solution/ch04-self-assessment-EN.tex:323-329`
- **Passage:**

  > with Microsoft technologies dominant in identity, endpoint, and observability ... Brownfield Microsoft-centric

- **Why it is not generic:** Verified: Microsoft is hard-coded as the defining brownfield trajectory name and profile condition (rows 323-329), in contrast to the parallel hybrid row (331-338) which uses neutral technical conditions (mixed Linux/macOS/Windows, open-source identity component). A single named vendor is the canonical archetype in a vendor-neutral suite; it is not presented as a labelled example and is not routed through \loc{}. Asymmetric and vendor-non-neutral as written.

- **Fix:** Generalise the trajectory label to the role, e.g. "Brownfield commercial-suite-centric" / "brownfield dominant-commercial-incumbent", and present Microsoft (and alternatives such as Google Workspace) as labelled examples of the incumbent rather than the defining vendor; or route the incumbent name through a \loc{} role key. (Note: the candidate's claim that \loc{incumbent-identity-suite-vendor} already exists was not verifiable in this file.)

#### GEN-research-intensive-hybrid — MODERATE

- **Location:** `suit-solution/ch04-self-assessment-EN.tex:334-336`
- **Passage:**

  > Frequent in research-intensive institutions with substantial doctoral and research activity

- **Why it is not generic:** Verified (row 331-338). The brownfield-hybrid trajectory is characterised as a research-intensive-institution phenomenon, even though the actual driving technical condition is already stated in the profile cell (mixed Linux/macOS/Windows estates plus an open-source identity component, 331-332). The institution-type qualifier is an unscoped universal characterisation in the institution-wide classifier, not a labelled example or archetype binding. Teaching-focused, regional, LATAM-PUB or AFR-PUB institutions meeting the same technical condition are excluded by the prose.

- **Fix:** Replace the institution-type qualifier with the technical condition that drives the trajectory, e.g. "Frequent where heterogeneous endpoint estates and at least one open-source identity component already coexist", removing the research-intensive framing or scoping it as one illustrative family.


### `suit-solution/ch05-architectural-principles-EN.tex`

#### GEN-r1typical-scope — MODERATE

- **Location:** `suit-solution/ch05-architectural-principles-EN.tex:376-378 (\S It is not. / What this reference architecture is and is not)`
- **Passage:**

  > Nor is it a deployment specification: sizing (\trchap{ch:sizing}{}) is given as orders of magnitude for a typical R1 institution.

- **Why it is not generic:** Confirmed in context: the same US-only "R1" Carnegie tier is hard-coded in the scope ("It is not") statement of a jurisdiction-neutral architecture, immediately above the paragraph "Why the boundary matters for international generalisation" which asserts transposition across jurisdictions. The string is not \loc{}-routed, not a labelled example, not the sovereignty concept, and not a sourced statistic. A reader in an EU/UK/LATAM/AFR family is handed a US classification as the assumed sizing baseline, contradicting the neutral default \setloc{institution-type}{a typical research-intensive institution} in shared/localization-defaults.tex:21.

- **Fix:** Route through \loc{institution-type} (or repeat the neutral "typical research-intensive institution" wording) so the sizing baseline matches whatever the loaded category archetype defines.

#### GEN-r1typical-sizing — MODERATE

- **Location:** `suit-solution/ch05-architectural-principles-EN.tex:104-106 (\S What is size-invariant, and what scales)`
- **Passage:**

  > the \emph{sizing} (\trchap{ch:sizing}{}, given as orders of magnitude for a typical R1 institution, with a down-scaled profile in \S\ref{sec:sz-downscale})

- **Why it is not generic:** Confirmed in context: the literal string "a typical R1 institution" is hard-coded in the \emph{instantiation/sizing/optional-components} prose with no \loc{} routing and no category-archetype binding. "R1" is the US Carnegie Classification tier for very-high-research-activity doctoral universities; it is meaningful only in the US archetypes (US-PUB-R1 / US-PRIV-R1) and is not a recognised category in EU-PUB-RI, UK-RES, LATAM-PUB or AFR-PUB families. The passage is not a labelled regulatory example, not the sovereignty concept/grid, and not a sourced external statistic, so the design exclusions do not apply. The localization registry at shared/localization-defaults.tex:21 defines exactly this slot: \setloc{institution-type}{a typical research-intensive institution}, confirming the neutral parameterised wording was deliberately provided and is being bypassed here.

- **Fix:** Replace "a typical R1 institution" with \loc{institution-type} (default already binds to "a typical research-intensive institution"), so US editions can render "R1" while other families render their own profile.


### `suit-solution/ch06-identity-EN.tex`

#### GEN-id-office-suite — MODERATE

- **Location:** `suit-solution/ch06-identity-EN.tex:174-196 (Where it adds value / When it is the right choice)`
- **Passage:**

  > integration with the dominant office-and-collaboration suite already present in the majority of universities ... An institution with a mature deployment of the dominant office-and-collaboration suite

- **Why it is not generic:** Confirmed: "the dominant office-and-collaboration suite already present in the majority of universities" (lines 174-176) is an unsourced, unqualified universal-incumbency claim characteristic of one market segment, not all archetypes. No citation accompanies it, so it is not a sourced external statistic; no \loc{} routing or archetype scoping; not a labelled example. Stated as a universal premise it misleads readers in other families about why the commercial alternative is attractive.

- **Fix:** Soften to "an incumbent office-and-collaboration suite, where one is already dominant in the institution" or route the suite identity through a \loc{} key / category archetype; avoid the unqualified "majority of universities" claim or attach a source.

#### GEN-id-staffing-handful — LOW

- **Location:** `suit-solution/ch06-identity-EN.tex:118-128 (Operational considerations)`
- **Passage:**

  > within a small operating team sized to the institution's own staffing profile --- a handful of engineers shared across other duties

- **Why it is not generic:** Confirmed: \loc{staffing-profile} exists (line 23). The clause is already half-scoped ("sized to the institution's own staffing profile") but immediately undercuts that scoping by re-asserting a concrete magnitude, "a handful of engineers shared across other duties", which presumes a research-intensive / well-resourced archetype and does not hold for under-resourced families (LATAM-PUB, AFR-PUB). The concrete count is not routed through \loc{} and is not a labelled example. Survives at LOW because the scoping wrapper is present but contradicted by the hard exemplar.

- **Fix:** Drop the concrete "a handful of engineers" parenthetical and rely on the size-invariant phrasing "sized to the institution's own staffing profile", or route the staffing exemplar through \loc{staffing-profile} so the magnitude is set per archetype.

#### GEN-id-tenyears-hybrid — LOW

- **Location:** `suit-solution/ch06-identity-EN.tex:242-248 (Alternative 2, When it is the right choice)`
- **Passage:**

  > many research-intensive institutions sustain it for ten or more years

- **Why it is not generic:** Confirmed: an unsourced empirical claim asserted as fact at lines 247-248, with a hard "ten or more years" figure and no citation. It is category-bound to the research-intensive family and is not a sourced external statistic (no \cite), not hedged (asserted after a colon as supporting fact), not a labelled example. Readers in other archetypes are given a magnitude they cannot rely on.

- **Fix:** Either attach a source for the longevity claim or soften to a generic durability statement ("the pattern is a stable end-state, not merely a transition") without the specific cohort claim and the "ten or more years" figure.


### `suit-solution/ch07-policy-EN.tex`

#### GEN-po-federated-governance-decades — MODERATE

- **Location:** `suit-solution/ch07-policy-EN.tex:359-360 (section: Common pitfalls / Over-centralisation of policy authoring)`
- **Passage:**

  > The model mirrors the delegation pattern that successful federated IT governance has used over decades across higher-education and research institutions.

- **Why it is not generic:** Re-read in the 'Over-centralisation of policy authoring' pitfallbox (lines 352-361). The sentence asserts as universal historical fact that federated IT governance has been 'successful' and operated 'over decades' 'across higher-education and research institutions'. This is unsourced, uses an unhedged superlative ('successful ... over decades'), and presents one mature-IT-organisation archetype's experience as the universal norm; it is not routed through \loc{} or a category, not a labelled example, and not a sourced statistic. It does not generalise cleanly to younger or less-resourced adopter families (e.g. AFR-PUB, LATAM-PUB). Survives refutation.

- **Fix:** Drop or soften the unsourced superlative and frame as a recommended pattern: e.g. 'mirrors the federated-governance delegation pattern common in mature higher-education and research IT organisations', removing the asserted 'successful ... over decades' historical universal.

#### GEN-po-most-universities-novelty — MODERATE

- **Location:** `suit-solution/ch07-policy-EN.tex:41-44 (section: chapter intro)`
- **Passage:**

  > It is also, for most universities at the time of writing, the most ambitious novelty in this architecture: very few institutions today operate a dedicated policy decision point separate from their applications and identity provider.

- **Why it is not generic:** Re-read in context (lines 41-46) the claim is NOT scoped via \loc{} or a category archetype, is not a labelled example, and is not a sourced statistic. The substantive empirical assertion -- 'very few institutions today operate a dedicated policy decision point separate from their applications and identity provider' -- is presented as a blanket fact about the entire adopter universe. The partial hedge 'at the time of writing' qualifies timing but not scope, and 'very few' is itself an unsourced universal generalisation. The phrase 'for most universities' also silently narrows the neutral adopter set (which includes non-university public/research bodies per the SUIT families) to universities. A US-PRIV-R1 or large EU-PUB-RI adopter that already runs an authorization platform is mis-described. Survives refutation: genuinely non-generic as written.

- **Fix:** Soften to a scoped claim ('for many adopters, particularly those without a dedicated platform-engineering function, this is the most ambitious novelty...') or cite a sourced sector statistic. Replace 'most universities' with a neutral adopter role phrase (\loc{institution-type} / 'most adopters') so non-university families are not excluded.

#### GEN-po-d75-most-universities — LOW

- **Location:** `suit-solution/ch07-policy-EN.tex:17 (header decision-registry comment)`
- **Passage:**

  > D7.5 the policy plane is the most ambitious novelty for most universities

- **Why it is not generic:** Re-read at line 17: this is a build/decision-registry comment (not reader-facing prose) that mirrors the body claim and propagates the same 'universities' category narrowing of the otherwise neutral adopter set. Not routed through \loc{} or a category. Non-load-bearing because it is a comment, hence LOW, but it remains a maintained artifact that should track the softened body wording. Retained at LOW.

- **Fix:** Align with the softened body wording; use 'adopters' rather than 'universities'. Cosmetic (comment), hence LOW.


### `suit-solution/ch10-storage-EN.tex`

#### GEN-st-eudat-eu — MODERATE

- **Location:** `suit-solution/ch10-storage-EN.tex:138-155 (realworldbox 'Research storage precedents')`
- **Passage:**

  > European research institutions participate in the EUDAT Collaborative Data Infrastructure (EUDAT CDI), whose B2 services suite ... operates across a network of more than twenty research and computing centres in over a dozen European nations.

- **Why it is not generic:** Verified in context (lines 138-155). The realworldbox is the storage layer's only set of 'precedents', and both exemplars (CERN EOS, EUDAT CDI) are EU/European research-computing references; EUDAT is explicitly bound to 'European nations'. The closing caveat (lines 149-154) only addresses scale transfer ('design lessons rather than direct templates' because relative teaching/admin/research proportions differ), not jurisdictional/family neutrality. For a non-EU adopter (US-PUB-R1, US-PRIV-R1, UK-RES, LATAM-PUB, AFR-PUB) this presents EU-specific infrastructure as the universal precedent set, with no parallel exemplar from another family and no \loc{}/archetype parameterisation. Not refuted: not scoped to an archetype, not routed through \loc, and the hedge present does not cover the neutrality axis.

- **Fix:** Either explicitly scope the box as a European-research-computing example (label it as one archetype's precedent), or add/parameterise a second non-EU exemplar (e.g. via a category archetype note) so adopters in US/UK/LATAM/AFR families see a representative precedent rather than EU infrastructure presented as universal.


### `suit-solution/ch11-endpoint-EN.tex`

#### GEN-staffenv-ri — MODERATE

- **Location:** `suit-solution/ch11-endpoint-EN.tex:129-135 (\paragraph{Operational considerations.})`
- **Passage:**

  > The indicative staffing envelope set in the institution's adopted resourcing profile for a research-intensive institution spreads a small group of engineers across the OS-specific operations, with one engineer-equivalent dedicated to the unified posture schema

- **Why it is not generic:** Verified at lines 130-135: the staffing envelope is hard-wired to "the institution's adopted resourcing profile for a research-intensive institution". This phrase is NOT routed through \loc{} and is not a category archetype binding; it literally fixes the research-intensive archetype in prose. The localization registry is designed to parameterise exactly this (\loc{staffing-profile} / \loc{institution-type}) so the engineer-equivalent figure tracks the adopter's family (LATAM-PUB, AFR-PUB, US-PRIV-R1, etc.). As written, a non-research-intensive adopter is handed a head-count that does not bind their context. Genuinely non-generic; survives refutation.

- **Fix:** Route the profile through the localization key: replace "the institution's adopted resourcing profile for a research-intensive institution" with "\loc{staffing-profile}" (or "the resourcing profile of \loc{institution-type}"), so the engineer-equivalent figure scales with the adopter's archetype rather than assuming research-intensive.


### `suit-solution/ch12-observability-EN.tex`

#### GEN-ob-most-eu-univ — MODERATE

- **Location:** `suit-solution/ch12-observability-EN.tex:278-281 (\S sec:ob-alt2, "Where it adds value")`
- **Passage:**

  > Tight integration with the Microsoft estate that is already present at most European universities

- **Why it is not generic:** Verified in context: in Alternative 2 (Microsoft Sentinel), the "Where it adds value" paragraph asserts as universal fact that a Microsoft estate is "already present at most European universities." This is an unhedged, unsourced empirical prevalence claim that hard-codes the EU public/research family as the baseline. It is not routed through \loc{}, not a category archetype binding, not a labelled example, not a sourced external statistic, and not the sovereignty concept. The parallel Alternative 1 (Splunk) deliberately avoids any jurisdiction qualifier ("institutions with mature Splunk operations"), confirming this is an outlier. For US-PRIV-R1, UK-RES, LATAM-PUB or AFR-PUB adopters the framing is neither established nor relevant.

- **Fix:** Generalise the estate-prevalence claim, e.g. "Tight integration with a Microsoft estate where one is already present," dropping the "most European universities" universal assertion; or condition it on the archetype via the institution-type binding rather than asserting the EU family as the universal baseline.


### `suit-solution/ch14-orchestration-EN.tex`

#### GEN-or-r1-envelope — MODERATE

- **Location:** `suit-solution/ch14-orchestration-EN.tex:120-124 (\paragraph{Operational considerations.})`
- **Passage:**

  > An indicative envelope, for an R1 institution, would be on the order of two to four engineers shared with the platform-engineering function.

- **Why it is not generic:** Verified non-generic as written. "R1" is the US Carnegie research-classification label, not one of the six SUIT archetype families (EU-PUB-RI, US-PUB-R1, US-PRIV-R1, UK-RES, LATAM-PUB, AFR-PUB), and it is not routed through any \loc{} key — confirmed by reading the exact passage (it uses the bare string "for an R1 institution", not \loc{institution-type} or \loc{staffing-profile}). Both keys exist in shared/localization-defaults.tex (line 21: institution-type = "a typical research-intensive institution"; line 23: staffing-profile), so a parameterised alternative is available and is the suite's intended idiom. The figure is framed as "An indicative envelope" (a baseline staffing number), not hedged as archetype-conditional or labelled as an example. The dominant neutral phrasing everywhere else in suit-solution (ch08, ch11, ch12, ch15, etc.) is "research-intensive institution"; only ch05 and this ch14 line carry the US-only "R1" label, confirming it as an inconsistent jurisdiction-anchored leak. A reader in an EU, UK, LATAM or African institution is given a universal-looking staffing figure pinned to a classification that does not exist in their jurisdiction. Not the sovereignty concept/grid, not a sourced external statistic, not a regulatory example, not the size-invariant minimal-necessary-set principle.

- **Fix:** Replace "for an R1 institution" with the parameterised \loc{institution-type} (or \loc{staffing-profile}) phrasing, or scope it explicitly as an example for a research-intensive archetype (e.g. "for a research-intensive institution of the kind characterised in \loc{institution-type}, ..."), so the figure reads as archetype-conditional rather than universal.


### `suit-solution/ch16-conformance-EN.tex`

#### GEN-cadence-annual — LOW

- **Location:** `suit-solution/ch16-conformance-EN.tex:184-185 (\S How to run a conformance day, Cadence paragraph)`
- **Passage:**

  > The full suite is exercised at minimum once per year.

- **Why it is not generic:** Confirmed: the cadence is stated at the point of declaration as an unqualified universal floor ("at minimum once per year") covering "the full suite". The down-scaled / managed-service carve-out exists only later, in the reporting section (lines 227-233), and is not attached to this cadence sentence. A down-scaled or teaching-led adopter that consumes most layers as managed or mutualised services answers replaceability via provider exit terms rather than self-run tests (acknowledged at lines 230-233), so a fixed annual floor for the full suite over-reaches the neutral family set. The value is not a sourced statistic and is not scoped via \loc.

- **Fix:** Soften to a recommended default scoped to self-operated layers, e.g. "For layers the institution operates itself, the full applicable suite is exercised at a regular cadence (a yearly minimum is a reasonable default for a research-intensive operator); a down-scaled adopter sets the cadence in proportion to the layers it self-operates."

#### GEN-intl-network — LOW

- **Location:** `suit-solution/ch16-conformance-EN.tex:272-274 (\S Linkage with wave closure, closing paragraph)`
- **Passage:**

  > becomes an artefact that the institution can share with peers in the international network anticipated by this Reference.

- **Why it is not generic:** Confirmed in context: the closing sentence presumes "the international network anticipated by this Reference" as a given framing. While "can share" hedges the action as optional, the definite-article reference to a single anticipated international peer network bakes in a non-neutral, EU-research-network-flavoured assumption that does not hold uniformly for LATAM-PUB, AFR-PUB or US-PRIV-R1 adopters. It is not routed through any \loc/network key or category archetype and is not a sourced statistic; it is mildly aspirational rather than misleading, hence LOW.

- **Fix:** Soften to an optional, archetype-neutral benefit, e.g. "and, where the institution participates in a peer or research-network community, an artefact it can share with peers"; or route the network framing through an existing \loc{peer-network} key so it matches the active category archetype.


### `suit-solution/ch18-wave0-foundations-EN.tex`

#### GEN-w0reg-eu — MODERATE

- **Location:** `suit-solution/ch18-wave0-foundations-EN.tex:224-238 (§ Regulatory anchoring)`
- **Passage:**

  > the management-body-accountability obligation of the applicable national NIS2 transposition ... and of \gls{gdpr}~Art.~24 (controller responsibility)

- **Why it is not generic:** VERIFIED non-generic. The target file contains zero \loc{} usage. In the Regulatory-anchoring section, NIS2 is correctly wrapped as 'the applicable national NIS2 transposition' (the NIS2 article number trailing as a labelled 'corresponding to' example), but GDPR Art. 24 (controller responsibility) is named directly as a co-equal governance anchor with NO \loc{} routing and NO baseline/equivalent hedge. The suite's own localization-defaults.tex already defines the keys data-protection-regime ('the institution's applicable data-protection regime') and cybersecurity-baseline-regime, and localization-guide-EN.tex:237 explicitly prescribes framing anchors as 'the institution's applicable data-protection... regime, giving GDPR/NIS2/eIDAS as the worked instantiation'. The companion shared/regulatory-applicability-EN.tex:79 already follows this convention ('GDPR Art. 32 in the baseline; an equivalent exists in every...'). For the US-PRIV-R1, US-PUB-R1, LATAM-PUB, AFR-PUB families there is no GDPR controller-responsibility duty. The bare GDPR Art. 24 naming is therefore an internally inconsistent EU overreach, not a labelled example and not hedged.

- **Fix:** Route the data-protection anchor through \loc{data-protection-regime} and demote the GDPR article to a labelled instantiation, mirroring the existing convention: e.g. '...and of the controller-responsibility duty of \loc{data-protection-regime} (GDPR Art. 24 in the EU baseline; an equivalent exists in most regimes), when read at institutional level.' Defer full per-regime detail to \trchap{ch:regulatory-mapping}. The EU/CoE default in localization-defaults.tex keeps the EU edition rendering unchanged.


### `suit-solution/ch19-wave1-identity-EN.tex`

#### GEN-w1ms-vendor-prose — HIGH

- **Location:** `suit-solution/ch19-wave1-identity-EN.tex:132-178 (\S sec:w1-brownfield-ms)`
- **Passage:**

  > For the most common brownfield position --- an institution whose identity layer already runs on the cloud identity service of a dominant office-productivity suite vendor --- Wave~1 is the wave in which the institution's relationship with that incumbent proprietary identity suite is restructured rather than replaced.

- **Why it is not generic:** The brownfield section title is already genericised to "incumbent proprietary identity suite" (no vendor named), but the body frames a single archetype --- an institution on "the cloud identity service of a dominant office-productivity suite vendor" with "proprietary conditional-access expressions" and an "office-productivity estate" --- as "the most common brownfield position" for every adopter. The defining vendor-estate role is asserted in prose rather than routed through a \loc{} key or category archetype, so a US-PRIV-R1, LATAM-PUB or AFR-PUB adopter on a different incumbent (e.g. an in-house LDAP or another federation stack) reads the office-productivity-suite case as the default brownfield path. NOTE: the original candidate over-attributed this to Entra/Microsoft 365 by name; the file never names a vendor --- the surviving defect is the unhedged "most common" + single-archetype framing and the un-parameterised vendor/estate role, not a literal vendor name.

- **Fix:** Soften "the most common brownfield position" to "a common brownfield position"; route the vendor/estate role through a \loc{} key (e.g. \loc{incumbent-identity-suite-vendor}) and a category archetype so editions on other incumbents read correctly; present the office-productivity-suite + conditional-access specifics as one illustrative archetype rather than the assumed estate for all adopters.


### `suit-solution/ch21-wave3-network-EN.tex`

#### GEN-w3pre-byod — LOW

- **Location:** `suit-solution/ch21-wave3-network-EN.tex:75-76 (\section{Pre-requisites})`
- **Passage:**

  > with sufficient address space for the planned research and BYOD growth

- **Why it is not generic:** Verified non-generic as written. The phrase appears once in the chapter, is not routed through \loc{}, is not hedged with 'as applicable' or 'e.g.', and is not bound to a category archetype. In a Pre-requisites section meant to apply to every adopter, it hard-codes 'research and BYOD growth' as THE address-space sizing drivers, presenting a research-intensive / BYOD profile as the universal planning assumption. A teaching-focused, AFR-PUB or LATAM-PUB adopter may have neither significant research growth nor a BYOD program as its dominant driver. Refutation criteria do not apply: no \loc{} scoping, no archetype binding, not a labelled example, not a sourced statistic, not the sovereignty grid/minimal-necessary-set, and not already hedged.

- **Fix:** Soften to growth drivers in general, e.g. 'with sufficient address space for the institution's planned growth (research, BYOD, IoT, or other drivers as applicable)', so the example drivers read as illustrative rather than mandatory.


### `suit-solution/ch25-wave7-audit-ir-EN.tex`

#### GEN-w7nis2univ — HIGH

- **Location:** `suit-solution/ch25-wave7-audit-ir-EN.tex:273-277 (\S Regulatory anchoring)`
- **Passage:**

  > It is the principal anchor of the applicable national cybersecurity baseline regime (the national NIS2 transposition, NIS2~Art.~23: incident reporting --- 24-hour early warning, 72-hour notification, one-month final report)

- **Why it is not generic:** Confirmed genuine. The localization key \loc{cybersecurity-baseline-regime} exists with a jurisdiction-neutral default ('the applicable supranational and national legal framework', localization-defaults.tex:74) and the EU-PUB-RI archetype already binds it to the NIS2 text (categories/eu-pub-ri.tex:105). The wave-chapter prose nonetheless hard-codes 'the national NIS2 transposition' plus the precise EU-only 24h/72h/one-month timeline directly in running text, not routed through \loc and not labelled as an EU example. The same paragraph uses \loc{national-dpa} (line 279), proving the author knows the mechanism but bypassed it for the NIS2 content. A US-PUB-R1/US-PRIV-R1/LATAM-PUB/AFR-PUB/UK-RES edition is bound by no NIS2 obligation, so a non-EU reader is told their wave anchors a regime they do not have. Not the sovereignty grid, not an external statistic, not a labelled example, not hedged.

- **Fix:** Route the regime through \loc{cybersecurity-baseline-regime} / \loc{nis2-national-transposition}, and present the Art.~23 article + 24h/72h/one-month timeline as a clearly-labelled EU example (e.g. 'in EU jurisdictions, e.g. NIS2~Art.~23 ...') or push the EU-specific article/timeline mapping into the EU-PUB-RI archetype so non-EU editions render their own baseline.

#### GEN-w7nis2art21 — MODERATE

- **Location:** `suit-solution/ch25-wave7-audit-ir-EN.tex:282-285 (\S Regulatory anchoring)`
- **Passage:**

  > The wave also operationalises the same regime's incident-handling and effectiveness-assessment duties (NIS2~Art.~21(2)(b) and Art.~21(2)(f), the latter through audit-replay exercises).

- **Why it is not generic:** Confirmed genuine, same EU-only dependency as GEN-w7nis2univ. Art.~21(2)(b)/(f) are EU directive provisions stated as duties 'the wave operationalises' in running prose, with no EU scoping, no \loc routing, and no example label, while neutral \loc{cybersecurity-baseline-regime} and an EU archetype binding both exist. Non-EU families have no NIS2 Art.~21.

- **Fix:** Make conditional on the EU-PUB-RI archetype or wrap as a labelled EU example alongside \loc{cybersecurity-baseline-regime}, consistent with the GEN-w7nis2univ fix.


### `suit-solution/ch26-wave8-workload-EN.tex`

#### GEN-w8reg-iso-anchor — LOW

- **Location:** `suit-solution/ch26-wave8-workload-EN.tex:273-275 (\section Regulatory anchoring)`
- **Passage:**

  > The wave is the principal anchor of 27001~A.8.32 (change management) at scale and contributes to NIST CSF \textsf{PROTECT} (PR.PS) and \textsf{RECOVER} (RC.RP).

- **Why it is not generic:** Confirmed in context. ISO/IEC 27001 A.8.32 and NIST CSF function/category codes are voluntary, elective frameworks whose adoption varies by archetype (NIST CSF is predominantly a US-family reference; ISO 27001 certification is opt-in). The clause states them as unconditional properties of the wave ('is the principal anchor of 27001 A.8.32 at scale'), while the GDPR clause in the same section is scoped with 'e.g.'. This is a real, un-hedged framework-adoption assumption rather than a labelled example or the sovereignty concept. Severity LOW because these are voluntary standards (not jurisdiction-binding regulation) and detailed cross-references already live in \trchap{ch:regulatory-mapping}.

- **Fix:** Make adoption conditional, e.g. 'Where the institution adopts ISO/IEC 27001 it is the principal anchor of A.8.32 (change management) at scale; for NIST CSF adopters it contributes to PROTECT (PR.PS) and RECOVER (RC.RP).' Keep the per-wave prose framework-neutral and let \trchap{ch:regulatory-mapping} carry the detail.


### `suit-solution/ch30-coexistence-patterns-EN.tex`

#### GEN-eduroam-pattern — MODERATE

- **Location:** `suit-solution/ch30-coexistence-patterns-EN.tex:178-202 (section \sec{cp-eduroam-tac})`
- **Passage:**

  > Pattern: eduroam <-> TAC-aware Wi-Fi ... The pattern in which the institution's eduroam participation continues for inter-institutional roaming while a TAC-aware RADIUS attachment governs intra-institutional connections.

- **Why it is not generic:** Confirmed in context. The chapter explicitly states (lines 17-20) that patterns are described 'at the level of operational principle rather than at the level of specific tooling'. The five sibling patterns honour this: every commercial product and incumbent service is abstracted to a generic role phrase ('incumbent enterprise directory', 'per-volume-priced commercial SIEM', 'incumbent commercial hypervisor', 'enterprise storage array', 'open-source distributed storage'). eduroam is the lone hard-coded named external service, and 'the institution's eduroam participation continues' presumes every adopter participates in eduroam / has an NREN identity interfederation. True for EU-PUB-RI / UK-RES, an assumption for some private or non-NREN adopters in other archetype families. It is not a sourced statistic, not a labelled example, not the sovereignty grid, and not routed through \loc.

- **Fix:** Route the roaming service through an NREN-service \loc key (reuse \loc{nren-service-catalogue}'s federated-Wi-Fi role or add a 'federated-roaming-service' key whose generic default is 'the research/education-network federated roaming service (e.g. eduroam)'). Keep 'eduroam' only as a parenthetical labelled example, and soften 'the institution's eduroam participation' to 'the institution's federated-roaming participation, where it participates'.

#### GEN-eduroam-profile-inviolate — LOW

- **Location:** `suit-solution/ch30-coexistence-patterns-EN.tex:193-197 (paragraph 'Attribute schema preservation')`
- **Passage:**

  > The eduroam technical profile is treated as inviolate: extending it with institution-specific attributes for inter-institutional sessions would break federation.

- **Why it is not generic:** Confirmed. Restates the universal-eduroam assumption at the attribute level as an unconditional rule. The constraint binds only adopters that actually federate via eduroam / an interfederation; stated here with no hedge ('where used'). Distinct sentence-level instance, not covered by fixing the title alone.

- **Fix:** Phrase against the generic interfederation profile (\loc{identity-federation-profile}) with eduroam as the example, e.g. 'The federated-roaming technical profile (eduroam, where used) is treated as inviolate ...'.


### `suit-solution/ch31-institutional-precedents-EN.tex`

#### GEN-ip-shared-service-eu-nrens — MODERATE

- **Location:** `suit-solution/ch31-institutional-precedents-EN.tex:264-280 (\paragraph{The shared-service channel})`
- **Passage:**

  > national networks are mandated accordingly, a mandate documented for national operators across the region~\cite{restena,dfn,switch-nren} ... the regional research-network backbone carries the same primitives across borders~\cite{geant}

- **Why it is not generic:** Verified against lines 264-280. The universal claim ('A national research and education network exists to serve its country's entire research and education community... national networks are mandated accordingly') is evidenced exclusively by EU operators: RESTENA (Luxembourg), DFN (Germany), SWITCH (Switzerland) and GEANT (the European backbone). 'Across the region' silently means the EU, and the 'regional research-network backbone ... \cite{geant}' is a bare, unparameterised European interconnect presented as holding for every adopter. The citations are not labelled as a regional example and the backbone is not routed through \loc{}. A US-PUB-R1, UK-RES, LATAM-PUB or AFR-PUB reader is given EU-only precedent for a claimed-universal mandate with no regional analogue.

- **Fix:** Mark the citations as a labelled regional example ('documented for European national operators, e.g.~\cite{restena,dfn,switch-nren}; comparable mandates exist in other regions') and replace the bare 'the regional research-network backbone ... \cite{geant}' with a parameterised \loc{} key (e.g. \loc{research-backbone-scale} / \loc{nren-name}) so each edition supplies its own backbone, citing GEANT only as the EU instance.

#### GEN-ip-educause-filter — LOW

- **Location:** `suit-solution/ch31-institutional-precedents-EN.tex:44-47 (\section{Method})`
- **Passage:**

  > appearance in research-and-education-network community fora and at EDUCAUSE in recent publications

- **Why it is not generic:** Verified against lines 44-47. EDUCAUSE, a North-America-centric higher-education association, is named as a standing methodological filter alongside the otherwise generic 'research-and-education-network community fora'. It is not scoped as a regional example, not routed through \loc{} or a category archetype, and not hedged. The catalogue's evidentiary base therefore reads as universal but its named venue is regional, tilting it toward the US/EDUCAUSE world for every reader (a LATAM-PUB, AFR-PUB or Asia-Pacific adopter has different community venues).

- **Fix:** Scope EDUCAUSE explicitly as a regional example ('regional higher-education associations such as EDUCAUSE in North America') or generalise to 'regional higher-education and research-network associations', leaving EDUCAUSE as one illustrative instance rather than a universal filter.

#### GEN-ip-jisc-guidance — LOW

- **Location:** `suit-solution/ch31-institutional-precedents-EN.tex:282-287 (\paragraph{Implication for the catalogue})`
- **Passage:**

  > sector-guidance bodies already document these patterns for institutions across the size range~\cite{jisc-guidance}

- **Why it is not generic:** Verified against lines 282-287. The claim is universal ('sector-guidance bodies already document these patterns') but the sole evidence is Jisc, the UK sector body. Jisc is not labelled as a regional instance, not hedged, and not parameterised. For a non-UK adopter a single-jurisdiction body is presented as the proof of a generic 'sector-guidance bodies' claim.

- **Fix:** Frame Jisc as one labelled regional instance ('sector-guidance bodies such as Jisc in the UK~\cite{jisc-guidance}, and their regional analogues elsewhere') so the universal claim does not rest on a single-jurisdiction body.


### `suit-solution/ch32-external-references-EN.tex`

#### GEN-edu-na-precedent — MODERATE

- **Location:** `suit-solution/ch32-external-references-EN.tex:153-158 (Sector publications)`
- **Passage:**

  > EDUCAUSE ... The principal venue for higher-education IT discussion in North America. Top 10 IT issues, governance case material ... inform several of the institutional-precedent claims

- **Why it is not generic:** Verified in context (lines 153-158). Although EDUCAUSE itself is described as a North-America venue, its Top 10 and governance material is presented as an unscoped generic input to the architecture's institutional-precedent claims, with no signpost to the equivalent sector body other families rely on (e.g. UCISA in the UK, regional consortia for LATAM-PUB/AFR-PUB/EU-PUB-RI). The geographic label scopes the organisation, not the precedent-base claim, biasing the precedent base toward one family.

- **Fix:** Scope the precedent input as an example: 'In North-American higher education, EDUCAUSE is a principal venue ...; equivalent sector bodies (e.g.\ UCISA in the UK, regional consortia elsewhere) play the analogous role in other jurisdictions.' Optionally route the sector-venue role through a \loc{} key or category archetype.

#### GEN-renisac-rne — LOW

- **Location:** `suit-solution/ch32-external-references-EN.tex:160-163 (Sector publications)`
- **Passage:**

  > REN-ISAC ... The Research and Education Networks Information Sharing and Analysis Center provides incident-response intelligence and coordination patterns referenced in

- **Why it is not generic:** Verified in context (lines 160-163). REN-ISAC (a US/North-America R&E ISAC) is named with NO geographic scoping at all -- unlike the adjacent EDUCAUSE entry -- and presented as the generic source of the IR intelligence and coordination patterns the architecture references. The localization registry already abstracts this role via \loc{nren-csirt} / \loc{national-gov-csirt}, so other families have a regional NREN CSIRT / sector ISAC.

- **Fix:** Add a scoping clause ('in the North-American context; the analogous role elsewhere is the regional NREN CSIRT, see \loc{nren-csirt}') or present REN-ISAC as one labelled exemplar of a research-and-education ISAC.


### `suit-solution/ch33-regulatory-mapping-EN.tex`

#### GEN-phase2-network — LOW

- **Location:** `suit-solution/ch33-regulatory-mapping-EN.tex:717-720 (national-transposition note)`
- **Passage:**

  > The phase-2 international university network is the natural locus for sharing transposition notes and harmonising the practical interpretation of the framework above.

- **Why it is not generic:** Confirmed in-file: the sentence asserts unconditionally ("is the natural locus") that a specific programmatic construct, "the phase-2 international university network", is the shared locus for every adopter. It is not hedged, not example-scoped, and not routed through any locality mechanism. An institution adopting the Reference standalone, or one in any archetype family not party to such a network, has no "phase-2 network"; the claim presumes a roadmap that is not universal.

- **Fix:** Soften to a conditional/generic: "Where adopters cooperate (for example through an international university network), that forum is a natural locus for sharing transposition notes...", scoping it as an optional collaboration pattern rather than an assumed shared body.


### `suit-solution/reading-guide-EN.tex`

#### GEN-dporeg33 — LOW

- **Location:** `suit-solution/reading-guide-EN.tex:69-71 (audience table, Data-protection officer row)`
- **Passage:**

  > Ch.~33 \S33.2 (GDPR), \S33.5 (Schrems~II), \S33.10 (national transpositions).

- **Why it is not generic:** VERIFIED at lines 68-71: the DPO reading path hard-codes EU-specific instruments (GDPR \S33.2, Schrems II \S33.5) as the universal parenthetical labels of the regulatory-mapping sub-sections, not as a labelled EU example. The data-protection and cross-border-transfer regimes ARE parameterised: shared/localization-defaults.tex:75,78 define neutral \loc{data-protection-regime}/\loc{cross-border-transfer-regime} defaults, and category archetypes bind genuinely different regimes (US-PUB-R1.tex:109 -> FERPA/HIPAA/CCPA + export-control; LATAM-PUB.tex:107 -> LGPD; UK-RES.tex:127 -> UK GDPR/DPA 2018). The reading-guide file contains no \loc{} routing for these instruments, so a DPO at a US-PRIV-R1, US-PUB-R1, UK-RES, LATAM-PUB or AFR-PUB adopter is pointed at GDPR/Schrems II sections that do not anchor their regime. Not the sovereignty grid, not a sourced statistic, not a labelled example, not hedged.

- **Fix:** Soften the parenthetical to a regime-neutral gloss, e.g. 'Ch.~33 (regulatory mapping: data-protection, cross-border transfer, and national transposition sections)', or route the named instruments through \loc{data-protection-regime}/\loc{cross-border-transfer-regime} so each edition shows its own anchors while the generic default stays neutral. Keep GDPR/Schrems II only as a labelled example for the EU edition.


### `suit-solution/solution-body-EN.tex`

#### GEN-traj-entra-ch23 — HIGH

- **Location:** `suit-solution/ch23-wave5-pilot-EN.tex:193-197 (\S Trajectories, consolidated)`
- **Passage:**

  > \textbf{Brownfield Microsoft-centric.} The pilot operates against the institution's existing Entra-based identity and Microsoft~365 estate, with policy decisions evaluated by the Wave~4 OPA deployment. Integration testing focuses on the Entra-to-OPA decision chain.

- **Why it is not generic:** VERIFIED non-generic. The pilot-wave trajectory bullet hard-codes Microsoft Entra and Microsoft 365 as the concrete substrate every brownfield adopter exercises, and names the integration test 'the Entra-to-OPA decision chain' as if universal -- confirmed verbatim. There is no 'for example' hedge, no \loc{}, no category-archetype routing; the vendor product names appear directly in the prose as the definition of the test. A non-Microsoft brownfield adopter (Google Workspace + OPA, Okta + OPA) is told to test a chain that does not exist in their estate. This is the most concrete vendor-lock instance of the trajectory-label defect -- it has moved past the label into product-named prose.

- **Fix:** Replace 'Entra-based identity and Microsoft~365 estate' with the suite's neutral wording, e.g. 'the institution's incumbent proprietary identity suite and office-productivity estate', and 'Entra-to-OPA decision chain' with 'incumbent-IdP-to-policy-plane decision chain'. Cite Entra/M365 only as a parenthetical labelled example.

#### GEN-traj-ms-label — HIGH

- **Location:** `suit-solution/ch17-playbook-reading-EN.tex:110-118 (\S Vocabulary, Trajectory) and Table tab:pr-trajectory-detail line 217`
- **Passage:**

  > \emph{greenfield}, \emph{brownfield Microsoft-centric}, \emph{brownfield hybrid} ... Each wave chapter develops the three principal trajectories (greenfield, brownfield Microsoft-centric, brownfield hybrid) in detail

- **Why it is not generic:** VERIFIED non-generic. The canonical trajectory taxonomy in the Vocabulary section names one of the five universal migration paths 'brownfield Microsoft-centric', and Table tab:pr-trajectory-detail (line 217) describes it as 'The most common starting point for institutions of the adopting institution's type' with the prose 'in front of the existing Microsoft estate; the Microsoft estate evolves at its own renewal pace'. The single vendor is hard-coded as the name of the universal brownfield archetype, binding on every adopter (US-PRIV-R1, UK-RES, LATAM-PUB, AFR-PUB) whose dominant incumbent may be Google Workspace, Oracle, or a public-cloud provider. The suite is demonstrably mid-refactor on exactly this label: a cross-chapter survey confirms ch22 already renamed it 'brownfield single-suite-centric' (line 125), ch24 'brownfield single-vendor' (line 123), ch26 'brownfield dominant-suite-centric' (line 136), while ch17/ch04/ch18/ch20/ch21/ch23/ch25/ch27 still carry the Microsoft-named form. This is a residual artefact, NOT a deliberate design constant, and is not the sovereignty grid/concept, not a sourced statistic, not routed through \loc{} or a category archetype.

- **Fix:** Rename the trajectory throughout the taxonomy (ch17 Vocabulary item + Table tab:pr-trajectory-detail line 217) to the vendor-neutral form the suite already adopted elsewhere, e.g. 'brownfield single-suite-centric' / 'brownfield dominant-suite-centric'. Treat Microsoft only as a labelled example of a dominant suite. As the canonical definition point, fixing it here propagates to the residual uses in ch04, ch18, ch20, ch21, ch23, ch25, ch27.

#### GEN-ms-european-univ — MODERATE

- **Location:** `suit-solution/ch06-identity-EN.tex:174-175 (\S 'Where it adds value'); ch12-observability-EN.tex:278-280 (\S 'Where it adds value')`
- **Passage:**

  > integration with the dominant office-and-collaboration suite already present in the majority of universities (ch6); Tight integration with the Microsoft estate that is already present at most European universities (ch12)

- **Why it is not generic:** VERIFIED non-generic. Both passages state, as background fact in body prose, an unsourced market-penetration claim: ch06 'the dominant office-and-collaboration suite already present in the majority of universities' (no \cite, no \loc); ch12 'the Microsoft estate that is already present at most European universities' (no \cite, plus it smuggles an EU scope into vendor-neutral prose). These are 'Where it adds value' paragraphs, NOT the labelled \alternativebox example -- the Sentinel mentions inside the ch12 alternativebox are correctly a labelled example carrying \cite{microsoft-sentinel} and are correct-by-design, but the candidate targets the universal 'most European universities' assertion in the surrounding prose, which is genuinely a market-share claim presented without a source. Misleads readers in families (LATAM-PUB, AFR-PUB, open-stack institutions) where the premise does not hold.

- **Fix:** Soften to a conditional/example: 'where a dominant office-and-collaboration suite is already in place' or 'for institutions whose estate is anchored on such a suite'. Remove the 'majority of universities' / 'most European universities' quantifier, or attach a sourced external statistic if one exists; do not assert market share as background fact.

#### GEN-traj-ms-ench-ch18 — MODERATE

- **Location:** `suit-solution/ch18-wave0-foundations-EN.tex:128-142 (\S Trajectory: brownfield Microsoft-centric)`
- **Passage:**

  > an established procurement and governance practice that has historically operated around Microsoft Enterprise Agreement renewal cycles ... The inventory work in this trajectory is dominated by the documentation of Microsoft estate components, their contractual envelopes, and their data flows.

- **Why it is not generic:** VERIFIED non-generic. Confirmed verbatim: the Wave-0 brownfield trajectory presumes the adopter's procurement cadence is structured around 'Microsoft Enterprise Agreement renewal cycles' and that the inventory work is 'dominated by the documentation of Microsoft estate components'. Although the section opens with the neutral 'For the starting point most common among institutions of the adopting institution's type and jurisdiction', the body then binds a vendor-specific commercial instrument (the Microsoft EA) and a vendor-specific estate to every brownfield adopter as unhedged fact, with no 'for example', no \loc{}, no category-archetype routing. Families on Google/AWS (US-PRIV-R1), LATAM-PUB, or AFR-PUB whose renewal cycles and estate are organised around different vendors are mis-described.

- **Fix:** Generalise to 'an established procurement practice organised around the renewal cycles of a dominant productivity-suite vendor (e.g. a Microsoft Enterprise Agreement)' and 'documentation of the incumbent suite's estate components, their contractual envelopes, and their data flows'. Keep Microsoft only as a parenthetical example; rename the section heading per the ch17 fix.

#### GEN-traj-sentinel-ch20-ch25 — MODERATE

- **Location:** `suit-solution/ch20-wave2-observability-EN.tex:122-159 (\S Trajectory: brownfield Microsoft-centric); parallel construction at ch25-wave7-audit-ir-EN.tex:139-170`
- **Passage:**

  > \section{Trajectory: brownfield Microsoft-centric} For institutions whose existing observability is dominated by Microsoft Sentinel and Log Analytics, Wave~2 introduces an open-source collector layer ... upstream of Sentinel (ch20); parallel \section{Trajectory: brownfield Microsoft-centric} ... built around Microsoft Sentinel (ch25)

- **Why it is not generic:** VERIFIED non-generic at the label and the parity level. The section heading 'brownfield Microsoft-centric' carries the same residual vendor-named-archetype defect as ch17, and the prose threads Sentinel/Log Analytics through the entire pattern as if it bounds the trajectory. The asymmetry the candidate alleges is confirmed verbatim: the sibling 'brownfield hybrid' section scopes its product as 'Splunk or a comparable per-volume-priced analytical store' (ch20:165-166, ch25:176-177) -- example-scoped -- whereas the Microsoft-centric trajectory names only Sentinel with no 'or comparable' hedge. The conditional opening ('For institutions whose existing observability is dominated by...') hedges the prose somewhat, which is why this is MODERATE not HIGH, but the section-heading label and the missing 'or comparable' parity remain genuine non-generic artefacts, not the sovereignty concept, not a sourced statistic, not \loc-routed.

- **Fix:** Rename the section to the vendor-neutral label (per the ch17 fix) and reframe Sentinel as a labelled example with the same hedge the Splunk sibling already uses: 'a cloud-vendor-native SIEM (for example Microsoft Sentinel with Log Analytics)'. Mirror the 'or a comparable ...' phrasing so neither archetype is bound to one product.


## Unparameterised-fact (17)

*A concrete local fact (incumbent vendor, federation name, institution name, role title, deadline) is hard-coded in prose where the localization registry already provides — or should provide — a \loc{} key to absorb it.*

### `suit-policy/main/main-body-EN.tex`

#### GEN-icradp-15day-48h-counts — MODERATE

- **Location:** `suit-policy/main/main-body-EN.tex:4581-4584 (ICRADP "Processing deadline") and 433-435 (BYOD stakeholder box: "rules within 15 working days")`
- **Passage:**

  > the commission rules within a maximum period of 15 working days ... a provisional adjustment may be granted within 48 hours

- **Why it is not generic:** VERIFIED as surviving. The 15-working-day figure is hard-coded in two places (4581-4584 ICRADP body and 433-435 stakeholder box) and the 48-hour emergency figure once; confirmed no \loc key carries them (no icradp-decision-deadline / icradp-emergency-deadline anywhere in shared/localization-defaults.tex or categories/). These are varies-by-jurisdiction administrative-review service levels presented as universal, and a duplicated magic number that will drift between the two sites if edited.

- **Fix:** Introduce \loc{icradp-decision-deadline} (default "15 working days") and \loc{icradp-emergency-deadline} (default "48 hours") and reference them from both passages, or present them explicitly as a recommended default ("e.g. 15 working days").


### `suit-solution/abstract-EN.tex`

#### GEN-ms-brownfield — MODERATE

- **Location:** `suit-solution/abstract-EN.tex:18-19`
- **Passage:**

  > three trajectories per wave (greenfield, brownfield Microsoft-centric, brownfield hybrid)

- **Why it is not generic:** Confirmed in context. The same abstract declares a 'vendor-neutral reference architecture' (line 13), yet line 19 hard-codes the single vendor 'Microsoft' as the canonical brownfield trajectory name, presupposing every adopter's incumbent estate is Microsoft-centric. It is not routed through \loc{}, not marked as an illustrative example (no 'e.g.'), and not a sourced statistic or the sovereignty concept/grid; it is presented as one of three fixed trajectory names. For an institution whose brownfield estate is Google Workspace, an open-source stack, or another commercial suite the label is misleading. Incumbent vendor identity is precisely the locality fact the localization layer parameterises.

- **Fix:** Generalise the trajectory label to a vendor-neutral role phrase, e.g. 'brownfield incumbent-suite-centric' or 'brownfield dominant-commercial-stack', routing the concrete vendor through a \loc{} incumbent-suite-vendor key, or mark '(Microsoft-centric)' explicitly as one illustrative example rather than a fixed trajectory name.


### `suit-solution/ch06-identity-EN.tex`

#### GEN-id-entra-vendor — MODERATE

- **Location:** `suit-solution/ch06-identity-EN.tex:158-162 (\section Alternative 1, alternativebox)`
- **Passage:**

  > A tenancy of the institution's incumbent commercial identity-suite vendor~\cite{microsoft-entra}, operated by the supplier in a designated EU (or analogous regional) region

- **Why it is not generic:** Confirmed: shared/localization-defaults.tex line 104 defines \loc{incumbent-identity-suite-vendor} = "a pure-commercial identity provider" for exactly this role, yet the alternativebox prose hard-codes Microsoft Entra via \cite{microsoft-entra} as THE incumbent suite and does not route the vendor through the \loc key. The cite is not framed as an example ("e.g."); it is the cited identity of the universal incumbent. Microsoft is not the incumbent for every adopter (Google Workspace shops, US-PRIV/LATAM/AFR archetypes). A vendor-specific locality is presented as universal. Not scoped via \loc{} or archetype, not a labelled example, not a sourced external statistic.

- **Fix:** Route the vendor name through \loc{incumbent-identity-suite-vendor} and keep \cite{microsoft-entra} only as an illustrative citation, or scope it as a labelled example ("e.g. Microsoft Entra"). Let the category archetype bind the concrete vendor.

#### GEN-id-fed-profile-loc — LOW

- **Location:** `suit-solution/ch06-identity-EN.tex:66-101 (contract item; reference instantiation)`
- **Passage:**

  > the institution's applicable research-and-education identity federation profile or an equivalent regional federation ... the institution's research-and-education identity federation~\cite{edugain} through its national research-and-education federation operator

- **Why it is not generic:** Confirmed: shared/localization-defaults.tex defines \loc{identity-federation-profile} (line 63) and \loc{nren-name} (line 57) for exactly these roles. The prose keeps the federation jurisdiction-neutral and \cite{edugain} correctly references the interfederation (not a single NREN), so this is not a hard locality leak; but the federation-profile and NREN-operator role phrases are re-authored inline in multiple places (lines 66, 99-101, 130-134) instead of consuming the existing \loc keys, a maintainability/consistency gap across editions. Survives at LOW as a routing/consistency defect, not a generic-fact leak.

- **Fix:** Consume \loc{identity-federation-profile} (and the NREN-operator role phrase, cf. \loc{nren-name}) where the federation profile is named, so an edition can bind the concrete interfederation/operator once instead of editing prose. Keep \cite{edugain} as the illustrative interfederation reference.


### `suit-solution/ch09-compute-EN.tex`

#### GEN-co-nrencontext — LOW

- **Location:** `suit-solution/ch09-compute-EN.tex:149-151 (realworldbox 'Research-cloud precedents')`
- **Passage:**

  > each institution's compute layer reflects its specific research mission and the context of its national research and education network.

- **Why it is not generic:** Confirmed in context. The closing clause of the precedents box asserts that every adopter has 'its national research and education network' (NREN) as context. This holds for EU-PUB-RI / UK-RES but is not universal: a private (US-PRIV-R1) or under-resourced (AFR-PUB) adopter may have no NREN relationship. The phrase is hard-coded in prose rather than routed through a localization key, so it universalises a fact that is not size/jurisdiction-invariant. Low severity because the surrounding box is clearly framed as precedent-not-template, which softens but does not remove the universalised NREN presumption.

- **Fix:** Route the NREN reference through \loc{nren-name} (or soften to 'its national or regional research and education network, where one exists'), so an edition without an NREN can rebind or drop the phrase.


### `suit-solution/ch15-sizing-EN.tex`

#### GEN-edugain-fed — MODERATE

- **Location:** `suit-solution/ch15-sizing-EN.tex:80-82 (Identity layer sizing)`
- **Passage:**

  > Federation transactions per day (eduGAIN inbound and outbound combined): indicatively tens to hundreds of thousands.

- **Why it is not generic:** VERIFIED non-generic. Line 80-82 names eduGAIN bare as the label of a generic *sizing dimension* ("Federation transactions per day"), not as part of the reference-instantiation stack label (where "Keycloak + SCIM + eduGAIN" is correct-by-design, as in ch01/ch03/ch06). As a per-layer sizing parameter it reads as if every adopter participates in eduGAIN, the European/eduGAIN-world interfederation. A US-PRIV-R1, LATAM-PUB, UK-RES or AFR-PUB institution federates through InCommon, a national hub, or no interfederation. The localization registry shared/localization-defaults.tex already defines \setloc{identity-federation-profile}{the academic identity interfederation} precisely to absorb this slot, yet the value is hard-coded in free prose here. Not scoped via \loc, not a category archetype, not a clearly-labelled regulatory example, not the sovereignty concept/grid, not a sourced external statistic (the figure is an explicitly indicative range, the name is the only fixed element).

- **Fix:** Route the federation name through the existing registry key: replace "Federation transactions per day (eduGAIN inbound and outbound combined)" with "Federation transactions per day (\loc{identity-federation-profile} inbound and outbound combined)", so an institution edition / category archetype binds eduGAIN, InCommon, a national federation, or none. Mirror the same change in summary/solution-summary-EN.tex:436 which carries the same bare "eduGAIN" sizing reference.


### `suit-solution/ch17-playbook-reading-EN.tex`

#### GEN-adopting-inst-type-hybrid — MODERATE

- **Location:** `suit-solution/ch17-playbook-reading-EN.tex:218`
- **Passage:**

  > Frequent among research-intensive institutions of the adopting institution's type.

- **Why it is not generic:** "institutions of the adopting institution's type" is a literal in-prose paraphrase of the \loc{institution-type} key, which is defined in shared/localization-defaults.tex:21 as "a typical research-intensive institution". Hard-coding the cohort descriptor in prose means it will not track an edition's override of institution-type and duplicates a fact the localization registry already owns. The same literal phrase recurs at ch18-wave0-foundations-EN.tex:132, confirming it is an un-routed manual stand-in rather than a \loc{} expansion. It is also internally redundant: "research-intensive ... institution-type" restates the key's own default of "a typical research-intensive institution".

- **Fix:** Replace the literal "institutions of the adopting institution's type" with the \loc{institution-type} expansion (or a key derived from it) so the cohort phrasing is owned by shared/localization-defaults.tex and tracks any edition override, and drop the redundant "research-intensive" qualifier already implied by the key's default.

#### GEN-msoft-trajectory-common — MODERATE

- **Location:** `suit-solution/ch17-playbook-reading-EN.tex:217 (Trajectory selection matrix, Table tab:pr-trajectory-detail)`
- **Passage:**

  > The most common starting point for institutions of the adopting institution's type.

- **Why it is not generic:** The trajectory label "Brownfield Microsoft-centric" is a defined category archetype (see lines 110-118) and is correct by design, so the vendor name in the row label is NOT the defect. The surviving defect is twofold: (1) "the most common starting point" is an unhedged universality claim asserted across every archetype family, whereas Microsoft-estate dominance is true only for some cohorts (EU/US research universities) and not for others (LATAM-PUB, AFR-PUB, Google Workspace shops); and (2) "institutions of the adopting institution's type" is a literal in-prose stand-in for the \loc{institution-type} key (which exists in shared/localization-defaults.tex line 21, defaulting to "a typical research-intensive institution"). The hard-coded phrase will not track an edition override, and ch17 uses no \loc{} expansions at all.

- **Fix:** Hedge the frequency claim (e.g. "A common starting point, especially for institutions with a large Microsoft 365 / Entra estate") and route the cohort reference through \loc{institution-type} instead of the literal "institutions of the adopting institution's type", so the phrasing tracks the localization registry.


### `suit-solution/ch20-wave2-observability-EN.tex`

#### GEN-w2rwb-nren — MODERATE

- **Location:** `suit-solution/ch20-wave2-observability-EN.tex:243-246 (realworldbox "Audit pipeline precedents")`
- **Passage:**

  > Specific architectures discussed in the fora of the national research and education network and its associated security incident response team, and in the security operations environments of large research infrastructures...

- **Why it is not generic:** Confirmed non-generic as written. The chapter contains no \loc{} call at all, yet the localization registry already provides the exact canonical role phrases this prose duplicates verbatim: shared/localization-defaults.tex:57 sets nren-name to "the national research and education network" and line 58 sets nren-csirt to "the NREN CSIRT". The category archetypes rebind these to materially different structures (UK-RES->Janet, US-PRIV-R1->Internet2 via regional R&E network, LATAM-PUB->RedCLARA-member NREN, AFR-PUB->network-operator CSIRT). By spelling the Layer-0 default inline the chapter bypasses the parameterisation system, so an institution whose family has no single NREN or a differently-structured CSIRT cannot rebind this through its edition. The realworldbox label does not save it: the defect is the hard-coded role phrase, not the precedent example.

- **Fix:** Route the two facts through the registry: replace the spelled-out phrase with \loc{nren-name} and \loc{nren-csirt} (e.g. "the fora of \loc{nren-name} and \loc{nren-csirt}"). Keep the cautious "would benefit from being consulted" framing unchanged.


### `suit-solution/ch22-wave4-policy-EN.tex`

#### GEN-w4-vendor-loc — MODERATE

- **Location:** `suit-solution/ch22-wave4-policy-EN.tex:128-132 (sec:w4-brownfield-ms)`
- **Passage:**

  > authorisation logic resides primarily in the incumbent identity-suite vendor's conditional-access expressions and in that vendor's application-level configuration

- **Why it is not generic:** VERIFIED non-generic. shared/localization-defaults.tex:104 registers \setloc{incumbent-identity-suite-vendor}{a pure-commercial identity provider}, and instantiations/lu-university-of-luxembourg/set.tex:113 rebinds it to 'Microsoft Entra ID with Conditional Access' — proving the incumbent-vendor role is designed to be parameterised per edition. Yet ch22 hard-codes the role phrase 'the incumbent identity-suite vendor' in prose and consumes \loc{} nowhere in the file. An edition that rebinds the vendor role leaves this brownfield-MS section inconsistent with the rest of the suite. Not scoped, not an example, not the sovereignty concept, not a sourced statistic.

- **Fix:** Replace the hard-coded role phrase with \loc{incumbent-identity-suite-vendor} (adjusting possessive grammar) so this section tracks any edition's vendor binding like the rest of the suite.

#### GEN-w4-vendor-conf — LOW

- **Location:** `suit-solution/ch22-wave4-policy-EN.tex:134-142 (sec:w4-brownfield-ms, Pattern)`
- **Passage:**

  > A standalone policy decision point is deployed alongside the incumbent identity suite. For each conditional-access expression identified in Wave~1's inventory, an equivalent policy is authored ... The vendor's conditional-access expression remains authoritative

- **Why it is not generic:** VERIFIED non-generic. 'conditional-access expressions' / 'the incumbent identity suite' / 'the vendor's conditional-access expression' name a vendor-specific authorisation construct — the LU instantiation confirms 'Conditional Access' is the Microsoft Entra mechanism the key resolves to. The mechanism term and vendor reference are presented as the generic brownfield-MS pattern, neither routed through \loc{incumbent-identity-suite-vendor} nor labelled as an exemplar; an institution whose incumbent suite uses a differently-named mechanism is described inaccurately. Same defect class as GEN-w4-vendor-loc in the adjacent paragraph.

- **Fix:** Route the vendor reference through \loc{incumbent-identity-suite-vendor} and generalise the mechanism term, e.g. 'the incumbent suite's conditional-access (or equivalent) expressions', keeping conditional-access as a labelled exemplar.


### `suit-solution/ch24-wave6-endpoint-EN.tex`

#### GEN-nren-fora — MODERATE

- **Location:** `suit-solution/ch24-wave6-endpoint-EN.tex:239-241 (realworldbox "Endpoint management at large institutions")`
- **Passage:**

  > Patterns reported in the national research and education network's community fora and at sector conferences include mixed-OS estates

- **Why it is not generic:** Confirmed in context. The literal phrase "the national research and education network" is verbatim the Layer-0 generic role phrase bound to the localization key nren-name (shared/localization-defaults.tex:57: \setloc{nren-name}{the national research and education network}). The \loc{nren-name} convention is actively used in suite prose (e.g. suit-policy/companion/companion-body-EN.tex:374-440), so hard-coding the phrase here bypasses localization: an institution edition that overrides nren-name (RESTENA, Internet2, Janet, RENATER, SURF, RNP, SANReN-TENET, etc.) cannot localize this sentence, and the prose silently diverges from every other NREN reference. This is NOT a sourced external statistic (the realworldbox itself states "Public documentation ... is uneven" and reports patterns, not a cited figure), NOT the sovereignty concept/grid, NOT a labelled regulatory example, and NOT already routed through \loc{}. Survives adversarial refutation.

- **Fix:** Route the reference through the existing key: replace the literal phrase with \loc{nren-name}'s ("... reported in \loc{nren-name}'s community fora and at sector conferences ..."). The generic default text stays identical while editions can substitute the concrete NREN. (Note: the same literal phrase also occurs in ch31-institutional-precedents-EN.tex:199,220 and could be normalised in a follow-up, but those are out of scope for this file.)


### `suit-solution/ch33-regulatory-mapping-EN.tex`

#### GEN-ritype-spine — MODERATE

- **Location:** `suit-solution/ch33-regulatory-mapping-EN.tex:32-33 (caveatbox) and recurring at lines 44, 86, 301, 442, 456`
- **Passage:**

  > the regulatory provisions and normative controls most likely to apply to a research-intensive university

- **Why it is not generic:** "research-intensive university" is hard-coded as the chapter's standing addressee in the caveatbox (l.32-33), the engineering-question framing (l.44), the perimeter prose (l.86), and three table captions/intros (l.301, 442, 456). Confirmed in-file: none of these call \loc{}. The shared registry already defines institution-type = "a typical research-intensive institution" (verified in shared/localization-defaults.tex), the exact parameter for this addressee. An edition binding a non-research-intensive archetype (LATAM-PUB, AFR-PUB, a teaching-led US-PUB) cannot retarget the addressee without editing prose. The jurisdiction/size-invariant minimal-necessary-set principle requires the addressee phrase be parameterised, not baked in. Note this is the addressee, distinct from the (correctly labelled) EU worked-instantiation framing the chapter does carry.

- **Fix:** Replace the standing-prose occurrences of "research-intensive university/universities" (caveatbox l.32-33, engineering-question l.44, perimeter l.86, and captions/intros at l.301, 442, 456) with \loc{institution-type}. Leave genuinely example-scoped uses as labelled examples.

#### GEN-cio-office-mapping — LOW

- **Location:** `suit-solution/ch33-regulatory-mapping-EN.tex:567-569 (COBIT intro)`
- **Passage:**

  > the institution's CIO office would be expected to consolidate a complete mapping in its IT governance documentation

- **Why it is not generic:** "the institution's CIO office" hard-codes a specific governance-role title in standing prose. Confirmed not routed through \loc{}. Governance role labels vary by institution/family and the registry already parameterises leadership roles (executive-leadership, governing-board verified in shared/localization-defaults.tex); some adopters have no CIO office. The mild "would be expected to" hedge does not parameterise the hard-coded role title.

- **Fix:** Generalise to "the institution's IT-governance function" or route via a \loc role key so editions bind their actual structure.


### `suit-solution/solution-EN.tex`

#### GEN-unilu-origin — MODERATE

- **Location:** `suit-solution/solution-EN.tex:246-248 (title page, author/working-group attribution minipage)`
- **Passage:**

  > creator of the first version of the suite (originally developed for the University of Luxembourg).

- **Why it is not generic:** VERIFIED in context. Line 248 hard-codes the concrete institution name "University of Luxembourg" directly in the canonical title-page prose. It sits OUTSIDE the trailing \loc{author-affiliation} call (which follows the closing period) and is NOT routed through any \loc{} key or category archetype. The localization registry confirms author-affiliation has an EMPTY generic default (shared/localization-defaults.tex:32), and the file header states that rendering with only the defaults "reproduces the present generic text UNCHANGED" — so this named institution renders identically in EVERY edition (EU-PUB-RI, US-PRIV-R1, AFR-PUB, etc.), embedding one concrete local fact into the suite's institution-neutral canonical text. None of the exemption grounds apply: it is not scoped via \loc{} or an archetype, not a labelled regulatory example, not the sovereignty concept/grid, not a sourced external statistic, and not hedged or conditional. It is precisely the kind of concrete local fact the localization layer exists to absorb. MODERATE (not HIGH) is correct: it is a provenance/origin statement, not a claim that binds or misleads adopters in another family.

- **Fix:** Route the origin clause through a localization key: add \setloc{suite-origin-attribution}{} to shared/localization-defaults.tex (empty generic default) and reference it as ...creator of the first version of the suite\loc{suite-origin-attribution}. A Luxembourg edition then fills the key with "(originally developed for the University of Luxembourg)". Alternatively fold the origin fact into the existing \loc{author-affiliation} byline so the generic title page carries no hard-coded institution name.


### `suit-solution/summary/solution-summary-EN.tex`

#### GEN-edugain-idtable — MODERATE

- **Location:** `suit-solution/summary/solution-summary-EN.tex:436 (section: Sizing reference points, Identity row)`
- **Passage:**

  > eduGAIN tens--hundreds of thousands/day.

- **Why it is not generic:** Verified non-generic as written. eduGAIN is the specific GEANT-operated EU/global interfederation brand, hard-coded raw in an otherwise jurisdiction-neutral sizing table. The file routes NOTHING through \loc{}, yet a generic role key already exists and is used suite-wide: shared/localization-defaults.tex:63 \setloc{identity-federation-profile}{the academic identity interfederation}, with editions binding their own federations (US-PRIV-R1/US-PUB-R1/LATAM/AFR/UK each set a different federation, several only interfederating *through* eduGAIN). Naming eduGAIN presents one federation as the universal Identity-layer auth volume. Not a sourced external statistic (the magnitude is the institution's own auth/day, merely branded), not a labelled example, not the sovereignty grid.

- **Fix:** Replace the brand with the generic role via \loc{identity-federation-profile} ("the academic identity interfederation"), e.g. "interfederation auths tens--hundreds of thousands/day", letting each edition bind eduGAIN/InCommon/etc.

#### GEN-eduroam-coexist — MODERATE

- **Location:** `suit-solution/summary/solution-summary-EN.tex:527-529 (principlebox: Shadow-mode and coexistence patterns to standardise on)`
- **Passage:**

  > eduroam $\leftrightarrow$ TAC-aware Wi-Fi: keep the eduroam profile inviolate; add institutional/TAC attributes only on the non-eduroam path.

- **Why it is not generic:** Verified non-generic as written. eduroam (the GEANT global NREN roaming federation) is named three times as the universal roaming Wi-Fi substrate inside a list of patterns the document tells adopters to 'standardise on' --- not a labelled example. The federated-Wi-Fi role is already a localizable NREN service: shared/localization-defaults.tex:60 \setloc{nren-service-catalogue}{...federated Wi-Fi...}, with US-PUB-R1 phrasing it as 'global academic Wi-Fi roaming' rather than eduroam. The file uses no \loc{} at all, so this is a raw brand assuming every adopter participates in this one federation.

- **Fix:** Refer to 'the federated roaming Wi-Fi profile' generically (route through the federated-Wi-Fi role in \loc{nren-service-catalogue} or add a dedicated \loc{federated-wifi-roaming} key), with eduroam as the EU/global edition binding.


## Maintainability (6)

*A duplicated magic number, scattered date anchor, or table-derived count that will silently drift between sites as the living document evolves; not a misleading claim per se, but a single-source-of-truth defect.*

### `suit-policy/main/main-body-EN.tex`

#### GEN-doc-version-2.1-prose — LOW

- **Location:** `suit-policy/main/main-body-EN.tex:4757 (Conclusion) and date anchors at lines 93, 349, 1589, 2549, 2726, 2981`
- **Passage:**

  > In the context of 2026, three additional dimensions make this change even more urgent (plus recurring "2025--2026" / "as of early 2026" date anchors)

- **Why it is not generic:** VERIFIED as surviving, with the candidate's passage CORRECTED. The candidate located \setloc{doc-version}{2.1} at main-body:4757; that is inaccurate --- doc-version IS already centralised as a \loc key (shared/localization-defaults.tex:51), so the version string is NOT a defect. The genuine surviving defect is the scattered bare calendar anchors in prose: "In the context of 2026" (4757), "In 2025--2026" (93, 349, 1589), "In 2025" (2549), "as of early 2026" (2726), "In 2025-2026" (2981). These self-dating magic numbers will drift as the living document ages and require hunting every occurrence per re-date. (Sourced statistics carrying their own dated provenance are out of scope.)

- **Fix:** Centralise the document horizon in a single \loc{doc-horizon-year} (or \loc{ai-era-window}) key and reference it, or accept a single editorial re-date pass per release; at minimum avoid repeating the bare year across unrelated sections so a future re-date is one edit.


### `suit-solution/ch04-self-assessment-EN.tex`

#### GEN-pace-horizons — LOW

- **Location:** `suit-solution/ch04-self-assessment-EN.tex:294 and Table rows (320,326,334)`
- **Passage:**

  > indicative pace (5-, 7-, or 10-year horizon)

- **Why it is not generic:** Verified in-file: the 5/7/10-year triplet appears in the lead-in prose (line 294) and the literal horizons recur in table cells (320 "5--7", 326 "7--10", 334 "5--7"). The named pace horizons are acceptable design constants (not to be softened), but the duplicated literal numbers across prose and table cells are a drift risk if a horizon is re-tuned. (The candidate's additional claim that the same triplet appears in the playbook chapter is a cross-document assertion not verifiable from this file; the in-file duplication alone justifies the finding.)

- **Fix:** Source the three horizons from shared macros (e.g. \paceShort/\paceMid/\paceLong) referenced by both the lead-in prose and the table cells so the trajectory horizons stay consistent; the values themselves need no softening.

#### GEN-twentyfour-months — LOW

- **Location:** `suit-solution/ch04-self-assessment-EN.tex:118-119,159-160,195-196`
- **Passage:**

  > independently audited within the last twenty-four months ... penetration-tested within the last twenty-four months ... drill ... within the last twenty-four months

- **Why it is not generic:** Verified three verbatim occurrences: A10 (118-119), B10 (159-160), C9 (195-196). The audit/test/drill recency window "twenty-four months" is a duplicated magic number across Sections A, B and C, not defined via a macro or \loc{} key. A cadence change must be edited in three places with drift risk, and the interval is a fixed assurance window some institutions/regulators will set differently.

- **Fix:** Define the recency window once (a macro such as \suitassuranceinterval, or a \loc{assurance-recency-window} key) and reference it in all three questions so a single edit stays consistent; consider making the interval institution-adjustable rather than a hard universal.


### `suit-solution/ch16-conformance-EN.tex`

#### GEN-wavemap-counts — MODERATE

- **Location:** `suit-solution/ch16-conformance-EN.tex:250-258 (\S Linkage with wave closure, Wave-to-test mapping)`
- **Passage:**

  > Wave~1 (Identity) closes against the four Identity tests; Wave~2 (Observability) against the four Observability tests; ... Wave~6 (Endpoint) against the three Endpoint tests; ... Wave~9 (Lifecycle) against the three Orchestration tests.

- **Why it is not generic:** Verified against the table: the prose hard-codes per-layer test counts that exactly mirror row counts of Table~\ref{tab:cf-suite} (Identity/Observability/Network/Policy = 4 rows each -> "four ... tests"; Endpoint/Orchestration = 3 rows each -> "three ... tests"). The same chapter labels the table "illustrative" (lines 92, 98), instructs that tests "should be added or removed" (line 93), and states an institution "extends the illustrative reference suite ... to cover all four categories for each layer" (lines 213-215). Endpoint, Compute, Crypto and Orchestration are shown with only three categories, so an adopter reaching a Robust 3 must add rows, at which point these prose counts silently become wrong and drift from the authoritative per-wave \emph{exit criteria} headings in Chapters 18-27 (cross-referenced at lines 247-249). The counts are derived from an explicitly illustrative table, are not scoped by any \loc key or category archetype, and are not a sourced external statistic.

- **Fix:** Replace the hard numeric counts with category/coverage language that does not encode a row total, e.g. "closes against the Identity-layer tests (all four categories)" / "against the Endpoint-layer tests across the categories it implements", and state once that the authoritative per-wave subset is the \emph{exit criteria} heading of the corresponding wave chapter. Avoid restating counts derived from the illustrative table.


### `suit-solution/ch19-wave1-identity-EN.tex`

#### GEN-w1-exit-80pct-magic — LOW

- **Location:** `suit-solution/ch19-wave1-identity-EN.tex:279-283 (\S sec:w1-exit, exit-criteria itemize)`
- **Passage:**

  > An institutionally agreed proportion of applications --- a common expectation is at least eighty percent in a brownfield trajectory --- has been migrated, with the remainder either in a documented schedule or in the documented exception register.

- **Why it is not generic:** A hard, unsourced magic number (eighty percent) is embedded in prose as a migration-coverage threshold and presented as a generic "common expectation". It is not a sourced external statistic, not a named design constant (unlike the 5-dimension grid / 9 layers patterns), and not routed through a \loc{} key. The same sentence already defers the real figure to "an institutionally agreed proportion", which makes the hard-coded 80% both redundant and a drift hazard --- institutions of differing size and maturity will set it differently, yet the prose asserts a universal figure.

- **Fix:** Drop the hard figure, or move it to a single per-edition \loc{} key / named design constant (e.g. \loc{migration-coverage-target}) set once per institution edition, rather than asserting "at least eighty percent" as a universal expectation in the prose.


### `suit-solution/ch30-coexistence-patterns-EN.tex`

#### GEN-24-month-review — LOW

- **Location:** `suit-solution/ch30-coexistence-patterns-EN.tex:241-243 (paragraph 'Coexistence as a permanent feature')`
- **Passage:**

  > a coexistence that has not been revisited in twenty-four months is reviewed against its current costs and benefits

- **Why it is not generic:** Confirmed. A hard-coded 24-month review cadence stated as an unconditional rule of the review mechanism. It is not a named design constant (5-dim grid / 9 layers / 10 waves), not a sourced external statistic, and not routed through any shared value or \loc. It is a programme-governance parameter baked literally into prose, liable to drift from the cadence stated in the governance chapters. The surrounding sentence is hedged ('Some institutions...') but the numeric figure itself is not.

- **Fix:** Either soften to a relative phrase ('a coexistence not revisited within the programme's standing review cadence is reviewed ...') tied to the governance chapter, or, if a fixed cadence is intended, make it a single shared constant / \loc key referenced here rather than a literal in prose.

