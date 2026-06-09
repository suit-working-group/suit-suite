---
name: /instance-audit
description: Audit one deposited instantiation (instantiations/<institution>/) against four gates — BUILD, COMPLETENESS, FIDELITY, CURRENCY — and emit a scored per-instance report with severity-ranked findings in the audit-report house style.
---

# /instance-audit — Audit a Deposited Instantiation

Audit a single concrete edition under `instantiations/<institution>/`. The
deposit bar from `/instantiate` is build-clean; this skill is the **adversarial
re-read** of a deposit already made: it confirms the four documents still build
clean, that every `parameterize` key is bound *and* consumed with no orphans,
that the local values are internally consistent and plausible for the declared
jurisdiction while the deposit stays a **thin shell over the UNCHANGED generic
bodies** (not a fork), and that the instance still tracks the current generic
suite. Output is a scored per-instance report with severity-ranked findings, in
the style of `_AUDITS/<date>/AUDIT-REPORT-<date>.md`.

## Input
- `$ARGUMENTS` — the instantiation directory to audit, as a path or a bare
  institution slug (e.g. `instantiations/lu-university-of-luxembourg` or
  `lu-university-of-luxembourg`). If omitted, list `instantiations/` (excluding
  `_TEMPLATE`) and ask which deposit to audit; audit exactly one per run.

You audit a deposit as a skeptic: a finding is what a hostile reader could land
on, not a style preference. You never edit `set.tex` or the render wrappers —
this skill **reports**; remediation is a separate `/instantiate` pass.

## Procedure

### Step 0: Locate the deposit and pin the reference state
Resolve `$ARGUMENTS` to `instantiations/<institution>/`. Confirm it is a real
deposit, not the template, and record the audited path, the suite HEAD (`git
rev-parse HEAD`), and whether the working tree is clean — this run-traceability
goes in the **changelog**, never in the report body (the report reads as a
single atemporal version). Read the deposit's `set.tex`, its four
`render/*.tex` wrappers, `render/.latexmkrc`, and confirm the symlinks resolve
(`shared -> ../../shared`, `render/suit-consolidated.bib ->
../../../shared/suit-consolidated.bib`). Read `shared/localization-defaults.tex`
(the Layer-0 key catalogue) and the archetype file named by `\instcategory`
(`categories/<ARCHETYPE>.tex`) so you hold the full three-layer binding stack
the deposit renders against.

### Step 1: BUILD gate — does the deposit still render clean
Build the four documents with **`latexmk` only** — never `pdflatex` / `biber`
directly — from the deposit's `render/` directory, policy before policy-summary
(the summary imports the book's labels):

```bash
cd instantiations/<institution>/render
latexmk -pdf policy-EN.tex
latexmk -pdf solution-EN.tex
latexmk -pdf policy-summary-EN.tex
latexmk -pdf solution-summary-EN.tex
```

For each of the four, from `render/out/<doc>.log`, confirm and record:
- **0 undefined citations / references** —
  `grep -ai -E 'undefined (citation|reference)|Citation .* undefined|LaTeX Warning: Reference' render/out/<doc>.log` returns nothing;
- **0 undefined localization keys** —
  `grep -a 'Undefined localization key' render/out/<doc>.log` returns nothing (each hit is a `\setloc` still owed and is consumed somewhere — a COMPLETENESS signal too);
- **no `??key??` leak and no `REPLACE:` text in the rendered output** — scan the
  source (`grep -aR 'REPLACE:' set.tex`) and the rendered PDFs
  (`pdftotext render/<doc>.pdf - | grep -n '??'`), so no placeholder or raw glossary marker reaches a reader.

Any BUILD failure is at least HIGH (a non-rendering or placeholder-leaking
deposit is not depositable) and, when it blocks a clean PDF, CRITICAL — record
the failing document, the offending key/citation, and the log line.

### Step 2: COMPLETENESS gate — every key bound and consumed, no orphans
Reconcile the deposit's bindings against both ends of the contract:
- **Catalogue coverage.** Every `parameterize` key the chosen archetype leaves
  at Layer-0 default (see `categories/README.md` §3.5 and the archetype file)
  must be bound in `set.tex` with a concrete local value, not a leftover
  `REPLACE:` or a generic role-phrase masquerading as a local fact. A
  still-defaulted country NAME key (e.g. `nren-name`, `national-dpa`,
  `national-gov-csirt`) in a *named* edition is a COMPLETENESS finding.
- **Consumption (orphan bindings).** Cross-check each `\setloc` in `set.tex`
  against `\loc{<key>}` consumption sites in the rendered bodies
  (`grep -ranE '\\loc\{<key>\}' suit-policy suit-solution shared`). A binding
  with **no** consumption site is an **orphan** — but distinguish two kinds:
  (a) a *declared* reference-only / substance-in-prose orphan that `set.tex`
  documents with a comment and a reason (the LU edition's §6 note is the
  reference model — those are not regressions); (b) an **undeclared** orphan (a
  `\setloc` that renders nowhere and is not accounted for) — that is the
  finding. Conversely a `\loc{}` site with no binding anywhere in the stack is
  caught by the Step-1 "Undefined localization key" check; surface it here as
  the COMPLETENESS root if Step 1 tripped.

Rank: an unbound consumed key (build-breaking) is HIGH+; an undeclared orphan or
a defaulted-where-named-edition key is MODERATE; a thin/under-specified but
correct binding is LOW.

### Step 3: FIDELITY gate — plausible local values over an unchanged generic body
Two independent fidelity checks, weighted heavily — fidelity is the binding
ceiling of an instantiation audit:
- **Local-value fidelity.** Each bound value must be internally consistent and
  **plausible for the declared jurisdiction**: the NREN, national DPA,
  governmental CSIRT, NIS2 / CER transposition instruments, supervisory
  authority, national SPOC, notification platform, risk method, cyber strategy
  and governance ladder must be the *real* bodies/instruments for that country,
  mutually consistent (the DPA named in `national-dpa` is the one the
  `data-protection-regime` phrase points to; the supervisory authority and SPOC
  are not conflated; sanction ceilings match the cited regime), and free of
  cross-jurisdiction contamination (e.g. a French ANSSI where ANSSI-LU is meant).
  Verify the load-bearing named instruments and authorities against the web
  where a value is checkable; an incorrect, stale or mismatched local fact is a
  FIDELITY finding ranked by how load-bearing the surface is.
- **Thin-shell fidelity (not a fork).** The deposit must be a thin localization
  shell over the **UNCHANGED** generic bodies. Confirm the four `render/*.tex`
  wrappers `\input` the generic `suit-policy/` and `suit-solution/` sources
  unedited (every concrete value flows through `\loc{}` from the stack — nothing
  institution-specific is inlined in a wrapper or, worse, copied-and-edited into
  the deposit). Diff each wrapper's body-input structure against the generic
  wrapper / `_TEMPLATE` it shells; any divergence beyond the single sanctioned
  `\input{../set}` addition, any vendored copy of a generic body file, or any
  generic prose edited inside the deposit is a **fork** — a HIGH FIDELITY
  finding, because it silently detaches the edition from the maintained suite.
  Declared **deltas** (`\setloc` re-bindings at the bottom of `set.tex` with a
  why-comment, per `/instantiate` Step 4) are legitimate and are NOT forks; an
  *undeclared* structural re-bind is.

### Step 4: CURRENCY gate — does the instance still track the current generic suite
The deposit was built against some prior suite state; confirm it has not drifted
behind the current one:
- **Key-catalogue currency.** Diff the keys the deposit binds/consumes against
  the current `shared/localization-defaults.tex` and the current archetype file.
  A `parameterize` key **added** to the catalogue since the deposit (now
  consumed by the generic body, defaulted to a generic phrase, and never given a
  local value here) means the edition silently renders the generic role-phrase
  where a local fact is now expected — a CURRENCY finding (severity by whether
  the new key is load-bearing).
- **Body / structure currency.** Confirm the generic body parts the wrappers
  `\input` still exist at the referenced paths and that the wrapper's inlined
  title-page / pointer prose is still in sync with the current generic wrapper
  (the wrappers warn they must be kept in sync as the suite evolves). A wrapper
  pointing at a moved/renamed generic part, or carrying stale inlined prose the
  generic suite has since changed, is a CURRENCY finding.
- **Build-state currency.** A deposited PDF older than the `set.tex` / generic
  sources it derives from (stale artifact) is at least LOW — note it so the
  maintainer rebuilds before relying on the shipped PDF.

Rank CURRENCY by consequence: a missed load-bearing new key or a broken body
reference is HIGH; a cosmetic inlined-prose drift or a stale-but-rebuildable PDF
is LOW.

### Step 5: Skeptic pass, score, and assemble
Run every candidate finding through a skeptic check before it reaches the
report: kill anything refuted, not actionable, or already accounted for by a
*declared* orphan/delta note in `set.tex`. For the survivors:
- assign each a stable ID `<GATE>-<8-hex>` (GATE ∈ BUILD, COMPL, FIDEL, CURR)
  and a severity (CRITICAL / HIGH / MODERATE / LOW);
- score each of the four gates 0–100 with a one-line justification, and compute
  the **instance aggregate** as the mean of the four gate scores (rounded),
  naming the binding-ceiling gate;
- cluster the survivors into root causes (one fix resolves a cluster — do not
  patch symptoms individually);
- every CRITICAL and HIGH finding is a **blocking gate**: the deposit does not
  pass until each is closed.

## Output
A single scored per-instance report, written to
`_AUDITS/<date>/INSTANCE-AUDIT-<institution>-<date>.md`, in the house style of
`_AUDITS/<date>/AUDIT-REPORT-<date>.md`, with these sections:
- **(a) Executive header** — the instance audited, a four-row gate-score table
  (BUILD / COMPLETENESS / FIDELITY / CURRENCY, each with a one-line
  justification), the instance aggregate and its binding-ceiling gate, and a
  finding-count-by-severity table.
- **(a2) Root-cause clusters** — theme, proposed root fix, the findings each
  resolves, and the residual if unfixed.
- **(b) Canonical findings** — grouped by severity then by gate; each finding
  carries Claim, Location (file + the `\setloc`/`\loc` key or log line), Root
  cause, Evidence, and Recommended fix (a concrete `set.tex` re-binding or a
  rebuild, never a generic-body edit).
- **(c) Blocking gates** — one row per CRITICAL/HIGH finding with its closure
  summary; the deposit passes only when all are closed.

Plus a sibling **run-traceability changelog**
(`_AUDITS/<date>/INSTANCE-AUDIT-CHANGELOG-<institution>-<date>.md`) holding ALL
process/traceability detail — audited path, suite HEAD, working-tree state, the
four `latexmk` build results, candidate-vs-confirmed counts, kill statistics,
and the per-gate clean/fail log lines — so the report body itself carries none
of it. The report **reports**; it does not modify the deposit.
