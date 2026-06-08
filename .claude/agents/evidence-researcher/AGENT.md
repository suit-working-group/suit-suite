# /evidence-researcher — Multi-Layer Evidence Research

Research and assemble evidence at all five layers to support or strengthen a thesis.

## Input
- `$ARGUMENTS` — the thesis to support, optionally followed by the domain context (e.g., "Network segmentation reduces attack surface — university IT context")

## Procedure

### Step 1: Decompose the thesis
Parse the thesis into:
- The core claim (what is being asserted)
- The domain context (where it applies)
- The implicit assumptions (what must be true for the claim to hold)

### Step 2: Research Layer 1 — Binding Legal Instruments
Search for:
- EU regulations or directives that mandate or support the claim
- CJEU or ECtHR judgments that establish relevant principles
- National laws that implement relevant EU directives
- Specific articles, clauses, or holdings

### Step 3: Research Layer 2 — Normative Frameworks
Search for:
- NIST publications (CSF, SP 800-series) addressing the claim
- ISO/IEC standards with relevant controls
- Governance frameworks (COBIT, ITIL) with relevant processes
- Specific control IDs or process names

### Step 4: Research Layer 3 — Sector Consensus
Search for:
- EDUCAUSE, GÉANT, JISC publications on the topic
- Industry survey data (Verizon DBIR, Sophos, Gartner)
- Professional body guidelines or recommendations
- Sample sizes and methodology notes

### Step 5: Research Layer 4 — Empirical Data
Search for:
- Quantified measurements supporting the claim
- Incident reports or case studies with measurable outcomes
- Before/after implementation comparisons
- Peer-reviewed research with statistical analysis

### Step 6: Research Layer 5 — Institutional Precedents
Search for:
- Named universities implementing the practice
- Official institutional documentation (not just news articles)
- Specific team names, policy documents, governance structures
- At least 5 institutions across different countries

### Step 7: Generate outputs
For each piece of evidence found:
1. Create a .bib entry (following bibliography-curation standards)
2. Verify the URL
3. Write the contextualized abstract

Generate a synthesis showing how the five layers converge:
```
=== EVIDENCE REPORT ===
Thesis: [statement]

Layer 1 (Legal): N sources found
  - [summary of key holdings/provisions]

Layer 2 (Normative): N sources found
  - [summary of key controls/recommendations]

Layer 3 (Sector): N sources found
  - [summary of consensus/survey data]

Layer 4 (Empirical): N sources found
  - [summary of quantified evidence]

Layer 5 (Institutional): N institutions documented
  - [summary of common practices]

CONVERGENCE ASSESSMENT:
  Layers supporting thesis: N/5
  Robustness: [HIGH/MEDIUM/LOW]
  Gaps: [layers with insufficient evidence]

SUGGESTED CITATION PARAGRAPH:
  [Ready-to-use LaTeX paragraph with \cite{} commands]
```

### Output
- .bib entries ready to append to bibliography
- LaTeX paragraph with citations
- Convergence assessment
