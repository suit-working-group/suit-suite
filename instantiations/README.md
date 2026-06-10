# The instantiation library

The generic SUIT suite renders as concrete, named **editions**. Each edition
lives in `instantiations/<institution>/` as a **thin shell over the unchanged
generic documents — never a fork**: one value file (`set.tex`) selects an
archetype and fills the institution's names; generated render wrappers do the
rest. Because nothing generic is copied, every edition keeps tracking the suite
as it evolves.

## Deposited editions

| Edition | Country | Archetype | Read the documents |
|---|---|---|---|
| [`lu-university-of-luxembourg/`](lu-university-of-luxembourg/) — **reference edition** | Luxembourg | `EU-PUB-RI` | [Policy dossier](lu-university-of-luxembourg/render/policy-EN.pdf) · [Executive summary](lu-university-of-luxembourg/render/policy-summary-EN.pdf) · [Technical reference](lu-university-of-luxembourg/render/solution-EN.pdf) · [Operational summary](lu-university-of-luxembourg/render/solution-summary-EN.pdf) |

The **University of Luxembourg edition is the worked example** every new
edition is patterned on: its [README](lu-university-of-luxembourg/README.md)
retraces the full process below as it was actually carried out, and its
`set.tex` shows what a complete, round-trip-validated Layer-2 set looks like.

## Produce your institution's edition — the process

1. **Copy the template.** Copy the whole `_TEMPLATE/` directory to
   `instantiations/<your-institution>/`. You will edit exactly **one** content
   file, `set.tex`; the `render/` wrappers and `.latexmkrc` are build
   machinery (generated — see step 6).
2. **Pick your archetype (Layer 1).** Run the §2 self-identification decision
   tree in [`categories/README.md`](../categories/README.md) — jurisdiction,
   governance shape, NREN tier; scale sets pace, never the archetype. Set
   `\instcategory` in `set.tex`. *(Luxembourg: Q1 EU/EEA → `EU-PUB-RI`.)*
3. **Fill `set.tex` (Layer 2).** Replace the country-specific NAME keys your
   archetype leaves at default (NREN, data-protection authority, national
   CSIRT, notification platform, …), bind the title-block `doc-*` keys, and
   record any local deltas. The full key-by-key walk-through is in
   [`_TEMPLATE/README.md`](_TEMPLATE/README.md). *(Luxembourg: 51 bindings —
   RESTENA, CNPD, ILR, SERIMA, ULHPC, the Board of Governors, …)*
4. **Build the four documents.** From `render/`, with `latexmk` only (never
   `pdflatex`/`biber` directly), building `policy-EN` before
   `policy-summary-EN`.
5. **Verify the deposit bar.** Zero tolerance: 0 undefined citations, 0
   undefined references, 0 undefined localization keys, and no `??key??` or
   `REPLACE:` text in any rendered PDF.
6. **Deposit through the ticket flow.** Open an **Instantiation contribution**
   issue (`.github/ISSUE_TEMPLATE/instantiation-contribution.yml`) declaring
   institution, country, archetype, completeness checklist and build-clean
   confirmation; the maintainer brings the edition into the library
   (`CONTRIBUTING.md`, `GOVERNANCE.md`). Deposit `set.tex`, the wrappers and
   `.latexmkrc`, the symlinks, and the **four built PDFs** (readers need no
   TeX install) — never `render/out/`.

Maintainer note: the `render/*.tex` wrappers are **generated** by
`tools/regen-instance-wrappers.sh` and must never be edited by hand; the
release gate `tools/suite-gates.sh` (G6) verifies every deposited edition's
wrappers remain identical to a fresh regeneration, so editions cannot silently
fork.

## Assisted path

Working-group members can run the `/instantiate` skill, which accompanies the
whole process — archetype selection, country research for the `set.tex` keys,
builds, deposit-bar checks, and the contribution ticket.
