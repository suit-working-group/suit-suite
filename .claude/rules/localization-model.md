---
paths:
  - "shared/**"
  - "suit-policy/**"
  - "suit-solution/**"
  - "instantiations/**"
---

# Localization Model (SUIT)

The SUIT documents render as clean generic prose by default and as an
institution-specific edition when an instantiation is loaded. Both behaviours
come from ONE key/value mechanism. Treat this mechanism as a contract: it is
how the suite stays simultaneously publishable as a generic policy and
adoptable by a named institution.

## Mechanism — `shared/localization.sty`

The package carries no dependencies and adds exactly three public commands:

- `\loc{key}` → expands to the value currently bound to `<key>`.
- `\Loc{key}` → same, but capitalises the first letter (sentence-initial use).
- `\setloc{key}{value}` → binds (or rebinds) `<key>`.

- Keys are **kebab-case** (e.g. `national-nren`, `governing-board`).
- Values may contain arbitrary LaTeX markup (incl. `\gls{...}`).
- Calling `\loc`/`\Loc` on an **unbound** key emits a `\PackageWarning` at
  build time and renders the conspicuous placeholder `??key??`. A missing
  binding therefore fails loudly — never silently blank. NEVER ship a build
  containing a `??key??` token.

## The 3-Layer Override Stack

Each later layer overrides any key an earlier layer set; keys left untouched
keep the value from below. Load order is mandatory:

```
localization.sty                              (\setloc / \loc machinery)
  Layer 0: shared/localization-defaults.tex   (generic role phrases)
    Layer 1: categories/<ARCHETYPE>.tex       (the institution's class)
      Layer 2: instantiations/<institution>/set.tex   (concrete values)
        document body
```

- **Layer 0 — `shared/localization-defaults.tex`** holds exactly one
  `\setloc` per localization variable. Every default is the variable's
  **canonical generic role phrase** (jurisdiction-neutral, institution-agnostic
  — e.g. `the institution`, `national research-and-education network`).
  Rendering with ONLY Layer 0 loaded MUST reproduce the present generic prose
  unchanged.
- **Layer 1 — `categories/<ARCHETYPE>.tex`** is a PARTIAL set of `\setloc`
  overrides binding the *structural* keys shared by every institution in an
  archetype (e.g. EU-PUB-RI, US-PUB-R1), while leaving country-specific NAME
  keys at their Layer-0 default. `\input` AFTER Layer 0, BEFORE any Layer-2 set.
- **Layer 2 — `instantiations/<institution>/set.tex`** is the single
  localization entry point for ONE adopting institution: it selects the
  archetype, fills the country-specific NAME keys, and records any local deltas.

A generic document loads Layer 0 only. An edition loads Layer 0, then a
render wrapper `\input`s the Layer-2 set, which itself `\input`s its Layer-1
archetype.

## COMPLETENESS INVARIANT (enforced)

Every parameterised anchor must have **at least one `\loc{}`/`\Loc{}`
consumption site**. A key that is bound (a `\setloc` exists somewhere in the
stack) but **never consumed** is a **dead binding**: it silently breaks
instantiation, because changing it in an edition produces no visible effect and
the generic↔edition mapping no longer covers the text it claims to cover.

- Adding a `\setloc` key REQUIRES adding (or already having) a `\loc{}` site.
- Removing the last `\loc{}` site for a key REQUIRES removing its binding (or
  documenting why the anchor was retired).
- After any localization change, verify both directions: every `\setloc` key
  resolves to ≥1 `\loc{}` site, and every `\loc{}` key resolves to a Layer-0
  default.

## Generic Render = Defaults = Clean Prose

The generic build is defined as "Layer 0 only". Its output is the canonical
generic text. It MUST read as finished prose, NEVER as a literal mustache
token (`{{INSTITUTION_NAME}}`, `<placeholder>`, `TODO`, etc.). A mustache token
names an abstract localization variable only; in `.tex` it is always resolved
through `\loc{}` against a real Layer-0 default. Optional clauses (e.g. `author-affiliation`) default to an EMPTY value
that produces no stray punctuation or whitespace, not to a placeholder.

## Authoring Checklist

- New parameter → add the Layer-0 default (canonical generic phrase) AND ≥1
  `\loc{}`/`\Loc{}` site in the same change.
- Sentence-initial use → `\Loc{}`; everywhere else `\loc{}`.
- Never hard-code an institution name, NREN, governing-body, or jurisdiction
  string in document bodies — route it through `\loc{}`.
- Never override a key in a document preamble when the value is generic; that
  belongs in Layer 0. Preamble `\setloc` is for document-scope deltas only.
- Build clean (0 `localization` warnings, 0 `??key??` tokens) before commit.
