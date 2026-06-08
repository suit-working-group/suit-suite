# SUIT Canonical Genericization Action Matrix

**Suite:** SUIT — Sustainable University IT Infrastructure & Technology  
**Generated:** 2026-06-09  
**Source:** docs/_matrix-candidates/ (49 candidate units + 7 completeness-critic _complete-* supplements; deep-read canonical merge)

This matrix is the single source of truth for genericising the SUIT document suite. One canonical decision per underlying anchor guarantees cross-document consistency: every occurrence of an anchor (across `SUITPOLICY`, `SUITPOLICYSUMMARY`, and `SUITSOLUTION`) is governed by the same `action` and the same `localizationVariable`. It drives P2.

## Guardrails honoured

- **Dispositions** (`docs/dispositions.json`): docs/dispositions.json — design constants (5-dim grid, 9 layers, 10 waves), invariance principle, advisory lengths, no-approval-line, multi-entity single-role are never flagged.
- **Safer default**: For any University-of-Luxembourg anchor, generalize/parameterize is preferred over keep; drop is avoided in favour of generalize except for jurisdiction-bound dates.

## Summary counts

| Metric | Value |
|---|---:|
| Canonical entries | 91 |
| Total occurrences clustered | 751 |
| parameterize | 46 |
| generalize | 37 |
| keep | 7 |
| drop | 1 |
| conflicts recorded | 50 |

## Canonical entries by kind

### Explicit institution identity (`institution`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-INSTITUTION-NAME` | parameterize | `INSTITUTION_NAME` | high | 22 | POL, SOL | the University of Luxembourg (Q5.1 questionbox: "The University of Luxembourg is a small i |

### Institutional units (`institution-unit`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-CS-UNIT` | parameterize | `CS_RESEARCH_UNIT` | high | 23 | POL, SOL | the Department of Computer Science, the SnT Centre, and the \gls{hpc} team (Q9.1 answer, S |
| `ANCHOR-SECURITY-RESEARCH-CENTRE` | parameterize | `SECURITY_RESEARCH_CENTRE` | high | 5 | POL | SnT / Interdisciplinary Centre for Security, Reliability and Trust |

### Institution type / profile (`institution-profile`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-HE-POPULATION-ASSUMPTION` | generalize | `—` | low | 2 | POL | Bring Your Own Device --- the practice of employees or students using personal devices to  |
| `ANCHOR-INSTITUTION-TYPE-PROFILE` | parameterize | `INSTITUTION_TYPE` | medium | 9 | SOL | The endpoint operating systems encountered at a typical research-intensive institution ... |

### Named persons (`person`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-AUTHOR-NAME` | parameterize | `AUTHOR_NAME` | medium | 3 | POL, SOL | Named ECtHR/CJEU judges (Sajo, Vucinic, Kuris concurring opinion) and named case-law parti |
| `ANCHOR-NATIONAL-EXECUTIVE-OFFICEHOLDER` | generalize | `—` | high | 2 | POL, SOL | deposited at the Chambre des Deputes on 13 March 2024 by Prime Minister Luc Frieden; with  |

### Author-to-affiliation bindings (`author-affiliation`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-AUTHOR-AFFILIATION` | parameterize | `AUTHOR_AFFILIATION` | high | 4 | POL, SOL | institution = {Department of Computer Science, University of Luxembourg, Luxembourg}; note |

### Suite artifacts & bibliography (`artifact`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-BIB-PATH` | parameterize | `INSTITUTION_NAME` | high | 5 | POL, SUMMARY | unilu-amenagements citation and any UL-specific bibliography keys (ilr-ul-essential, paris |

### Facilities, networks & federations (`facility`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-EUROHPC-SYSTEM` | parameterize | `NATIONAL_HPC_FACILITY` | high | 8 | POL, SOL | \institution{MeluXina} (EuroHPC) (Q3.4 answer); also in summary table Q3.4 row |
| `ANCHOR-GEANT-BACKBONE` | generalize | `—` | high | 6 | SOL | CERN SSO realworldbox: "CERN operates a Keycloak-based federated SSO ... presented in the  |
| `ANCHOR-IDENTITY-FEDERATION` | parameterize | `{{IDENTITY_FEDERATION_PROFILE}}` | medium | 6 | POL, SOL | Pervasive assumption of EU/EEA jurisdiction: GDPR, NIS2, AI Act, CER, Schrems II, EU Chart |
| `ANCHOR-INSTITUTION-HPC` | parameterize | `INSTITUTION_HPC_FACILITY` | high | 21 | POL | \institution{ULHPC} (Q3.4 answer, twice) |
| `ANCHOR-INTERNAL-EMERGENCY-CONTACT` | parameterize | `INTERNAL_EMERGENCY_INCIDENT_CONTACT` | medium | 1 | CONSOL | emergency 9911; AI meeting-recording classified as a data breach (DPO + CNPD). |
| `ANCHOR-NREN` | parameterize | `NREN_NAME` | high | 41 | POL, SUMMARY, SOL | University of Luxembourg (Q3.4 questionbox: "neither RESTENA nor the University of Luxembo |
| `ANCHOR-NREN-CSIRT` | parameterize | `NREN_CSIRT` | high | 14 | POL, SOL | RESTENA / \gls{restena} (appears throughout: Q3.4, Answer Q3.4, Q5.1, Q9.1, Q9.2, summary  |
| `ANCHOR-NREN-RESEARCH-CLOUD` | generalize | `NREN_RESEARCH_CLOUD` | medium | 2 | POL, SOL | compute/storage drawn from a national research cloud, an NREN service, or a managed provid |
| `ANCHOR-NREN-SERVICE-CATALOGUE` | generalize | `NREN_SERVICE_CATALOGUE` | high | 1 | POL | eduroam (GEANT); GEANT TCS; FER (RENATER); perfSONAR (ESnet/GEANT); Globus (U. Chicago). |
| `ANCHOR-PEER-NREN-ROSTER` | generalize | `PEER_NREN_ROSTER` | high | 1 | POL | DFN: German NREN with X-WiN and DFN-CERT; SWITCH: SWITCHaai/SWITCHdrive/SWITCHengines; JAN |
| `ANCHOR-RESEARCH-BACKBONE-SCALE` | parameterize | `RESEARCH_BACKBONE_SCALE` | medium | 1 | POL | 40+ NRENs, 50 million users, 10,000+ institutions, 400 Gbps wavelengths; multi-100 Gbps na |

### National regulators & authorities (`regulator`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-CYBER-COMPETENCE-CENTRE` | parameterize | `NATIONAL_CYBER_COMPETENCE_CENTRE` | medium | 5 | POL | MONARC (NC3 / Luxembourg House of Cybersecurity risk-analysis method); NC3; Luxembourg Hou |
| `ANCHOR-DPA` | parameterize | `NATIONAL_DPA` | high | 11 | POL, SOL | The CNIL or CNPD could still sanction insufficient security |
| `ANCHOR-FINANCIAL-SUPERVISOR` | generalize | `—` | medium | 5 | POL | CSSF (financial-sector supervisor) |
| `ANCHOR-GOV-CSIRT` | parameterize | `NATIONAL_GOV_CSIRT` | high | 7 | POL | GOVCERT.LU (governmental CSIRT) |
| `ANCHOR-NATIONAL-EXECUTIVE-DEPARTMENT` | parameterize | `NATIONAL_EXECUTIVE_DEPARTMENT` | medium | 2 | POL, SOL | HCPN ... placed under the authority of the Prime Minister within the Ministere d'Etat |
| `ANCHOR-NATIONAL-INFOSEC-AGENCY` | parameterize | `NATIONAL_INFOSEC_AGENCY` | high | 13 | POL, SOL | ANSSI Luxembourg / ANSSI-LU (national Agency for Information Systems Security) |
| `ANCHOR-NATIONAL-NOTIFICATION-PLATFORM` | parameterize | `NATIONAL_NOTIFICATION_PLATFORM` | high | 8 | POL, SUMMARY | SERIMA national incident-notification platform (operational since 2 May 2025) |
| `ANCHOR-NATIONAL-SPOC-HCPN` | parameterize | `NATIONAL_SPOC_AUTHORITY` | high | 4 | POL | NCSS III (third National Cybersecurity Strategy, 2018), Implementation Objective 7 (cooper |
| `ANCHOR-NIS2-SUPERVISORY-AUTH` ⚑ | parameterize | `NIS2_SUPERVISORY_AUTHORITY` | high | 25 | POL, SUMMARY, SOL | ILR / Institut Luxembourgeois de Régulation (national NIS2 supervisory authority) |
| `ANCHOR-PRIVATE-SECTOR-CSIRT` | generalize | `—` | medium | 7 | POL | CIRCL (CSIRT for private sector / communes / NGOs) |

> ⚑ `ANCHOR-NIS2-SUPERVISORY-AUTH` — DISPO-INVARIANCE (EU baseline is an anchor; substitute the local equivalent via the Localization Guide; minimal set itself does not scale)

### National methods/tools (`method`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-RISK-METHOD` | parameterize | `NATIONAL_RISK_METHOD` | medium | 1 | SOL | MONARC, ISO/IEC~27005, FAIR, or comparable |

### Legal instruments, regimes & transpositions (`legal`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-ADMIN-LAW` | generalize | `—` | high | 1 | POL | 'standard practice of administrative review under Luxembourg public law' |
| `ANCHOR-AI-REGIME` ⚑ | parameterize | `AI_REGULATION` | medium | 8 | SUMMARY, SOL | the approach is validated by ... EU regulations; ... GDPR Article 32 ... NIS2 ... AI Act . |
| `ANCHOR-CER-TRANSPOSITION` | parameterize | `CER_NATIONAL_TRANSPOSITION` | high | 6 | POL | project of law 8307 (Luxembourg CER Directive transposition), deposited 1 September 2023 |
| `ANCHOR-DATA-PROTECTION-REGIME` ⚑ | parameterize | `DATA_PROTECTION_REGIME` | medium | 7 | POL, SOL | 'universities receiving sensitive funding (notably US DoD)'; 'DoD-funded FFRDC'; CUI/HIPAA |
| `ANCHOR-EIDAS-REGIME` ⚑ | parameterize | `EID_TRUST_SERVICES_REGIME` | medium | 4 | SOL | Regulatory anchoring listing GDPR Art. 32(1)(b), NIS2 Art. 21(2), eIDAS 2, ISO 27001 contr |
| `ANCHOR-EQUAL-TREATMENT-LAW` | parameterize | `NATIONAL_EQUAL_TREATMENT_LAW` | high | 8 | POL | Luxembourg Law of 28 November 2006 (transposing Directive 2000/78/EC) |
| `ANCHOR-ESSENTIAL-ENTITY-CLASSIFICATION` | parameterize | `ESSENTIAL_ENTITY_CLASSIFICATION_BASIS` | high | 11 | POL, SOL | '\gls{nis2} essential-entity regime' applied to 'the University' as a settled status; prin |
| `ANCHOR-HCPN-FOUNDING-LAW` | parameterize | `NATIONAL_CYBER_COMMISSARIAT_FOUNDING_LAW` | high | 2 | POL, SOL | Luxembourg's High Commissariat for National Protection, established under the loi modifiee |
| `ANCHOR-NATIONAL-CYBER-STRATEGY` | parameterize | `NATIONAL_CYBER_STRATEGY` | high | 4 | POL | NCSS III (National Cybersecurity Strategy III, 2018), Implementation Objective 7 |
| `ANCHOR-NIS-REGIME` ⚑ | parameterize | `CYBERSECURITY_BASELINE_REGIME` | medium | 15 | POL, SOL | 'binding law in the EU and in the Council of Europe member states (including Luxembourg)'  |
| `ANCHOR-NIS2-TRANSPOSITION` ⚑ | parameterize | `NIS2_NATIONAL_TRANSPOSITION` | high | 15 | POL, SUMMARY, SOL | "its statutory security obligations, including those under NIS2" and "For a public univers |
| `ANCHOR-REGULATORY-STACK` ⚑ | parameterize | `REGULATORY_REGIME` | high | 10 | POL, SOL | binding law in the EU and in the Council of Europe member states (including Luxembourg) |
| `ANCHOR-STATE-INFOSEC-POLICY` | parameterize | `NATIONAL_PUBLIC_SECTOR_ISP` | high | 4 | POL | PSI-LU (Politique générale de la sécurité de l'information de l'État luxembourgeois), appr |
| `ANCHOR-TRANSFER-REGIME` ⚑ | parameterize | `CROSS_BORDER_TRANSFER_REGIME` | medium | 11 | POL, SOL | Regulatory mapping ... regulations most likely to apply to a research-intensive university |

> ⚑ `ANCHOR-AI-REGIME` — DISPO-INVARIANCE (EU baseline is an anchor; substitute the local equivalent via the Localization Guide; minimal set itself does not scale)

> ⚑ `ANCHOR-DATA-PROTECTION-REGIME` — DISPO-INVARIANCE (EU baseline is an anchor; substitute the local equivalent via the Localization Guide; minimal set itself does not scale)

> ⚑ `ANCHOR-EIDAS-REGIME` — DISPO-INVARIANCE (EU baseline is an anchor; substitute the local equivalent via the Localization Guide; minimal set itself does not scale)

> ⚑ `ANCHOR-NIS-REGIME` — DISPO-INVARIANCE (EU baseline is an anchor; substitute the local equivalent via the Localization Guide; minimal set itself does not scale)

> ⚑ `ANCHOR-NIS2-TRANSPOSITION` — DISPO-INVARIANCE (EU baseline is an anchor; substitute the local equivalent via the Localization Guide; minimal set itself does not scale)

> ⚑ `ANCHOR-REGULATORY-STACK` — DISPO-INVARIANCE (EU baseline is an anchor; substitute the local equivalent via the Localization Guide; minimal set itself does not scale)

> ⚑ `ANCHOR-TRANSFER-REGIME` — DISPO-INVARIANCE (EU baseline is an anchor; substitute the local equivalent via the Localization Guide; minimal set itself does not scale)

### Jurisdiction-neutral standards (`standard`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-STANDARDS-GENERIC` | keep | `—` | medium | 4 | SOL | SSSD, realmd, AD/LDAP, OIDC, Apple Platform SSO, Jamf Connect, Entra ID, Conditional Acces |

### Governance bodies (`governance-body`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-ACADEMIC-BODIES` | parameterize | `ACADEMIC_GOVERNING_BODIES` | high | 2 | POL | Faculty Council, University Council (as named institutional Bodies) |
| `ANCHOR-DATA-STEWARDS-MODEL` | generalize | `—` | medium | 1 | POL | Formalize autonomy through enclave charters (ETH Zurich / Oxford model) and Data Stewards  |
| `ANCHOR-DIGITAL-POLICY-COMMISSION` | keep | `—` | low | 4 | POL | "the Digital Policy Commission" (Q2.1, Q2.3, Q2.4, Q6.x, Q8.1, Q9.1, Q9.3 — the proposal's |
| `ANCHOR-ETH-ADMIN-RIGHTS-AGREEMENT` | generalize | `—` | medium | 3 | POL, SOL | Key innovation --- the Administrator Rights Agreement: ... ETH Zurich has formalised root  |
| `ANCHOR-EXECUTIVE-LEADERSHIP` | parameterize | `EXECUTIVE_LEADERSHIP` | high | 4 | POL, SOL | Rectorate / Rector / president/rector / vice-president for teaching |
| `ANCHOR-GOVERNING-BOARD` | parameterize | `GOVERNING_BOARD` | high | 19 | POL, SUMMARY, SOL | "the governing bodies" / "the board" / "the board cannot decide" / "a board still needs an |

### Governance shape & roles (`governance-shape`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-CIO-CISO-ROLE` | generalize | `—` | low | 4 | POL, SOL | the CIO ... a CIO could note that the economic case has not been framed / leaving the prec |
| `ANCHOR-GOVERNANCE-SHAPE` | generalize | `—` | medium | 30 | POL, SOL | the \gls{icradp} / ICRADP (Independent Commission for Reasonable Adjustments; fr: CARPN) . |
| `ANCHOR-GOVINST-DPC-COMPOSITION` | generalize | `ACADEMIC_GOVERNING_BODIES` | medium | 2 | POL, SUMMARY | Chair: an elected academic ...; Advisory (non-voting): CIO, CISO, DPO, student representat |
| `ANCHOR-SINGLE-OWNER-STATUTORY-CLOCK` | keep | `—` | low | 2 | POL | The central \gls{soc} owns the \gls{nis2} Article~23 reporting clock ... a single, account |

### Named precedents, incidents & peers (`precedent`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-ADJUSTMENTS-COMMITTEE` | generalize | `—` | high | 18 | POL, SOL | the University of Luxembourg's existing Committee for Reasonable Adjustments (Q6.2 answer: |
| `ANCHOR-PEER-BREACH-INCIDENTS` | generalize | `—` | high | 27 | POL, SUMMARY, SOL, BOOKPUB | Country/jurisdiction binding: "binding law in the EU and in the Council of Europe member s |
| `ANCHOR-PEER-GOVERNANCE-COMMITTEES` | generalize | `—` | medium | 2 | POL | Oxford's Information and Digital Committee~\cite{oxford-infosec}; Michigan IT Council~\cit |
| `ANCHOR-PEER-INSTITUTION-ROSTER` | generalize | `—` | high | 12 | POL, SUMMARY, SOL | MIT has a $24 billion endowment |
| `ANCHOR-RESEARCH-INFRA-EXEMPLAR` | generalize | `—` | low | 1 | POL | Worldwide LHC Computing Grid --- distributed computing infrastructure for processing data  |
| `ANCHOR-RESEARCH-PEERS` | generalize | `—` | high | 12 | POL, SUMMARY, SOL | Non-deployment is consistent with a Luxembourg-specific pattern: a small ecosystem, a limi |

### Scale comparators (`comparator`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-SCALE-COMPARATOR` | generalize | `—` | medium | 4 | POL, SOL | Smallness premise: "Luxembourg's research ecosystem (...) is too small for three separate  |

### Acronyms (suite/bilingual) (`acronym`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-ICRADP-CARPN` | generalize | `—` | medium | 11 | POL, SUMMARY | ICRADP / \gls{icradp} and "CARPN" (section title: "Questions on the ICRADP (Independent Co |

### Monetary amounts (`amount`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-SANCTION-CEILING` | parameterize | `NIS2_SANCTION_CEILING` | high | 3 | POL | 'sanctions up to EUR 10 M or 2% of annual turnover' |

### Cost, funding & staffing (`cost`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-FTE-ENVELOPE` | parameterize | `STAFFING_PROFILE` | medium | 24 | POL, SOL | 'In a country that is among the wealthiest in the world, and whose governance bodies set e |
| `ANCHOR-FUNDING-PROGRAMME` | generalize | `—` | medium | 14 | POL, SUMMARY, SOL | "no European equivalent to the NSF CC* programme" / absence of an NSF-CC*-style national f |
| `ANCHOR-IT-SPEND-BENCHMARK` | keep | `—` | low | 3 | POL | "central-IT spend on the order of USD 1,600 per student FTE" and information-security spen |

### Vendor & product instances (`vendor`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-DOMINANT-SUITE-VENDOR` | generalize | `—` | high | 17 | SOL | three trajectories per wave (greenfield, brownfield Microsoft-centric, brownfield hybrid) |
| `ANCHOR-EU-CLOUD-PROVIDERS` | generalize | `—` | low | 1 | POL | Examples of 'European providers (e.g. Mistral, OVH, Scaleway)' as EU-first preference |
| `ANCHOR-GLOSSARY-PRODUCT-EXEMPLARS` | generalize | `—` | low | 3 | POL | Network Access Control --- ... (e.g., PacketFence, Cisco ISE). |
| `ANCHOR-MDM-PRODUCT-MIX` | generalize | `—` | low | 4 | SOL | \institution{iOS} and \institution{Android} |
| `ANCHOR-NETWORK-VENDOR-LIST` | generalize | `—` | medium | 13 | SOL | Industrial OPA deployments publicly described at organisations including Netflix, Capital  |
| `ANCHOR-OPA-INDUSTRIAL-USERS` | generalize | `—` | medium | 1 | SOL | publicly described at organisations including Netflix, Capital One and Pinterest |
| `ANCHOR-OSS-IMPL-EXAMPLES` | generalize | `—` | medium | 6 | SOL | OpenStack provides multi-tenant virtual-machine and bare-metal provisioning at the institu |
| `ANCHOR-PROPRIETARY-IDP` | parameterize | `INCUMBENT_IDENTITY_SUITE_VENDOR` | medium | 8 | SOL | Case 2 --- Pure commercial (Microsoft Entra ID with Conditional Access) ... An Entra~ID te |
| `ANCHOR-SIEM-PRODUCT` | generalize | `—` | medium | 5 | SOL | the canonical TAC schema of \trchap{ch:observability}{} (\S\ref{sec:ob-schema}) |

### Suite-internal constructs & cross-references (`suite-internal`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-PHASE2-NETWORK` | generalize | `—` | medium | 15 | SOL | the international university network anticipated in phase~2 of the SUIT initiative |
| `ANCHOR-SELF-REFERENCE-COUNTS` ⚑ | keep | `—` | high | 4 | POL, SUMMARY, SOL | '29 frequently raised questions' / '16 court decisions and legal instruments' / 'over 100  |
| `ANCHOR-SUITE-CROSSREF` | keep | `—` | high | 23 | POL, SOL | ng-tech-ref-2026 companion 'Technical Reference' cross-references (Chapters 2, 3, 7, 8, 10 |
| `ANCHOR-TAC-CONSTRUCT` | keep | `—` | high | 6 | SOL, POL | \institution{...}, \keyword{...}, \framework{...}, \gls{tac}, \trchap{...} |

> ⚑ `ANCHOR-SELF-REFERENCE-COUNTS` — DISPO-GRID-5DIM / DISPO-ARCH-9LAYERS / DISPO-WAVES-10 (design constants not to be flagged)

### Organisational typology (`org-typology`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-ORG-UNIT-TERM` | generalize | `—` | medium | 15 | POL, SOL | research-only units, research-and-teaching departments, teaching/training-only components |

### Site/campus & deployment topology (`topology`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-SELF-HOST-CUSTODY` | generalize | `{{DEPLOYMENT_CUSTODY_MODEL}}` | medium | 3 | SOL | The reference instantiation comprises a self-hosted Keycloak deployment, integrated with t |
| `ANCHOR-SINGLE-CAMPUS` | generalize | `—` | low | 15 | POL, SOL | 'campus perimeter' / 'campus network core' / 'on-campus' singular-campus framing |

### Jurisdiction-bound dates (`date`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-NATIONAL-DATES` | drop | `—` | medium | 1 | POL | 'notified on 3 April 2026'; 'operational since 2 May 2025'; 'approved by the Government Co |

### LaTeX macro sets (`macro`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-INSTITUTION-MACRO-SET` | parameterize | `INSTITUTION_MACRO_SET` | medium | 1 | SOL | service-management framework is built on ITIL or COBIT ... a wave is a change programme, a |

### Jurisdiction / region (`jurisdiction`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-CRPD-RATIFICATION` | generalize | `—` | medium | 1 | POL | CRPD "ratified by the EU and by Luxembourg" |
| `ANCHOR-JURISDICTION` | generalize | `—` | high | 21 | POL, SOL | binding law in the EU and in the Council of Europe member states (including Luxembourg) |
| `ANCHOR-NATIONAL-LEGISLATIVE-CHAMBER` | parameterize | `NATIONAL_LEGISLATURE` | high | 2 | POL, SOL | Chambre des Deputes du Grand-Duche de Luxembourg; deposited at the Chambre des Deputes on  |
| `ANCHOR-ONPREM-KEY-CUSTODY` | parameterize | `{{DATA_CUSTODY_SOVEREIGNTY_PROFILE}}` | medium | 3 | SOL | On-premises storage, institutional key custody, no third-country disclosure regime. |

### implicit-named-entities-pilot (`implicit-named-entities-pilot`)

| id | action | localization variable | conf. | occ. | documents | representative surface form |
|---|---|---|---|---:|---|---|
| `ANCHOR-PILOT-ENTITIES` | parameterize | `PILOT_ENTITIES` | high | 6 | POL, SUMMARY, SOL | "the university's HPC team" / ULHPC (\institution{ULHPC}); ULHPC data-transfer documentati |

## Localization-variable table

Every `parameterize` anchor and its canonical variable. The Localization Guide binds these per adopting institution.

| localization variable | anchor id | anchor | total occurrences |
|---|---|---|---:|
| `ACADEMIC_GOVERNING_BODIES` | `ANCHOR-ACADEMIC-BODIES` | Academic deliberative bodies (Faculty/University Council) | 2 |
| `AI_REGULATION` | `ANCHOR-AI-REGIME` | AI-governance regime (EU AI Act) | 8 |
| `AUTHOR_AFFILIATION` | `ANCHOR-AUTHOR-AFFILIATION` | Author-to-affiliation binding (named contact + UL host unit + uni.lu email) in metadata, self-citation bib, citation line and PDF properties | 4 |
| `AUTHOR_NAME` | `ANCHOR-AUTHOR-NAME` | Named author / contact person | 3 |
| `CER_NATIONAL_TRANSPOSITION` | `ANCHOR-CER-TRANSPOSITION` | National CER transposition law (PL 8307) | 6 |
| `CROSS_BORDER_TRANSFER_REGIME` | `ANCHOR-TRANSFER-REGIME` | Cross-border data-transfer regime (Schrems II) | 11 |
| `CS_RESEARCH_UNIT` | `ANCHOR-CS-UNIT` | Computer Science department (pilot/host unit) | 23 |
| `CYBERSECURITY_BASELINE_REGIME` | `ANCHOR-NIS-REGIME` | Cybersecurity baseline regime (NIS2) | 15 |
| `DATA_PROTECTION_REGIME` | `ANCHOR-DATA-PROTECTION-REGIME` | Data-protection regime (GDPR) | 7 |
| `EID_TRUST_SERVICES_REGIME` | `ANCHOR-EIDAS-REGIME` | eID / trust-services regime (eIDAS 2) | 4 |
| `ESSENTIAL_ENTITY_CLASSIFICATION_BASIS` | `ANCHOR-ESSENTIAL-ENTITY-CLASSIFICATION` | Essential-entity classification status & basis | 11 |
| `EXECUTIVE_LEADERSHIP` | `ANCHOR-EXECUTIVE-LEADERSHIP` | Executive leadership (Rectorate/Rector) | 4 |
| `GOVERNING_BOARD` | `ANCHOR-GOVERNING-BOARD` | Top governing board (Board of Governors) | 19 |
| `INCUMBENT_IDENTITY_SUITE_VENDOR` | `ANCHOR-PROPRIETARY-IDP` | Incumbent proprietary identity suite (Entra ID / Conditional Access) | 8 |
| `INSTITUTION_HPC_FACILITY` | `ANCHOR-INSTITUTION-HPC` | Institutional HPC facility/team (ULHPC) | 21 |
| `INSTITUTION_MACRO_SET` | `ANCHOR-INSTITUTION-MACRO-SET` | \institution{} macro set expanding to UL terms | 1 |
| `INSTITUTION_NAME` | `ANCHOR-BIB-PATH` | UL-suite bibliography path & citation keys | 5 |
| `INSTITUTION_NAME` | `ANCHOR-INSTITUTION-NAME` | Subject institution name (University of Luxembourg) | 22 |
| `INSTITUTION_TYPE` | `ANCHOR-INSTITUTION-TYPE-PROFILE` | Reference institution type/profile (R1/research-intensive) | 9 |
| `INTERNAL_EMERGENCY_INCIDENT_CONTACT` | `ANCHOR-INTERNAL-EMERGENCY-CONTACT` | Institution-specific internal emergency incident-reporting number (9911) | 1 |
| `NATIONAL_CYBER_COMMISSARIAT_FOUNDING_LAW` | `ANCHOR-HCPN-FOUNDING-LAW` | National founding statute of the cyber-resilience commissariat (loi modifiee du 23 juillet 2016 establishing HCPN/ANSSI-LU) | 2 |
| `NATIONAL_CYBER_COMPETENCE_CENTRE` | `ANCHOR-CYBER-COMPETENCE-CENTRE` | National cyber competence centre (NC3 / House of Cybersecurity) | 5 |
| `NATIONAL_CYBER_STRATEGY` | `ANCHOR-NATIONAL-CYBER-STRATEGY` | National cybersecurity strategy (NCSS III) | 4 |
| `NATIONAL_DPA` | `ANCHOR-DPA` | National data-protection authority (CNPD) | 11 |
| `NATIONAL_EQUAL_TREATMENT_LAW` | `ANCHOR-EQUAL-TREATMENT-LAW` | National equal-treatment / anti-discrimination law (Law of 28 Nov 2006) | 8 |
| `NATIONAL_EXECUTIVE_DEPARTMENT` | `ANCHOR-NATIONAL-EXECUTIVE-DEPARTMENT` | National executive department hosting the cyber-resilience commissariat (Ministere d'Etat / authority of the Prime Minister) | 2 |
| `NATIONAL_GOV_CSIRT` | `ANCHOR-GOV-CSIRT` | Governmental CSIRT (GOVCERT.LU) | 7 |
| `NATIONAL_HPC_FACILITY` | `ANCHOR-EUROHPC-SYSTEM` | National/regional supercomputer (MeluXina/EuroHPC) | 8 |
| `NATIONAL_INFOSEC_AGENCY` | `ANCHOR-NATIONAL-INFOSEC-AGENCY` | National information-security agency (ANSSI-LU) | 13 |
| `NATIONAL_LEGISLATURE` | `ANCHOR-NATIONAL-LEGISLATIVE-CHAMBER` | National legislative chamber as deposit / enactment venue (Chambre des Deputes du Grand-Duche de Luxembourg) | 2 |
| `NATIONAL_NOTIFICATION_PLATFORM` | `ANCHOR-NATIONAL-NOTIFICATION-PLATFORM` | National incident-notification platform (SERIMA) | 8 |
| `NATIONAL_PUBLIC_SECTOR_ISP` | `ANCHOR-STATE-INFOSEC-POLICY` | State public-sector information-security policy (PSI-LU) | 4 |
| `NATIONAL_RISK_METHOD` | `ANCHOR-RISK-METHOD` | National risk-analysis method (MONARC) | 1 |
| `NATIONAL_SPOC_AUTHORITY` | `ANCHOR-NATIONAL-SPOC-HCPN` | NIS2 national single point of contact (HCPN) | 4 |
| `NIS2_NATIONAL_TRANSPOSITION` | `ANCHOR-NIS2-TRANSPOSITION` | National NIS2 transposition law (PL 8364) | 15 |
| `NIS2_SANCTION_CEILING` | `ANCHOR-SANCTION-CEILING` | Regulatory sanction ceiling (EUR amount) | 3 |
| `NIS2_SUPERVISORY_AUTHORITY` | `ANCHOR-NIS2-SUPERVISORY-AUTH` | NIS2 supervisory authority (ILR) | 25 |
| `NREN_CSIRT` | `ANCHOR-NREN-CSIRT` | NREN security team (RESTENA-CSIRT) | 14 |
| `NREN_NAME` | `ANCHOR-NREN` | National research & education network (RESTENA) | 41 |
| `PILOT_ENTITIES` | `ANCHOR-PILOT-ENTITIES` | Pilot entity set | 6 |
| `REGULATORY_REGIME` | `ANCHOR-REGULATORY-STACK` | Composite regulatory regime / national transposition | 10 |
| `RESEARCH_BACKBONE_SCALE` | `ANCHOR-RESEARCH-BACKBONE-SCALE` | Region-bound research-backbone scale and capacity figures (GEANT 40+ NRENs / 50M users / 10,000+ institutions / 400 Gbps; RENATER multi-100 Gbps) | 1 |
| `SECURITY_RESEARCH_CENTRE` | `ANCHOR-SECURITY-RESEARCH-CENTRE` | Security research centre (SnT) | 5 |
| `STAFFING_PROFILE` | `ANCHOR-FTE-ENVELOPE` | Staffing/FTE envelopes, cadences & windows | 24 |
| `{{DATA_CUSTODY_SOVEREIGNTY_PROFILE}}` | `ANCHOR-ONPREM-KEY-CUSTODY` | On-premises key custody / no-third-country-disclosure as the structural data-sovereignty optimum | 3 |
| `{{IDENTITY_FEDERATION_PROFILE}}` | `ANCHOR-IDENTITY-FEDERATION` | Identity interfederation (eduGAIN) | 6 |

## Conflicts

50 anchors had candidates that disagreed on the action. Per the guardrail, **generalize/parameterize is preferred over keep for any University-of-Luxembourg anchor**, and **generalize is preferred over drop** (except jurisdiction-bound dates). The `chosen` column is the canonical decision. The 20 completeness-critic entries merged in this pass were appended as clean, non-conflicting rows (new anchors or new occurrences attached to existing anchors), so the conflict set is unchanged.

| anchor id | anchor | candidate options (action×count) | chosen (safer default) |
|---|---|---|---|
| `ANCHOR-AUTHOR-NAME` | Named author / contact person | keep×1; parameterize×2 | **parameterize** |
| `ANCHOR-BIB-PATH` | UL-suite bibliography path & citation keys | generalize×2; keep×1; parameterize×2 | **parameterize** |
| `ANCHOR-CS-UNIT` | Computer Science department (pilot/host unit) | drop×2; generalize×6; keep×1; parameterize×14 | **parameterize** |
| `ANCHOR-SECURITY-RESEARCH-CENTRE` | Security research centre (SnT) | generalize×2; parameterize×3 | **parameterize** |
| `ANCHOR-PILOT-ENTITIES` | Pilot entity set | generalize×2; keep×3; parameterize×1 | **parameterize** |
| `ANCHOR-INSTITUTION-HPC` | Institutional HPC facility/team (ULHPC) | generalize×2; parameterize×19 | **parameterize** |
| `ANCHOR-EUROHPC-SYSTEM` | National/regional supercomputer (MeluXina/EuroHPC) | keep×3; parameterize×5 | **parameterize** |
| `ANCHOR-NREN-CSIRT` | NREN security team (RESTENA-CSIRT) | generalize×1; keep×1; parameterize×12 | **parameterize** |
| `ANCHOR-NREN` | National research & education network (RESTENA) | generalize×9; keep×18; parameterize×11 | **parameterize** |
| `ANCHOR-RESEARCH-PEERS` | National peer research institutions (LIST/LIH) | generalize×5; keep×3; parameterize×4 | **generalize** |
| `ANCHOR-IDENTITY-FEDERATION` | Identity interfederation (eduGAIN) | generalize×1; keep×2; parameterize×3 | **parameterize** |
| `ANCHOR-NIS2-SUPERVISORY-AUTH` | NIS2 supervisory authority (ILR) | drop×1; generalize×1; keep×1; parameterize×22 | **parameterize** |
| `ANCHOR-NATIONAL-INFOSEC-AGENCY` | National information-security agency (ANSSI-LU) | keep×6; parameterize×7 | **parameterize** |
| `ANCHOR-PRIVATE-SECTOR-CSIRT` | Private-sector CSIRT (CIRCL) | drop×5; parameterize×2 | **generalize** |
| `ANCHOR-NATIONAL-NOTIFICATION-PLATFORM` | National incident-notification platform (SERIMA) | generalize×1; parameterize×7 | **parameterize** |
| `ANCHOR-CYBER-COMPETENCE-CENTRE` | National cyber competence centre (NC3 / House of Cybersecurity) | drop×1; generalize×1; parameterize×3 | **parameterize** |
| `ANCHOR-NIS2-TRANSPOSITION` | National NIS2 transposition law (PL 8364) | generalize×2; keep×2; parameterize×11 | **parameterize** |
| `ANCHOR-ESSENTIAL-ENTITY-CLASSIFICATION` | Essential-entity classification status & basis | generalize×2; keep×4; parameterize×5 | **parameterize** |
| `ANCHOR-DIGITAL-POLICY-COMMISSION` | Digital Policy Commission (proposal governance body) | keep×3; parameterize×1 | **keep** |
| `ANCHOR-GOVERNING-BOARD` | Top governing board (Board of Governors) | drop×1; generalize×2; keep×4; parameterize×12 | **parameterize** |
| `ANCHOR-EXECUTIVE-LEADERSHIP` | Executive leadership (Rectorate/Rector) | generalize×2; parameterize×2 | **parameterize** |
| `ANCHOR-CIO-CISO-ROLE` | CIO/CISO/DPO operational roles | keep×3; parameterize×1 | **generalize** |
| `ANCHOR-GOVERNANCE-SHAPE` | Generic institutional governance shape/cadence | generalize×12; keep×14; parameterize×4 | **generalize** |
| `ANCHOR-ADJUSTMENTS-COMMITTEE` | Existing reasonable-adjustments committee (internal precedent) | drop×1; generalize×6; keep×6; parameterize×5 | **generalize** |
| `ANCHOR-ICRADP-CARPN` | ICRADP / CARPN suite-defined commission acronym | generalize×4; keep×2; parameterize×4 | **generalize** |
| `ANCHOR-PEER-BREACH-INCIDENTS` | Named peer-university breach/containment cases | generalize×2; keep×12; parameterize×8 | **generalize** |
| `ANCHOR-PEER-INSTITUTION-ROSTER` | Reference-panel peer-institution roster | generalize×5; keep×4; parameterize×3 | **generalize** |
| `ANCHOR-SCALE-COMPARATOR` | Institution scale/track-record comparators | generalize×2; parameterize×2 | **generalize** |
| `ANCHOR-TRANSFER-REGIME` | Cross-border data-transfer regime (Schrems II) | generalize×4; keep×3; parameterize×4 | **parameterize** |
| `ANCHOR-EIDAS-REGIME` | eID / trust-services regime (eIDAS 2) | generalize×1; parameterize×3 | **parameterize** |
| `ANCHOR-AI-REGIME` | AI-governance regime (EU AI Act) | keep×2; parameterize×6 | **parameterize** |
| `ANCHOR-NIS-REGIME` | Cybersecurity baseline regime (NIS2) | generalize×1; keep×5; parameterize×9 | **parameterize** |
| `ANCHOR-DATA-PROTECTION-REGIME` | Data-protection regime (GDPR) | generalize×2; parameterize×5 | **parameterize** |
| `ANCHOR-REGULATORY-STACK` | Composite regulatory regime / national transposition | generalize×3; keep×2; parameterize×3 | **parameterize** |
| `ANCHOR-IT-SPEND-BENCHMARK` | Sourced IT/security spend benchmark | keep×2; parameterize×1 | **keep** |
| `ANCHOR-FUNDING-PROGRAMME` | National/regional funding programme & agreement | generalize×10; keep×4 | **generalize** |
| `ANCHOR-FTE-ENVELOPE` | Staffing/FTE envelopes, cadences & windows | drop×1; generalize×1; keep×14; parameterize×8 | **parameterize** |
| `ANCHOR-PROPRIETARY-IDP` | Incumbent proprietary identity suite (Entra ID / Conditional Access) | generalize×2; keep×6 | **parameterize** |
| `ANCHOR-DOMINANT-SUITE-VENDOR` | Dominant incumbent commercial suite (Microsoft) | generalize×8; keep×3; parameterize×6 | **generalize** |
| `ANCHOR-SIEM-PRODUCT` | Observability/SIEM product instance | generalize×1; keep×3; parameterize×1 | **generalize** |
| `ANCHOR-NETWORK-VENDOR-LIST` | Named network/security vendor enumerations | generalize×5; keep×8 | **generalize** |
| `ANCHOR-OSS-IMPL-EXAMPLES` | Open-source reference implementations (Keycloak/OPA/Ceph...) | generalize×3; keep×3 | **generalize** |
| `ANCHOR-PHASE2-NETWORK` | Phase-2 international university network (initiative construct) | generalize×11; keep×2; parameterize×2 | **generalize** |
| `ANCHOR-SUITE-CROSSREF` | Internal suite cross-references & deliverable codes | generalize×3; keep×16; parameterize×4 | **keep** |
| `ANCHOR-SELF-REFERENCE-COUNTS` | Self-referential design-constant counts | generalize×2; keep×2 | **generalize** |
| `ANCHOR-ORG-UNIT-TERM` | Organisational sub-unit terminology (faculty/department) | generalize×11; parameterize×4 | **generalize** |
| `ANCHOR-INSTITUTION-TYPE-PROFILE` | Reference institution type/profile (R1/research-intensive) | generalize×3; keep×4; parameterize×2 | **parameterize** |
| `ANCHOR-SINGLE-CAMPUS` | Single-campus / single-site topology assumption | generalize×11; keep×2; parameterize×2 | **generalize** |
| `ANCHOR-INSTITUTION-NAME` | Subject institution name (University of Luxembourg) | generalize×3; keep×3; parameterize×16 | **parameterize** |
| `ANCHOR-JURISDICTION` | Home jurisdiction / region (Luxembourg / EU) | generalize×11; keep×4; parameterize×6 | **generalize** |

> Rationale (uniform): Members disagreed on the action for this anchor. Per the genericization guardrail, generalize/parameterize is preferred over keep for any University-of-Luxembourg anchor; the safer default was selected.
