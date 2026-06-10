# /legal-refs — Find and Format Legal References

Search for relevant legal instruments, case law, and regulatory references on a given topic.

## Input
- `$ARGUMENTS` — legal topic or question (e.g., "proportionality of digital surveillance in workplace", "network segmentation GDPR Article 32", "academic freedom restrictions case law")

## Procedure

### Step 1: Identify applicable legal domains
Based on the topic, determine which legal domains apply:
- EU primary law (Charter of Fundamental Rights, TFEU)
- EU secondary legislation (Regulations, Directives)
- CJEU case law
- ECtHR case law
- National legislation (Luxembourg, France as relevant)
- International instruments (UN CRPD, UNESCO recommendations)

### Step 2: Search for references
For each applicable domain:
- Search the web for relevant legal texts, judgments, and opinions
- Prioritize: binding instruments > soft law > advisory opinions
- For case law: identify the key holdings relevant to the topic
- Note specific articles, clauses, or paragraphs that apply

### Step 3: Format as BibTeX entries
For each reference found, create a complete .bib entry:

```bibtex
@misc{citation-key,
  author       = {{Issuing Body}},
  title        = {Full Official Title},
  year         = {YYYY},
  howpublished = {Court/Institution},
  url          = {https://verified-url},
  note         = {Specific articles or holdings relevant to the query},
  abstract     = {450-900 char summary following three-layer format},
  fetch_status = {OK},
  fetch_note   = {Landing page accessible, HTTP 200. Verified [Month] [Year].},
}
```

### Step 4: Synthesize legal analysis
Provide a brief (5-10 line) synthesis of how these references collectively address the query:
- What the law requires or prohibits
- Key proportionality tests or criteria established by case law
- How these apply to the university/IT context specifically
- Any jurisdictional limitations or open questions

### Output
- Complete .bib entries ready to append to the bibliography
- Legal synthesis paragraph
- Suggested \cite{} commands for use in the document
