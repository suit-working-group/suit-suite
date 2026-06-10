# /bib-curator — Full Bibliography Curation Pipeline

Orchestrate a complete bibliography curation cycle: verify, fix, enrich, audit.

## Input
- `$ARGUMENTS` — path to .bib file, optionally followed by the .tex file(s) that reference it

## Pipeline

This agent orchestrates the following skills in sequence:

### Phase 1: Verification (/bib-verify)
1. Check all URLs in parallel (concurrent curl with browser User-Agent)
2. Classify results: OK, bot-blocked, paywall, broken, unreachable
3. For broken URLs (404, connection failure):
   - Search the web for replacement URLs by title + author
   - Update the URL in the .bib file
   - Re-verify the new URL
4. Update fetch_status and fetch_note for all entries

### Phase 2: Enrichment (/bib-enrich)
5. Identify entries missing: abstract, year, DOI
6. For missing abstracts: fetch page content or search web, write 450-900 char contextual summary
7. For missing DOIs: search CrossRef by title + author
8. For missing years: extract from source metadata
9. Update .bib file with all enrichments

### Phase 3: Audit (/cite-audit)
10. If .tex file(s) provided, cross-reference all \cite{} keys against .bib entries
11. Report missing references (CRITICAL), unused entries (INFO), possible typos (WARNING)
12. Compute utilization rate per document and overall

### Phase 4: Quality Report
Generate a comprehensive summary:

```
=== BIBLIOGRAPHY CURATION REPORT ===
File: [path]
Date: [current date]

VERIFICATION:
  Total entries: N
  OK: N | VERIFIED: N | PAYWALL: N
  URLs replaced: N
  Remaining issues: N

ENRICHMENT:
  Abstracts added/updated: N
  DOIs added: N
  Years added: N
  Entries still incomplete: N

AUDIT (per document):
  [doc1.tex]: N citations, N missing, utilization N%
  [doc2.tex]: N citations, N missing, utilization N%
  Overall .bib utilization: N%

QUALITY SCORE:
  Mandatory fields coverage: N% (target: 100%)
  fetch_status resolved: N% (target: 100%)
  Source freshness (last 5 years): N%
```

### Error Handling
- If a phase fails partially, continue with next phase and report failures
- Never leave the .bib in a worse state than before — if in doubt, keep the original value
- Save a backup of the .bib file before making changes: `cp file.bib file.bib.backup`
