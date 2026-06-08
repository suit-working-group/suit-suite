# /defense-suite-builder — Build Complete Defense Document Suite

Orchestrate creation of the full companion document suite from a main report.

## Input
- `$ARGUMENTS` — path to the main .tex document

## Pipeline

This agent creates a complete defense suite: argumentation + companion + inspection.

### Phase 1: Deep analysis of main document
1. Read the ENTIRE main document (every line)
2. Map all theses, proposals, claims, and recommendations
3. Identify the evidence structure supporting each
4. Note the stakeholder groups addressed
5. Catalog the bibliography usage patterns

### Phase 2: Argumentation document (/argumentation)
6. Generate all legitimate and insidious objections
7. Construct evidence-based responses for each
8. Create LaTeX document with objectionbox/insidiousbox/responsebox
9. Include summary table
10. Compile and verify

### Phase 3: Companion document (/companion)
11. Extract key findings and recommendations
12. Generate 2-4 page executive summary
13. Create action boxes (principle/alert/action)
14. Add navigation references to main document
15. Compile and verify

### Phase 4: Cross-suite quality check
16. Verify all three documents share the same .bib file
17. Cross-reference: ensure argumentation covers all main document theses
18. Cross-reference: ensure companion mentions all critical recommendations
19. Verify terminology consistency across all documents
20. Run /cite-audit on each document

### Phase 5: Compilation suite
21. Compile all documents via /latex-build
22. Verify 0 undefined citations across all documents
23. Copy all PDFs to appropriate locations

### Report
```
=== DEFENSE SUITE REPORT ===
Main document: [path] (N pages)
Argumentation: [path] (N pages, N objections: N legitimate + N insidious)
Companion: [path] (N pages)

Bibliography:
  Shared .bib entries: N
  Cited in main: N (N%)
  Cited in argumentation: N
  Cited in companion: N

Quality:
  Undefined citations: 0 across all documents
  Cross-reference integrity: OK
  Terminology consistency: OK
```
