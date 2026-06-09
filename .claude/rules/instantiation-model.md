---
paths:
  - "categories/**"
  - "instantiations/**"
---

# Instantiation Model (SUIT)

This rule governs the **instantiation system as a discipline**: how the generic
SUIT suite turns into a growing library of concrete, build-clean institution
editions. It sits on top of the localization mechanism (see
`localization-model.md` for the `\setloc`/`\loc` contract and the 3-layer
stack) and adds the standard for the two directories it scopes:
`categories/` (the Layer-1 archetypes) and `instantiations/` (the contributed
library of Layer-2 editions). The discipline is non-negotiable: an instantiation
is a **thin shell over the UNCHANGED generic bodies — never a fork**.

## The Six Category Archetypes (`categories/`)

`categories/` holds exactly **six worked archetypes**, each a *partial*
`\setloc` set (Layer 1) that binds the **structural** keys (governance ladder,
constituent units/pilots, NREN tier, identity federation, deployment/custody,
operational roles) and the **regulatory** keys for one class of university,
while leaving the country-specific NAME keys at their Layer-0 default for the
institution layer to fill.

| File | Archetype | Regime profile |
|---|---|---|
| `EU-PUB-RI.tex` | European public, research-intensive (EU/EEA) — the baseline anchor | EU deep |
| `US-PUB-R1.tex` | US public (state-chartered) R1/R2 | US deep, sectoral |
| `US-PRIV-R1.tex` | US private (non-profit) doctoral / very-high-research | US deep, sectoral |
| `UK-RES.tex` | UK chartered/statutory research-intensive | UK light |
| `LATAM-PUB.tex` | Latin American public (federal/national); worked instance Brazil | BR light |
| `AFR-PUB.tex` | African public, comprehensive; worked instance South Africa | ZA light |

- These six **span Europe, North America, South America and Africa**; they are
  worked instantiations, **NOT an exhaustive enumeration**. An institution that
  fits none lands on the *closest* archetype and records its deltas, or derives
  a fresh regulatory row via the mapping method.
- A category file is **NOT** an institution edition. It captures what a class
  has in common and **deliberately** leaves the NAME keys (`nren-name`,
  `national-dpa`, `national-gov-csirt`; plus `nren-csirt` for the US archetypes)
  at default. Do not pin a country-specific name in a category file.
- State regulatory keys in **role terms** so a peer jurisdiction inside the same
  archetype can re-point them without forking the file.
- The authoritative per-archetype key×value matrix is `categories/README.md` §3;
  keep the table and the `.tex` files in lockstep when either changes.

## Self-Identification Decision Tree

An adopting institution selects its archetype by running the **§2 decision tree**
in `categories/README.md`, **after** completing the SUITSOLUTION Chapter 4
self-assessment (`suit-solution/ch04-self-assessment-EN.tex`). The four questions
are orthogonal selectors:

- **Q1 — jurisdiction/binding regime** selects the regime family, or sends an
  unlisted jurisdiction to the **mapping method**
  (`shared/regulatory-applicability-EN.tex`, `sec:reg-mapping`, Steps 1–7): the
  F1–F6 spine and the SUIT control set are fixed; only the instrument column is
  filled for the new regime.
- **Q2 — governance shape** splits the two ambiguous branches (EU public vs
  private/foundation; US public vs private).
- **Q3 — NREN tier** confirms single-national vs multi-tier, and surfaces any
  tier delta as a real finding.
- **Q4 — scale** sets **pace, not identity**. Scale never changes the archetype:
  the SUIT functional set is **size-invariant** (no de-minimis threshold; the
  GDPR Art. 32 anchor applies regardless of headcount). Only the instantiation
  and migration horizon scale.

If no archetype matches exactly, take the closest on Q1→Q2→Q3 priority and
record the structural/regulatory keys you must re-bind by hand as **local
deltas** in the Layer-2 set.

## The Contributed Library (`instantiations/`)

`instantiations/` is the growing library of concrete editions, plus the
template:

- **`_TEMPLATE/`** — the starting point. It is **copied, never edited in
  place**: copy the whole directory to `instantiations/<institution>/`. The
  adopter edits **exactly one content file, `set.tex`** (Layer 2). The
  `render/*.tex` wrappers, `render/.latexmkrc`, the `shared` symlink and the
  `suit-consolidated.bib` symlink are build machinery and are not touched.
- **`<institution>/`** — one deposited edition. Each wrapper loads Layer 0,
  `\input`s `set.tex` (which `\input`s the chosen `categories/<ARCHETYPE>.tex`,
  then applies the institution's `\setloc` values and deltas), then `\input`s
  the **unchanged generic document body**. No generic document is copied or
  forked, so every edition keeps tracking the suite as it evolves.

`set.tex` only ever **`\setloc`s** values; it **never** calls `\loc`. A key the
adopter forgets is not silent — `\loc` on an unbound key renders the conspicuous
`??key??` and warns at build time (see `localization-model.md`).

## The Deposit Bar (enforced)

An edition is depositable only when all four documents build clean. After
building each document from `render/` (with `latexmk` — never `pdflatex`/`biber`
directly; build `policy-EN` before `policy-summary-EN`, which imports the book's
labels), verify, with **zero tolerance**:

- **0 undefined citations** and **0 undefined references**;
- **0 undefined localization keys** (no `Undefined localization key` in any
  `render/out/<doc>.log`);
- **0 `??key??` leaks** and no `REPLACE:` placeholder text anywhere in the
  rendered PDFs;
- the edition remains a **thin shell over the UNCHANGED generic bodies** — if a
  deposit needs a generic body edited, that edit is a *suite* change routed
  through the ticket flow first, never a fork inside `instantiations/`.

Deposit `set.tex`, the `render/` wrappers and `.latexmkrc`, the `shared` and
`suit-consolidated.bib` symlinks, and the four built **PDFs** (so readers need no
TeX install). Do **NOT** deposit `render/out/` or other build by-products.

## Ticket-Centralized Contribution Flow

Both the generic suite and the instantiation library are maintained under the
**ticket-centralized** model (see `CONTRIBUTING.md`, `GOVERNANCE.md`):

- Contributors have read access and propose changes through an **issue
  (ticket)**; they do **not** edit documents directly. The maintainer is the
  single point that centralizes, triages, decides, applies, and records each
  applied change in `CHANGELOG.md` against its ticket id.
- To contribute an edition, open the **Instantiation contribution** issue
  (`.github/ISSUE_TEMPLATE/instantiation-contribution.yml`) declaring
  institution, country, chosen archetype, the completeness checklist, and the
  build-clean confirmation. The maintainer brings
  `instantiations/<institution>/` into the library under the same ticket-
  centralized rule. The library grows **one institution at a time**, with the
  working group.

## The Luxembourg Reference Instantiation

`instantiations/lu-university-of-luxembourg/` is the **reference edition**: the
canonical named EU-PUB-RI edition whose bindings are the **University of
Luxembourg surface forms** that the framework's localization variables
represent. It is the worked exemplar every new edition is patterned on:
rendering the LU set produces the complete University-of-Luxembourg edition of
the suite, with every localization variable resolved to a concrete value and no
dead bindings. Treat it as the standard:

- It legitimately **names** Luxembourg and the University of Luxembourg — a
  concrete edition is *meant* to; it is **NOT** the generic body and must not be
  mistaken for one.
- Preserve round-trip closure: do not change an LU binding away from its matrix
  surface form without updating the matrix and re-validating; every retained
  binding without a `\loc{}` consumption site is an authoritative
  `parameterize` anchor, not a regression (the COMPLETENESS INVARIANT in
  `localization-model.md` still governs adding/removing consumption sites).

## See also

- `.claude/rules/localization-model.md` — the `\setloc`/`\loc` machinery, the
  3-layer stack, and the completeness invariant.
- `.claude/rules/no-false-locality.md` — keeping generic prose jurisdiction-neutral.
- `categories/README.md` — the six archetypes, the §2 decision tree, the §3 matrix.
- `instantiations/_TEMPLATE/README.md` — the full adopter walk-through.
- `CONTRIBUTING.md`, `GOVERNANCE.md` — the ticket-centralized governance.
