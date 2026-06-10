# /companion — Generate Executive Summary Companion

Generate a condensed executive summary document for governance audiences.

## Input
- `$ARGUMENTS` — path to the main .tex document, optionally followed by target audience (default: "rectorate/governance")

## Procedure

### Step 1: Analyze main document
Read the entire main document and identify:
- Core thesis and primary recommendations
- Key evidence supporting each recommendation
- Most impactful stakeholder implications
- Regulatory requirements driving the proposals
- Proposed timeline and cost implications

### Step 2: Condense content
Extract and condense to 2-4 pages:
- One-paragraph executive summary of the entire report
- 3-5 key findings (one sentence each, with the single most important citation)
- 3-5 recommended actions (imperative, concrete, actionable)
- Regulatory anchors that make action mandatory (not optional)
- Risk of inaction (what happens if recommendations are not adopted)

### Step 3: Generate LaTeX document
Create a compact document with:
```latex
\documentclass[11pt,a4paper]{article}
% Tight margins and spacing
\usepackage[top=1.8cm,bottom=1.6cm,left=2.2cm,right=2.2cm]{geometry}
\setstretch{1.05}
\setcounter{secnumdepth}{0}  % No section numbering
```

Three action-oriented box types:
- `principlebox` (NavyBlue) — fundamental principles at stake
- `alertbox` (BrickRed) — urgent risks or regulatory obligations
- `actionbox` (OliveGreen) — concrete recommended next steps

Navigation back to main document:
```latex
\newcommand{\mainref}[1]{%
  \par\vspace{1pt}
  {\footnotesize\color{gray}\itshape
  $\triangleright$~Full analysis and references: #1
  in the technical report.}\par\vspace{2pt}}
```

### Step 4: Bibliography
- Use symlink or relative path to shared .bib file
- Include only the most essential citations (5-15 references)
- Compile and verify

### Output
- Complete .tex file in the `companion/` subdirectory
- Compiled PDF (target: 2-4 pages)
