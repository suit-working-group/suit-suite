# /cite-audit — Audit Citation Coherence

Cross-reference citation keys between .tex and .bib files to detect gaps and inconsistencies.

## Input
- `$ARGUMENTS` — path to .tex file (if omitted, auto-detect all .tex files in current project)

## Procedure

### Step 1: Extract citation keys from .tex
Parse all `\cite{}`, `\citep{}`, `\citet{}` commands (including multi-key citations like `\cite{a, b, c}`).
Produce a sorted, deduplicated list of all citation keys used.

### Step 2: Extract entry keys from .bib
Identify the .bib file(s) referenced by the .tex file (from `\bibliography{}` command).
Parse all `@type{key,` entries. Produce a sorted list of all defined keys.

### Step 3: Cross-reference
Using `comm` or equivalent logic, identify:
1. **Missing references**: keys cited in .tex but not defined in .bib (CRITICAL — will produce [?])
2. **Unused entries**: keys in .bib not cited in any .tex file (INFO — acceptable for shared .bib)
3. **Near-misses**: keys that look similar but don't match exactly (typos, case differences)

### Step 4: Multi-document audit (if applicable)
If the project contains multiple .tex files sharing the same .bib:
- Aggregate all citation keys across all .tex files
- Report per-document utilization rate
- Report overall .bib utilization rate

### Step 5: Report
```
=== CITATION AUDIT REPORT ===
.tex file(s): [list]
.bib file(s): [list]

CRITICAL — Missing references (will produce [?]):
  [key1] — cited in [file:line]
  [key2] — cited in [file:line]

INFO — Unused .bib entries:
  [key1], [key2], ...

WARNING — Possible typos:
  Cited: [key1] — Did you mean: [similar_key]?

METRICS:
  Total citation keys in .tex: N
  Total entries in .bib: N
  Utilization rate: N%
  Missing references: N
```
