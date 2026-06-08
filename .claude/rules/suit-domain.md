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
