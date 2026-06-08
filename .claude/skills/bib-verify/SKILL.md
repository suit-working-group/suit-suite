# /bib-verify — Verify Bibliography URLs

Verify all URLs in a BibTeX bibliography file and update verification metadata.

## Input
- `$ARGUMENTS` — path to .bib file (if omitted, auto-detect .bib in current project)

## Procedure

### Step 1: Extract all entries with URLs
Read the .bib file and extract every entry's key, URL, current fetch_status, and fetch_note.

### Step 2: Parallel URL verification
Write and execute a Python script using `concurrent.futures.ThreadPoolExecutor` (max 10 workers) that for each URL:
- Runs `curl -sI -L -o /dev/null -w "%{http_code}|%{url_effective}|%{content_type}" -A "Mozilla/5.0 ..." --connect-timeout 10 --max-time 15`
- Classifies the result:
  - **HTTP 200 + text/html** → OK, "Landing page accessible"
  - **HTTP 200 + application/pdf** → OK, "PDF document accessible"
  - **HTTP 200 + redirected** → OK, "Redirect to landing page"
  - **HTTP 403 from known academic publishers** (springer, wiley, tandfonline, sciencedirect, cambridge.org, oup.com, psycnet.apa.org, pubsonline.informs.org, educause.edu) → VERIFIED, "Publisher landing page, access restricted by bot protection"
  - **HTTP 403 from other sites** → needs web search verification
  - **HTTP 404** → needs replacement URL via web search
  - **Connection failure** → needs web search verification

### Step 3: Resolve problematic URLs
For entries returning 404 or connection failure:
- Search the web for the resource by title + author
- Find the best replacement URL (prefer DOI, then institutional page, then web archive)
- Update the URL in the .bib entry

### Step 4: Update .bib file
For each entry, update:
- `fetch_status` → OK, VERIFIED, or PAYWALL
- `fetch_note` → verification description + "Verified [current month] [current year]."

### Step 5: Report
Output a summary table:
| Metric | Count |
|--------|-------|
| Total entries | N |
| HTTP 200 (OK) | N |
| Bot-blocked (VERIFIED) | N |
| Paywall (PAYWALL) | N |
| URLs replaced | N |
| Remaining issues | N |

Flag any entries that could not be resolved for manual attention.
