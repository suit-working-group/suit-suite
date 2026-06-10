# University of Luxembourg edition — the SUIT reference instantiation

This directory is the **deposited reference edition** of the SUIT suite: the
canonical, round-trip-validated `EU-PUB-RI` instantiation, maintained as the
worked example every new edition is patterned on (see
[`instantiations/README.md`](../README.md) for the library and the process).
It is a **thin shell over the unchanged generic documents**: one value file
(`set.tex`) plus generated render wrappers — never a fork.

## The four documents (built PDFs)

| Document | PDF |
|---|---|
| 📘 SUIT Policy — University of Luxembourg edition | [`render/policy-EN.pdf`](render/policy-EN.pdf) |
| 📗 SUIT Policy Summary (executive companion) | [`render/policy-summary-EN.pdf`](render/policy-summary-EN.pdf) |
| 📙 SUIT Solution (technical reference) | [`render/solution-EN.pdf`](render/solution-EN.pdf) |
| 📕 SUIT Solution Summary (operational summary) | [`render/solution-summary-EN.pdf`](render/solution-summary-EN.pdf) |

## Edition facts

| Fact | Value |
|---|---|
| Archetype (Layer 1) | `EU-PUB-RI` — selected via the §2 decision tree of `categories/README.md` (Q1: EU/EEA public research-intensive) |
| Layer-2 bindings | 51 `\setloc` values in [`set.tex`](set.tex) — NREN: RESTENA; DPA: CNPD; NIS2 authority: ILR; notification platform: SERIMA; HPC: ULHPC; governing board: the Board of Governors (Conseil de Gouvernance); staff representation: the staff delegation; … |
| Title block | version 2.1 · INTERNAL · approved May 7, 2026 by the Faculty of Science, Technology and Medicine and the Department of Computer Science |
| Authorship | Nicolas Guelfi (chair of the SUIT working group, creator of the first version); affiliation and the suite's University-of-Luxembourg origin are carried by `author-affiliation` in `set.tex` |

## How this edition was produced (the process, as lived)

The six steps of [`instantiations/README.md`](../README.md), as actually
carried out for this edition:

1. **Template copied** to `instantiations/lu-university-of-luxembourg/`.
2. **Archetype selected**: EU jurisdiction, public research-intensive
   governance, single national NREN → `EU-PUB-RI`; `\instcategory` set in
   `set.tex`.
3. **`set.tex` filled**: the country NAME keys (RESTENA, CNPD, ILR, SERIMA,
   the Luxembourg NIS2 transposition, …), the institution keys (University
   bodies, DCS/SnT/ULHPC, staffing profile), the title-block `doc-*` keys, and
   the documented local deltas. Every binding carries its anchor comment; §6
   of `set.tex` documents the intentionally unconsumed anchors.
4. **Built** from `render/` with `latexmk` (policy before policy-summary).
5. **Deposit bar verified**: 0 undefined citations / references /
   localization keys; no `??key??` or `REPLACE:` text in the PDFs.
6. **Audited**: the suite audit's INST track
   (BUILD / COMPLETENESS / FIDELITY / CURRENCY) runs on this edition; the
   findings of audit 260609-2153 are remediated, and the release gates keep it
   current.

## Rebuilding

```bash
cd render
latexmk -pdf policy-EN.tex
latexmk -pdf policy-summary-EN.tex   # after policy-EN: it imports the book's labels
latexmk -pdf solution-EN.tex
latexmk -pdf solution-summary-EN.tex
```

The `render/*.tex` wrappers are **GENERATED** by
`tools/regen-instance-wrappers.sh` — never edit them by hand. After any change
to a generic shell document, regenerate (`tools/regen-instance-wrappers.sh
instantiations/lu-university-of-luxembourg`) and rebuild; the release gate
`tools/suite-gates.sh` (G6) verifies the wrappers stay identical to a fresh
regeneration. The edition set loads **last** (just before `\begin{document}`),
so its values override any document-scope `\setloc` carried by a generic
shell.

## Use this edition as your model

Pattern your institution's edition on this one: same directory shape, a
`set.tex` of the same structure (the anchor comments tell you what each key
is for), the same deposit bar. Start from
[`instantiations/_TEMPLATE/`](../_TEMPLATE/) with its
[walk-through](../_TEMPLATE/README.md), or run the `/instantiate` skill for
the assisted path, and deposit through the **Instantiation contribution**
ticket (`CONTRIBUTING.md`).
