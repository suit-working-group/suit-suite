---
paths:
  - "**"
---

# University IT Infrastructure & Policy Domain (SUIT)

This domain rule applies across the whole SUIT repository. The SUIT documents are
institution-neutral and jurisdiction-neutral by design: the body uses role-based,
vendor-neutral language, and any remaining local anchor must carry a substitution
path via the Localization Guide in `shared/`. Cite frameworks and law at the level
that holds for any adopting university, not for a single country.

## Reference Frameworks (always cite by specific version/clause)
- **NIST CSF 2.0**: Functions (GV, ID, PR, DE, RS, RC) — cite specific function
- **NIST SP 800-53 Rev. 5**: Control families — cite specific control (e.g., AC-4, SC-7)
- **NIST SP 800-207**: Zero Trust Architecture principles
- **NIST SP 800-171 Rev. 3**: CUI / controlled-data protection requirements
- **ISO/IEC 27001:2022**: Clauses and Annex A controls (e.g., A.8.22 network segregation)
- **ISO/IEC 27002:2022**: Implementation guidance for the Annex A controls
- **COBIT 2019**: Governance (EDM) and Management (APO, BAI, DSS, MEA) objectives
- **FAIR**: Risk quantification methodology

## EU Regulatory Baseline (lowest-common-denominator for European adopters)
Cite the Union instrument itself, not any single national transposition. When a
national transposition is genuinely needed as an example, scope it explicitly and
give the substitution path via the Localization Guide.
- **GDPR**: Article 32 (risk-based security), Article 35 (DPIA), Article 25 (by design)
- **NIS2 Directive**: Essential vs. important entities, incident reporting, supply-chain security
  (note: thresholds and competent-authority designation are set per Member State at transposition)
- **AI Act**: Articles 2(6) and 2(8) research exemptions, risk-based classification
- **EU Charter**: Articles 7-8 (privacy/data), 10-11 (thought/expression), 13 (academic freedom)
- **ECHR**: Articles 8 (private life), 9 (conscience), 10 (expression)

> For non-EU adopters, treat the EU baseline as one reference regime and map it to
> the local equivalent (e.g., sector privacy law, national cybersecurity statute,
> data-protection authority) through the Localization Guide rather than hard-coding
> any one jurisdiction into the document body.

## Key Case Law
- **CJEU**: Schrems I & II (data transfers), DRI (data retention), Scarlet Extended (filtering)
- **ECtHR**: Barbulescu (workplace surveillance, 6-criteria test), Sorguc/Erdogan (academic expression), Yildirim (internet blocking)
- **Disability / reasonable accommodation**: Chacon Navas, Ring & Skouboe Werge

## Reference Institutions (multi-university precedent list)
When citing university practices, prefer institutions with publicly documented IT
architectures, spanning multiple countries and governance systems:
- **MIT**: IS&T, CSAIL TIG, Kerberos/Athena legacy
- **Stanford**: UIT + school IT organizations, SUNET backbone, SRCC
- **Cambridge**: UIS + colleges, UDN, delegated IP blocks
- **ETH Zurich**: ISGs, Administrator Rights Agreement, baseline security
- **CERN**: Experiment network isolation, WLCG, security-vs-freedom balance
- **Michigan**: ITS + school IT orgs, IT Council, Merit Network, CAEN
- **Oxford**: Distributed IT, InfoSec guidance, unit-level accountability
- **EPFL / CMU / Wisconsin-Madison / Penn State**: supplementary precedents with public documentation

## Key Architectural Concepts
- **Network segmentation**: Zones with distinct security profiles (admin, research, teaching, BYOD, IoT, sensitive, Science DMZ)
- **Science DMZ**: Dedicated research network bypassing the enterprise firewall (ACLs + IDS + perfSONAR)
- **Federated governance**: Decision rights distributed to domain experts, coordinated by a central governance body
- **Enclave charters**: Formal agreements defining zone-specific security responsibilities
- **Zero Trust**: Identity-based access, assume breach, verify continuously
- **Shadow IT**: Unauthorized technology adoption driven by overly restrictive policies

## NRENs and Research Infrastructure
- **GÉANT**: Pan-European backbone interconnecting national networks
- **NRENs**: National Research and Education Networks (each country operates one; e.g., RENATER, SWITCH, DFN, JANET/Jisc) — name the adopter's own NREN via the Localization Guide
- **eduroam**: Federated Wi-Fi authentication across participating countries
- **InCommon / eduGAIN**: Federated identity management

## SUIT-Specific Machinery (cross-references — do not duplicate here)

The institution-neutrality promised above is enforced by dedicated machinery
built since P0. These are domain concepts every contributor must know; the full
contracts live in the rule and module each item points to. Do not restate their
detail in this file — follow the cross-reference.

- **Localization model** — the suite renders as clean generic prose by default
  and as a named edition when an instantiation is loaded, both from ONE
  `\setloc`/`\loc` key/value mechanism over a 3-layer override stack
  (Layer 0 generic defaults → Layer 1 category archetype → Layer 2 institution
  set). Generic render = Layer 0 only = finished prose, never a mustache token;
  unbound keys fail loudly as `??key??`. See `localization-model.md`.
- **Instantiation categories & library** — the generic suite turns into a
  growing library of build-clean editions via two scoped directories:
  `categories/` (the six worked Layer-1 archetypes spanning EU/US/UK/LATAM/AFR,
  selected by the §2 decision tree) and `instantiations/` (Layer-2 editions,
  each a **thin shell over the UNCHANGED generic bodies — never a fork**), with
  Luxembourg/University of Luxembourg as the round-trip-validated reference
  edition. The SUIT functional set is **size-invariant** (scale sets pace, not
  archetype). See `instantiation-model.md`.
- **Regulatory Applicability module + obligation→mechanism matrix** —
  `shared/regulatory-applicability-EN.tex` frames the size- and
  jurisdiction-invariant **functional-obligation spine F1–F6** (personal-data
  protection, cyber-risk governance, incident notification, cross-border
  transfers, eID/trust services, accountability/logging), maps each obligation
  to its invariant SUIT control mechanism in the obligation→mechanism matrix,
  then instantiates the spine per regime from the verified profiles in
  `docs/_regulatory/*.json` (EU/US/UK/BR/ZA). An unlisted regime fills only the
  instrument column via the Steps 1–7 mapping method (`sec:reg-mapping`); the
  spine and control set stay fixed. This is interpretive engineering guidance,
  not legal advice.
- **No-false-locality rule** — document BODIES must read as institution-neutral,
  role-based prose: route every local anchor (institution/NREN/governing-body/
  jurisdiction name) through `\loc{}`, and carry no migration/source-repo
  internals. Authorship is the explicit exception that is KEPT: the author's
  name (chair of the working group, creator of the first version), the author's
  cited works, and clearly-labelled regulatory examples all stay. The
  geographic-origin line ("originally developed for the University of
  Luxembourg") is NOT carried in the generic suite — it belongs to the
  Luxembourg instantiation. See `no-false-locality.md`.
