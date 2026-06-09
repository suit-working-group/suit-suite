# Claude Code Toolkit — Academic Document Authoring

**Project** : SUIT — Sustainable University IT Infrastructure & Technology
**Scope** : institution-neutral, jurisdiction-neutral reference document suite
**Version** : 1.1
**Components** : 12 rules, 12 skills, 7 agents (31 total)

This toolkit supports authoring the SUIT suite. The universal and genre-adaptable
components are general-purpose; the domain layer (R8, regulatory-scanner,
freshness-monitor) is institution- and jurisdiction-neutral.

Version 1.1 adds the SUIT-specific instantiation machinery built since P0: three
domain rules (R9 localization model, R10 instantiation model, R11 no-false-locality),
the `/instantiate` and `/instance-audit` skills, and the recurring 7-track suite
audit workflow. See §6.5 for the instantiation & working-group workflow.

---

## Table of Contents

1. [Overview and Inventory](#1-overview-and-inventory)
2. [Architecture](#2-architecture)
3. [Rules — Detailed Reference](#3-rules--detailed-reference)
4. [Skills — Detailed Reference](#4-skills--detailed-reference)
5. [Agents — Detailed Reference](#5-agents--detailed-reference)
6. [Usage Examples and Workflows](#6-usage-examples-and-workflows)

---

## 1. Overview and Inventory

### 1.1 Rules (Behavioural Directives)

Rules are persistent directives that activate automatically when working with files matching their `paths:` scope. They shape Claude's behaviour without being explicitly invoked.

| ID | File | Level | Scope (`paths:`) | Purpose |
|----|------|-------|-------------------|---------|
| R1 | `rules/academic-writing.md` | Universal | `**/*.tex` | Academic rigour, citation density, evidence stratification |
| R2 | `rules/latex-standards.md` | Universal | `**/*.tex`, `**/.latexmkrc` | LaTeX coding conventions, packages, build system |
| R3 | `rules/bibliography-curation.md` | Universal | `**/*.bib` | BibTeX field standards, fetch metadata, key naming |
| R4 | `rules/document-quality.md` | Universal | `**/*.tex`, `**/*.bib` | Compilation cleanliness, pre-delivery checklist |
| R5 | `rules/evidence-methodology.md` | Adaptable | `**/*.tex` | Five-layer evidence architecture |
| R6 | `rules/multi-audience-design.md` | Adaptable | `**/*.tex` | Document suite design (main/companion/argumentation) |
| R7 | `rules/epigraph-authority.md` | Adaptable | `**/*.tex` | Intellectual anchoring via epigraphs |
| R8 | `rules/suit-domain.md` | Domain | `**` (whole repo) | University IT frameworks, EU-law baseline, multi-university precedents — institution/jurisdiction-neutral; cross-refs R9–R11 + the regulatory module |
| R9 | `rules/localization-model.md` | Domain | `shared/**`, `suit-policy/**`, `suit-solution/**`, `instantiations/**` | The `\setloc`/`\loc` mechanism, 3-layer override stack, completeness invariant, generic-render-=-defaults contract |
| R10 | `rules/instantiation-model.md` | Domain | `categories/**`, `instantiations/**` | Instantiation as a discipline: six category archetypes, §2 decision tree, contributed library, deposit bar, ticket flow, LU reference edition |
| R11 | `rules/no-false-locality.md` | Domain | `**/*.tex`, `**/*.md` | Institution-neutral bodies: remove locality-as-framing + migration internals; KEEP authorship/provenance + labelled regulatory examples |

> R8 was generalized from `it-policy-domain.md`: Luxembourg-specific anchors
> (GOVCERT.LU, CNPD, RESTENA, HCPN, ANSSI-LU, ILR, Board of Governors, etc.) were
> removed; the NIST / ISO-IEC / COBIT frameworks, the EU-law baseline, and the
> multi-university precedent list were kept. Its scope is the whole repository.

### 1.2 Skills (Invocable Slash Commands)

Skills are single-purpose operations invoked explicitly via `/command-name`. Each performs one well-defined task.

| ID | Command | Level | Input | Output |
|----|---------|-------|-------|--------|
| S1 | `/bib-verify` | Universal | `.bib` file | Updated fetch_status + fetch_note for all entries |
| S2 | `/bib-enrich` | Universal | `.bib` file | Added abstracts, DOIs, years for incomplete entries |
| S3 | `/cite-audit` | Universal | `.tex` file | Gap report: missing refs, unused entries, typos |
| S4 | `/latex-build` | Universal | `.tex` file | Compiled PDF with 0 undefined citations |
| S5 | `/doc-inspect` | Universal | `.tex` file | Quality inspection report with scores |
| S6 | `/argumentation` | Adaptable | `.tex` main doc | Argumentation document (.tex + PDF) |
| S7 | `/companion` | Adaptable | `.tex` main doc | Executive summary (.tex + PDF, 2-4 pages) |
| S8 | `/stakeholder-messages` | Adaptable | `.tex` main doc | LaTeX fragment with stakeholder tcolorboxes |
| S9 | `/legal-refs` | Domain | Legal topic text | `.bib` entries + legal synthesis |
| S10 | `/institutional-benchmark` | Domain | Practice to compare | LaTeX comparison table + `.bib` entries |
| S11 | `/instantiate` | Domain | Institution + jurisdiction | New `instantiations/<institution>/` from `_TEMPLATE`: archetype selected, `set.tex` filled, four editions built clean |
| S12 | `/instance-audit` | Domain | An instantiation directory | Deposit-bar report: 0 undefined cites/refs, 0 undefined localization keys, 0 `??key??`/`REPLACE:` leaks, thin-shell (no fork) confirmed |

### 1.3 Agents (Multi-Step Orchestrations)

Agents are complex pipelines that orchestrate multiple skills in sequence. Invoked via `/command-name`.

| ID | Command | Level | Pipeline | Output |
|----|---------|-------|----------|--------|
| A1 | `/bib-curator` | Universal | verify → enrich → audit | Full curation report + updated `.bib` |
| A2 | `/document-builder` | Universal | pre-flight → audit → compile → verify | Clean PDF + build report |
| A3 | `/defense-suite-builder` | Adaptable | argumentation + companion + cross-check | Complete document suite |
| A4 | `/evidence-researcher` | Adaptable | 5-layer research for a thesis | `.bib` entries + citation paragraph |
| A5 | `/stress-test` | Adaptable | Red-team analysis of argumentation | Vulnerability report + improvements |
| A6 | `/regulatory-scanner` | Domain | Check legal refs for updates (multi-jurisdiction) | Regulatory update report |
| A7 | `/freshness-monitor` | Domain | Re-check URLs + detect outdated sources (multi-jurisdiction) | Freshness report + suggestions |

### 1.4 Reusability Matrix

| Component | IT Policy | AI Policy | Any Policy Brief | Any Academic | Any LaTeX |
|-----------|:---------:|:---------:|:----------------:|:------------:|:---------:|
| **R1** academic-writing | | | | ● | ● |
| **R2** latex-standards | | | | | ● |
| **R3** bibliography-curation | | | | ● | ● |
| **R4** document-quality | | | | | ● |
| **R5** evidence-methodology | | | ● | ● | |
| **R6** multi-audience-design | | | ● | | |
| **R7** epigraph-authority | | | ● | ● | |
| **R8** suit-domain | ● | | | | |
| **R9** localization-model | ● | | | | |
| **R10** instantiation-model | ● | | | | |
| **R11** no-false-locality | ● | | | | |
| **S1** /bib-verify | | | | | ● |
| **S2** /bib-enrich | | | | ● | ● |
| **S3** /cite-audit | | | | | ● |
| **S4** /latex-build | | | | | ● |
| **S5** /doc-inspect | | | ● | ● | |
| **S6** /argumentation | | | ● | | |
| **S7** /companion | | | ● | | |
| **S8** /stakeholder-messages | | | ● | | |
| **S9** /legal-refs | ● | ● | | | |
| **S10** /institutional-benchmark | ● | ● | | | |
| **S11** /instantiate | ● | | | | |
| **S12** /instance-audit | ● | | | | |
| **A1** /bib-curator | | | | ● | ● |
| **A2** /document-builder | | | | | ● |
| **A3** /defense-suite-builder | | | ● | | |
| **A4** /evidence-researcher | | | ● | ● | |
| **A5** /stress-test | | | ● | | |
| **A6** /regulatory-scanner | ● | ● | | | |
| **A7** /freshness-monitor | | | | ● | ● |

---

## 2. Architecture

### 2.1 Three-Level Design

```
┌─────────────────────────────────────────────────────────────┐
│                     LEVEL 1 — UNIVERSAL                      │
│            Reusable for any LaTeX/academic project            │
│   R1  R2  R3  R4  │  S1  S2  S3  S4  S5  │  A1  A2         │
├─────────────────────────────────────────────────────────────┤
│                  LEVEL 2 — GENRE-ADAPTABLE                   │
│       Parameterisable by domain (policy, tech, legal)        │
│   R5  R6  R7  │  S6  S7  S8  │  A3  A4  A5                 │
├─────────────────────────────────────────────────────────────┤
│                  LEVEL 3 — DOMAIN-SPECIFIC                   │
│   University IT infrastructure — institution/jurisdiction    │
│   neutral + instantiation machinery                          │
│   R8  R9  R10  R11  │  S9  S10  S11  S12  │  A6  A7         │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 File Locations (Official Claude Code Nomenclature)

```
.claude/
├── TOOLKIT.md                  ← This documentation file
├── settings.json               ← Permission configuration
├── settings.local.json         ← Local permission overrides (WebFetch allowlist)
│
├── rules/                      ← Behavioural directives (auto-activated by paths:)
│   ├── documentation.md            (pre-existing, scoped to docs/*.md)
│   ├── academic-writing.md         (R1 — **/*.tex)
│   ├── latex-standards.md          (R2 — **/*.tex, .latexmkrc)
│   ├── bibliography-curation.md    (R3 — **/*.bib)
│   ├── document-quality.md         (R4 — **/*.tex, **/*.bib)
│   ├── evidence-methodology.md     (R5 — **/*.tex)
│   ├── multi-audience-design.md    (R6 — **/*.tex)
│   ├── epigraph-authority.md       (R7 — **/*.tex)
│   ├── suit-domain.md              (R8 — ** whole repo)
│   ├── localization-model.md       (R9 — shared/, suit-policy/, suit-solution/, instantiations/)
│   ├── instantiation-model.md      (R10 — categories/, instantiations/)
│   └── no-false-locality.md        (R11 — **/*.tex, **/*.md)
│
├── skills/                     ← Slash commands (/skill-name)
│   ├── bib-verify/SKILL.md         (S1)
│   ├── bib-enrich/SKILL.md         (S2)
│   ├── cite-audit/SKILL.md         (S3)
│   ├── latex-build/SKILL.md        (S4)
│   ├── doc-inspect/SKILL.md        (S5)
│   ├── argumentation/SKILL.md      (S6)
│   ├── companion/SKILL.md          (S7)
│   ├── stakeholder-messages/SKILL.md (S8)
│   ├── legal-refs/SKILL.md         (S9)
│   ├── institutional-benchmark/SKILL.md (S10)
│   ├── instantiate/SKILL.md        (S11)
│   └── instance-audit/SKILL.md     (S12)
│
└── agents/                     ← Autonomous multi-step subagents
    ├── bib-curator/AGENT.md         (A1)
    ├── document-builder/AGENT.md    (A2)
    ├── defense-suite-builder/AGENT.md (A3)
    ├── evidence-researcher/AGENT.md (A4)
    ├── stress-test/AGENT.md         (A5)
    ├── regulatory-scanner/AGENT.md  (A6 — multi-jurisdiction)
    └── freshness-monitor/AGENT.md   (A7 — multi-jurisdiction)
```

### 2.3 SUIT Document Layout

The toolkit operates over the four SUIT deliverables and their two Q&A modules:

```
shared/              localization.sty, bib-modes.sty, gls-modes.sty, shared bibliography,
                     Localization Guide, regulatory-applicability-EN.tex (F1–F6 module)
suit-policy/         SUIT Policy (governance reference)
  companion/         SUIT Policy Summary
  argumentation/     Governance-layer argumentation module
suit-solution/       SUIT Solution (technical reference)
  summary/           SUIT Solution Summary
  argumentation/     Technical-layer argumentation module
categories/          Six Layer-1 archetypes (.tex) + README (decision tree + key×value matrix)
instantiations/      Layer-2 editions + _TEMPLATE; lu-university-of-luxembourg = reference
docs/                dispositions.json, _regulatory/*.json profiles
_AUDITS/             versioned 7-track audit outputs (report body + run changelog)
```

---

## 3. Rules — Detailed Reference

The universal and genre-adaptable rules (R1–R7) are reused verbatim from the source
toolkit; see each file under `rules/` for full text. Their behaviour is unchanged.

### R8. `suit-domain.md` — University IT Infrastructure & Policy (institution/jurisdiction-neutral)

**Level**: Domain-specific
**Scope**: `**` (whole repository)
**Activation**: Automatic across the entire SUIT repo

Keeps the NIST / ISO-IEC / COBIT frameworks, an EU-law baseline (cited as the
lowest common denominator, with national transposition routed to the Localization
Guide), the multi-university precedent list, and the core architectural concepts.
All single-country anchors were removed so the body of every document stays adoptable
by any university in any jurisdiction. R8 also carries a **cross-reference index**
to the SUIT instantiation machinery (R9–R11 and the regulatory module); it points,
it does not duplicate.

### R9. `localization-model.md` — generic↔edition mechanism

**Level**: Domain-specific
**Scope**: `shared/**`, `suit-policy/**`, `suit-solution/**`, `instantiations/**`

The `\setloc`/`\loc`/`\Loc` contract over `shared/localization.sty`, the mandatory
3-layer override stack (Layer 0 generic defaults → Layer 1 `categories/<ARCHETYPE>`
→ Layer 2 `instantiations/<institution>/set.tex`), the COMPLETENESS INVARIANT
(every bound key has ≥1 consumption site; no dead bindings), and the
"generic render = Layer 0 only = clean prose, never a mustache token" rule. Unbound
keys fail loudly as `??key??`. Full contract in the rule file — not restated here.

### R10. `instantiation-model.md` — instantiation as a discipline

**Level**: Domain-specific
**Scope**: `categories/**`, `instantiations/**`

Governs `categories/` (the six worked Layer-1 archetypes — EU-PUB-RI, US-PUB-R1,
US-PRIV-R1, UK-RES, LATAM-PUB, AFR-PUB — with the §2 self-identification decision
tree and the §3 key×value matrix) and `instantiations/` (the contributed library
plus `_TEMPLATE`). Core invariant: an edition is a **thin shell over the UNCHANGED
generic bodies, never a fork**; the SUIT functional set is **size-invariant**
(scale sets pace, not archetype). Defines the deposit bar and the ticket-centralized
contribution flow, with the Luxembourg edition as the round-trip-validated reference.

### R11. `no-false-locality.md` — institution-neutral bodies

**Level**: Domain-specific
**Scope**: `**/*.tex`, `**/*.md`

REMOVE locality-as-framing (a body that reads as one institution's local artefact)
and all migration/source-repo internals; KEEP the author's name and working-group
attribution, the author's cited works, and clearly-labelled regulatory examples.
The "originally developed for the University of Luxembourg" origin is an
instantiation detail, not generic-suite content. Full decision test in the rule file.

---

## 4. Skills — Detailed Reference

S1–S10 are general-purpose. The skills address paths in the SUIT layout, e.g.:

```
/bib-verify shared/suit.bib
/cite-audit suit-policy/argumentation/argumentation-policy-EN.tex
/latex-build suit-solution/solution-EN.tex
/companion suit-policy/policy-EN.tex rectorate
/institutional-benchmark federated IT governance
/legal-refs GDPR Article 32 risk-based approach network segmentation
```

See each `skills/<name>/SKILL.md` for the full procedure.

### S11. `/instantiate` — stand up a new institution edition

Copies `instantiations/_TEMPLATE/` to `instantiations/<institution>/`, runs the
`categories/README.md` §2 decision tree to select the archetype (after the
SUITSOLUTION Chapter 4 self-assessment), fills the country-specific NAME keys and
any local deltas in the single content file `set.tex` (Layer 2), and builds all
four editions clean with `latexmk` (policy before policy-summary). It never edits a
generic body and never calls `\loc` in `set.tex`. See R9/R10 for the contracts it
enforces; see `instantiations/_TEMPLATE/README.md` for the adopter walk-through.

### S12. `/instance-audit` — verify an edition against the deposit bar

Runs the enforced deposit bar over an `instantiations/<institution>/` edition with
zero tolerance: 0 undefined citations, 0 undefined references, 0 undefined
localization keys (no `Undefined localization key` in any `render/out/*.log`), 0
`??key??` leaks, no `REPLACE:` placeholder text, and confirmation that the edition
remains a thin shell over the UNCHANGED generic bodies (no fork). Produces a pass/fail
deposit report. Pairs with the ticket-centralized contribution flow (R10).

---

## 5. Agents — Detailed Reference

A1–A5 are reused verbatim. A6 and A7 were generalized to be multi-jurisdiction:

### A6. `/regulatory-scanner` — multi-jurisdiction
Scans the EU baseline plus whichever national/regional regime the adopting institution
operates under (resolved via the Localization Guide), rather than a hard-coded
Luxembourg/France pairing. Jurisdiction-specific findings are routed to the
Localization Guide instead of the institution-neutral document body.

### A7. `/freshness-monitor` — multi-jurisdiction
URL-rot, edition, standard, legislation, and case-law freshness checks span the EU
baseline and the source's own jurisdiction; case-law and legislation checks no longer
default to any single country.

---

## 6. Usage Examples and Workflows

### 6.1 New Document Workflow
```
1. Write the document (.tex)
2. /bib-curator                    ← Curate bibliography
3. /document-builder               ← Compile + verify
4. /defense-suite-builder          ← Generate argumentation + companion
5. /stress-test                    ← Red-team the argumentation
6. /doc-inspect (on each doc)      ← Final quality check
```

### 6.2 Adding a New Argument
```
1. /evidence-researcher "thesis statement"   ← Find evidence (5 layers)
2. Write the argument in the .tex file       ← Using suggested citations
3. /cite-audit                                ← Verify citations exist
4. /latex-build                               ← Compile
```

### 6.3 Legal / Freshness Update Check
```
1. /regulatory-scanner "NIS2 transposition jurisdiction:<adopter>"
2. /freshness-monitor shared/suit.bib
3. Update affected sections (body vs. Localization Guide)
4. /document-builder
```

### 6.4 Preparing for Hostile Review
```
1. /stress-test argumentation-policy-EN.tex
2. /evidence-researcher (for RED findings)
3. /stakeholder-messages (refresh stakeholder boxes)
4. /defense-suite-builder
5. /doc-inspect (on each document)
```

### 6.5 Instantiation & Working-Group Workflow

The generic suite and its library of institution editions are maintained under the
**ticket-centralized** model (`CONTRIBUTING.md`, `GOVERNANCE.md`): contributors hold
read access and propose changes through an issue; a single maintainer triages,
applies, and records each change in `CHANGELOG.md` against its ticket. The library
grows **one institution at a time**, with the working group. Stand up and deposit a
new edition as follows:

```
1. Complete SUITSOLUTION Chapter 4 self-assessment
   (suit-solution/ch04-self-assessment-EN.tex)
2. /instantiate <institution> <jurisdiction>   ← copy _TEMPLATE, run the §2
                                                  decision tree, select archetype,
                                                  fill set.tex (Layer 2 only)
   └─ unlisted regime? derive the row via the Steps 1–7 mapping method in
      shared/regulatory-applicability-EN.tex (sec:reg-mapping) — the F1–F6 spine
      and SUIT control set stay fixed; only the instrument column is filled
3. /instance-audit instantiations/<institution>/   ← deposit bar (zero tolerance):
   0 undefined cites/refs, 0 undefined localization keys, 0 ??key?? / REPLACE: leaks,
   thin-shell (no generic-body fork) confirmed
4. Open the "Instantiation contribution" issue
   (.github/ISSUE_TEMPLATE/instantiation-contribution.yml) with archetype,
   completeness checklist, and build-clean confirmation
5. Maintainer brings the edition into instantiations/ under the same ticket and
   records it in CHANGELOG.md
```

Invariants the workflow protects (full contracts in R9/R10/R11):
- An edition is a **thin shell over the UNCHANGED generic bodies — never a fork**;
  a needed generic-body change is a *suite* change routed through the ticket flow.
- The SUIT functional set is **size-invariant**: scale (Q4) sets migration pace, not
  archetype identity.
- The Luxembourg / University of Luxembourg edition is the **round-trip-validated
  reference** every new edition is patterned on.

### 6.6 Recurring Suite Audit Workflow

The suite is re-audited on a recurring basis by the **7-track audit**: Scientific
accuracy / evidence (SCI), Technical fidelity (TECH), Cross-coherence (XCOH),
Legal/regulatory (LEG), Citation coherence (CITE), Applicability (APP), and
Defensibility / rejection-resistance (DEF). Each run writes to a dated
`_AUDITS/<date>/` directory and splits its output in two:

```
1. Run the 7 tracks against the canonical files (candidates → confirmed findings)
2. AUDIT-REPORT-<date>.md   ← atemporal body: the findings only, reads as a single
                              version (no run/branch/revision vocabulary)
3. AUDIT-CHANGELOG.md       ← ALL run/process traceability: run date, HEAD, tracks
                              exercised, candidate-vs-confirmed counts
4. Remediate confirmed findings via the relevant skills/agents, then re-audit
   into _AUDITS/<date>-reaudit/ to verify closure
```

This keeps process traceability out of the report body (per the no-process-leaks
rule) while preserving full audit provenance in the changelog. The track set and
the report/changelog split match the audit runs already deposited under `_AUDITS/`.
