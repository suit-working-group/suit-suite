# /document-builder — Build and Verify LaTeX Document

Intelligently compile a LaTeX document with automatic error resolution.

## Input
- `$ARGUMENTS` — path to .tex file (if omitted, auto-detect)

## Pipeline

### Phase 1: Pre-flight checks
1. Verify the .tex file exists and is syntactically valid (no obvious LaTeX errors)
2. Identify the .bib file(s) referenced
3. Verify the .bib file(s) exist and are accessible (check symlinks)
4. Check for .latexmkrc configuration
5. Ensure output directory exists (create `out/` if needed)

### Phase 2: Citation audit (/cite-audit logic)
6. Extract all \cite{} keys from the .tex file
7. Cross-reference against the .bib file
8. If CRITICAL missing references found:
   - Report them and ask whether to proceed (compilation will produce [?])
   - Or attempt to find and add the missing entries

### Phase 3: Compilation (/latex-build logic)
9. First pdflatex pass → generate .aux
10. bibtex pass with correct BIBINPUTS
11. Second pdflatex pass → resolve forward references
12. Third pdflatex pass → stabilize references
13. Verify 0 undefined citations and 0 undefined references in .log

### Phase 4: Error recovery (if compilation fails)
14. Parse the .log file for the specific error
15. Common fixes:
    - Missing package → suggest `\usepackage{}`
    - Undefined control sequence → identify the command
    - Missing .bib → check BIBINPUTS path
    - Font encoding issues → verify inputenc/fontenc
16. Apply fix and retry (max 3 attempts)

### Phase 5: Quality verification
17. Run /doc-inspect logic on the compiled document
18. Verify PDF is readable and correct page count
19. Copy PDF to project root

### Report
```
=== DOCUMENT BUILD REPORT ===
Document: [name]
Status: SUCCESS / FAILURE
Pages: N | Size: N KB
Compilation passes: N
Undefined citations: 0
Undefined references: 0
BibTeX entries resolved: N
Warnings: N
Output: [path to final PDF]
```
