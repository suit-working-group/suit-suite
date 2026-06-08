# /institutional-benchmark — Build Institutional Comparison

Research and compare practices across reference universities on a given topic.

## Input
- `$ARGUMENTS` — practice or topic to compare (e.g., "federated IT governance", "Science DMZ deployment", "researcher root access policy", "IT security training programs")

## Procedure

### Step 1: Define comparison criteria
Based on the topic, define 4-6 comparison dimensions (e.g., governance model, technical architecture, policy documents, staff structure, accountability mechanism).

### Step 2: Research institutions
For each reference institution (prioritize those with public documentation):
- **Tier 1** (detailed documentation): MIT, Stanford, ETH Zurich, Cambridge, Michigan, CERN
- **Tier 2** (good documentation): Oxford, EPFL, CMU, Wisconsin-Madison, NC State, Penn State
- **Tier 3** (supplementary): Paris-Saclay, Sorbonne, Rennes, Rutgers

For each institution:
1. Search the web for the specific practice
2. Find official institutional documentation (IT pages, policy documents, press releases)
3. Extract verifiable details (team names, policy names, dates, specific configurations)
4. Note the URL of the primary source

### Step 3: Build comparison table
Create a LaTeX longtable or tabularx comparing institutions across the defined dimensions:

```latex
\begin{longtable}{>{\raggedright}p{2.5cm} X X X}
\caption{Comparative: [Topic] across reference universities}
\label{tab:benchmark-topic} \\
\toprule
\textbf{Institution} & \textbf{Dimension 1} & \textbf{Dimension 2} & \textbf{Dimension 3} \\
\midrule
\endfirsthead
...
\endlastfoot
\institution{MIT} & Details & Details & Details \\
\addlinespace
...
\bottomrule
\end{longtable}
```

### Step 4: Generate BibTeX entries
For each institution cited, create or verify .bib entries following bibliography-curation standards.

### Step 5: Synthesize findings
Write a 1-paragraph synthesis identifying:
- Common patterns across institutions (convergence = best practice)
- Notable outliers and why they differ
- Implications for the user's institutional context

### Output
- LaTeX table fragment ready to insert
- .bib entries for all institutional sources
- Synthesis paragraph with \cite{} references
