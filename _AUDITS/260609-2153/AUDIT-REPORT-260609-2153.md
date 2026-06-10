# AUDIT REPORT — SUIT — Sustainable University IT Infrastructure & Technology

All process and provenance metadata lives in `AUDIT-CHANGELOG.md`. This report is the
single current-state quality picture of the suite. All paths are repository-relative.

---

## A. Executive header

**Suite:** SUIT — Sustainable University IT Infrastructure & Technology — four documents
(policy dossier, executive-summary companion, technical reference, operational summary)
plus the two anticipatory-argumentation Q&A modules, the shared regulatory-applicability
module, and the deposited instantiations library (reference edition:
`instantiations/lu-university-of-luxembourg/`).

### Dimension scores

| Dimension | Meaning | Score /100 |
|---|---|---|
| SCI | Scientific/factual claim fidelity | **84** |
| TECH | Technical soundness and internal engineering consistency | **81** |
| XCOH | Cross-document coherence | **60** |
| XCOH — Policy↔Solution traceability sub-score | Obligation→mechanism realisation both ways | **80** |
| LEG | Legal/regulatory accuracy | **54** |
| CITE | Citation/bibliography integrity | **84** |
| APP | Applicability/genericity (institution- and jurisdiction-neutrality) | **84** |
| DEF | Defensibility and rejection-resistance | **62** |
| INST | Instantiation gates (BUILD/COMPLETENESS/FIDELITY/CURRENCY) | **75** |
| **Suite aggregate** | | **73** |

Scoring method: per dimension, 100 minus weighted deductions (CRITICAL −22, HIGH −9,
MODERATE −3, LOW −1, INFO 0) over the canonical post-merge findings. The XCOH
traceability sub-score reflects one unrealised obligation (charters) and one missing
fallback against an otherwise verified F1–F6 obligation→mechanism matrix.

### Finding counts by severity

| Severity | Count |
|---|---|
| CRITICAL | **1** |
| HIGH | **9** |
| MODERATE | **28** |
| LOW | **29** |
| (INFO verification records) | 7 |
| **Canonical findings total** | **74** |

---

## A2. Root causes

Thirteen root-cause clusters explain the canonical defects. Fixing the root fixes the
cluster; member findings are listed for traceability.

### RC-nis2-transposition-lens — NIS2 drafted through a national-transposition lens
NIS2 mechanics are paraphrased from one worked national regime as if they were the Union
instrument itself: ordinal numbering, 30-day final report, "typically essential"
classification, compliance-report duty, applicability date, Art. 23 differential,
research-sector denial, and the headcount-scoping misstatement.
**Root fix:** one re-derivation pass of every NIS2 statement against the directive text
(lettered Art. 21(2) points, one-month final report, Art. 2(1)/2(2) scoping routes,
Annex II research sector, Art. 32 supervision), demoting all national mechanics to
explicitly labelled worked-transposition examples per the Localization Guide.
**Members:** LEG-3347f033, LEG-2ad40b28, LEG-507dbd7d, LEG-3cbf3746, LEG-0a4ceaf2,
LEG-60ad59bc, LEG-7e877e71, LEG-8612a572, LEG-11d5aacd.
**Residual:** none expected once the shared module is corrected first and the corrected
formulations propagate to the main body and the solution argumentation module.

### RC-2690-scope — Implementing Regulation (EU) 2024/2690 over-scoped
2024/2690 treated as binding on universities, when its Art. 1 scope covers only the
digital-sector entity classes.
**Root fix:** adopt one canonical sentence on 2024/2690's scope (binding for the
digital-sector classes in its Art. 1; persuasive state-of-the-art guidance for other
entities) and propagate to the three citation sites.
**Members:** LEG-8fef6364, LEG-a76778dc, LEG-0eb021ce. **Residual:** none.

### RC-provision-anchors — right obligation, wrong provision in solution chapters
AI Act Art. 2(6) for commercial-API pilots, GDPR Art. 32 for the Chapter V transfer
regime, bare Art. 21 for logging duties, missing TIA in the pseudonymised tier.
**Root fix:** a provision-level legal pass over the solution chapters using the policy
suite's canonical regulatory framing as the reference (the suite already contains the
correct anchors in each case — the fix is internal alignment).
**Members:** LEG-bb4208eb, LEG-836cabba, LEG-2b334d82, LEG-645f6fcd.
**Residual:** the ch23 fix also restores the DPO-facing defence coherence
(merged DEF-15289ba5).

### RC-source-claim-fidelity — prose specifics beyond the verified record
Body prose carries specifics (figures, vote counts, victim lists, names, attributions)
beyond or different from what the verified bibliography records support — the bib
curation discipline is strong, but no reconciliation pass binds in-prose claims to the
verified record content.
**Root fix:** add a claim-to-record reconciliation gate: every numeric/institutional
claim adjacent to a `\cite` must be supported by the entry's verified abstract/note;
otherwise hedge the prose, enrich the entry with a primary source carrying the figure,
or drop the specific.
**Members:** SCI-78f94649, SCI-2515d068, SCI-0d9dfdff, SCI-6df85895, SCI-e7eaf411,
SCI-3127b0a9, SCI-fc809139, SCI-7220fe72, SCI-f1fd2d3a, SCI-e1761640, SCI-2ea68f21,
CITE-bc8406d2, CITE-8842bca6, CITE-6a358c98.
**Residual:** SCI-e1761640 (naming) and SCI-2ea68f21 (secondary-source chain) are
one-line edits independent of the gate.

### RC-derived-restatement-drift — derived restatements paraphrase instead of reference
Q&A defences, the synthesis figure and tables, summaries, page counts, stack names,
trajectory and tier labels, hardcoded section numbers — all paraphrase canonical
structures instead of referencing them, and drift when the canonical evolves.
**Root fix:** mechanise the bindings: `\S\ref{}` for all cross-chapter section pointers,
verbatim canonical names for the four-item sets and trajectory/stack labels (one
terminology source), count-free self-descriptions, and figure captions that name the
authoritative table when a reduced edge set is drawn.
**Members:** TECH-dc26120f, TECH-41812198, XCOH-d810f76f, XCOH-878f33f2, XCOH-f1ef774a,
XCOH-ba5c0388, XCOH-cefea1ca, XCOH-c630d6a9.
**Residual:** the colour-semantics split (XCOH-a30dfa73) is a sibling symptom requiring
an explicit design election rather than a mechanical binding.

### RC-capsule-regeneration — dossier capsules re-leak anonymized names
The dossier's annotated-ToC capsules were not regenerated after the precedent and
coexistence chapters were anonymized to role-based prose, so the capsules re-leak the
names the chapters removed.
**Root fix:** regenerate every capsule entry from the current canonical chapter
structure and add a capsule-fidelity check (a capsule may not name an entity its chapter
does not name).
**Members:** XCOH-255bb89e, XCOH-030aedd4. **Residual:** none once both are rewritten.

### RC-stale-suite-composition — Solution front matter describes a previous composition
Three documents, a reproduced synthesis chapter, an inspection report that does not
exist.
**Root fix:** rewrite foreword and ch01 suite-positioning passages against the README's
four-document-plus-two-modules definition and the dossier's pointer-part design; keep a
single canonical suite-composition paragraph that both sites quote.
**Members:** XCOH-9e1161fd, XCOH-44cc9a8e. **Residual:** none.

### RC-standards-table-labelling — one labelling/currency standard for the standards table
De-facto qualifiers applied inconsistently, an undefined legend value, a superseded RFC,
a mis-scoped RFC, and one capability overstatement in the dependent endpoint chapter.
**Root fix:** one normalisation pass over the table: closed status legend, mandatory
standards-body vs de-facto/vendor qualifier per row, current-RFC check (8881,
2865+2866), specification-not-product citations, plus the one-sentence XACML
acknowledgement; re-verify dependent chapter claims (ch11 DDM) against the corrected
rows.
**Members:** TECH-d4d3a9d6, TECH-96ae359c, TECH-3d01eb5d, TECH-ae79e1ca, TECH-7830e17d.
**Residual:** none.

### RC-residual-bare-anchors — residual bare EU/continental anchors
"pan-European" welded to the NREN key, GEANT as every adopter's substrate and cost
rationale, the European Commission as an unlabelled reason, the panel's common-backbone
criterion, and the main report's unrouted governing-board literal.
**Root fix:** finish the `\loc` routing: consume `\loc{research-backbone-scale}` at the
remaining backbone sites, route "top governing board" through `\loc{governing-board}`,
and apply the ratified labelled-example pattern ("in the EU, ...; e.g. ...") to the EC
and GEANT reasons; then grep-gate for the bare tokens "pan-European", "European
backbone", "top governing board" in generic bodies.
**Members:** APP-2e0b498, APP-5c8e5d0, APP-dcaec21, APP-f292d51, APP-b80369d,
XCOH-419ca4bc.
**Residual:** APP-f292d51 also needs the factual Internet2/ESnet correction, not just
labelling.

### RC-policy-solution-traceability — two Policy obligations lack their Solution realisation
Enclave/zone charters are never named in the Technical Reference, and Proposition 10
omits the no-federation fallback the Reference provides.
**Root fix:** trace the obligation-to-mechanism mapping both ways: add the zone
responsibility charter as a named ch08/wave-exit artefact, and propagate the ch06
conditional-federation fallback into Proposition 10.
**Members:** XCOH-f68743df, APP-d9618d3. **Residual:** none.

### RC-instance-currency — the reference edition no longer tracks the generic suite
Forked summary content, unbound new title-block keys, drifted wrappers, one hard-coded
origin line, and a stale coverage note — all symptoms of having no automated currency
gate between the generic suite and deposited instantiations.
**Root fix:** add a currency gate to the instance audit (diff instance wrappers against
generic wrappers modulo the sanctioned delta; flag Layer-0 keys unbound in set.tex; flag
placeholder defaults), then re-sync the four wrappers, bind the four doc-* keys, move
the origin line into set.tex, refresh the coverage note, and rebuild all four documents.
**Members:** INST-4b50d235, INST-47f3e9e5, INST-45020063, INST-4cc1a1cf, INST-4fbe80b2.
**Residual:** none once re-synced; the gate prevents recurrence.

### RC-self-operation-risk — the operational risk of self-operating critical planes is not engineered
No availability/failure semantics for the mandatory mediation planes, no exit path for
non-exportable HSM keys, and no assembled answer to the open-source CVE-response
objection.
**Root fix:** add an availability-and-continuity engineering section (per-plane HA
expectations, PDP/IdP outage fail-mode policy, PEP caching), state the HSM wrap-export
precondition with the rotation/re-anchoring alternative in the Crypto contract, and add
the matching O-items to the solution argumentation module.
**Members:** DEF-2103e86b, DEF-fd5ee91b, DEF-5b8c6b81.
**Residual:** DEF-5b8c6b81 is answerable from existing material and needs only assembly
into an O-item.

### RC-third-party-gating — external-stakeholder gating conditions missing from preconditions
Cyber-insurance underwriting and staff-representation co-determination can each lawfully
or contractually block the contested mechanisms, and neither is voiced or scheduled.
**Root fix:** add two pre-emptions: a costs-section Q-item on insurability
(segmentation/MFA/accountable-root as underwriting credits, Science DMZ as disclosable
compensating control, charters as named risk owners) and a
`\loc{staff-representation-body}`-routed consultation precondition on Wave 2/monitoring
with a Q8.4 note.
**Members:** DEF-9e37ed00, DEF-77aabcb5. **Residual:** none.

---

## B. Canonical findings (by severity, then track)

Track order within each severity: SCI, TECH, XCOH, LEG, CITE, APP, DEF, INST.
Where a finding is cross-document drift, the **canonical source** names the side that is
correct and the **fix direction** names the side to edit.

### CRITICAL

#### DEF-2103e86b — unanswered-rejection-vector (CRITICAL) [DEF]
- **Document:** `suit-solution/argumentation/argumentation-solution-EN.tex`
- **Location:** absent from O1.1–O8.1; absent from `suit-solution/ch06-identity-EN.tex`, `ch07-policy-EN.tex`, `ch15-sizing-EN.tex`; `ch02-conceptual-frame-EN.tex:560-565` scopes out DR but not availability
- **Claim:** no chapter or Q&A item addresses service availability of the self-operated critical planes: per-session policy-plane mediation makes identity and policy institution-wide single points of failure, yet the suite states no availability targets, no HA topology, and no fail-open/fail-closed semantics for PDP/IdP outage, and never engages the commercial-SLA comparison.
- **Evidence:** exhaustive scan of the O-item inventory and the identity, policy, and sizing chapters finds no availability target, HA topology, or outage fail-mode statement; ch02's explicit scope-out covers disaster recovery only.
- **Fix:** add an availability/continuity section to the architectural-principles or sizing chapter (HA expectations per plane, PEP-side caching and token lifetime as PDP-outage mitigation, fail-mode policy per zone class) and a matching O-item in the solution argumentation module.
- **Persona:** CTO.

### HIGH

#### TECH-dc26120f — stale-cross-reference (HIGH) [TECH]
- **Document:** `suit-solution/ch16-conformance-EN.tex`
- **Location:** `ch16-conformance-EN.tex:25,83`; `ch06-identity-EN.tex:26-27,226`; `ch08-network-EN.tex:30,280`; `ch14-orchestration-EN.tex:28`
- **Claim:** seven hardcoded cross-references to Chapter 5 are off by one after the insertion of section 5.2: replaceability-conditions pointers say 5.2 (actually 5.3) and standards-table pointers say 5.3 (actually 5.4).
- **Evidence:** the seven literal section-number strings at the cited lines versus the current ch05 section numbering.
- **Fix:** replace literal section-number strings with `\S\ref{}` to `sec:ap-replaceability` and `sec:ap-standards`; minimally bump every replaceability pointer to 5.3 and every standards-table pointer to 5.4.

#### XCOH-255bb89e — capsule-infidelity (HIGH) [XCOH]
- **Document:** `suit-policy/policy-EN.tex`
- **Location:** `policy-EN.tex:619-625`
- **Claim:** the dossier's annotated ToC describes Ch.31 as a review of 15 named university IT architectures, but the canonical chapter is anonymized to role-based entries and names none of them.
- **Evidence:** capsule text at the cited lines versus the anonymized section structure of the canonical chapter.
- **Fix:** rewrite the Ch.31 annotated-ToC line to mirror ch31's anonymized section structure (European / North American / Asia-Pacific / Latin American precedent classes, regional research networks and consortium initiatives, documented gaps), removing the name list.
- **Canonical source:** `suit-solution/ch31-institutional-precedents-EN.tex:77-208`. **Fix direction:** align the dossier capsule to the canonical chapter.

#### LEG-8fef6364 — scope-overreach (HIGH) [LEG]
- **Document:** `suit-policy/main/main-body-EN.tex`
- **Location:** `main-body-EN.tex:1180-1184` (also 1261-1263)
- **Claim:** Commission Implementing Regulation (EU) 2024/2690 is presented as the directly applicable technical baseline for NIS2 essential entities generally, although its Art. 1 scope covers only the digital-sector entity classes.
- **Evidence:** the Regulation's own Art. 1 scope enumeration versus the generalised framing at the cited lines.
- **Fix:** rephrase: the Regulation details the Art. 21(2) families for the digital-sector entities in its Art. 1; for other essential entities (including universities) it is persuasive state-of-the-art guidance, with the binding baseline set by the national transposition.

#### LEG-bb4208eb — research-exemption-misapplication / defence-contradicted-by-defended-chapter (HIGH) [LEG, DEF] (merged: DEF-15289ba5)
- **Document:** `suit-solution/ch23-wave5-pilot-EN.tex`
- **Location:** `ch23-wave5-pilot-EN.tex:276-282`
- **Claim:** the Researcher-LLM-API pilot says AI Act Art. 2(6) "is typically invoked" for scoped commercial generative-AI API use — a misapplication of the research exemption that also directly contradicts the policy module's Q4.2, which states the exemption does NOT cover commercial-API use, handing a DPO the suite's own words as a refusal lever.
- **Evidence:** ch23's Art. 2(6) invocation versus the policy suite's canonical AI Act framing at the canonical-source sites.
- **Fix:** replace the Art. 2(6) invocation in ch23 with the suite's canonical framing: risk-based classification with Art. 50 transparency for commercial APIs; Art. 2(6)/2(8) reserved for bespoke pre-market research tools.
- **Canonical source:** `suit-policy/main/main-body-EN.tex:1328-1344`; `suit-policy/argumentation/argumentation-policy-body-EN.tex:395`. **Fix direction:** align ch23 to the policy framing. **Persona:** DPO.

#### CITE-bc8406d2 — claim-fidelity-misattribution (HIGH) [CITE]
- **Document:** `suit-policy/main/main-body-EN.tex`
- **Location:** `main-body-EN.tex:2518-2521`
- **Claim:** a 2024 cyberattack with data theft is attributed to Sorbonne Université, while the cited source covers Université Paris 1 Panthéon-Sorbonne (October 2024, ~73,000 directory records).
- **Evidence:** the verified bib record `paris-sorbonne-cyber` (`shared/suit-consolidated.bib:1130`) versus the institutional attribution in prose.
- **Fix:** rename the incident item to the institution the source covers, or replace the citation with a source documenting an incident at Sorbonne Université proper; do not alter the verified bib metadata.
- **Canonical source:** `shared/suit-consolidated.bib:1130` (paris-sorbonne-cyber). **Fix direction:** align prose to the verified record.

#### APP-2e0b498 — bare-universal-locality (HIGH) [APP]
- **Document:** `suit-policy/companion/companion-body-EN.tex`
- **Location:** `companion-body-EN.tex:374-375, 383-384, 440-441`
- **Claim:** the executive summary hard-codes "pan-European" as a fixed attribute of the localized NREN key in three places, so any non-European edition renders jurisdictionally false prose (e.g. "RNP and its pan-European backbone services").
- **Evidence:** the three hard-coded phrases adjacent to `\loc`-routed NREN values at the cited lines.
- **Fix:** replace the three hard-coded "pan-European (research) backbone" phrases with `\loc{research-backbone-scale}` (or a dedicated continental-backbone key with a generic Layer-0 default), letting EU archetypes rebind to "the pan-European GEANT backbone".

#### DEF-9e37ed00 — unanswered-rejection-vector (HIGH) [DEF]
- **Document:** `suit-policy/argumentation/argumentation-policy-body-EN.tex`
- **Location:** absent from sections q-segmentation, q-autonomy, q-costs; absent from solution argumentation and ch28
- **Claim:** cyber-insurance underwriting conditions are never mentioned anywhere in the suite, although typical questionnaires (EDR everywhere, no unmanaged admin rights, perimeter inspection of all traffic) facially conflict with accountable researcher root access and the firewall-bypassing Science DMZ, giving a CISO a concrete unanswered refusal lever.
- **Evidence:** suite-wide token scan for insurance/underwriting concepts across both Q&A modules and the costs chapters returns nothing.
- **Fix:** add a Q-item in the policy module's costs-and-feasibility section answering the insurance objection: segmentation, MFA, observability and accountable root are the controls insurers reward; the Science DMZ's ACL+IDS profile is disclosable as a compensating control; charters give the insurer a named risk owner per zone.
- **Persona:** CISO.

#### INST-4b50d235 — stale-forked-summary-wrapper (HIGH) [INST — lu-university-of-luxembourg, CURRENCY]
- **Document:** `instantiations/lu-university-of-luxembourg/render/solution-summary-EN.tex`
- **Location:** `render/solution-summary-EN.tex` (inlined summary content) vs `suit-solution/summary/solution-summary-EN.tex`
- **Claim:** the solution-summary wrapper carries an inlined copy of the generic summary that no longer matches the current generic content: it misses the genericity-remediation changes, including the `\loc{identity-federation-profile}` consumption site, so the LU edition's bound RESTENA/eduGAIN value never renders and the retired "brownfield Microsoft-centric" label plus unscoped EU instrument lists survive in the rendered edition.
- **Evidence:** content diff of the inlined wrapper copy against the current generic summary.
- **Fix:** re-copy the current generic solution-summary content into the instance wrapper (keeping only the sanctioned `\input{../set}` localization delta), rebuild with `latexmk -pdf`, and refresh the rendered edition. Never edit the generic summary from the instance side.

#### INST-47f3e9e5 — silently-defaulted-new-keys (HIGH) [INST — lu-university-of-luxembourg, CURRENCY]
- **Document:** `instantiations/lu-university-of-luxembourg/set.tex`
- **Location:** `set.tex` vs `shared/localization-defaults.tex` doc-* keys
- **Claim:** four Layer-0 keys consumed by the current generic title block via `\suitmetablock` (doc-version, doc-visibility, doc-approval-authority, doc-approval-date) are unbound in the LU set.tex; the Layer-0 default for doc-approval-date is the visible placeholder "(approval date to be set)", which will leak onto every LU title page once the wrappers are re-synced.
- **Evidence:** key inventory of `set.tex` versus the doc-* keys consumed by the generic title block.
- **Fix:** bind the four keys in set.tex with the LU edition facts (e.g. `\setloc{doc-version}{2.1}`, `\setloc{doc-visibility}{INTERNAL}`, `\setloc{doc-approval-authority}{\loc{approving-academic-units}}`, `\setloc{doc-approval-date}{May 7, 2026}`), then re-sync the wrappers and rebuild.

### MODERATE

#### SCI-78f94649 — source-figure-mismatch (MODERATE) [SCI]
- **Document:** `suit-policy/main/main-body-EN.tex` — **Location:** `main-body-EN.tex:1837-1839`
- **Claim:** Penn State Science DMZ case row swaps direction and mechanism: "x5 to x12 gain" is stated as 250 Mbps sending / 600 Mbps receiving by "bypassing" an RFC 1323-violating firewall, while the verified record gives ~5x inbound and ~12x outbound after the firewall's TCP-sequence-checking feature was disabled.
- **Evidence:** verified bib record `esnet-pennstate` versus the table row.
- **Fix:** align the table row with the verified bib record: ~5x inbound / ~12x outbound, feature disabled not bypassed; drop or re-verify the 250/600 Mbps split.
- **Canonical source:** `shared/suit-consolidated.bib` entry esnet-pennstate. **Fix direction:** align prose to the verified record.

#### SCI-2515d068 — unsupported-exact-figure (MODERATE) [SCI]
- **Document:** `suit-policy/main/main-body-EN.tex` — **Location:** `main-body-EN.tex:4340-4342`
- **Claim:** UN HRC Resolution A/HRC/RES/47/16 is described as "adopted by 43 votes to 0", an unsupported and likely false vote count; the verified record says adopted without a vote (by consensus), co-sponsored by some 70 states.
- **Evidence:** verified bib record `unhrc2021` versus the in-prose vote count.
- **Fix:** replace "adopted by 43 votes to 0" with "adopted without a vote (by consensus), co-sponsored by some 70 states", or verify and cite the actual UN voting record.
- **Canonical source:** `shared/suit-consolidated.bib` entry unhrc2021. **Fix direction:** align prose to the verified record.

#### SCI-0d9dfdff — citation-attribution-overreach (MODERATE) [SCI]
- **Document:** `suit-policy/main/main-body-EN.tex` — **Location:** `main-body-EN.tex:232-234`; `argumentation-policy-body-EN.tex:137,631`; `argumentation-solution-EN.tex:537-538`
- **Claim:** four instances over-attribute to the Verizon DBIR the claim that lateral movement in flat networks is a primary/dominant breach mechanism; the source documents credential theft and ransomware prevalence, while the lateral-movement control rationale belongs to NIST guidance.
- **Evidence:** verified bib record `verizon-dbir2024` versus the four attribution sites.
- **Fix:** rephrase all four instances: attribute credential/ransomware prevalence to the DBIR and the segmentation-against-lateral-movement rationale to NIST SP 800-215 / SP 800-53 SC-7.
- **Canonical source:** `shared/suit-consolidated.bib` entry verizon-dbir2024. **Fix direction:** align prose to the verified record.

#### TECH-41812198 — cross-document-drift (defence text drifts from canonical sets) (MODERATE) [TECH, DEF] (merged: DEF-0df1d0a6)
- **Document:** `suit-solution/argumentation/argumentation-solution-EN.tex` — **Location:** `argumentation-solution-EN.tex:577-580, 636-641`
- **Claim:** the anti-lock-in and conformance defences misname both canonical four-item sets they defend: O5.1's replaceability conditions and O6.1's conformance categories differ from the canonical names in ch05 and ch16 — exactly the "self-graded exercise" impression O6.1 sets out to rebut, since a reviewer checking the chain of support finds the defending module disagreeing with the defended Reference.
- **Evidence:** item-by-item comparison of the O5.1/O6.1 lists against the canonical sets at the canonical-source lines.
- **Fix:** align O5.1 and O6.1 wording to the canonical condition and category names (standard interfaces; open state/configuration formats; documented exit-data export; no hidden dependencies — and interface fidelity, data portability, exit rehearsal, decision auditability); the rebuttal logic survives unchanged.
- **Canonical source:** `suit-solution/ch05-architectural-principles-EN.tex:135-150`; `suit-solution/ch16-conformance-EN.tex:63-80`. **Fix direction:** align the Q&A module to the Reference.

#### TECH-d4d3a9d6 — inconsistent-normative-labelling (MODERATE) [TECH]
- **Document:** `suit-solution/ch05-architectural-principles-EN.tex` — **Location:** `ch05-architectural-principles-EN.tex:194-196, 202, 212, 217-219`
- **Claim:** the normative standards-landscape table labels vendor- or project-controlled artefacts as standards with inconsistent honesty: only the S3 row carries "(de facto standard)"; OPA REST, Cedar, DDM/DEP, MS-MDM, "Declarative Linux config" and the CNI row (cited to Cilium, not the CNI specification) carry no qualifier, and the policy layer's lack of a standards-body interface (XACML) is not acknowledged the way the orchestration gap is.
- **Evidence:** row-by-row qualifier inventory of the standards table at the cited lines.
- **Fix:** add the de-facto/vendor-specification qualifier to the affected rows, cite the containernetworking/cni specification for the CNI row, and add one sentence acknowledging the policy decision interface is a de facto project API with XACML as the deliberately non-adopted standards-body alternative.

#### XCOH-030aedd4 — capsule-infidelity (MODERATE) [XCOH]
- **Document:** `suit-policy/policy-EN.tex` — **Location:** `policy-EN.tex:610-614`
- **Claim:** the dossier's annotated ToC describes Ch.30 as a library of named vendor pairs (AD/Keycloak, SCCM/Ansible, Splunk/OpenSearch, VMware/K8s, NetApp/Ceph), but the canonical chapter titles every coexistence pattern role-based and names none of these products.
- **Evidence:** capsule vendor-pair list versus the role-based pattern names of the canonical chapter.
- **Fix:** replace the vendor-pair list with the six role-based pattern names used by ch30 and the solution-summary.
- **Canonical source:** `suit-solution/ch30-coexistence-patterns-EN.tex:23-208`. **Fix direction:** align the dossier capsule to the canonical chapter.

#### XCOH-9e1161fd — stale-cross-document-claim (MODERATE) [XCOH]
- **Document:** `suit-solution/solution-EN.tex` — **Location:** `ch01-synthesis-EN.tex:50-57`
- **Claim:** the synthesis chapter describes the suite as "one of three documents" and claims the dossier reproduces this chapter as a technical-annex part — both statements no longer hold: the suite is four documents plus two Q&A modules, and the dossier carries a pointer/capsule part, not a reproduction.
- **Evidence:** ch01's suite-positioning passage versus the dossier structure and the README suite definition.
- **Fix:** rewrite ch01 "Where this chapter sits in the suite" to the current composition: four-document suite (policy dossier with companion and Q&A part; technical reference with operational summary and Q&A module), with the dossier carrying a pointer/capsule of this Reference.
- **Canonical source:** `suit-policy/policy-EN.tex:400-437`; `README.md:25-27`. **Fix direction:** align ch01 to the suite definition.

#### XCOH-44cc9a8e — stale-cross-document-claim (MODERATE) [XCOH]
- **Document:** `suit-solution/solution-EN.tex` — **Location:** `foreword-EN.tex:18-22`
- **Claim:** the Solution foreword claims the dossier includes "an inspection report on deliverable quality" — no such document exists anywhere in the suite definition.
- **Evidence:** the foreword clause versus the dossier's actual part structure and the README.
- **Fix:** drop the inspection-report clause from the foreword, or replace it with the regulatory-applicability annex and the operational summary, which do exist.
- **Canonical source:** `suit-policy/policy-EN.tex:343-411`; `README.md:25-27`. **Fix direction:** align the foreword to the suite definition.

#### XCOH-d810f76f — figure-vs-canonical-table-drift (MODERATE) [XCOH, TECH] (merged: TECH-6a2be5bb)
- **Document:** `suit-solution/solution-EN.tex` — **Location:** `ch01-synthesis-EN.tex:374-390`
- **Claim:** the synthesis wave-dependency figure omits three REQUIRED prerequisite edges declared by the canonical dependency table (2->5, 4->7, 1->8) while keeping the equally redundant 1->5; the figure's own source comments declare the full edge sets the drawing omits, so it matches neither the ch17 table nor a clean transitive reduction.
- **Evidence:** the figure's drawn edge set (and its own source comments) versus the canonical dependency table.
- **Fix:** draw the missing required edges in fig:synth-wave-dag, or apply a consistent transitive reduction (also dropping 1->5) and caption the figure as a reduced edge set with Table tab:pr-deps as the authoritative list.
- **Canonical source:** `suit-solution/ch17-playbook-reading-EN.tex:147-173`. **Fix direction:** align the figure to the table.

#### XCOH-cefea1ca — load-bearing-number-drift (MODERATE) [XCOH]
- **Document:** `suit-policy/companion/policy-summary-EN.tex` — **Location:** `companion-body-EN.tex:211-224`
- **Claim:** the companion's "concentric layers" view names only four of the five canonical structural layers (silently dropping exposed zones) and mis-attributes the model to the technical reference, whose model is the different nine-functional-layer architecture.
- **Evidence:** the companion's four-layer enumeration versus the main report's five-layer model.
- **Fix:** add the exposed-zones layer (or an explicit elision note) and repoint the parenthetical to the main report's five-layer model (sec:concept-arch).
- **Canonical source:** `suit-policy/main/main-body-EN.tex:3132-3192`. **Fix direction:** align the companion to the main report.

#### XCOH-c630d6a9 — numeric-claim-drift (MODERATE) [XCOH, SCI] (merged: SCI-9f7c1ace)
- **Document:** `suit-policy/companion/policy-summary-EN.tex` — **Location:** `companion-body-EN.tex:467`; `main-body-EN.tex:658-659`; rendered summary is 8 pages
- **Claim:** hard-coded page counts drift in both directions: the main body calls the companion a "four-page synthesis", the companion calls itself "the present five-page document", and the rendered executive summary is 8 pages — with the companion sentence also rendered inside the dossier where the count is doubly wrong.
- **Evidence:** both hard-coded counts versus the rendered PDF page count.
- **Fix:** use a count-free formulation in both places ("the accompanying executive summary" / "the present executive summary"), which stays correct in both render contexts.
- **Canonical source:** `suit-policy/companion/policy-summary-EN.pdf`. **Fix direction:** align prose to the rendered artefact (count-free).

#### XCOH-a30dfa73 — colour-semantics-drift (MODERATE) [XCOH]
- **Document:** `suit-policy/argumentation/argumentation-policy-EN.tex` — **Location:** `argumentation-policy-body-EN.tex:20-30` vs `argumentation-solution-EN.tex:274-280`
- **Claim:** the orange clarificationbox carries opposite semantics in the two Q&A modules: "insidious framing" (rhetorical-trap marker) in the policy module vs neutral "clarification/disambiguation" in the solution module, violating the rule that the same colour means the same thing suite-wide.
- **Evidence:** the two reader's-guide definitions of the same box environment.
- **Fix:** elect one orange-box semantics suite-wide (or introduce a distinct insidiousbox hue in the policy module), update both reader's guides, and re-tag divergent occurrences (e.g. Q1.3).

#### XCOH-f68743df — traceability-unrealised-obligation (MODERATE) [XCOH]
- **Document:** `suit-policy/main/main-body-EN.tex` — **Location:** `main-body-EN.tex:4083-4097`; token "charter" absent from all suit-solution .tex
- **Claim:** Policy obligation without a Solution mechanism: responsibility/enclave charters — load-bearing in Propositions P5 and P7, the companion's key messages and the federated-governance loop — are never realised, named or hooked anywhere in the Technical Reference.
- **Evidence:** suite-wide token scan: "charter" appears in the Policy obligations and the F2 row of the regulatory-applicability matrix but in no Technical Reference file.
- **Fix:** introduce "zone responsibility charter" into ch08's zone-catalogue contract (each declared zone carries a charter with a named accountable owner) and into Wave-0/Wave-3 exit criteria; alternatively document in the Policy that the charter is realised by the Solution's zone-ownership and exception-register mechanisms.
- **Trace direction:** policy->solution. **Canonical source:** `shared/regulatory-applicability-EN.tex:137-194` (F2 row).

#### XCOH-419ca4bc — stakeholder-name-drift (MODERATE) [XCOH]
- **Document:** `suit-policy/policy-EN.tex` — **Location:** `main-body-EN.tex:26-32, 113-120`
- **Claim:** governing-board terminology is localization-routed in the companion (`\loc{governing-board}`) but hard-coded as literal "top governing board" in the main report (6+ occurrences), so an instantiated edition renders the real board name in the summary but the generic phrase in the full report; the two documents also use different role names for the endorsement ladder.
- **Evidence:** the companion's `\loc` routing versus the main report's literal occurrences.
- **Fix:** route the main report's "top governing board" occurrences through `\loc{governing-board}`/`\Loc{governing-board}` and harmonise the deliberative-body role names between companion and main report.
- **Canonical source:** `shared/localization-defaults.tex:42`. **Fix direction:** align the main report to the localization mechanism.

#### LEG-60ad59bc — article-misattribution (MODERATE) [LEG]
- **Document:** `suit-policy/main/main-body-EN.tex` — **Location:** `main-body-EN.tex:1088-1092`
- **Claim:** stricter Art. 23 incident reporting is presented as a consequence of essential (vs important) classification; the Art. 23 cadence is the same for both classes — the differential is supervision and sanctions.
- **Evidence:** NIS2 Art. 23 text (same cadence for both entity classes) versus the differential as stated.
- **Fix:** drop "stricter incident reporting obligations (Article 23)" from the essential-entity differential, or recast as "the same Article 23 reporting cadence as important entities, but under proactive supervision".

#### LEG-3347f033 — citation-form-error / cross-document-drift (MODERATE) [LEG]
- **Document:** `suit-policy/main/main-body-EN.tex` — **Location:** `main-body-EN.tex:1218-1256` (tab:art12-mapping; also 4093)
- **Claim:** the ten Art. 21(2) measure families are cited with national-transposition ordinal numbering (1°-10°) under a caption attributing them to the NIS2 Directive itself, whose points are lettered (a)-(j).
- **Evidence:** the directive's lettered points versus the ordinal column in the table.
- **Fix:** convert the reference column (and line 4093) to NIS2 Art. 21(2)(a)-(j); if the national ordinal numbering is wanted, present it as a labelled worked-transposition column.
- **Trace direction:** solution->policy. **Canonical source:** `suit-solution/ch33-regulatory-mapping-EN.tex:236-265`. **Fix direction:** align the main report to ch33's lettered citation form.

#### LEG-645f6fcd — understated-obligation (MODERATE) [LEG]
- **Document:** `suit-policy/main/main-body-EN.tex` — **Location:** `main-body-EN.tex:3063-3075`
- **Claim:** the data-classification tiers require a documented TIA only for identifying personal data, while pseudonymised personal data may be transferred under "SCC + supplementary measures" with no TIA mentioned — understating the TIA duty that applies to all Art. 46-based transfers of personal data.
- **Evidence:** the tier table's transfer-condition cells versus the Art. 46/Schrems II TIA duty.
- **Fix:** add "documented TIA" to the pseudonymised-data tier (SCC + TIA + supplementary measures), keeping the heavier consent/Art. 6 discussion for identifying data.

#### LEG-507dbd7d — national-transposition-overgeneralisation (MODERATE) [LEG]
- **Document:** `suit-policy/main/main-body-EN.tex` — **Location:** `main-body-EN.tex:1051-1058` (also 525-530, 572-579)
- **Claim:** a public research-and-teaching institution is said to be "typically classified" as a NIS2 essential entity on the basis of public-institution status — a national-transposition outcome overgeneralised as the typical cross-Member-State result.
- **Evidence:** the per-Member-State variability acknowledged by ch33 versus the "typically classified" generalisation.
- **Fix:** replace "typically classified" with "may be classified, depending on the national transposition", keeping the worked essential-entity pathway as the labelled example it already is.
- **Trace direction:** solution->policy. **Canonical source:** `suit-solution/ch33-regulatory-mapping-EN.tex:209-217`. **Fix direction:** align the main report to ch33's hedged framing.

#### LEG-7e877e71 — legal-fact-error (MODERATE) [LEG]
- **Document:** `suit-solution/ch33-regulatory-mapping-EN.tex` — **Location:** `ch33-regulatory-mapping-EN.tex:209-217`
- **Claim:** states that "research is not in itself a covered sector" under NIS2, while Annex II lists research organisations as a covered sector (important entities), with education establishments excluded by the Art. 6(41) definition.
- **Evidence:** NIS2 Annex II and the Art. 6(41) definition versus the chapter's sector denial.
- **Fix:** rephrase: research organisations are an Annex II sector (important entities), but the Art. 6(41) definition excludes education establishments, so universities usually enter scope by another route (public-administration designation, digital infrastructure, hospital affiliation), depending on the national transposition.
- **Trace direction:** policy->solution. **Canonical source:** `suit-policy/main/main-body-EN.tex:1060-1069`. **Fix direction:** align ch33 to the main report's Annex II treatment.

#### LEG-836cabba — article-misattribution (MODERATE) [LEG]
- **Document:** `suit-solution/ch23-wave5-pilot-EN.tex` — **Location:** `ch23-wave5-pilot-EN.tex:123-125, 143-145`
- **Claim:** third-country data egress is anchored on "GDPR Art. 32 read with the Schrems II doctrine" — the security-of-processing article cited for the transfer regime, which is GDPR Chapter V (Arts. 44-49).
- **Evidence:** the transfer-regime anchors used elsewhere in the same volume versus the Art. 32 anchor here.
- **Fix:** replace with "GDPR Chapter V (Arts. 44-49) read with the Schrems II doctrine" in both occurrences, matching the anchors used elsewhere in the same volume.
- **Canonical source:** `suit-solution/ch33-regulatory-mapping-EN.tex:188-190`; `ch10-storage-EN.tex:278-280`. **Fix direction:** align ch23 to the volume's canonical anchors.

#### LEG-8612a572 — scoping-rule-misstatement (MODERATE) [LEG]
- **Document:** `shared/regulatory-applicability-EN.tex` — **Location:** `regulatory-applicability-EN.tex:116-118, 297-300`
- **Claim:** states "NIS2 scope is a function of the service performed, not of headcount" and that self-operating network/identity/research-computing services brings an entity into scope irrespective of headcount — misstating the Art. 2(1) sector-and-size rule and treating internal self-provision as a scoping trigger.
- **Evidence:** NIS2 Art. 2(1)/2(2) scoping mechanics versus the module's formulation.
- **Fix:** rephrase: where NIS2 captures an entity — by sector-and-size under Art. 2(1) or regardless of size under Art. 2(2) (e.g. public-administration designation) — its Art. 21/23 duties apply in full, without headcount-scaled relief; drop the claim that self-operated services trigger scope. (Preserves the ratified invariance message while correcting the legal mechanism.)

#### CITE-8842bca6 — citation-anchor-mismatch (MODERATE) [CITE, DEF] (merged: DEF-2a90f01f)
- **Document:** `suit-policy/argumentation/argumentation-policy-body-EN.tex` — **Location:** `argumentation-policy-body-EN.tex:813` (also :994 Q9.3 row)
- **Claim:** the board-decision economic case hangs its only sector-spend benchmark — security spend at "roughly 8-15% of the IT budget" — on a citation (gartner-security-spend2024) that does not evidence the figure at the cited URL; if the benchmark falls, the quantitative frame drops below the suite's own three-layer convergence rule.
- **Evidence:** the cited entry's verified content versus the in-prose range.
- **Fix:** re-anchor the figure to a source that actually states it (e.g. Gartner IT Key Metrics or an equivalent benchmark report) recorded in the entry note or as a separate bib entry, or reformulate the range as attributed to the EDUCAUSE/sector comparison only.
- **Persona:** CIO.

#### CITE-6a358c98 — single-source-traceability (MODERATE) [CITE]
- **Document:** `suit-policy/main/main-body-EN.tex` — **Location:** `main-body-EN.tex:2557-2562`
- **Claim:** per-institution 2025 Oracle EBS breach figures (University of Phoenix 3.5M records per SEC filing; Harvard 1.3 TB; Dartmouth 35,000+) are all cited to one aggregator entry whose metadata records none of these figures.
- **Evidence:** the aggregator entry's verified metadata versus the three per-institution figures.
- **Fix:** record the per-institution figures in the entry's note with their primary anchors (SEC 8-K, institutional statements, attorney-general notice), or add those primary sources as separate bib entries cited alongside.

#### APP-5c8e5d0 — bare-universal-locality (MODERATE) [APP]
- **Document:** `suit-policy/main/main-body-EN.tex` — **Location:** `main-body-EN.tex:498-505` (also 132-134, 3836-3842, 4031-4034, 4790-4792)
- **Claim:** the main report states as universal fact that the adopter's NREN "connects it to the European backbone GEANT", and the feasibility/cost case repeatedly grounds affordability on NREN/GEANT services as the adopter's own substrate — false as written for adopters outside the GEANT service area, with the cost rationale anchored on infrastructure they do not have.
- **Evidence:** the six unrouted GEANT sites versus the labelled regional-backbone treatment already present in ch31.
- **Fix:** route the backbone through `\loc{research-backbone-scale}` or use the labelled pattern "(in Europe, GEANT; Internet2/ESnet, RedCLARA, UbuntuNet or APAN in other regions)"; in the cost sites say "the NREN and its continental research backbone" keeping GEANT as a labelled example.
- **Trace direction:** solution->policy. **Canonical source:** `suit-solution/ch31-institutional-precedents-EN.tex:275-276`. **Fix direction:** align the main report to ch31's regional treatment.

#### INST-45020063 — wrapper-drift (MODERATE) [INST — lu-university-of-luxembourg, CURRENCY]
- **Document:** `instantiations/lu-university-of-luxembourg/render/policy-EN.tex` — **Location:** all four render wrappers vs the current generic wrappers
- **Claim:** the four instance wrappers no longer match the current generic wrappers despite their own keep-in-sync contract: they lack `\usepackage{suit-logo}`, `\suittitlelogo`, the `\suitfootlogo` footer and the `\suitmetablock` title block, and the policy wrapper's inlined Part V capsule — annotated "reproduced here verbatim" — differs from the generic text (missing the five sovereignty-dimension parentheticals and the open-foundations product list).
- **Evidence:** preamble/title-page diff of the four instance wrappers against the generic wrappers, modulo the sanctioned delta.
- **Fix:** re-copy the current generic preambles/title pages into the four instance wrappers (retaining only the sanctioned `\genericroot` remap and `\input{../set}` addition), restore the verbatim Part V capsule, then rebuild all four documents with latexmk.

#### INST-4cc1a1cf — hardcoded-wrapper-edit (MODERATE) [INST — lu-university-of-luxembourg, FIDELITY]
- **Document:** `instantiations/lu-university-of-luxembourg/render/solution-EN.tex` — **Location:** title page, line ~186
- **Claim:** the geographic-origin line "(originally developed for the University of Luxembourg)" is hard-coded into ONE wrapper only, beyond the thin-shell contract, producing cross-document inconsistency within the edition; the content itself is legitimate for the LU instantiation — only the hard-coded single-document placement is the defect.
- **Evidence:** the origin clause present in one of four wrappers and routed through no localization key.
- **Fix:** move the origin clause into set.tex (fold into `\setloc{author-affiliation}` or a dedicated edition-note key consumed by all four wrappers), restore the wrapper to template form, and rebuild.

#### DEF-fd5ee91b — unanswered-precondition (MODERATE) [DEF]
- **Document:** `suit-solution/argumentation/argumentation-solution-EN.tex` — **Location:** O6.1, O8.1; ch16 Crypto exit test; ch13-crypto-EN.tex contract
- **Claim:** no item pre-empts the objection that the Crypto layer's only exit-rehearsal test (HSM key migration preserving cryptographic identity) is unsatisfiable for non-exportable trust-anchor keys — common HSM best practice — making the Wave-1 exit gate potentially unpassable as designed.
- **Evidence:** the ch16 Crypto exit test as written versus the standard non-exportability of HSM trust-anchor keys; no precondition stated in the ch13 contract.
- **Fix:** state the wrap-export precondition in the Crypto contract and define the alternative exit artefact for non-exportable keys (planned key-rotation/re-anchoring rehearsal under dual control), then reference it from O6.1.
- **Persona:** CTO.

#### DEF-77aabcb5 — unanswered-rejection-vector (MODERATE) [DEF]
- **Document:** `suit-policy/argumentation/argumentation-policy-body-EN.tex` — **Location:** sec:q-regulatory (Q8.3/Q8.4 vicinity); ch20-wave2-observability-EN.tex preconditions
- **Claim:** the collective labour-law prerequisite for workplace monitoring — consultation/co-determination of staff-representation bodies, which in several jurisdictions can block monitoring tools — appears nowhere: Q8.4 covers individual proportionality (Barbulescu) and the ICRADP gives staff a governance seat, but no Q&A item, wave precondition, or localization key covers the collective-consultation step that precedes lawful deployment of the observability pipeline.
- **Evidence:** scan of the regulatory Q-items, Wave-2 preconditions, and the localization key inventory.
- **Fix:** add a `\loc{staff-representation-body}` key and a sentence-level hook making staff-representation consultation a stated Wave-2/monitoring precondition where the adopter's labour law requires it, plus a short Q&A note under Q8.4.
- **Persona:** DPO.

### LOW

#### SCI-6df85895 — source-figure-mismatch (LOW) [SCI, CITE] (merged: CITE-3a7f52ac)
- `suit-policy/main/main-body-EN.tex` — `main-body-EN.tex:2659-2663`
- **Claim:** GEANT backbone capacity given as "multiple wavelengths at 400 Gbps" while the verified source description says speeds up to 500 Gbps.
- **Evidence:** verified bib record `geant`. **Fix:** update to "wavelengths of up to 400-500 Gbps" or "up to 500 Gbps" per the verified record. **Canonical source:** `shared/suit-consolidated.bib` entry geant.

#### SCI-e7eaf411 — phase-misattribution (LOW) [SCI]
- `suit-policy/main/main-body-EN.tex` — `main-body-EN.tex:1829-1831`
- **Claim:** University of Florida row mis-attributes verified figures to phases: "x20 from the first phase; scaling up to 200 Gbps" vs the record's 10x from the bandwidth upgrade, 20x once the Science DMZ was added, 200 Gbps for LHC/CMS data.
- **Evidence:** verified bib record `esnet-uflorida`. **Fix:** reword the table row per the verified record. **Canonical source:** `shared/suit-consolidated.bib` entry esnet-uflorida.

#### SCI-3127b0a9 — epistemic-overcalibration (LOW) [SCI]
- `suit-solution/argumentation/argumentation-solution-EN.tex` — `argumentation-solution-EN.tex:715-719`
- **Claim:** "Mean dwell time is the dominant cost driver" overstates what IBM Cost of a Data Breach 2024 supports.
- **Evidence:** verified bib record `ibm-cost-breach-2024`. **Fix:** soften to "breach lifecycle is a major cost driver: breaches contained faster cost measurably less (IBM 2024)". **Canonical source:** `shared/suit-consolidated.bib` entry ibm-cost-breach-2024.

#### SCI-fc809139 — figures-not-in-cited-source (LOW) [SCI]
- `suit-policy/main/main-body-EN.tex` — `main-body-EN.tex:2088-2089, 2248-2249, 2064-2065, 4349-4350, 2297-2299, 2502-2504, 2534-2536`
- **Claim:** seven institutional figures asserted beyond what the cited source records carry (MIT 100 Gbps backbone; Michigan among 34 Internet2 founders; EPFL ~12,000 students; Magna Charta 1,000+ signatories/94 countries; WLCG tier split; Paris-Saclay ransom non-payment; MOVEit victim-list extras).
- **Evidence:** the cited entries' verified abstracts/notes versus the seven in-prose specifics. **Fix:** for each, either enrich the bib entry with a verifying source that carries the figure, or hedge/drop the unverifiable specifics.

#### SCI-7220fe72 — unsourced-institutional-claim (LOW) [SCI]
- `suit-policy/main/main-body-EN.tex` — `main-body-EN.tex:2860-2870`
- **Claim:** named ISO 27001 university certifications (Leeds, Warwick, Eindhoven, plus "various universities in Germany, Australia and Japan") carry no citations.
- **Evidence:** absence of any `\cite` adjacent to the named-certification passage. **Fix:** add citations to published certification statements or certifier registries, or generalize with one verifiable example.

#### SCI-f1fd2d3a — anachronistic-citation / unsourced-cost-ratio (LOW) [SCI]
- `suit-policy/main/main-body-EN.tex` — `main-body-EN.tex:1783-1791`
- **Claim:** claim that NGFWs achieve 100+ Gbps threat prevention but "cost an order of magnitude more than the Science DMZ approach" closes on dart2013, which predates the hardware claim and carries no cost ratio.
- **Evidence:** the dart2013 entry's date and content versus the modern-hardware and cost claims. **Fix:** cite a current NGFW datasheet/benchmark plus a cost-comparison source, or soften to an unquantified trade-off keeping dart2013 only for the latency/state-tracking point.

#### SCI-e1761640 — naming-inaccuracy (LOW) [SCI]
- `suit-policy/main/main-body-EN.tex` — `main-body-EN.tex:770-781`
- **Claim:** "University of Maryland (UMBC)" misnames the institution.
- **Evidence:** UMBC's official name. **Fix:** rename to "the University of Maryland, Baltimore County (UMBC)".

#### TECH-96ae359c — standard-scope-mismatch (LOW) [TECH]
- `suit-solution/ch05-architectural-principles-EN.tex` — `ch05-architectural-principles-EN.tex:199`
- **Claim:** the standards table attributes network access authentication AND accounting to RFC 2865 alone; accounting is RFC 2866, never cited.
- **Evidence:** RFC 2865/2866 scope split versus the table row. **Fix:** cite RFC 2866 alongside RFC 2865, or narrow the role text to authentication with accounting via the companion RFC 2866 family.

#### TECH-3d01eb5d — obsoleted-standard-citation (LOW) [TECH]
- `suit-solution/ch05-architectural-principles-EN.tex` — `ch05:214`; `ch10-storage-EN.tex:60`; `shared/suit-consolidated.bib:2695-2703`
- **Claim:** NFS v4.1 is anchored to RFC 5661, which was obsoleted by RFC 8881 (August 2020); a superseded document is cited as the current "Stable" standard.
- **Evidence:** the RFC index obsoletion chain. **Fix:** re-point to RFC 8881 (or keep rfc-5661 with an "obsoleted by RFC 8881" note) in the table, the ch10 contract, and the bib.

#### TECH-ae79e1ca — legend-inconsistency (LOW) [TECH]
- `suit-solution/ch05-architectural-principles-EN.tex` — `ch05-architectural-principles-EN.tex:172-176` vs 191
- **Claim:** the standards-table caption defines exactly three status values (Stable, Mature, Emerging), but the OAuth 2.1 row uses an undefined fourth value "Maturing".
- **Evidence:** the closed legend versus the row value. **Fix:** change the row to "Emerging" or add "Maturing" to the legend with a one-line definition.

#### TECH-7830e17d — capability-overstatement (LOW) [TECH]
- `suit-solution/ch11-endpoint-EN.tex` — `ch11-endpoint-EN.tex:105-109`
- **Claim:** states MicroMDM/NanoMDM speak "Apple's DDM/DEP protocols", overstating open-source Declarative Device Management support, which requires companion services and remains partial relative to commercial MDMs.
- **Evidence:** the open-source projects' documented protocol coverage. **Fix:** reword to Apple's MDM protocol with DEP/ADE enrolment, and DDM where the chosen open server or companion components support it (coverage currently partial), keeping the honest-gap posture.

#### XCOH-878f33f2 — terminology-drift (LOW) [XCOH]
- `suit-solution/solution-EN.tex` — `ch01-synthesis-EN.tex:331-334`
- **Claim:** ch01 calls the second principal trajectory "brownfield with a dominant proprietary productivity suite" while the canonical vocabulary is "brownfield single-suite-centric".
- **Evidence:** the canonical trajectory vocabulary at the canonical source. **Fix:** use the canonical trajectory name at ch01:333, optionally keeping the paraphrase in parentheses on first use. **Canonical source:** `suit-solution/ch17-playbook-reading-EN.tex:110-118`. **Fix direction:** align ch01 to ch17.

#### XCOH-ba5c0388 — stack-name-drift (LOW) [XCOH]
- `suit-policy/policy-EN.tex` — `policy-EN.tex:551-554`; `ch01-synthesis-EN.tex:306`; `ch12-observability-EN.tex:182-193`
- **Claim:** the observability reference stack is named three different ways across the suite (with/without Grafana, Loki vs Grafana Loki).
- **Evidence:** the three divergent renderings at the cited sites. **Fix:** pick one canonical rendering (the ch12 title plus "Grafana Loki" for logs) and propagate it to the dossier capsule and the ch01 table. **Canonical source:** `suit-solution/ch12-observability-EN.tex:182-193`. **Fix direction:** align dossier capsule and ch01 to ch12.

#### XCOH-f1ef774a — terminology-drift (LOW) [XCOH]
- `suit-solution/summary/solution-summary-EN.tex` — `solution-summary-EN.tex:414-418`
- **Claim:** the operational summary labels the sizing profile "R-tier institution", a term appearing nowhere in the Technical Reference; ch15 says only "research-intensive university" / "reference profile".
- **Evidence:** token absence of "R-tier" from the Reference. **Fix:** rename to "Sizing reference points (research-intensive reference profile)" and remove "(R-tier)", or introduce the tier nomenclature in ch15 first. **Canonical source:** `suit-solution/ch15-sizing-EN.tex:37-51`. **Fix direction:** align the summary to ch15.

#### XCOH-ea6b9404 — cross-reference-ambiguity (LOW) [XCOH]
- `suit-policy/companion/policy-summary-EN.tex` — `companion-body-EN.tex:280, 335, 408, 436`
- **Claim:** four inline "(Part~\ref{part:reg-applicability})" references resolve via xr-hyper to a part of a different PDF without naming the target document, so the standalone reader sees a bare reference pointing outside the document in hand.
- **Evidence:** the xr-hyper external-label binding at the four sites. **Fix:** qualify all four references, e.g. "(the Regulatory Applicability annex, Part~\ref{part:reg-applicability} of the complete dossier)". **Canonical source:** `suit-policy/policy-EN.tex:380-398`.

#### LEG-a76778dc — scope-overreach (LOW) [LEG]
- `shared/regulatory-applicability-EN.tex` — `regulatory-applicability-EN.tex:251-257` (EU table F2 row)
- **Claim:** F2 instrument for an EU university given as NIS2 "with Implementing Regulation (EU) 2024/2690" — a milder instance of the 2024/2690 scope overreach.
- **Evidence:** the Regulation's Art. 1 scope. **Fix:** qualify: "...with Implementing Regulation (EU) 2024/2690 where the institution provides an in-scope digital service (otherwise persuasive technical reference)".

#### LEG-0eb021ce — scope-overreach (LOW) [LEG]
- `suit-solution/argumentation/argumentation-solution-EN.tex` — `argumentation-solution-EN.tex:702-705`
- **Claim:** cites 2024/2690 as if its logging rules bind the institution.
- **Evidence:** the Regulation's Art. 1 scope. **Fix:** drop the eu-regulation-2024-2690 citation here or qualify it as the Commission's technical articulation for digital-sector entities, used by analogy.

#### LEG-11d5aacd — scoping-rule-misstatement (LOW) [LEG]
- `suit-solution/argumentation/argumentation-solution-EN.tex` — `argumentation-solution-EN.tex:478-479`
- **Claim:** "NIS2 likewise attaches obligations to the function performed, not to headcount" — instance of the shared module's scoping-rule misstatement.
- **Evidence:** NIS2 Art. 2(1)/2(2). **Fix:** mirror the corrected formulation adopted for LEG-8612a572: once in scope, NIS2 duties do not scale down with headcount; several scoping routes apply regardless of size. **Canonical source:** `shared/regulatory-applicability-EN.tex:106-122`.

#### LEG-2ad40b28 — deadline-gloss / cross-document-drift (LOW) [LEG, XCOH] (merged: XCOH-89ad866f)
- `suit-policy/main/main-body-EN.tex` — `main-body-EN.tex:591-592, 1158-1159, 1288-1291`
- **Claim:** NIS2 incident-reporting cadence given as "24 hours / 72 hours / 30 days (final report)" in three main-body sites, while the shared annex and the directive itself say one month.
- **Evidence:** NIS2 Art. 23(4) and the shared annex. **Fix:** use "1 month" in all three main-body occurrences, matching the shared annex and NIS2 Art. 23(4). **Canonical source:** `shared/regulatory-applicability-EN.tex:261-263`. **Fix direction:** align the main body to the shared annex.

#### LEG-0a4ceaf2 — date-imprecision (LOW) [LEG]
- `suit-policy/main/main-body-EN.tex` — `main-body-EN.tex:525`
- **Claim:** "NIS2 (2022, applicable since 17 October 2024)" conflates the transposition deadline with applicability.
- **Evidence:** NIS2 Arts. 41/45 dates. **Fix:** write "(2022, transposition deadline 17 October 2024; national measures apply from 18 October 2024)".

#### LEG-3cbf3746 — transposition-attribution (LOW) [LEG]
- `suit-policy/main/main-body-EN.tex` — `main-body-EN.tex:1093-1097`
- **Claim:** a regular compliance/maturity report to competent authorities is stated as a direct directive consequence of essential-entity classification; it is a national-transposition mechanism reflecting Art. 32 supervision powers.
- **Evidence:** NIS2 Art. 32 versus the unqualified statement. **Fix:** add the qualifier "...where the national transposition so provides (as in the worked example), reflecting the directive's ex-ante supervision powers (Art. 32)".

#### LEG-2b334d82 — imprecise-provision-anchor (LOW) [LEG]
- `suit-solution/ch12-observability-EN.tex` — `ch12-observability-EN.tex:111-112`
- **Claim:** "NIS2 Art. 21 (logging integrity)" is an imprecise provision anchor.
- **Evidence:** the lettered Art. 21(2) points. **Fix:** cite "NIS2 Art. 21(2)(b)/(f) (incident handling; effectiveness assessment)" instead.

#### CITE-52a4fec9 — field-coverage (LOW) [CITE]
- `shared/suit-consolidated.bib` — `suit-consolidated.bib:2557` (entry suit-wg)
- **Claim:** one fetch_note of 299 carries no dated verification ("Working-group's own reference suite (self-reference).").
- **Evidence:** the entry's fetch_note field. **Fix:** append a dated note, e.g. "repository URL confirmed June 2026".

#### APP-dcaec21 — local-anchor-as-reason-without-substitution-path (LOW) [APP]
- `suit-policy/main/main-body-EN.tex` — `main-body-EN.tex:4078-4081`; `companion-body-EN.tex:310-313`
- **Claim:** Proposition 6 (and the companion echo) justifies the open-source default by alignment with "the European Commission's open-source strategy" — a local anchor used as a REASON for a universal proposition, unlabelled and without a substitution path for non-EU adopters.
- **Evidence:** the unlabelled anchor at both sites versus the ratified labelled-example treatment. **Fix:** rephrase both sites: "aligning with public-sector open-source strategies (e.g., the European Commission's open-source strategy in the EU)" — the e.g. label brings the anchor under the ratified labelled-example treatment.

#### APP-f292d51 — factual-inaccuracy (LOW) [APP]
- `suit-policy/main/main-body-EN.tex` — `main-body-EN.tex:2058-2062`
- **Claim:** reference-panel criterion 2 asserts all panel institutions "access the same NREN/GEANT backbone services" — factually inaccurate for the US members (Internet2/ESnet) and universalizing the EU backbone as the panel's common substrate.
- **Evidence:** the US panel members' actual backbones. **Fix:** rephrase: equivalent NREN backbone services (GEANT in Europe, Internet2/ESnet in North America), interconnected into one global research fabric.

#### APP-d9618d3 — cross-document-drift (missing infrastructure-dependence fallback) (LOW) [APP]
- `suit-policy/main/main-body-EN.tex` — `main-body-EN.tex:4103-4106` vs `suit-solution/ch06-identity-EN.tex:83-89`
- **Claim:** Proposition 10 unconditionally mandates federated identity via eduroam and the national identity federation, while the Technical Reference's identity contract provides the no-federation fallback the policy omits — undischargeable as written for adopters in countries without an operating federation.
- **Evidence:** the ch06 conditional versus the unconditional proposition. **Fix:** append the ch06 conditional: "where a national identity federation operates; otherwise deploy the standards-based identity layer with interoperable federation metadata and defer participation (Technical Reference, Ch. 6)". **Trace direction:** solution->policy. **Canonical source:** `suit-solution/ch06-identity-EN.tex:83-89`. **Fix direction:** align Proposition 10 to ch06.

#### APP-b80369d — cross-document-drift (legal layer unlabelled) (LOW) [APP]
- `suit-solution/argumentation/argumentation-solution-EN.tex` — `argumentation-solution-EN.tex:286-289, 470-479`
- **Claim:** the solution Q&A module's legal evidence layer names only EU instruments (GDPR, NIS2) without the worked-example label or `\loc` routing, while the policy-layer twin module carries the ratified labelled treatment.
- **Evidence:** the twin module's labelled treatment at the canonical source. **Fix:** write "binding legal and regulatory instruments of the adopter's jurisdiction (GDPR, NIS2 and sectoral law in the worked EU instantiation)" in the layer key, and route O3.1 through `\loc{data-protection-regime}`/`\loc{cybersecurity-baseline-regime}` with the "(in the EU, ...)" label. **Trace direction:** policy->solution. **Canonical source:** `suit-policy/argumentation/argumentation-policy-body-EN.tex:35-37, 449`. **Fix direction:** align the solution module to the policy module.

#### INST-4fbe80b2 — stale-coverage-note (LOW) [INST — lu-university-of-luxembourg, COMPLETENESS]
- `instantiations/lu-university-of-luxembourg/set.tex` — section 6 note (lines 184-215)
- **Claim:** the section-6 coverage note is stale and miscounted: it labels a 13-item list "The 11 keys with a NEW consumption site" and declares as orphans six keys that now have real consumption sites in the generic suite (institution-type, data-protection-regime, cybersecurity-baseline-regime, identity-federation-profile, incumbent-identity-suite-vendor, research-backbone-scale); the keys render correctly, but the documented rationale no longer matches the suite.
- **Evidence:** consumption-site grep of the six keys across the generic bodies versus the note's orphan list. **Fix:** refresh the note: correct the count, move the six now-consumed keys out of the declared-orphan list, and keep the genuinely unconsumed keys with their why-comments.

#### DEF-5b8c6b81 — missing-objection-item (LOW) [DEF]
- `suit-solution/argumentation/argumentation-solution-EN.tex` — between O2.1 and O5.1 (natural slot for an O2.2)
- **Claim:** no Q&A item assembles and rebuts the "open source is itself the supply-chain/security risk" objection (unmaintained dependencies, no vendor CVE-response SLA, nobody to sue), although the answer's pieces exist across Q8.5, O5.1, Q9.4 and the sovereignty grid's Operational dimension.
- **Evidence:** the O-item inventory versus the scattered partial answers. **Fix:** add a short O-item assembling the existing answers: commercial support subscriptions for open components, the supply-chain attestation control of Q8.5, and the grid's per-layer operational-sustainability scoring.
- **Persona:** CTO.

### Verification records (INFO)

| Id | Track | Record |
|---|---|---|
| SCI-2ea68f21 | SCI | Gartner shadow-IT statistics sourced to a vendor-blog compilation rather than the Gartner primary (`main-body-EN.tex:144-146, 785-788`); optional bib-note enrichment, no prose change required. |
| SCI-0b5c070a | SCI | PASS: the suite's headline quantitative claims check out against their verified source records. |
| TECH-519e256d | TECH | PASS: wave dependencies acyclic with full nine-layer test coverage; FTE envelopes non-additive and nowhere summed; conformance tests concrete and falsifiable; reversibility/coexistence engineering-feasible; 9/3/10 counts consistent across all six documents; summary tables match ch15/ch17 exactly. |
| LEG-OK-VERIFIED-BASE | LEG | PASS: core article-number and case-law-holding claims check out against the primary instruments. |
| CITE-aa80e781 | CITE | 6 of 299 bib entries cited by no .tex file (bird2014, boldyn-zt, hanemann2005, internet2, rfc-6749-oauth2, shadow-ai-campustech); keep as documented curated reserve or prune at the next release gate. |
| CITE-4bafbd34 | CITE | PASS: 0 cited-but-undefined keys (293 used keys resolved across the full 51-file input tree); 299/299 entries carry abstract + valid fetch_status + fetch_note (298/299 dated); no AI-derived text in any abstract field. |
| DEF-1d43ae52 | DEF | PASS: the enumerated CISO/DPO/CTO/CIO rejection vectors verify as answered with concession-then-rebuttal and ≥3 evidence layers; standing dispositions respected and not re-raised. |

---

## B1. Policy↔Solution traceability view (XCOH traceability)

The F1–F6 obligation→mechanism matrix of `shared/regulatory-applicability-EN.tex`
verifies as realised, with two exceptions (sub-score 80/100).

### Direction policy→solution (unrealised obligations)

| Id | Obligation (Policy side) | Missing mechanism (Solution side) | Severity |
|---|---|---|---|
| XCOH-f68743df | Responsibility/enclave charters — load-bearing in Propositions P5/P7, the companion's key messages, the federated-governance loop, and the F2 row | The token "charter" appears in no Technical Reference file; no zone-catalogue or wave-exit artefact realises it | MODERATE |

### Direction solution→policy (mechanisms whose policy obligation omits the provided conditions)

| Id | Mechanism (Solution side) | Policy-side gap | Severity |
|---|---|---|---|
| APP-d9618d3 | ch06 identity contract's no-federation fallback (`ch06-identity-EN.tex:83-89`) | Proposition 10 mandates federation unconditionally, omitting the fallback — undischargeable where no national federation operates | LOW |

**Orphaned Solution mechanisms** (mechanisms realising no Policy obligation): none found.

Related cross-document alignment findings that follow a trace direction without being
traceability gaps proper: LEG-3347f033, LEG-507dbd7d (solution→policy);
LEG-7e877e71, APP-b80369d (policy→solution); APP-5c8e5d0 (solution→policy).

---

## B2. Instance-audit view (INST findings by instance, then gate)

### Instance: `instantiations/lu-university-of-luxembourg/` (reference edition)

| Gate | Findings | State |
|---|---|---|
| BUILD | — | PASS: all four documents build clean under the deposited configuration. |
| COMPLETENESS | INST-4fbe80b2 (LOW) | Key coverage complete; the set.tex section-6 coverage note is stale and miscounted. |
| FIDELITY | INST-4cc1a1cf (MODERATE) | One hard-coded origin line in a single wrapper breaches the thin-shell contract; content legitimate, placement is the defect. |
| CURRENCY | INST-4b50d235 (HIGH), INST-47f3e9e5 (HIGH), INST-45020063 (MODERATE) | The edition no longer tracks the generic suite: forked inlined summary, four unbound doc-* title-block keys (placeholder leak imminent on re-sync), all four wrappers drifted from the generic preambles/title pages. |

Gate summary: the CURRENCY gate is failing (two HIGH findings); BUILD passes;
COMPLETENESS and FIDELITY pass with remarks. Root cause and remediation path:
RC-instance-currency.

### Instance: `instantiations/_TEMPLATE/`
Scaffold, not a deposited edition — audited only as the source of the thin-shell
contract; no canonical findings of its own.

---

## B3. Defensibility & rejection-resistance view (DEF findings by persona)

### CISO
| Id | Rejection vector | Current coverage |
|---|---|---|
| DEF-9e37ed00 (HIGH) | "Our cyber-insurer's questionnaire (EDR everywhere, no unmanaged admin rights, full perimeter inspection) forbids accountable researcher root and the Science DMZ — adopting SUIT voids our coverage." | None: insurance/underwriting is unmentioned suite-wide; the answering material (segmentation, MFA, observability, accountable root, ACL+IDS DMZ profile, charters as named risk owners) exists but is never assembled against this vector. |

### DPO
| Id | Rejection vector | Current coverage |
|---|---|---|
| LEG-bb4208eb (HIGH, merged DEF-15289ba5) | "Your own Q4.2 says the AI Act research exemption does not cover commercial-API use — yet your Wave-5 pilot invokes Art. 2(6) for exactly that." | Worse than a gap: the suite's two halves contradict each other, handing the objector the suite's own words; fixed by aligning ch23 to the canonical Q4.2/main-body framing. |
| DEF-77aabcb5 (MODERATE) | "Deployment of the observability pipeline without staff-representation consultation/co-determination is unlawful in our jurisdiction — the rollout halts at Wave 2." | Partial: Q8.4 covers individual proportionality (Barbulescu) and the ICRADP gives staff a governance seat; the collective labour-law precondition appears in no Q-item, wave precondition, or localization key. |

### CTO
| Id | Rejection vector | Current coverage |
|---|---|---|
| DEF-2103e86b (CRITICAL) | "You make identity and policy per-session single points of failure for the whole institution and state no availability targets, no HA topology, no fail-mode for PDP/IdP outage — a commercial SLA beats this." | None: no chapter or O-item engages availability of the self-operated critical planes; ch02 scopes out DR only. |
| DEF-fd5ee91b (MODERATE) | "Your only Crypto exit test — HSM key migration preserving cryptographic identity — is unsatisfiable for non-exportable trust-anchor keys; the Wave-1 exit gate can never be passed." | None: no wrap-export precondition in the ch13 contract, no alternative exit artefact defined. |
| DEF-5b8c6b81 (LOW) | "Open source is itself the supply-chain risk: unmaintained dependencies, no vendor CVE-response SLA, nobody to sue." | Scattered: the answer's pieces exist (Q8.5, O5.1, Q9.4, the sovereignty grid's Operational dimension) but no single O-item assembles them. |
| TECH-41812198 (MODERATE, merged DEF-0df1d0a6) | "Your defending Q&A module disagrees with the Reference it defends on both four-item sets — the conformance exercise looks self-graded." | Undermined-by-drift: the rebuttal logic is sound but the defence misnames the canonical replaceability conditions and conformance categories. |

### CIO
| Id | Rejection vector | Current coverage |
|---|---|---|
| CITE-8842bca6 (MODERATE, merged DEF-2a90f01f) | "Your board-level economic case rests on an 8-15% sector-spend benchmark whose citation does not contain the figure — the quantitative frame collapses on inspection." | Single-anchored: the benchmark's only citation does not evidence it at the cited URL, dropping the frame below the suite's own three-layer convergence rule until re-anchored. |

Verification record DEF-1d43ae52 (INFO): all other enumerated CISO/DPO/CTO/CIO
rejection vectors verify as eliminated or robustly pre-empted.

---

## B4. Settled by disposition

No canonical finding is settled by disposition: the dispositioned list is empty. The
standing accepted dispositions in `docs/dispositions.json` (DISPO-GRID-5DIM,
DISPO-ARCH-9LAYERS, DISPO-WAVES-10, DISPO-INVARIANCE, DISPO-ABSTRACT-LENGTH-ADVISORY,
DISPO-URL-FRESHNESS-ADVISORY, DISPO-TECHREF-NO-APPROVAL-LINE,
DISPO-MULTI-ENTITY-AFFILIATION-SINGLE-ROLE, DISPO-PACE-HORIZONS,
DISPO-LABELLED-LOCAL-EXAMPLES, DISPO-PRECEDENT-PANEL) were respected: no finding
re-raises an accepted deviation, and the LEG-8612a572 fix is worded to preserve the
ratified invariance message while correcting the legal mechanism.

---

## C. BLOCKING GATES

Every CRITICAL and HIGH finding blocks a release until remediated or formally
dispositioned in `docs/dispositions.json`.

| # | Id | Severity | One-line gate |
|---|---|---|---|
| 1 | DEF-2103e86b | CRITICAL | Availability/failure semantics of the self-operated identity and policy planes are unengineered and undefended. |
| 2 | DEF-9e37ed00 | HIGH | The cyber-insurance rejection vector is entirely unanswered. |
| 3 | TECH-dc26120f | HIGH | Seven hardcoded Chapter-5 cross-references are off by one. |
| 4 | XCOH-255bb89e | HIGH | The dossier's Ch.31 capsule re-leaks the 15 institution names the anonymized chapter removed. |
| 5 | LEG-8fef6364 | HIGH | Implementing Regulation 2024/2690 over-scoped as binding on universities. |
| 6 | LEG-bb4208eb | HIGH | Wave-5 pilot misapplies the AI Act research exemption and contradicts the suite's own Q4.2. |
| 7 | CITE-bc8406d2 | HIGH | A breach incident is attributed to the wrong university relative to its cited source. |
| 8 | APP-2e0b498 | HIGH | "pan-European" hard-coded onto the localized NREN key renders false prose in non-EU editions. |
| 9 | INST-4b50d235 | HIGH | LU edition's solution-summary wrapper is a stale fork of the generic summary. |
| 10 | INST-47f3e9e5 | HIGH | Four doc-* title-block keys unbound in the LU set.tex; placeholder leak imminent. |

---

## D. Diff summary

Neutral diff against the baseline finding set (`_AUDITS/2026-06-09-genericity/findings.json`;
provenance in `AUDIT-CHANGELOG.md`).

| Status | Count |
|---|---|
| New | 74 |
| Resolved | 103 |
| Regressed | 0 |
| Unchanged | 0 |

**New (74):** DEF-2103e86b, DEF-9e37ed00, TECH-dc26120f, XCOH-255bb89e, LEG-8fef6364,
LEG-bb4208eb, CITE-bc8406d2, APP-2e0b498, INST-4b50d235, INST-47f3e9e5, SCI-78f94649,
SCI-2515d068, SCI-0d9dfdff, TECH-41812198, TECH-d4d3a9d6, XCOH-030aedd4, XCOH-9e1161fd,
XCOH-44cc9a8e, XCOH-d810f76f, XCOH-cefea1ca, XCOH-c630d6a9, XCOH-a30dfa73,
XCOH-f68743df, XCOH-419ca4bc, LEG-60ad59bc, LEG-3347f033, LEG-645f6fcd, LEG-507dbd7d,
LEG-7e877e71, LEG-836cabba, LEG-8612a572, CITE-8842bca6, CITE-6a358c98, APP-5c8e5d0,
INST-45020063, INST-4cc1a1cf, DEF-fd5ee91b, DEF-77aabcb5, SCI-6df85895, SCI-e7eaf411,
SCI-3127b0a9, SCI-fc809139, SCI-7220fe72, SCI-f1fd2d3a, SCI-e1761640, TECH-96ae359c,
TECH-3d01eb5d, TECH-ae79e1ca, TECH-7830e17d, XCOH-878f33f2, XCOH-ba5c0388,
XCOH-f1ef774a, XCOH-ea6b9404, LEG-a76778dc, LEG-0eb021ce, LEG-11d5aacd, LEG-2ad40b28,
LEG-0a4ceaf2, LEG-3cbf3746, LEG-2b334d82, CITE-52a4fec9, APP-dcaec21, APP-f292d51,
APP-d9618d3, APP-b80369d, INST-4fbe80b2, DEF-5b8c6b81, SCI-2ea68f21, SCI-0b5c070a,
TECH-519e256d, LEG-OK-VERIFIED-BASE, CITE-aa80e781, CITE-4bafbd34, DEF-1d43ae52.

**Resolved (103):** GEN-c15size, GEN-eu-only-regulatory-frame, GEN-world-leading-norm-claim,
GEN-icradp-15day-48h-counts, GEN-doc-version-2.1-prose, GEN-eu-charter-default-binding-icradp,
GEN-french-jres-proposition, GEN-keybox-worldleading, GEN-vendor-ai-list, GEN-ref-univ-leading,
GEN-charters-leading, GEN-cobit-leading-gov, GEN-breaches-major-univ, GEN-q63bindinglaw,
GEN-q63charterart13, GEN-q83publicuniversity, GEN-q51gdprnothreshold, GEN-readerguideregime,
GEN-q91researchintensive, GEN-q83q85q86clockowner, GEN-unilu-origin, GEN-traj-ms-label,
GEN-traj-ms-ch04, GEN-ms-european-univ, GEN-traj-entra-ch23, GEN-traj-sentinel-ch20-ch25,
GEN-traj-ms-ench-ch18, GEN-ri-univ, GEN-ms-brownfield, GEN-dporeg33, GEN-arg-evinst-mit,
GEN-arg-evinst-norm, GEN-arg-evinst-lived, GEN-arg-nren-eu-us, GEN-arg-renater-restena-lockin,
GEN-arg-renisac-first, GEN-edugain-idtable, GEN-eduroam-coexist, GEN-ri-univ-spine,
GEN-ec02matrix-osset, GEN-geant-case1, GEN-geant-case3, GEN-24month-biennial,
GEN-most-universities-mutual-ignorance, GEN-eubrownfield-common, GEN-msft-centric-vendor,
GEN-research-intensive-hybrid, GEN-twentyfour-months, GEN-pace-horizons, GEN-r1typical-sizing,
GEN-r1typical-scope, GEN-id-entra-vendor, GEN-id-office-suite, GEN-id-fed-profile-loc,
GEN-id-staffing-handful, GEN-id-tenyears-hybrid, GEN-po-most-universities-novelty,
GEN-po-federated-governance-decades, GEN-po-d75-most-universities, GEN-co-nis2anchor,
GEN-co-nrencontext, GEN-st-eudat-eu, GEN-staffenv-ri, GEN-ob-most-eu-univ, GEN-nis2art21,
GEN-or-r1-envelope, GEN-edugain-fed, GEN-wavemap-counts, GEN-cadence-annual, GEN-intl-network,
GEN-msoft-trajectory-common, GEN-adopting-inst-type-hybrid, GEN-w0reg-eu, GEN-w1ms-vendor-prose,
GEN-w1-exit-80pct-magic, GEN-w2rwb-nren, GEN-w3pre-byod, GEN-w4-vendor-loc, GEN-w4-vendor-conf,
GEN-schremsii-egress, GEN-schremsii-artefact, GEN-aiact-applies, GEN-nren-fora, GEN-w7nis2univ,
GEN-w7nis2art21, GEN-w8reg-nis2, GEN-w8reg-iso-anchor, GEN-w9aiact53, GEN-paneuro-fed,
GEN-eduroam-pattern, GEN-eduroam-profile-inviolate, GEN-24-month-review, GEN-ip-educause-filter,
GEN-ip-shared-service-eu-nrens, GEN-ip-jisc-guidance, GEN-edu-na-precedent, GEN-renisac-rne,
GEN-eu-section-anchor-claims, GEN-nis2-sovereignty-dimension, GEN-ritype-spine, GEN-ren-isac,
GEN-phase2-network, GEN-cio-office-mapping.

**Regressed (0):** none. **Unchanged (0):** none.

Note: the baseline id namespace (GEN-*) belongs to a single-track genericity scope and
shares no stable ids with the eight-track canonical set; all 103 baseline ids have no
current confirmed match and are marked RESOLVED (including the 3 left-by-decision items,
whose standing decisions are now ratified in `docs/dispositions.json`), and all 74
canonical findings are NEW. Merged duplicate ids (SCI-9f7c1ace, CITE-3a7f52ac,
TECH-6a2be5bb, XCOH-89ad866f, DEF-15289ba5, DEF-0df1d0a6, DEF-2a90f01f) are represented
by their canonical survivors.
