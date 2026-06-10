# /bib-enrich — Enrich Bibliography Metadata

Add missing abstracts, DOIs, years, and other metadata to BibTeX entries.

## Input
- `$ARGUMENTS` — path to .bib file, optionally followed by specific keys to enrich (if omitted, enrich all entries with incomplete metadata)

## Procedure

### Step 1: Identify incomplete entries
Read the .bib file and find entries missing any of:
- `abstract` (empty or absent)
- `year` (empty or absent)
- `doi` (absent, for entries that likely have one: @article, @inproceedings, @book)
- `fetch_status` or `fetch_note` (empty or absent)

### Step 2: Enrich abstracts
For each entry missing an abstract:
1. Fetch the URL and extract the page content
2. If the page is accessible, summarize the content in 450-900 characters following the three-layer format:
   - What it is (type and content description)
   - What it says (key findings or provisions)
   - Why it matters (relevance to the project domain)
3. If the page is not accessible (paywall, bot-blocked), search the web for the title + author and synthesize from available metadata

### Step 3: Enrich DOIs
For @article and @inproceedings entries without DOI:
- Search CrossRef API or web for the DOI by title + author + year
- Add `doi = {10.xxxx/...}` field if found

### Step 4: Enrich years
For entries without year:
- Extract from URL content, web search, or metadata
- Add `year = {YYYY}` field

### Step 5: Update .bib file
Apply all changes to the .bib file in place, preserving existing formatting and field order.

### Step 6: Report
Output a summary:
- Entries enriched: N
- Abstracts added: N
- DOIs added: N
- Years added: N
- Remaining incomplete entries: N (list keys)
