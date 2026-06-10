# Contributing to SUIT

Thank you for your interest in the **SUIT — Sustainable University IT Infrastructure & Technology** suite.

## How changes work here: ticket-centralized

The documents are maintained under a **ticket-centralized** model. This is deliberate and strict:

- **You do not edit the documents directly.** The community has read access and proposes every change through an **issue (ticket)**.
- **The maintainer is the single point** that centralizes, triages, decides, and applies changes — and records each applied change in `CHANGELOG.md` with its ticket id.
- Unsolicited pull requests that modify document content are **not merged directly**. Open a ticket first; the maintainer may use a PR as input, but authorship of the change stays with the maintainer to keep the suite coherent.

This keeps terminology, evidence, colours, and cross-document references consistent across the four documents.

## Filing a change request

💡 *CLI shortcut:* `tools/file-ticket.sh <change|instantiation|localization|question>` composes the chosen issue template's fields interactively, previews the ticket, and submits it via the GitHub CLI after your confirmation; working-group members using the authoring toolkit can run the `/suit-ticket` skill for the assisted, conversational version of the same flow.

Open an issue using the **Document change request** template and provide:

- the **target document** and **section**,
- the **current text** (quote it),
- the **proposed change**,
- the **rationale**, and
- **supporting evidence / citations** where the change is substantive.

Requests that arrive with evidence are review-ready and are processed faster. For adopting universities, use the **Localization request** template; for anything else, the **Question** template.

## Contributing an instantiation (the instantiation library)

Beyond proposing changes to the generic suite, you can **apply the instantiation methodology and deposit your institution's concrete edition** into the shared library at `instantiations/`. This is how the suite turns from one generic reference into a growing set of worked, build-clean editions that every participant can read and reuse. The library front door is `instantiations/README.md`; the deposited **University of Luxembourg reference edition** (`instantiations/lu-university-of-luxembourg/`) retraces the whole process step by step and is the worked example to pattern your edition on.

The flow:

1. **Copy the template.** Copy `instantiations/_TEMPLATE/` to `instantiations/<institution>/`. You edit exactly one content file, `set.tex`; the `render/` wrappers and `.latexmkrc` are build machinery.
2. **Pick your archetype.** Run the §2 self-identification decision tree in `categories/README.md` to land on one of the six category archetypes (or the closest one plus recorded deltas). Set `\instcategory` in `set.tex` accordingly.
3. **Fill your values.** Replace the country-specific NAME keys your archetype leaves at default (NREN, data-protection authority, national CSIRT, …) and record any local deltas with `\setloc`. See `instantiations/_TEMPLATE/README.md` for the full walk-through.
4. **Build clean.** From `render/`, build all four documents with `latexmk -pdf` (build `policy-EN` before `policy-summary-EN`). The deposit bar is **0 undefined citations, 0 undefined references, and 0 undefined localization keys**, with no `REPLACE:` or `??key??` text left in the PDFs.
5. **Deposit via the ticket/PR flow.** Open an **Instantiation contribution** issue (`.github/ISSUE_TEMPLATE/instantiation-contribution.yml`) declaring your institution, country, archetype, completeness checklist, and build-clean confirmation. The maintainer brings `instantiations/<institution>/` into the library under the same ticket-centralized rule that governs the generic documents.

Once accepted, your `instantiations/<institution>/` — the `set.tex`, the render wrappers, and the four built PDFs — is available to all other participants. **The library grows with the working group, one institution at a time.** Each instantiation is a thin shell over the unchanged generic documents, so it keeps tracking the suite as the suite evolves; it never forks the generic content.

## Build and bibliography conventions (for maintainers)

- Build every document with **`latexmk`** — never call `pdflatex`/`biber` directly:
  ```bash
  latexmk -pdf <document>.tex
  ```
  Temporary files go to `out/`; the final `.pdf` sits next to its `.tex`. Set `SUIT_CLEAN=1` (e.g. `SUIT_CLEAN=1 latexmk -pdf <document>.tex`) to wipe the `out/` temporaries after a successful build.
- After every build, verify **0 undefined citations** and **0 undefined references**.
- Bibliography entries must carry `abstract`, `fetch_status`, and `fetch_note` (see `.claude/rules/bibliography-curation.md`).
- Documents stay **institution-neutral**; localization variables live in `shared/localization-guide-EN.tex`.
- Use the semantic commands (`\keyword`, `\institution`, `\framework`); never raw formatting for semantic meaning.

By contributing, you agree that your contributions are licensed under the repository's split license: documents under **CC-BY-SA-4.0** (`LICENSE-DOCS`), tooling under **MIT** (`LICENSE-TOOLING`).
