# /latex-build — Intelligent LaTeX Compilation

Compile a LaTeX document with proper bibtex handling and error verification.

## Input
- `$ARGUMENTS` — path to .tex file (if omitted, auto-detect main .tex in current directory)

## Procedure

### Step 1: Ensure `.latexmkrc` exists
- Check if the directory containing the `.tex` file has a local `.latexmkrc`
- If **missing**, create one automatically:
  1. Determine bibliography backend: search `.tex` for `\addbibresource` (→ biber) or `\bibliography` (→ bibtex)
  2. Locate `.bib` file: check if referenced `.bib` is local or in another directory
  3. Generate `.latexmkrc` with the standard template:
     ```perl
     $pdf_mode = 1;
     $pdflatex = 'pdflatex -interaction=nonstopmode -output-directory=out %O %S';
     $out_dir = 'out';
     $success_cmd = 'cp out/%R.pdf ./%R.pdf';
     $clean_ext = 'synctex.gz';
     ```
  4. If biber: add `$biber = 'biber --output-directory=out %O %S';`
  5. If `.bib` is in another directory: add `$ENV{'BIBINPUTS'} = '../path/:' . ($ENV{'BIBINPUTS'} || '');`
- Report: `[LATEXMKRC] Created .latexmkrc in <directory>` or `[LATEXMKRC] OK — .latexmkrc found`

### Step 2: Detect build configuration
- Read the `.latexmkrc` to confirm the output directory (default: `out/`)
- Identify the .bib file path from `\bibliography{}` or `\addbibresource{}` in the .tex file
- Determine if BIBINPUTS needs to be set (when .bib is not in the same directory)

### Step 3: Clean and compile
```bash
# First pass: generate .aux
pdflatex -output-directory=out -interaction=nonstopmode document.tex

# BibTeX pass: resolve references (with correct BIBINPUTS if needed)
BIBINPUTS="path/to/bib/dir:" bibtex out/document

# Second and third passes: resolve cross-references
pdflatex -output-directory=out -interaction=nonstopmode document.tex
pdflatex -output-directory=out -interaction=nonstopmode document.tex
```

### Step 4: Verify compilation
Check the .log file for:
- `LaTeX Warning.*Citation.*undefined` → count must be 0
- `LaTeX Warning.*Reference.*undefined` → count must be 0
- `Fatal error` or `Emergency stop` → compilation failed

### Step 5: Copy output
Copy the PDF from `out/` to the project root (matching .latexmkrc `$success_cmd` behavior).

### Step 6: Report
```
=== BUILD REPORT ===
Document: [filename]
Pages: N
Size: N KB
Undefined citations: 0
Undefined references: 0
BibTeX warnings: N (list if any)
Status: SUCCESS / FAILURE
Output: [path to PDF]
```

If compilation fails, analyze the error and suggest fixes before retrying.
