# /stress-test — Counter-Argument Stress Test (Red Team)

Perform a red-team analysis of an argumentation document to find weaknesses and gaps.

## Input
- `$ARGUMENTS` — path to the argumentation .tex document, optionally followed by path to the main .tex document

## Procedure

### Step 1: Read and map the argumentation
Read the entire argumentation document. For each objection-response pair, extract:
- The objection statement
- The classification (legitimate vs. insidious)
- The response's evidence base (which sources, which layers)
- The logical structure of the rebuttal

### Step 2: Attempt to refute each response
For each response, act as a hostile but intelligent critic:
1. **Evidence weakness**: Does the response rely on a single evidence layer? Can that layer be challenged?
2. **Logical gaps**: Are there unstated assumptions? Does the response address the objection's strongest form?
3. **Counter-examples**: Are there real-world examples where the response's logic failed?
4. **Scope limitations**: Does the response generalize from limited data? Are the institutional precedents truly comparable?
5. **Temporal validity**: Are the cited sources current? Has anything changed since publication?

### Step 3: Identify missing objections
Read the main document (if provided) and identify:
- Theses that have NO corresponding objection in the argumentation document
- Attack angles that a sophisticated critic would use but that are not anticipated
- Political/organizational objections not covered (budget, staffing, timeline, internal politics)
- Meta-objections (attacks on the document itself, its methodology, its authors)

### Step 4: Classify findings

**RED — Vulnerable responses** (evidence insufficient to withstand expert scrutiny):
- Response relies on a single evidence layer
- Key citation is weak (opinion piece, outdated, non-peer-reviewed)
- Logical gap that a skilled debater would exploit

**ORANGE — Improvable responses** (solid but could be strengthened):
- Missing one or two evidence layers that could be added
- Counter-example exists that should be preemptively addressed
- Response is correct but could be more concise/compelling

**GREEN — Robust responses** (withstand aggressive scrutiny):
- Multiple independent evidence layers
- Strongest version of objection addressed
- No known counter-examples unaddressed

### Step 5: Generate improvement recommendations
For each RED and ORANGE finding:
1. Explain the specific weakness
2. Suggest additional evidence sources (search the web if needed)
3. Propose revised or supplementary response text
4. Generate .bib entries for new sources

### Report
```
=== STRESS TEST REPORT ===
Document: [path]
Total objection-response pairs analyzed: N

ROBUSTNESS ASSESSMENT:
  GREEN (robust): N (N%)
  ORANGE (improvable): N (N%)
  RED (vulnerable): N (N%)

MISSING OBJECTIONS IDENTIFIED: N
  [list with brief description]

DETAILED FINDINGS:
[For each RED/ORANGE item:]
  Objection: [ID and summary]
  Weakness: [specific issue]
  Recommendation: [how to fix]
  Additional sources: [.bib entries if applicable]

OVERALL ASSESSMENT:
  [1-paragraph synthesis of the argumentation's defensive strength]
  [Priority list of improvements]
```
