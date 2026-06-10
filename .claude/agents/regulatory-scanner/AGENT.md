# /regulatory-scanner — Regulatory Update Scanner (multi-jurisdiction)

Scan for regulatory changes that may affect the suite's legal analysis. SUIT is
institution- and jurisdiction-neutral: scan the EU baseline plus whichever national
or regional regime the adopting institution operates under, rather than any single
hard-coded country.

## Input
- `$ARGUMENTS` — a regulatory domain to scan (e.g., "NIS2 transposition", "GDPR enforcement trends", "AI Act implementation"), optionally suffixed with a jurisdiction scope (e.g., "... jurisdiction:DE" or "... jurisdiction:non-EU"); or a path to a .bib file to check all legal entries. If no jurisdiction is given, scan the EU baseline and flag where national transposition matters.

## Procedure

### Step 1: Identify legal references to check
If a .bib file is provided:
- Extract all entries tagged as legal/regulatory (by key pattern: gdpr, nis2, eu-*, directive-*, or any `jurisdiction-identifier` key)
- List the specific legislation, case law, and guidelines referenced
- Note the dates/versions cited and the jurisdiction each one belongs to

If a regulatory domain is specified:
- Identify the key legal instruments in that domain at the EU/baseline level
- Determine the in-scope jurisdiction(s): the EU baseline always, plus any national/regional regime named in `$ARGUMENTS` or required by the adopting institution
- List known pending legislation, transposition deadlines, and expected guidance

### Step 2: Search for updates
For each legal reference:
1. **EU / supranational legislation**: Check EUR-Lex for amendments, corrigenda, or implementing acts published after the cited version
2. **Case law**: Search CURIA (CJEU) and HUDOC (ECtHR) for new judgments citing the same legal basis; for non-EU scopes, check the relevant supreme/constitutional court reporter
3. **Guidelines**: Check EDPB, ENISA, and the relevant data-protection / cybersecurity authority for updated guidance or opinions
4. **National / regional law**: Check the official legislative gazette of each in-scope jurisdiction for transposition and implementing measures. Use the adopting institution's own jurisdiction (resolve its national gazette via the Localization Guide) instead of defaulting to any one country. For non-EU adopters, check the local equivalent regime (sector privacy law, national cybersecurity statute) rather than EU national gazettes.
5. **Standards**: Check NIST and ISO for revised versions of cited standards

### Step 3: Assess impact
For each update found:
- **HIGH**: Changes the legal basis or interpretation cited in the suite
- **MEDIUM**: Adds nuance or supplementary guidance without changing the core argument
- **LOW**: Minor update with no impact on the suite's analysis

Flag any finding whose impact is jurisdiction-specific, so it can be handled via the
Localization Guide rather than written into the institution-neutral document body.

### Step 4: Generate update recommendations
For each HIGH and MEDIUM impact update:
1. Explain what changed, when, and in which jurisdiction
2. Assess whether the suite's argument is still valid
3. Suggest text modifications if needed (body change vs. Localization Guide note)
4. Generate updated .bib entry with new URL/date

### Report
```
=== REGULATORY SCAN REPORT ===
Domain: [domain or .bib file]
Jurisdiction scope: [EU baseline + national/regional regimes in scope]
Scan date: [current date]
Legal references checked: N

UPDATES FOUND:
  HIGH impact: N
  MEDIUM impact: N
  LOW impact: N
  No changes: N

HIGH IMPACT UPDATES:
  [Reference]: [what changed] → [impact on suite] → [recommended action]

MEDIUM IMPACT UPDATES:
  [Reference]: [what changed] → [recommended action]

JURISDICTION-SPECIFIC (route to Localization Guide):
  [Reference]: [jurisdiction] → [transposition/local-equivalent note]

STANDARDS VERSION CHECK:
  NIST CSF: [current version] vs. [cited version] → [status]
  ISO 27001: [current version] vs. [cited version] → [status]
  COBIT: [current version] vs. [cited version] → [status]

NEXT EXPECTED CHANGES:
  [List of pending legislation, upcoming deadlines, expected guidance]
```
