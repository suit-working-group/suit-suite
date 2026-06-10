# Instantiation template — how to produce your institution's edition

This is the **starting point for one adopting institution**. Copy this whole
`_TEMPLATE/` directory to `instantiations/<your-institution>/`, fill in your
values, build the four documents, and deposit them through the contribution
flow so every other participant gets your concrete edition.

The suite is generic by design. An *instantiation* binds the generic
role-phrases to your concrete reality through a three-layer localization stack:

```
localization.sty                         (\setloc / \loc machinery)
  Layer 0: shared/localization-defaults.tex   generic role phrases (the suite)
    Layer 1: categories/<ARCHETYPE>.tex        your institution's CLASS
      Layer 2: set.tex                          your institution's VALUES + deltas
        document body                            renders your edition
```

You touch exactly **one content file** — `set.tex`. The four `render/*.tex`
wrappers and `render/.latexmkrc` are build machinery; you normally do not edit
them.

---

## What is in this directory

| Path | What it is | You edit it? |
|---|---|---|
| `set.tex` | Your institution set: picks the archetype, fills the country-specific NAME keys, records local deltas. | **Yes — this is the whole job.** |
| `render/policy-EN.tex` | Render wrapper for document 1/4 — the **Policy** complete dossier (book). | No |
| `render/solution-EN.tex` | Render wrapper for document 2/4 — the **Solution** (Technical Reference). | No |
| `render/policy-summary-EN.tex` | Render wrapper for document 3/4 — the **Policy Summary** (executive companion). | No |
| `render/solution-summary-EN.tex` | Render wrapper for document 4/4 — the **Solution Summary** (operational). | No |
| `render/.latexmkrc` | Build configuration (resolves the generic sources and shared modules). | No |
| `render/suit-consolidated.bib` | Symlink to the shared consolidated bibliography. | No |
| `shared` (symlink) | Points at the repo `shared/` so a body file's `../shared/...` input resolves. | No |

Each wrapper loads Layer 0, then `\input`s your `set.tex` (which loads Layer 1
then applies Layer 2), then `\input`s the **unchanged** generic document body.
No generic document is copied or forked — your edition is a thin shell over the
canonical suite, so it tracks the suite as it evolves.

---

## 1. Pick your archetype (Layer 1)

Open [`../../categories/README.md`](../../categories/README.md) and run the
**§2 self-identification decision tree** (it is meant to be run *after* the
SUITSOLUTION Chapter 4 self-assessment). It lands you on one of the six worked
archetypes:

| File | Archetype |
|---|---|
| `EU-PUB-RI` | European public, research-intensive university (EU/EEA) |
| `US-PUB-R1` | US public (state-chartered) research university (R1/R2) |
| `US-PRIV-R1` | US private (non-profit) doctoral / very-high-research university |
| `UK-RES` | UK chartered/statutory research-intensive university |
| `LATAM-PUB` | Latin American public (federal/national) university |
| `AFR-PUB` | African public, comprehensive university |

If none fits exactly, the tree tells you to take the **closest** archetype and
record the differences as *local deltas* (step 4 below), deriving any unlisted
regulatory regime with the mapping method in
`../../shared/regulatory-applicability-EN.tex` (`sec:reg-mapping`, Steps 1–7).

## 2. Fill `set.tex`

Open `set.tex` and:

1. Set `\instcategory` to your archetype's file name (no path, no `.tex`),
   e.g. `\newcommand{\instcategory}{EU-PUB-RI}`.
2. Replace every `REPLACE:` placeholder for the **country-specific NAME keys**
   your archetype leaves at default — typically `nren-name`, `national-dpa`,
   `national-gov-csirt` (and `nren-csirt` for the US archetypes). The
   per-archetype comparison matrix in `categories/README.md` §3 tells you
   exactly which keys your archetype leaves for you.
3. *(Optional)* Uncomment and fill the **institution identity** block if you
   want a named edition rather than an anonymous-by-class one.
4. Record every **local delta** the decision tree surfaced (an NREN-tier delta,
   a governance delta, a derived regulatory row) by re-binding the affected key
   with `\setloc` at the bottom of `set.tex`, with a comment explaining why.

You never call `\loc`; you only `\setloc` values. A key you forget is not
silent — `\loc` on an unbound key **fails the build loudly**, so a missing
value is always caught at compile time.

## 3. Build the four documents

From `render/`, build with **`latexmk`** — never call `pdflatex`/`biber`
directly:

```bash
cd render
latexmk -pdf policy-EN.tex
latexmk -pdf solution-EN.tex
latexmk -pdf policy-summary-EN.tex   # build policy-EN.tex first: it imports the book's labels
latexmk -pdf solution-summary-EN.tex
```

Temporary files land in `render/out/`; the final PDFs are produced in
`render/` next to each wrapper.

**Build-clean is the deposit bar.** After each build, verify:

- **0 undefined citations** and **0 undefined references**
  (`grep -aic undefined render/out/<doc>.log` should report none of these);
- **0 undefined localization keys** — search the log for
  `Undefined localization key`; any hit is a `\setloc` you still owe;
- no `??key??` placeholders or `REPLACE:` text anywhere in the rendered PDFs.

A couple of notes on the wrappers (informational; you do not edit them):

- The Policy book wrapper inlines the generic title page and the Part V pointer
  prose (the generic book inlines them too — they are not factored into
  separate files). Everything institution-specific flows through `\loc{}`.
- The Solution Summary consumes the localization layer too (for instance the
  identity-federation profile), so the edition can differ from the generic
  operational summary wherever your `set.tex` binds the consumed keys.
- The wrappers are **GENERATED** by `tools/regen-instance-wrappers.sh` (the
  executable definition of the sanctioned delta; your edition `set.tex` is
  loaded last, just before `\begin{document}`, so its values always win).
  Never edit a wrapper by hand — the release gate `tools/suite-gates.sh` (G6)
  fails on any drift from a fresh regeneration.

## 4. Deposit your instantiation

Once the four PDFs build clean:

1. Open the **Instantiation contribution** issue
   (`.github/ISSUE_TEMPLATE/instantiation-contribution.yml`): declare your
   institution, country, chosen archetype, the completeness checklist, and the
   build-clean confirmation.
2. The maintainer reviews and brings in `instantiations/<your-institution>/`
   (the `set.tex` plus the render wrappers and the four built PDFs) under the
   ticket-centralized flow described in
   [`../../CONTRIBUTING.md`](../../CONTRIBUTING.md) and
   [`../../GOVERNANCE.md`](../../GOVERNANCE.md).

Your concrete edition then becomes available to every other participant. The
library grows one institution at a time, with the working group.

---

## What to deposit (and what not to)

Deposit:

- `set.tex` (your filled set),
- the `render/` wrappers and `render/.latexmkrc` (so anyone can rebuild),
- the `shared` and `render/suit-consolidated.bib` symlinks,
- the four built **PDFs** (so readers get the documents without a TeX install).

Do **not** deposit `render/out/` or other build by-products — they are
regenerated by `latexmk` and are ignored by the repository `.gitignore`.
