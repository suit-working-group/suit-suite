---
paths:
  - "**/*.tex"
  - "**/.latexmkrc"
---

# LaTeX Conventions

## Document Class
- Full reports: `\documentclass[12pt,a4paper,twoside]{article}`
- Executive summaries: `\documentclass[11pt,a4paper]{article}`
- Always use `\raggedbottom` to prevent vertical stretching

## Core Packages (always include)
- Encoding: `inputenc[utf8]`, `fontenc[T1]`, `babel[english]`
- Typography: `lmodern`, `microtype`
- Colors: `xcolor[dvipsnames,table]`
- Tables: `booktabs`, `tabularx` (never use vertical lines in tables)
- Lists: `enumitem`
- Links: `hyperref[colorlinks]` with NavyBlue/OliveGreen/BrickRed
- Spacing: `setspace` with `\onehalfspacing` (reports) or `\setstretch{1.05}` (summaries)
- Headers: `fancyhdr` with twoside configuration
- Boxes: `tcolorbox[skins,breakable]`
- Quotes: `csquotes`

## Semantic Commands
- Define and use consistently:
  - `\keyword{term}` → `\textbf` for key concepts
  - `\institution{name}` → `\textsc` for organization names
  - `\framework{name}` → `\textsf` for normative frameworks
- Never use raw `\textbf` or `\textsc` for these semantic purposes

## tcolorbox Conventions
- Always use: `breakable`, `sharp corners=south`, `boxrule=0.6pt`
- Color formula: `colback=COLOR!3-5!white`, `colframe=COLOR!60-75!black`
- Padding: `left=4pt, right=4pt`
- Boxes are parameterized: use `[2][]` pattern for color + title

## Section Layout
- Sections start on new pages: `\renewcommand{\section}{\clearpage\oldsection}`
- Use `\label{sec:keyword}` for all sections, `\label{tab:keyword}` for tables
- Cross-reference with `Section~\ref{sec:...}` and `Table~\ref{tab:...}`

## Bibliography
- Style: `plainnat` with `natbib[numbers,sort&compress]`
- Use `\cite{}` for numbered references, support multi-key: `\cite{key1, key2}`
- Shared .bib via symlinks or relative paths (`../main/filename`)
- Build: `BIBINPUTS="path/to/bib:" bibtex out/docname` for non-local .bib

## Build System
- Auxiliary/temp directory: `out/` (all temp files: `.aux`, `.bcf`, `.bbl`, `.log`, …) via `$aux_dir = 'out';`
- Final PDF generated **directly at the project root** (next to the `.tex`) via `$out_dir = '.';` — it is NOT copied from `out/`, and NO PDF is left inside `out/`
- Use `latexmk` with `.latexmkrc` config
- Full compilation: pdflatex → biber/bibtex → pdflatex → pdflatex
- Target: 0 undefined citations, 0 broken cross-references

## Mandatory `.latexmkrc` in Every Compilable LaTeX Directory
- **Every directory containing a compilable top-level `.tex` file MUST have its own `.latexmkrc`**
- Input-only directories — whose `.tex` are `\input`ed by a parent document rather than compiled on their own (e.g. `categories/`, `shared/`, `suit-policy/main/`, the `instantiations/` set files) — do NOT need a `.latexmkrc`.
- `latexmk` does NOT inherit `.latexmkrc` from parent directories
- When creating a new compilable LaTeX directory, ALWAYS create a `.latexmkrc` with:
  - `$pdf_mode = 1;`
  - `$pdflatex = 'pdflatex -interaction=nonstopmode %O %S';` (do NOT hard-code `-output-directory`; latexmk injects it from `$aux_dir` via `%O`)
  - `$aux_dir = 'out';` (temp/aux files go here)
  - `$out_dir = '.';` (the final PDF stays at the project root, next to the `.tex`)
  - `$clean_ext = 'synctex.gz';`
  - `$success_cmd = $ENV{'SUIT_CLEAN'} ? 'rm -f out/%R.* %R.synctex.gz' : '';` — **opt-in** auto-clean. By default (`latexmk -pdf doc.tex`) the `out/` cache is kept so rebuilds stay incremental. Set `SUIT_CLEAN=1` (e.g. `SUIT_CLEAN=1 latexmk -pdf doc.tex`) to wipe the `out/` temporaries and the stray `synctex.gz` after a successful build — the final `.pdf` (at the directory root) is preserved. The explicit `rm` is used (not `latexmk -c`) so the clean is deterministic regardless of `$clean_ext`/`$bibtex_use`.
  - Do NOT add `$success_cmd = 'cp out/%R.pdf ./%R.pdf';` — the PDF is produced at the root directly, so copying is both unnecessary and leaves a stale duplicate in `out/`.
- If the document uses `biblatex`/`biber`, add: `$biber = 'biber %O %S';`
- If the `.bib` file is in another directory, add: `$ENV{'BIBINPUTS'} = '../path/to/bib/:' . ($ENV{'BIBINPUTS'} || '');`
- If an end-of-document `\@@input\jobname.aux` fails on a cold (from-scratch) build — typical of assembled `book`-class documents — add `out` to the input path so the aux is found: `$ENV{'TEXINPUTS'} = '../../:out:' . ($ENV{'TEXINPUTS'} || '');`

## Watermark
- Use `background[pages=all]` package
- Settings: `CONFIDENTIAL`, `lightgray`, `scale=7`, `angle=45`, `opacity=0.25`
- Reduce opacity to 0.20 for compact documents

## Headers (fancyhdr, twoside)
```
\fancyhead[LE,RO]{\thepage}
\fancyhead[RE]{\textit{Document Title}}
\fancyhead[LO]{\textit{\leftmark}}
\setlength{\headheight}{15pt}
\renewcommand{\headrulewidth}{0.4pt}
```
