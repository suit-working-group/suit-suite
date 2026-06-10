---
paths:
  - "**/*.tex"
---

# Epigraph and Intellectual Authority

## Purpose
Each major section of a document should open with an epigraph that intellectually frames the section's content. The epigraph establishes authority, provides historical depth, and signals the intellectual tradition in which the argument operates.

## Selection Criteria
- The quote must be genuinely relevant to the section content, not decorative
- Prefer quotes from recognized intellectual figures across diverse traditions:
  - Political philosophy: Montesquieu, Mill, Jefferson, Roosevelt
  - Science and technology: Turing, Feynman, Berners-Lee, Newton
  - Security and governance: Schneier, Sun Tzu, Franklin, Eisenhower
  - Literature and humanism: Saint-Exupery, Hugo, Fitzgerald
  - Academic tradition: Kerr (multiversity), Magna Charta Universitatum
- Avoid overusing any single source — diversity of traditions strengthens authority
- Historical quotes demonstrate that the concern is not new but deeply rooted

## LaTeX Implementation
- Use the `epigraph` package
- Width: `\epigraphwidth=0.8\textwidth` (centered, readable)
- Place after `\section` command, before section body text
- Full attribution: author name, work title, year
- Citation in bibliography: create a `@book` or `@misc` entry for the source

## Citation Rigor
- Every epigraph must have a corresponding .bib entry
- Include the specific work, edition, and page/chapter when possible
- For well-known quotes, verify the attribution (many famous quotes are misattributed)
- If the original language is not English, provide the translation and note the original language

## Frequency
- One epigraph per major section (top-level `\section`)
- Do not use epigraphs for subsections — reserve them for structural emphasis
- In shorter documents (companion, inspection), epigraphs are optional
