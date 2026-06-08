# /freshness-monitor — Bibliography Freshness Monitor (multi-jurisdiction)

Check bibliography for link rot, outdated sources, and available updates. SUIT is
institution- and jurisdiction-neutral, so freshness checks span the EU baseline and
whatever national/regional regimes the cited sources belong to, rather than any one
hard-coded country.

## Input
- `$ARGUMENTS` — path to .bib file (if omitted, auto-detect .bib in current project)

## Procedure

### Step 1: URL health check
Re-verify ALL URLs in the .bib file using parallel curl (same methodology as /bib-verify):
- Detect newly broken URLs (were OK, now 404 or unreachable)
- Detect changed URLs (redirects to different pages)
- Detect new bot-blocking (were OK, now 403)
- Compare current fetch_status against stored fetch_status

### Step 2: Source freshness analysis
For each entry, assess temporal relevance:

**Annual reports and surveys** (DBIR, Sophos, EDUCAUSE Top 10):
- Check if a newer edition has been published
- If the entry cites older data and a newer edition is available, flag it

**Standards and frameworks** (NIST, ISO, COBIT):
- Check for new revisions, amendments, or errata
- NIST publications: check csrc.nist.gov for updates
- ISO standards: check revision history

**Case law** (any jurisdiction in scope):
- Check if cited judgments have been overturned, distinguished, or followed by more recent decisions
- For EU sources, check CURIA (CJEU appeals) and HUDOC (ECtHR Grand Chamber referrals)
- For national/regional sources, check the relevant supreme/constitutional court reporter for the source's own jurisdiction (do not default to any single country)

**Legislation and transposition**:
- For EU instruments, check EUR-Lex for amendments and implementing acts
- For national transposition or local-equivalent regimes, check the source's own legislative gazette (resolve the adopter's jurisdiction via the Localization Guide)

**Institutional documentation**:
- Check if the institutional page still exists and reflects current practice
- Flag if the institution has reorganized its IT (common in universities)

**Academic papers**:
- Not flagged for freshness (papers don't expire)
- But check if a cited preprint has been published in final form

### Step 3: Suggest replacements
For each outdated or broken entry:
1. Search the web for the updated version
2. Generate the updated .bib entry
3. Note what changed between old and new versions

### Step 4: Freshness metrics

```
=== BIBLIOGRAPHY FRESHNESS REPORT ===
File: [path]
Scan date: [current date]
Total entries: N

URL HEALTH:
  Still working: N
  Newly broken: N (list keys)
  New redirects: N
  Newly blocked: N

SOURCE FRESHNESS:
  Current (last ~2 years): N (N%)
  Recent (3-6 years): N (N%)
  Older: N (N%)
  Timeless (books, foundational papers): N

UPDATES AVAILABLE:
  Annual reports with newer edition: N
    [key]: [current year] → [available year]
  Standards with new revision: N
    [key]: [current version] → [new version]
  Legislation/case law updated (note jurisdiction): N
    [key]: [jurisdiction] → [issue description]
  Institutional pages moved/updated: N
    [key]: [issue description]

RECOMMENDED ACTIONS:
  URGENT (broken URLs): N entries
  IMPORTANT (outdated annual reports): N entries
  OPTIONAL (newer standard revisions): N entries

OVERALL FRESHNESS SCORE: N/100
```

### Step 5: Apply updates (with confirmation)
If the user confirms, apply URL fixes and metadata updates to the .bib file.
Do NOT update URLs without confirmation — the user may want to review changes first.
