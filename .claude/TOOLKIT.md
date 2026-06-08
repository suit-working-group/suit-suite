# Claude Code Toolkit — Academic Document Authoring

**Project** : SUIT — Sustainable University IT Infrastructure & Technology
**Scope** : institution-neutral, jurisdiction-neutral reference document suite
**Version** : 1.0
**Components** : 8 rules, 10 skills, 7 agents (25 total)

This toolkit was transplanted from the `ng.aiday.policy` toolkit and generalized for
SUIT. The universal and genre-adaptable components are reused verbatim; the domain
layer (R8, regulatory-scanner, freshness-monitor) was generalized to be
institution- and jurisdiction-neutral.

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
| R8 | `rules/suit-domain.md` | Domain | `**` (whole repo) | University IT frameworks, EU-law baseline, multi-university precedents — institution/jurisdiction-neutral |

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
│   neutral │  R8  │  S9  S10  │  A6  A7                      │
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
│   └── suit-domain.md              (R8 — ** whole repo)
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
│   └── institutional-benchmark/SKILL.md (S10)
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
shared/              bib-modes.sty, gls-modes.sty, shared bibliography, Localization Guide
suit-policy/         SUIT Policy (governance reference)
  companion/         SUIT Policy Summary
  argumentation/     Governance-layer argumentation module
suit-solution/       SUIT Solution (technical reference)
  summary/           SUIT Solution Summary
  argumentation/     Technical-layer argumentation module
docs/                dispositions.json + project matrices
_AUDITS/             quality-audit outputs
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
by any university in any jurisdiction.

---

## 4. Skills — Detailed Reference

S1–S10 are reused verbatim. Replace the example `ul-it-policy/...` paths from the
source toolkit with the SUIT layout, e.g.:

```
/bib-verify shared/suit.bib
/cite-audit suit-policy/argumentation/argumentation-policy-EN.tex
/latex-build suit-solution/solution-EN.tex
/companion suit-policy/policy-EN.tex rectorate
/institutional-benchmark federated IT governance
/legal-refs GDPR Article 32 risk-based approach network segmentation
```

See each `skills/<name>/SKILL.md` for the full procedure.

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
