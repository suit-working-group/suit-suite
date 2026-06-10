# Project Rules — Critical Reminders

These rules MUST be followed in every session. Detailed conventions live in `.claude/rules/`.

## LaTeX Build System — MANDATORY

**NEVER call `pdflatex` or `biber` directly.** Always use `latexmk`:

```bash
latexmk -pdf document.tex
```

- All temporary files go in `out/` — a document directory should contain only `.tex`, `.latexmkrc`, the shared-bib symlink, and the final `.pdf`.
- Every directory with a **compilable top-level** `.tex` file MUST have a `.latexmkrc` (see `.claude/rules/latex-standards.md`). Input-only directories — whose `.tex` are `\input`ed by a parent document (e.g. `categories/`, `shared/`, `suit-policy/main/`, the `instantiations/` set files) — do not need one.
- After compilation, verify: 0 undefined citations, 0 undefined references.

## Release Gates — MANDATORY

- Before any commit touching `.tex`/`.bib`: run `tools/suite-gates.sh` — it must print `SUITE GATES: PASS`.
- Instantiation `render/*.tex` wrappers are **GENERATED files**: never edit them by hand. After any change to a generic shell document, regenerate with `tools/regen-instance-wrappers.sh instantiations/<institution>` and rebuild the edition (deposit bar: 0 undefined citations/references, 0 undefined localization keys, 0 `??key??`).
- The claim-to-record reconciliation pass (every numeric/institutional claim adjacent to a `\cite` must be supported by the entry's verified abstract/note) is a human review pass at release — it is not mechanised by the gates.

## Audit Methodology — SPEC-FIRST

- `_AUDITS/AUDIT-PLAN.md` is the **canonical, machine-consumed** audit methodology: the audit agents read its marked sections verbatim as their grids. To change audit behaviour, edit the PLAN — never the prompts of `.claude/workflows/suit-audit.workflow.js` (orchestration only). G7 enforces plan↔orchestrator lockstep.
- **Run independence**: every audit run is self-contained (no baseline, no diff, no reading of prior runs). Under `_AUDITS/`, only `AUDIT-PLAN.md` and `README.md` are tracked; run folders are local working artefacts. Release quality outcomes are recorded in `CHANGELOG.md`.

## Bibliography Format — MANDATORY

Every `.bib` entry MUST include (see `.claude/rules/bibliography-curation.md`):
- `abstract` — three layers: what it is, what it says, why it matters. 450–900 characters *preferred*, not mandatory; never inflate to a character count, and never present AI-derived or un-fetched text as a source abstract (put such content in `note`).
- `fetch_status` — one of: `OK`, `VERIFIED`, `PAYWALL`.
- `fetch_note` — verification details with date (e.g., "Landing page accessible, HTTP 200. Verified June 2026.").

## Language and Writing

- All documents in **English** unless explicitly requested otherwise.
- Use semantic commands: `\keyword{}`, `\institution{}`, `\framework{}` — never raw `\textbf`/`\textsc` for semantic purposes.
- Follow the evidence methodology: minimum 3 independent evidence layers per thesis.
- Content is **institution-neutral**: the body uses role-based language (e.g., "the national CSIRT", "the data protection authority"); institution-specific instantiation lives only in `shared/localization-guide-EN.tex`.

## Document Architecture

- A single shared `.bib` file for the whole suite, referenced from each document via a relative symlink to `shared/suit-consolidated.bib`.
- Consistent terminology, colours, and stakeholder names across all four documents.

## Governance

- Documents follow a **ticket-centralized** change model. Changes are requested via issues and applied by the maintainer; never edit documents to satisfy an ad-hoc request without a tracking ticket. See `GOVERNANCE.md` and `CONTRIBUTING.md`.
