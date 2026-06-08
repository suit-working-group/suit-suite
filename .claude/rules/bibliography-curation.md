---
paths:
  - "**/*.bib"
---

# Bibliography Curation Standards

## Mandatory Fields (every entry must have all of these)
- `author` — use `{{Organization Name}}` for institutional authors
- `title` — with proper LaTeX escaping (`{ETH}`, `{Z}urich`, `{SLA}s`)
- `url` — verified and accessible (or documented as PAYWALL)
- `abstract` — contextual summary present (450–900 characters *preferred*, not mandatory; see Abstract Standards for honesty exceptions)
- `fetch_status` — verification status code
- `fetch_note` — verification details with date

## Abstract Standards
Each abstract must contain three layers:
1. **What it is**: Brief description of the source type and content
2. **What it says**: Key findings, recommendations, or provisions
3. **Why it matters**: Relevance to the document's domain and how it supports the argument

Preferred length: 450–900 characters (a *preference*, not a hard requirement). Write in full sentences, not keywords.

### Honesty exceptions (honesty over length)
- Never inflate an abstract to reach a character count, and never place AI-generated or un-fetched content in `abstract` as if it came from the source.
- For sources whose description cannot be fetched (bot-blocked pages, primary or archival sources, epigraph and quotation attributions), a concise abstract is acceptable; put the substantive description in `note`.
- AI-derived contextual summaries must remain explicitly labeled (e.g. "AI-generated contextual summary: …") and live in `note`, never presented as a fetched source abstract.

## fetch_status Values
- `OK` — URL verified accessible, HTTP 200
- `VERIFIED` — URL blocked by bot protection but verified via web search
- `PAYWALL` — Content behind paywall, metadata and abstract verified
- Never leave as `FAILED`, `PARTIAL`, or `PDF_ONLY` at delivery — resolve first

## fetch_note Format
- Working URLs: `"Landing page accessible, HTTP 200. Verified [Month] [Year]."`
- Bot-blocked: `"Publisher landing page, access restricted by bot protection (HTTP 403). Content verified [Month] [Year]."`
- Redirected: `"Redirect to landing page, HTTP 200. Verified [Month] [Year]."`
- Paywall: `"Academic article behind paywall. Metadata verified via publisher page [Month] [Year]."`
- Include alternative URLs or DOI when available

## Citation Key Naming
- Academic papers: `authorYYYY` (e.g., `dart2013`, `paxson1999`)
- Standards/frameworks: `acronym` or `acronym-detail` (e.g., `nist-csf`, `iso27001`)
- Institutional docs: `institution-topic` (e.g., `eth-baseline`, `oxford-infosec`)
- Tools/platforms: descriptive name (e.g., `eduroam`, `perfsonar`)
- Legal texts: `jurisdiction-identifier` (e.g., `gdpr`, `lux-loi-2006`)
- Case law: `casename-YYYY` (e.g., `barbulescu2017`, `schrems2020`)
- Use lowercase, hyphens for separators, no underscores

## File Organization
- Group entries by thematic section with `%--- SECTION NAME ---` comments
- Thematic sections: research networks, standards, regulation, governance, case studies, legal, institutional, psychological, philosophical
- Within sections, sort entries logically (by year or by subtopic)

## Shared Bibliography
- Single .bib file in `main/` directory
- Other documents reference via:
  - Symlink: `ln -s ../main/filename.bib ./filename.bib`
  - Relative path: `\bibliography{../main/filename}`
- Never duplicate .bib content across directories

## Quality Metrics at Delivery
- 100% entries with abstract, fetch_status, fetch_note
- 0% entries with FAILED or PARTIAL fetch_status
- All DOIs added where available
- URLs re-verified within the current month **at release or major revision** (release-gate preference, not a standing monthly obligation for living documents between releases)
