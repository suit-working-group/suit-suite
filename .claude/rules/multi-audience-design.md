---
paths:
  - "**/*.tex"
---

# Multi-Audience Document Design

## Document Suite Architecture
For any substantial policy or technical proposal, produce a suite of complementary documents:

### Main Report (exhaustive, technical)
- Target: 25-50 pages
- Document class: 12pt, a4paper, twoside
- Full argumentation with all evidence layers
- Complete bibliography with all sources
- Diagrams, tables, risk registers
- Table of contents with hyperlinks

### Companion / Executive Summary (condensed, governance)
- Target: 2-4 pages
- Document class: 11pt, a4paper (single-sided)
- Tighter margins (1.8/1.6/2.2cm) and spacing (1.05)
- No section numbering
- Three types of action boxes: principle (blue), alert (red), action (green)
- Cross-reference to main report sections: `\mainref{Section X}`
- No standalone bibliography — references main document

### Argumentation Document (defensive, anticipatory)
- Target: 15-25 pages
- Same document class as main report
- Systematic objection-response structure
- Color-coded boxes: objection (red), insidious (orange), response (green)
- Summary table of all objections at end
- Shared bibliography with main report

### Inspection Report (quality assurance)
- Scoring across defined quality dimensions
- Color-coded severity levels (critical/warning/success)
- Specific, actionable findings
- Shared bibliography for cross-validation

## Stakeholder Messaging Pattern
For each identified stakeholder group, create a dedicated tcolorbox with:
1. **Strategic issue** — framed in the stakeholder's own priorities
2. **Key evidence** — 2-3 most relevant references for that role
3. **What changes** — concrete, scannable bullet list of impacts
4. **Regulatory anchor** — specific regulation/standard that legitimizes the proposal for that audience

Assign a unique, semantically meaningful color per stakeholder role. Maintain color consistency across all documents in the suite.

## Navigation Between Documents
- Main → Companion: `\mainref{Section~X}` command for cross-references
- Argumentation → Main: explicit section number references
- All documents share the same .bib file (via symlink or relative path)
- Terminology, acronyms, and stakeholder names must be identical across all documents
