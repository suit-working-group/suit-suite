---
paths:
  - "**/*.tex"
  - "**/*.bib"
---

# Document Quality Standards

## Compilation Requirements
- 0 undefined citations (`[?]` markers) at delivery
- 0 broken cross-references (LaTeX warnings for undefined `\ref`)
- 0 compilation errors (warnings acceptable only if documented)
- PDF metadata populated: PDFTitle, PDFAuthor, PDFSubject

## Bibliography Integrity
- Every `\cite{key}` must match an `@entry{key,` in the .bib file
- Unused .bib entries should be documented (acceptable for shared .bib files)
- Bibliography utilization rate target: >90% for dedicated .bib, flexible for shared .bib
- All URLs in .bib verified within the current month

## Cross-Document Consistency
- Shared terminology across all documents in a suite (main, companion, argumentation)
- Color semantics consistent: same color = same meaning across all documents
- Stakeholder names and roles consistent across documents
- Section numbering and labels referenced correctly between documents

## Structural Completeness
- Every section has substantive content (no placeholder stubs)
- Tables have captions and labels
- Figures have captions and labels
- All abbreviations defined at first use
- Table of contents present for documents >10 pages

## Confidentiality
- CONFIDENTIAL watermark on all sensitive documents
- Footer with version date on quality/inspection documents
- No accidental inclusion of personal data or credentials

## Pre-Delivery Checklist
1. Full compilation: pdflatex → bibtex → pdflatex × 2
2. Check: 0 undefined citations in .log
3. Check: 0 undefined references in .log
4. Check: PDF opens correctly and all pages render
5. Check: Table of contents hyperlinks work
6. Check: Bibliography renders completely (no [?])
7. Copy final PDF to project root
