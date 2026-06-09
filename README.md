# SUIT — Sustainable University IT Infrastructure & Technology

SUIT is a reference document suite produced by an international working group of
university IT decision-makers, architects, and engineers. It sets out a
governance and engineering reference for building, operating, and sustaining
research and education IT infrastructure at a modern university.

The four documents in this repository build on a first version — the policy, its
executive companion, and the technical solution — created by **Nicolas Guelfi**,
chairman of the SUIT working group, originally developed for the University of
Luxembourg, and generalised here by the working group into an institution-neutral
reference. They are written to be adopted directly by any university: the body of
every document uses role-based, vendor-neutral, institution-neutral language, and
a `shared/` localization guide lets each adopting institution instantiate the
generic material to its own context. The institution-neutral framing exists so the
suite reads as a shared international reference rather than one university's local
policy — the prior work and its authorship are acknowledged, not erased.

## The four documents

| Document | Directory | Audience | Purpose |
|---|---|---|---|
| **SUIT Policy** | `suit-policy/` | Academic community, university leadership, decision-makers | The governance reference: principles, obligations, and the policy framework for sustainable university IT. |
| **SUIT Policy Summary** | `suit-policy/companion/` | University leadership (rectorate / executive board) | An executive companion to the Policy: the decisions and their justification, condensed for governance bodies. |
| **SUIT Solution** | `suit-solution/` | Architects, engineers, infrastructure and network teams | The technical reference: architecture, controls, and operational design that realize the Policy. |
| **SUIT Solution Summary** | `suit-solution/summary/` | CISO, CTO, infrastructure and network leads | An operational executive summary of the Solution: what to build, in what order, and why. |

Each document is accompanied by a per-layer anticipatory **argumentation**
module (`suit-policy/argumentation/`, `suit-solution/argumentation/`) that
answers the questions and objections each audience is expected to raise.

## Repository layout

```
shared/              Cross-document assets: shared bibliography, localization guide
suit-policy/         SUIT Policy (governance reference)
  companion/         SUIT Policy Summary (executive companion)
  argumentation/     Governance-layer Q&A / argumentation module
suit-solution/       SUIT Solution (technical reference)
  summary/           SUIT Solution Summary (operational executive summary)
  argumentation/     Technical/operational-layer Q&A / argumentation module
docs/                Audit dispositions and per-jurisdiction regulatory profiles
.claude/             Authoring tooling (rules, skills, agents)
.github/             Issue templates and repository configuration
_AUDITS/             Quality-audit outputs
```

## Licensing

This repository uses a split license:

- **Documents and their content** — everything that constitutes the deliverables
  (`.tex` sources, generated `.pdf`, `.bib` bibliography, prose, figures, and the
  contents of `shared/`, `suit-policy/`, `suit-solution/`, `docs/`) are licensed
  under **Creative Commons Attribution-ShareAlike 4.0 International
  (CC-BY-SA-4.0)**. See [`LICENSE-DOCS`](LICENSE-DOCS).

- **Tooling** — the authoring toolkit under `.claude/` and the reusable LaTeX
  style packages (`.sty`) are licensed under the **MIT License**. See
  [`LICENSE-TOOLING`](LICENSE-TOOLING).

When a single file could fall under both (for example, a `.sty` package shipped
alongside the documents), the MIT terms in `LICENSE-TOOLING` govern that file.

## Contributing

The documents are maintained under a **ticket-centralized** change model: the
community proposes every change through issues (tickets), and the maintainer
centralizes, decides, and applies each one. See
[`CONTRIBUTING.md`](CONTRIBUTING.md) and [`GOVERNANCE.md`](GOVERNANCE.md).

## Building the documents

All LaTeX documents build with `latexmk` (never call `pdflatex` or `biber`
directly). From any document directory:

```bash
latexmk -pdf <document>.tex
```

Temporary files are written to `out/`; the final `.pdf` is produced next to its
`.tex` source. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full build and
bibliography conventions.
