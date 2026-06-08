# Contributing to SUIT

Thank you for your interest in the **SUIT — Sustainable University IT Infrastructure & Technology** suite.

## How changes work here: ticket-centralized

The documents are maintained under a **ticket-centralized** model. This is deliberate and strict:

- **You do not edit the documents directly.** The community has read access and proposes every change through an **issue (ticket)**.
- **The maintainer is the single point** that centralizes, triages, decides, and applies changes — and records each applied change in `CHANGELOG.md` with its ticket id.
- Unsolicited pull requests that modify document content are **not merged directly**. Open a ticket first; the maintainer may use a PR as input, but authorship of the change stays with the maintainer to keep the suite coherent.

This keeps terminology, evidence, colours, and cross-document references consistent across the four documents.

## Filing a change request

Open an issue using the **Document change request** template and provide:

- the **target document** and **section**,
- the **current text** (quote it),
- the **proposed change**,
- the **rationale**, and
- **supporting evidence / citations** where the change is substantive.

Requests that arrive with evidence are review-ready and are processed faster. For adopting universities, use the **Localization request** template; for anything else, the **Question** template.

## Build and bibliography conventions (for maintainers)

- Build every document with **`latexmk`** — never call `pdflatex`/`biber` directly:
  ```bash
  latexmk -pdf <document>.tex
  ```
  Temporary files go to `out/`; the final `.pdf` sits next to its `.tex`.
- After every build, verify **0 undefined citations** and **0 undefined references**.
- Bibliography entries must carry `abstract`, `fetch_status`, and `fetch_note` (see `.claude/rules/bibliography-curation.md`).
- Documents stay **institution-neutral**; localization variables live in `shared/localization-guide-EN.tex`.
- Use the semantic commands (`\keyword`, `\institution`, `\framework`); never raw formatting for semantic meaning.

By contributing, you agree that your contributions are licensed under the repository's split license: documents under **CC-BY-SA-4.0** (`LICENSE-DOCS`), tooling under **MIT** (`LICENSE-TOOLING`).
