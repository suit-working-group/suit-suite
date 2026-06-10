# /argumentation — Generate Anticipatory Argumentation Document

Generate a systematic objection-response document defending a main report's proposals.

## Input
- `$ARGUMENTS` — path to the main .tex document to defend

## Procedure

### Step 1: Exhaustive reading
Read the ENTIRE main document (all lines, in chunks if needed). Identify:
- Every thesis, proposal, or recommendation made
- Every factual claim that could be challenged
- Every value judgment or prioritization
- The evidence used to support each claim
- Implicit assumptions underlying the arguments

### Step 2: Objection generation
For each identifiable thesis, generate objections in two categories:

**Legitimate objections** (good-faith technical/operational concerns):
- Implementation complexity or feasibility
- Cost or resource concerns
- Unintended consequences
- Alternative approaches not considered
- Scope or scalability limitations

**Insidious objections** (bad-faith rhetorical attacks):
- Ad hominem (attacking the author instead of the argument)
- Appeal to authority/tradition (status quo bias)
- Cherry-picking counter-examples
- False equivalence or false dilemma
- Genetic fallacy (dismissing based on source/origin)
- Imputing bad motives to the author

### Step 3: Response construction
For each objection, construct a response following the pattern:
1. Acknowledge any partial merit (for legitimate objections)
2. Identify the logical flaw (for insidious objections)
3. Present counter-evidence using the five-layer methodology
4. Cite specific sources from the shared bibliography
5. Conclude with a clear, concise rebuttal statement

### Step 4: LaTeX document generation
Create a LaTeX document with:
- Same document class, packages, and styling as the main document
- Three custom tcolorbox environments:
  - `objectionbox` (red) for legitimate objections
  - `insidiousbox` (orange) for bad-faith arguments
  - `responsebox` (OliveGreen) for evidence-based responses
- Objections grouped thematically (matching main document sections)
- Each objection numbered (O1.1, O1.2, etc.)
- Shared bibliography: `\bibliography{../main/bibfile}`
- Summary table (longtable) at the end listing all objections, their nature, and core rebuttal

### Step 5: Compilation
Compile with /latex-build, ensuring 0 undefined citations.

### Output
- Complete .tex file in the `argumentation/` subdirectory
- Compiled PDF
- Report: N legitimate objections, N insidious objections, N total
