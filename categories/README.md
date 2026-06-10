# SUIT category archetypes

This directory holds the **Layer 1 (category)** localization files of the SUIT
suite. Each file is a partial set of `\setloc` overrides that binds the
*structural* localization keys to the concrete-but-generic value shared by every
institution of one archetype, and points the *regulatory* keys at the matching
regime of the shared Regulatory Applicability module
(`../shared/regulatory-applicability-EN.tex`).

A category file is **not** an institution edition. It captures what a class of
universities has in common (governance shape, NREN tier, custody posture,
binding regime) and deliberately leaves the country-specific *name* keys at
their generic default for an institution-level file to fill.

---

## 1. The categories and how layered instantiation works

### 1.1 The six archetypes

| File | Archetype | Binding regime | Regime profile |
|---|---|---|---|
| `EU-PUB-RI.tex` | European public, research-intensive university (EU/EEA Member State) | EU regime — the SUIT baseline anchor | EU deep (`sec:reg-eu`) |
| `US-PUB-R1.tex` | US public (state-chartered) research university — flagship / R1–R2, constituent of a state system | US federal sector law + state public-university law | US deep, sectoral & fragmented (`sec:reg-us`) |
| `US-PRIV-R1.tex` | US private (non-profit) doctoral / very-high-research (Carnegie R1) university | US federal sector law (no state-law governing layer) | US deep, sectoral & fragmented (`sec:reg-us`) |
| `UK-RES.tex` | UK chartered/statutory research-intensive university (Council/Senate split) | UK post-Brexit regime | UK light (`sec:reg-uk`) |
| `LATAM-PUB.tex` | Latin American public (federal/national) university — elected rector, State-supervised | National regime; worked instance Brazil | BR light (`sec:reg-br`) |
| `AFR-PUB.tex` | African public, comprehensive university — distributed operator+builder NREN | National regime; worked instance South Africa | ZA light (`sec:reg-za`) |

These six are **worked instantiations spanning Europe, North America, South
America and Africa**, not an exhaustive enumeration. An institution that does
not fit any of them lands on the *closest* archetype and records its deltas, or
derives a fresh row by the mapping method (see §2, Q1's "other" branch).

### 1.2 The three layers

The suite renders one document body from a stack of `\setloc` bindings. Each
later layer overrides any key the earlier layers set; any key a layer does not
touch keeps the value from below.

```
localization.sty                       (the \setloc / \loc machinery)
  └─ Layer 0: shared/localization-defaults.tex   (generic role phrases)
       └─ Layer 1: categories/<ARCHETYPE>.tex     (this directory)
            └─ Layer 2: <institution edition>.tex (country-specific names)
                 └─ document body
```

- **Layer 0 — defaults.** One `\setloc` per localization key, each bound to its
  *canonical generic role phrase* (e.g. `nren-name` → "the national research and
  education network"). Rendering with only Layer 0 loaded reproduces the suite's
  present generic prose unchanged.

- **Layer 1 — category (this directory).** A *partial* override set. It rebinds
  the **structural** keys — governance ladder (`executive-leadership`,
  `governing-board`, `academic-governing-bodies`), constituent units and pilots
  (`cs-research-unit`, `security-research-centre`, `institution-hpc-facility`,
  `pilot-entities`), NREN tier (`nren-csirt`, `peer-nren-roster`,
  `nren-service-catalogue`, `nren-research-cloud`, `research-backbone-scale`),
  identity federation (`identity-federation-profile`), deployment & custody
  (`deployment-custody-model`, `data-custody-sovereignty-profile`), operational
  roles, and the **regulatory** keys (`regulatory-regime`,
  `data-protection-regime`, `cybersecurity-baseline-regime`,
  `cross-border-transfer-regime`, `eid-trust-services-regime`, `ai-regulation`,
  `essential-entity-classification-basis`, and the national-instrument analogues
  where the regime needs them). It states regulatory keys in **role terms** so a
  peer jurisdiction inside the same archetype can re-point them without forking
  the file.

- **Layer 2 — institution.** Fills the country-specific **name** keys that vary
  *within* an archetype and are therefore deliberately left at the Layer-0
  default by Layer 1:
  - `nren-name` — the specific national NREN by name (e.g. DFN, RENATER, SURF,
    RESTENA, Janet/Jisc, Internet2, RNP, SANReN/TENET);
  - `national-dpa` — the specific data-protection authority;
  - `national-gov-csirt` — the specific national/governmental CSIRT.

  A Layer-2 file may also pin the institution's own name, leadership titles,
  governing-body proper names, and regional R&E network where a non-generic
  edition is wanted.

**Load order rule.** Always `\input` the category file *after*
`shared/localization-defaults.tex` (so its overrides win) and *before* the
institution edition (so the institution wins over it).

### 1.3 What each archetype leaves to the institution layer

Every archetype binds the structural and regulatory keys but leaves the three
country-specific NAME keys (`nren-name` — except UK/US-PRIV where the operator
is archetype-fixed —, `national-dpa`, `national-gov-csirt`) at generic default.
US archetypes also leave `nren-csirt` at the regional-network level because the
campus reaches the national tier through its own state/regional R&E network.

---

## 2. Self-identification decision tree

Run this **after** completing the SUITSOLUTION Chapter 4 self-assessment
(`../suit-solution/ch04-self-assessment-EN.tex`). Chapter 4 already characterises
your identity / network / observability / endpoint maturity (Sections A–D) and
your sovereignty positioning (Section E). This tree reuses that instrument to
land you on one archetype; the Chapter 4 *trajectory matrix* then sets your
migration pace. The four questions below are orthogonal selectors — answer all
four, then read the archetype off the combination.

```
Q1. JURISDICTION / BINDING REGIME
    Which legal regime binds the institution of establishment?
      ├─ EU/EEA Member State ......................... → Q2  (EU branch)
      ├─ United States ............................... → Q2  (US branch)
      ├─ United Kingdom .............................. → UK-RES
      │     (post-Brexit UK GDPR + DPA 2018 as amended by DUAA 2025;
      │      NIS Regs 2018 — UK light regime, sec:reg-uk)
      ├─ Latin America ............................... → LATAM-PUB
      │     (national regime; worked instance Brazil — LGPD, sec:reg-br;
      │      re-point the BR keys via the mapping method for another country)
      ├─ Africa (sub-Saharan / SADC) ................. → AFR-PUB
      │     (national regime; worked instance South Africa — POPIA, sec:reg-za;
      │      re-point ZA keys + swap to UbuntuNet for non-ZA SADC)
      └─ OTHER jurisdiction .......................... → MAPPING METHOD
            Use shared/regulatory-applicability-EN.tex sec:reg-mapping
            (Steps 1–7): the F1–F6 spine and the SUIT control set are fixed;
            only the instrument column is filled for your regime. Then adopt
            the archetype whose GOVERNANCE + NREN shape matches yours (Q2–Q4)
            and overlay your derived regulatory row. Record the regime delta.

Q2. GOVERNANCE SHAPE  (only on the EU and US branches)
    EU branch:
      → EU-PUB-RI
        (collegial/collegiate ladder: academic senate/council + strategic
         governing board with external lay members + a rector/president
         executive; public university under national HE statute)
      ⚠ If the EU institution is PRIVATE/foundation, teaching-led, or its
        binding regime is NOT the EU regime, EU-PUB-RI does not fit — treat
        as the closest archetype and note the governance delta.

    US branch — is the institution PUBLIC or PRIVATE?
      ├─ PUBLIC (state-chartered; state board of regents/trustees appointed
      │   or elected; constituent of a state university system; state
      │   procurement + public-records law) ........... → US-PUB-R1
      └─ PRIVATE (self-perpetuating non-profit board of trustees; president
          + provost; private procurement; no state-law governing layer) → US-PRIV-R1

Q3. NREN TIER  (confirmation / disambiguation)
    Single national NREN, or a multi-tier R&E path?
      ├─ Exactly ONE national NREN, pan-region backbone (GÉANT),
      │   eduGAIN interfederation .................... consistent with
      │      EU-PUB-RI, UK-RES (Janet via Jisc),
      │      LATAM-PUB (RedCLARA), AFR-PUB (UbuntuNet, distributed operator+builder)
      └─ MULTI-TIER: campus → state/regional R&E network → national backbone
          (Internet2), InCommon federation ............ consistent with
             US-PUB-R1 and US-PRIV-R1
      ↪ A mismatch between your Q3 answer and the Q1–Q2 archetype is a real
        finding: record it as an NREN-tier delta (e.g. an EU institution that
        reaches GÉANT through a regional aggregator, or a US campus with a
        direct national-backbone connection).

Q4. SCALE  (pace input, not archetype selector)
    Scale does NOT change the archetype — the SUIT functional set is
    size-invariant (no de-minimis threshold; the GDPR Art. 32 anchor applies
    regardless of headcount). Scale sets only the instantiation and pace:
      ├─ Resource-constrained / shared-first estate ... shared-/NREN-hosted
      │   instantiation is the default (LATAM-PUB, AFR-PUB encode this in
      │   deployment-custody-model); the longer Ch. 4 horizon (7–10 yr).
      ├─ Mid-sized self-operating estate .............. the canonical case;
      │   pace from the Ch. 4 trajectory matrix.
      └─ Large, well-resourced estate ................. dedicated IT/security
          org (US-PRIV-R1, large EU-PUB-RI); shorter horizon where Section E
          intent is high.
```

**Outcome.** Q1 selects the regime family (or sends you to the mapping method);
Q2 splits the two ambiguous branches (EU governance shape, US public vs private);
Q3 confirms the NREN tier and surfaces any tier delta; Q4 sets pace, not
identity. If no archetype matches exactly, pick the closest on Q1→Q2→Q3
priority and record the deltas — the structural keys you must re-bind by hand —
in your Layer-2 institution edition.

---

## 3. Comparison matrix (key families × archetypes)

Cells give the archetype-bound generic value; **NAME** marks a key left at
Layer-0 default for the institution layer to fill.

### 3.1 Governance and units

| Key family | EU-PUB-RI | US-PUB-R1 | US-PRIV-R1 | UK-RES | LATAM-PUB | AFR-PUB |
|---|---|---|---|---|---|---|
| Governance ladder | Collegial: senate/academic council + strategic board (lay members) + rectorate | State board of regents/trustees (appointed/elected) + Faculty/Academic Senate | Self-perpetuating board of trustees + faculty/academic senate | Council/Court (lay-majority) + academic Senate | University council (collegial, supreme) under ministry supervision | Statutory governing Council + Senate/Faculty Boards |
| Executive leadership | Rectorate (rector/president + central executive) | President/Chancellor + Provost (+ CIO, CISO) | President + Provost | Vice-Chancellor as chief exec & academic officer | Elected rector + central administration | Vice-Chancellorate (VC + executive management) |
| Constituent units / pilots | CS/informatics dept; cyber research centre; central HPC | CS dept/school; NSA/DHS CAE centre; research-computing facility | CS/EECS dept; cyber research institute; research-computing facility | Dept/School of CS; ACE-CSR; central HPC service | Computing/informatics institute; cybersecurity lab; shared HPC | CS dept/School of IT; cyber research group; central RC/ICT unit |

### 3.2 Network, identity and HPC

| Key family | EU-PUB-RI | US-PUB-R1 | US-PRIV-R1 | UK-RES | LATAM-PUB | AFR-PUB |
|---|---|---|---|---|---|---|
| NREN tier | Single national NREN + GÉANT | State/regional R&E network → national backbone | Internet2 via state/regional R&E network | Janet via Jisc (national) | State-backed NREN, RedCLARA-federated | Distributed operator+builder, UbuntuNet-reached |
| Backbone scale | GÉANT multi-100 Gbps; campus 10–100 Gbps | Per-region (state/regional → national backbone) | Internet2 400–800 Gbps; 300+ univ via 35+ R&E nets; campus 10–100 Gbps | Multi-terabit Janet core; campus 10–100 Gbps; peers GÉANT | RedCLARA regional; campus 1–100 Gbps (funding-bound) | Shared national backbone, contended; campus 1–100 Gbps |
| Identity federation | National federation via eduGAIN | US R&E interfederation (SAML) via eduGAIN | InCommon via eduGAIN | UKAMF via eduGAIN | National federation (RedCLARA region) via eduGAIN | National federation via eduGAIN |
| National HPC tier | National or EuroHPC JU supercomputer | National-cyberinfrastructure HPC allocation | NSF ACCESS (ex-XSEDE) / DOE leadership facility | UK national tier-1 + tier-2 centres | National/regional academic supercomputer (SCALAC) | National science-council supercomputing centre |

### 3.3 Deployment, custody and operational roles

| Key family | EU-PUB-RI | US-PUB-R1 | US-PRIV-R1 | UK-RES | LATAM-PUB | AFR-PUB |
|---|---|---|---|---|---|---|
| Deployment / custody model | EU-hosted, EU-operated core estate | State procurement; institutional DC / FedRAMP-authorised cloud | Hybrid: campus core + US hyperscale; enclaves for regulated data | UK / adequacy-covered jurisdiction | Shared / NREN-hosted; budget-sized | Self-operated where capacity allows, else shared/managed services |
| Custody posture | Keep core in EU/EEA; minimise GDPR Ch. V exposure | Controlled/regulated data under US jurisdiction + contractual controls | Data-classification-driven; controlled data in segregated enclaves | UK/adequacy space; minimise third-country disclosure | National/on-soil; under national DP regime | Institution/domestic-provider control under national DP duty |
| Internal incident contact | Internal contact reporting to ISO/CISO | InfoSec office / SOC (CISO-led) | (Layer-0 default) | IT service desk / CISO | InfoSec office/CSIRT → national CSIRT | Internal ICT security contact → ISO |

### 3.4 Regulatory regime

| Key family | EU-PUB-RI | US-PUB-R1 | US-PRIV-R1 | UK-RES | LATAM-PUB | AFR-PUB |
|---|---|---|---|---|---|---|
| Regime depth | Deep (baseline anchor) | Deep, sectoral & fragmented | Deep, sectoral & fragmented | Light (post-Brexit) | Light (worked: Brazil) | Light (worked: South Africa) |
| Data protection | GDPR (Reg. 2016/679) | FERPA + HIPAA + CCPA/CPRA layer | FERPA + HIPAA + GLBA + state privacy | UK GDPR + DPA 2018 (DUAA 2025) | National DP law (LGPD) | POPIA (Act 4/2013) |
| Cybersecurity baseline | NIS2 (Dir. 2022/2555) | FTC Safeguards + HIPAA Security + NIST 800-171/53/CSF | FTC Safeguards + HIPAA + NIST CSF 2.0 + 800-171/CMMC | NIS Regs 2018 + NCSC CAF | National framework (LGPD Art. 46 + E-Ciber) | POPIA Cond. 7 + Cybercrimes Act |
| Cross-border transfer | GDPR Chapter V | Export control (deemed-export) + CCPA flow-down | EAR/ITAR deemed-export | UK GDPR Ch. V (IDTA / UK Addendum) | National transfer regime (LGPD Ch. V) | POPIA s.72 (self-assessed adequacy) |
| eID / trust services | eIDAS 2 (910/2014 am. 2024/1183) | Export control (EAR/ITAR) | ESIGN/UETA + EAR/ITAR | UK eIDAS (retained 910/2014) | National trust services (ICP-Brasil) | ECT Act (Act 25/2002) |
| AI governance | EU AI Act (2024/1689) | NIST AI RMF + federal/state AI reqs | NIST AI RMF + sectoral/state AI | Principles-based, regulator-led | Emerging national AI law (PL 2338/2023) | Sectoral/principle-based (no binding AI statute) |
| Essential-entity basis | NIS2 essential/important entity | Function-triggered (Safeguards/HIPAA/CMMC/FISMA) | Function/sector-triggered | NIS Regs 2018 scope | Public-administration body in national DP/cyber scope | Public body under POPIA + national cyber regime |

### 3.5 Country-specific NAME keys (left for the institution layer)

| Key | All archetypes |
|---|---|
| `nren-name` | NAME (e.g. DFN / RENATER / SURF / RESTENA / RNP / SANReN-TENET); archetype-fixed for UK-RES (Janet) and US-PRIV-R1 (Internet2) |
| `national-dpa` | NAME (the specific data-protection authority) |
| `national-gov-csirt` | NAME (the specific national/governmental CSIRT) |
| `nren-csirt` | NAME for US archetypes (regional R&E network security team); archetype-bound elsewhere |

---

## See also

- `../shared/localization-defaults.tex` — Layer 0 default bindings.
- `../shared/localization.sty` — the `\setloc` / `\loc` machinery.
- `../shared/regulatory-applicability-EN.tex` — the F1–F6 spine, the five regime
  profiles, and the Step 1–7 mapping method for an unlisted jurisdiction.
- `../suit-solution/ch04-self-assessment-EN.tex` — the self-assessment whose
  Sections A–E feed the decision tree in §2.
- `../suit-solution/ch03-sovereignty-grid-EN.tex` — the five-dimension grid and
  four-point scale the self-assessment applies.
