---
name: /instantiate
description: Accompany a working-group member in producing their institution's instantiation of the SUIT suite — pick the archetype, scaffold from _TEMPLATE, research and fill the country-specific set.tex keys, build the four documents, verify the deposit bar, and prepare the contribution ticket.
---

# /instantiate — Produce an Institution's Instantiation

Accompany one working-group member end-to-end in producing **their**
institution's concrete edition of the SUIT suite: classify, scaffold, fill,
build, verify against the deposit bar, and prepare the contribution ticket.

## Input
- `$ARGUMENTS` — the adopting institution (e.g. "University of Ljubljana", or
  an anonymous-by-class label like "an EU public research university"). If
  omitted, ask the member for it before starting. Optionally followed by the
  country / jurisdiction of establishment.

You work alongside the member: you research and **propose** every
country-specific value, but the member confirms each one — these are their
institution's facts, not yours to invent.

## Procedure

### Step 1: Self-identify the archetype (Layer 1)
Open `categories/README.md` and run the **§2 self-identification decision tree**
*with* the member. The tree is meant to be run after the SUITSOLUTION Chapter 4
self-assessment (`suit-solution/ch04-self-assessment-EN.tex`); if the member has
not done it, walk the four orthogonal selectors directly:

- **Q1 — jurisdiction / binding regime.** EU/EEA → Q2 (EU branch); United States
  → Q2 (US branch); UK → `UK-RES`; Latin America → `LATAM-PUB`; Africa
  (sub-Saharan / SADC) → `AFR-PUB`; any other jurisdiction → the **mapping
  method** (`shared/regulatory-applicability-EN.tex`, `sec:reg-mapping`, Steps
  1–7): keep the F1–F6 spine and SUIT control set fixed, fill only the instrument
  column, then adopt the closest governance + NREN archetype and overlay the
  derived regulatory row.
- **Q2 — governance shape** (EU and US branches only). EU public, collegial
  (senate/council + strategic board + rectorate) → `EU-PUB-RI`. US: **public**
  (state-chartered, board of regents, state procurement) → `US-PUB-R1`;
  **private** (self-perpetuating non-profit board, president + provost) →
  `US-PRIV-R1`.
- **Q3 — NREN tier** (confirmation). Single national NREN + pan-region backbone
  (GÉANT / RedCLARA / UbuntuNet / Janet) vs. multi-tier campus → state/regional
  → national-backbone (Internet2). A mismatch with the Q1–Q2 archetype is a real
  finding — record it as an NREN-tier **delta** in Step 4.
- **Q4 — scale** (pace input, **not** an archetype selector). The SUIT functional
  set is size-invariant (no de-minimis threshold; the GDPR Art. 32 anchor applies
  regardless of headcount). Scale sets only the instantiation depth and migration
  pace, never the archetype.

Land on exactly one of the six worked archetypes (`EU-PUB-RI`, `US-PUB-R1`,
`US-PRIV-R1`, `UK-RES`, `LATAM-PUB`, `AFR-PUB`). If none fits exactly, take the
**closest** on Q1→Q2→Q3 priority and list the deltas to record in Step 4.
Confirm the chosen archetype with the member before scaffolding.

### Step 2: Scaffold `instantiations/<institution>/` from `_TEMPLATE`
Choose a kebab-case directory name `<country-code>-<institution-slug>` matching
the existing convention (e.g. `lu-university-of-luxembourg`). Copy the template
tree, preserving the symlinks:

```bash
cp -R instantiations/_TEMPLATE instantiations/<institution>
```

Then verify the three relative symlinks resolve from the new location (they are
relative, so a plain copy keeps them valid):

- `instantiations/<institution>/shared -> ../../shared`
- `instantiations/<institution>/render/suit-consolidated.bib -> ../../../shared/suit-consolidated.bib`

If `cp` dereferenced a symlink into a regular file, re-create it as a symlink. Do
**not** edit the four `render/*.tex` wrappers or `render/.latexmkrc` — they are
build machinery; the member touches exactly one content file, `set.tex`.

### Step 3: Fill `set.tex` — research and propose every local value
`set.tex` is the single Layer-2 content file. Edit it with the member:

1. **Archetype binding.** Set `\newcommand{\instcategory}{<ARCHETYPE>}` to the
   Step-1 archetype file name (no path, no `.tex`). Leave the
   `\input{\catdir/\instcategory}` line as-is.
2. **Country-specific NAME keys.** Replace every `REPLACE:` placeholder for the
   keys the archetype leaves at Layer-0 default. `categories/README.md` §3.5
   states exactly which keys each archetype leaves to you — typically:
   - `nren-name` — the member's **national NREN** by name (e.g. DFN, RENATER,
     SURF, RESTENA, RNP, SANReN/TENET). *Skip for `UK-RES` (fixed to Janet) and
     `US-PRIV-R1` (fixed to Internet2).*
   - `national-dpa` — the **national data-protection authority**.
   - `national-gov-csirt` — the **national / governmental CSIRT**.
   - `nren-csirt` — for the **US archetypes only**, the state/regional R&E
     network security team.

   For each key, **research the member's concrete local value** (national NREN,
   data-protection authority, governmental CSIRT, NIS2 / sectoral transposition
   instrument, national reporting/notification platform, sector authority,
   national cyber strategy and risk method, governance bodies, etc.) using the
   web and the member's confirmation, and propose it. Use the LU reference
   edition (`instantiations/lu-university-of-luxembourg/set.tex`) as the worked
   model for surface form and depth, and `shared/localization-defaults.tex` as
   the full key catalogue. Bind **plain-text** values (no `\gls{}` wrappers — the
   SUIT glossary is institution-neutral; calling an undefined `\gls` key fails
   the build).
3. **Institution identity (optional).** If the member wants a **named** edition
   rather than anonymous-by-class, fill `institution-name`, `institution-type`,
   and the governance ladder (`executive-leadership`, `governing-board`,
   `academic-governing-bodies`). Leaving these at default is a legitimate deposit.
4. **National regulatory stack (optional, for a deep named edition).** Pin the
   national transposition instruments, authorities and bodies (NIS2 / CER
   transposition, NIS2 supervisory authority, national SPOC, cyber competence
   centre, notification platform, essential-entity classification basis) the way
   the LU edition does, sourcing each value.

You never call `\loc`; you only `\setloc` values. A forgotten key is **not
silent** — `\loc` on an unbound key fails the build loudly, so it is always
caught in Step 5.

### Step 4: Record local deltas
For every deviation the decision tree surfaced (an NREN-tier delta, a governance
delta, a regulatory row derived via the mapping method), re-bind the affected
structural or regulatory key with `\setloc` at the bottom of `set.tex`, with a
comment explaining **why**. The delta is a finding, not noise — it is also what
the contribution ticket asks you to declare in Step 7.

### Step 5: Build the four documents via the render wrappers
Build with **`latexmk` only** — never call `pdflatex` or `biber` directly. From
the instantiation's `render/` directory, in this order (the policy book must be
built before the policy summary, which imports the book's labels):

```bash
cd instantiations/<institution>/render
latexmk -pdf policy-EN.tex
latexmk -pdf solution-EN.tex
latexmk -pdf policy-summary-EN.tex
latexmk -pdf solution-summary-EN.tex
```

Temporary files land in `render/out/`; the four PDFs are produced in `render/`
next to each wrapper. If a build aborts on an undefined key, that is a `\setloc`
still owed — return to Step 3, bind it, and rebuild.

### Step 6: Verify the deposit bar
**Build-clean is the deposit bar.** For each of the four documents confirm, from
`render/out/<doc>.log`:

- **0 undefined citations** and **0 undefined references** — e.g.
  `grep -ai -E 'undefined (citation|reference)|Citation .* undefined|LaTeX Warning: Reference' render/out/<doc>.log` returns nothing;
- **0 undefined localization keys** — `grep -a 'Undefined localization key' render/out/<doc>.log` returns nothing (each hit is a `\setloc` still owed);
- **0 `??key??` leaks and 0 `REPLACE:` text** in the rendered output — search the
  source and inspect the PDFs (e.g. `grep -aR 'REPLACE:' set.tex` and a
  `pdftotext`/visual scan for `??`), so no placeholder reaches a reader.

Any failure sends you back to Step 3 (missing/incorrect binding) or Step 5
(stale build). Only when all four documents pass all three checks is the
instantiation depositable.

### Step 7: Prepare the Instantiation contribution ticket
Fill the **Instantiation contribution** issue template
(`.github/ISSUE_TEMPLATE/instantiation-contribution.yml`) with the member:

- **Institution** and **Country / jurisdiction**;
- **Chosen archetype** (Layer 1) — or "Closest archetype + recorded deltas";
- **Local deltas** recorded in `set.tex` (write "none" if the archetype fit
  cleanly);
- the **Completeness checklist** (copied `_TEMPLATE`, `\instcategory` set, every
  NAME key filled with no `REPLACE:` left, no `??key??` / "Undefined
  localization key" in any log, all four PDFs present);
- the **Build-clean confirmation** (all four built with `latexmk -pdf`, policy
  before policy-summary; 0 undefined citations and 0 undefined references each;
  `render/out/` excluded — deposit `set.tex`, the render wrappers, the symlinks
  and the four PDFs);
- optional **notes for the maintainer** (a derived regulatory regime, an
  archetype-fit judgement call, a localization-guide gap).

The maintainer brings `instantiations/<institution>/` into the library under the
ticket-centralized flow (`CONTRIBUTING.md`, `GOVERNANCE.md`); the member's
concrete edition then becomes available to every other participant.

## Output
- A build-clean `instantiations/<institution>/` — `set.tex` (archetype +
  country-specific values + recorded deltas), the unedited `render/` wrappers and
  `render/.latexmkrc`, the `shared` and `render/suit-consolidated.bib` symlinks,
  and the four built PDFs (policy, solution, policy-summary, solution-summary) —
  ready to deposit.
- A filled-in Instantiation contribution ticket (or its body text), with the
  deposit-bar verification confirmed and every local delta declared.
- **Not** deposited: `render/out/` and other build by-products (regenerated by
  `latexmk`, ignored by `.gitignore`).
