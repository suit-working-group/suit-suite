<p align="center">
  <img src="logo/suit_logo_row_color2_text.svg" alt="SUIT — Sustainable University IT Infrastructure & Technology" width="560">
</p>

<h1 align="center">SUIT — Sustainable University IT Infrastructure &amp; Technology</h1>

<p align="center"><em>A shared, institution-neutral reference for building, operating, and sustaining university IT.</em></p>

<p align="center">
  <img alt="Documents license: CC BY-SA 4.0" src="https://img.shields.io/badge/documents-CC--BY--SA--4.0-1f6feb">
  <img alt="Tooling license: MIT" src="https://img.shields.io/badge/tooling-MIT-3fb950">
  <img alt="Version 1.0.2" src="https://img.shields.io/badge/version-1.0.2-8957e5">
  <img alt="Deliverables: 4 documents + 2 modules" src="https://img.shields.io/badge/deliverables-4%20documents%20%2B%202%20modules-555">
  <img alt="Built with LaTeX" src="https://img.shields.io/badge/built%20with-LaTeX-008080">
</p>

---

<p align="center">
  <a href="https://join.suit.academic-citizens.org">
    <img alt="Join or support the SUIT Working Group" height="46"
      src="https://img.shields.io/badge/Join%20or%20Support%20the%20Working%20Group-3a3a8e?style=for-the-badge">
  </a>
</p>
<p align="center"><sub>👥 No GitHub account required — register and confirm by email · <a href="https://join.suit.academic-citizens.org"><strong>join.suit.academic-citizens.org</strong></a></sub></p>

---

## 📖 Overview

SUIT is a reference document suite produced by an international working group of academic-community members that includes university IT decision-makers, architects, engineers, teachers, researchers and students.

It sets out a governance and engineering reference for building, operating, and sustaining research and education IT infrastructure at a modern university.

> 📌 **On the word “sustainable”:** in SUIT it means **built to last** — operationally, financially and organisationally durable and maintainable over the long term. The emphasis is on **longevity and continuity**, *not* (specifically) environmental sustainability.

The four documents in this repository build on a first version — the policy and the technical solution together with their respective executive companion. They are written to be adopted directly by any university: the body of every document uses role-based, vendor-neutral, institution-neutral language, and a `shared/` localization guide lets each adopting institution instantiate the generic material to its own context. The institution-neutral framing exists so the suite reads as a shared international reference rather than one university's local policy — the prior work and its authorship are acknowledged, not erased.

## 📚 The four documents

| Document | Directory | Audience | Purpose |
|---|---|---|---|
| 📘 **[SUIT Policy](suit-policy/policy-EN.pdf)** | `suit-policy/` | Academic community, university leadership, decision-makers | The governance reference: principles, obligations, and the policy framework for sustainable university IT. |
| 📗 **[SUIT Policy Summary](suit-policy/companion/policy-summary-EN.pdf)** | `suit-policy/companion/` | University leadership (rectorate / executive board) | An executive companion to the Policy: the decisions and their justification, condensed for governance bodies. |
| 📙 **[SUIT Solution](suit-solution/solution-EN.pdf)** | `suit-solution/` | Architects, engineers, infrastructure and network teams | The technical reference: architecture, controls, and operational design that realise the Policy. |
| 📕 **[SUIT Solution Summary](suit-solution/summary/solution-summary-EN.pdf)** | `suit-solution/summary/` | CISO, CTO, infrastructure and network leads | An operational executive summary of the Solution: what to build, in what order, and why. |

💬 Each document is accompanied by a per-layer anticipatory **argumentation** module ([governance-layer PDF](suit-policy/argumentation/argumentation-policy-EN.pdf) in `suit-policy/argumentation/`, [technical-layer PDF](suit-solution/argumentation/argumentation-solution-EN.pdf) in `suit-solution/argumentation/`) that answers the questions and objections each audience is expected to raise, on five independent evidence layers — legal, standards, sector, empirical, and institutional.

## 🧩 Adoption &amp; localization

The suite is written once, generically, and adopted everywhere. A three-layer localization system keeps every local fact in one place: generic defaults in `shared/localization-defaults.tex`, a per-family archetype in `categories/` (worked archetypes span Europe, North and South America, and Africa), and a per-institution edition that fills the country-specific names. The functional core is size- and jurisdiction-invariant; only the instantiation scales. See `shared/localization-guide-EN.tex` for the full adoption guide.

## 🏛️ The instantiation library

The generic suite renders as concrete, named **editions**: each lives in `instantiations/<institution>/` as a thin shell — one `set.tex` of institution values over the unchanged generic documents — and deposits its four built PDFs so anyone can read it without a TeX install.

The **University of Luxembourg edition** is the deposited reference instantiation (archetype `EU-PUB-RI`, round-trip validated): [Policy dossier](instantiations/lu-university-of-luxembourg/render/policy-EN.pdf) · [Executive summary](instantiations/lu-university-of-luxembourg/render/policy-summary-EN.pdf) · [Technical reference](instantiations/lu-university-of-luxembourg/render/solution-EN.pdf) · [Operational summary](instantiations/lu-university-of-luxembourg/render/solution-summary-EN.pdf).

To produce your institution's edition, follow the process in [`instantiations/README.md`](instantiations/README.md) — the [Luxembourg edition](instantiations/lu-university-of-luxembourg/README.md) retraces it step by step as the worked example to pattern yours on.

## 🗂️ Repository layout

```text
shared/              Cross-document assets: shared bibliography, localization system, logo
suit-policy/         SUIT Policy (governance reference)
  companion/         SUIT Policy Summary (executive companion)
  argumentation/     Governance-layer Q&A / argumentation module
suit-solution/       SUIT Solution (technical reference)
  summary/           SUIT Solution Summary (operational executive summary)
  argumentation/     Technical/operational-layer Q&A / argumentation module
categories/          Per-family adopter archetypes (EU-PUB-RI, US-PUB-R1, US-PRIV-R1, UK-RES, LATAM-PUB, AFR-PUB)
instantiations/      The instantiation library: per-institution editions (reference: lu-university-of-luxembourg) + the _TEMPLATE scaffold
docs/                Audit dispositions and per-jurisdiction regulatory profiles
.claude/             Authoring tooling (rules, skills, agents)
.github/             Issue templates and repository configuration
_AUDITS/             Quality-audit outputs
```

## 🔖 Referencing

If you use, adopt, or build on SUIT, please cite the suite:

```bibtex
@misc{suit-wg,
  author       = {Guelfi, Nicolas and others},
  title        = {{SUIT} --- Sustainable University {IT} Infrastructure \& Technology},
  year         = {2026},
  howpublished = {SUIT Working Group reference document suite},
  url          = {https://github.com/suit-working-group/suit-suite},
  note         = {Reference document suite of the SUIT Working Group, chaired by Nicolas Guelfi}
}
```

The suite builds on a first version created by **Nicolas Guelfi**, chair of the SUIT Working Group.

## ⚖️ Licensing

This repository uses a split license:

- 📄 **Documents and their content** — everything that constitutes the deliverables (`.tex` sources, generated `.pdf`, `.bib` bibliography, prose, figures, and the contents of `shared/`, `suit-policy/`, `suit-solution/`, `docs/`) are licensed under **Creative Commons Attribution-ShareAlike 4.0 International (CC-BY-SA-4.0)**. See [`LICENSE-DOCS`](LICENSE-DOCS).
- 🛠️ **Tooling** — the authoring toolkit under `.claude/`, the release-gate and wrapper-generation scripts under `tools/`, and the reusable LaTeX style packages (`.sty`) are licensed under the **MIT License**. See [`LICENSE-TOOLING`](LICENSE-TOOLING).

When a single file could fall under both (for example, a `.sty` package shipped alongside the documents), the MIT terms in `LICENSE-TOOLING` govern that file.

## 🤝 Contributing &amp; joining the working group

SUIT grows through its community. Whether you want to adopt the suite, deposit an instantiation for your own university, or improve the shared reference, **you are warmly invited to join the working group** — university IT decision-makers, architects, engineers, teachers, researchers and students are all welcome.

🚀 **The simplest way to join — no GitHub account required —** is the one-page form at **[join.suit.academic-citizens.org](https://join.suit.academic-citizens.org)**: fill it in, confirm by email, and you are added to the [`MEMBERS/`](MEMBERS/) registry once the maintainer reviews the request (and, if you give your GitHub handle, credited as a contributor — without any write access).

The documents themselves are maintained under a **ticket-centralized** change model: the community proposes every change through issues (tickets), and the maintainer centralizes, decides, and applies each one. See [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`GOVERNANCE.md`](GOVERNANCE.md).

📧 **Contact:** to join the working group or for any question, write to **Nicolas Guelfi** — [nicolas.guelfi@uni.lu](mailto:nicolas.guelfi@uni.lu).

## 🛠️ Building the documents

All LaTeX documents build with `latexmk` (never call `pdflatex` or `biber` directly). From any document directory:

```bash
latexmk -pdf <document>.tex
```

Temporary files are written to `out/`; the final `.pdf` is produced next to its `.tex` source. Set `SUIT_CLEAN=1` to wipe the `out/` temporaries after a successful build. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full build and bibliography conventions.
