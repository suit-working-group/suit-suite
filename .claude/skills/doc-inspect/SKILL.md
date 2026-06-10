# /doc-inspect — Document Quality Inspection

Perform a comprehensive quality audit of a LaTeX document.

## Input
- `$ARGUMENTS` — path to .tex file (if omitted, auto-detect main .tex in current directory)

## Procedure

### Step 1: Structural analysis
- Count sections, subsections, total lines
- Verify all sections have substantive content (not empty)
- Check for table of contents
- Verify `\label{}` / `\ref{}` consistency

### Step 2: Citation analysis
- Run /cite-audit logic (cross-reference .tex ↔ .bib)
- Count total citations and compute density (citations per page)
- Identify paragraphs with factual claims but no citations
- Compute bibliography utilization rate

### Step 3: Bibliography quality
- Check all .bib entries for mandatory fields: author, title, url, abstract, fetch_status, fetch_note
- Report entries with empty or missing fields
- Check fetch_status distribution (OK/VERIFIED/PAYWALL vs. FAILED/PARTIAL)
- Flag outdated fetch_note dates (>6 months old)

### Step 4: Compilation integrity
- Compile the document (via /latex-build logic)
- Verify 0 undefined citations
- Verify 0 undefined references
- Count and categorize remaining LaTeX warnings

### Step 5: Content quality metrics
Score each dimension (0-100):
- **Structure and hierarchy**: section organization, logical flow
- **Citation density**: references per argumentative paragraph
- **Bibliography completeness**: mandatory fields populated
- **Bibliography freshness**: % of sources from last 5 years
- **Cross-reference integrity**: 0 broken references
- **Compilation cleanliness**: warnings count

### Step 6: Report
Generate a formatted inspection report with:
- Executive summary with overall score
- Per-dimension scores with specific findings
- Critical issues (must fix before delivery)
- Warnings (should fix)
- Recommendations (optional improvements)
- Comparison with project quality standards (from rules)
