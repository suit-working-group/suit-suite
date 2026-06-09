---
paths:
  - "**/*.tex"
  - "**/*.md"
---

# No False Locality

The document BODIES must read as an **institution-neutral, role-based**
infrastructure policy — never as a University-of-Luxembourg-LOCAL solution.
The suite is a generic, adoptable standard whose default render is jurisdiction-
agnostic (see `localization-model.md`). Locality in the *prose* is a defect:
it makes a generic policy read as one institution's internal artefact and
silently breaks the generic↔edition contract.

This rule corrects an earlier over-broad sweep. Genericity is about HOW the body
*reads*, not about erasing the work's provenance or its author. Two things must
be REMOVED; three things are explicitly VALUED and KEPT.

## REMOVE — what must not appear in bodies

1. **Migration-process and source-repo internals.** No vocabulary describing how
   this suite was produced from, or migrated out of, a prior University-of-
   Luxembourg deliverable: source repository names/paths, branch/Bloc/revision
   labels, conflicted-copy filenames, internal ticket or commit references,
   "ported from", "extracted from the original DCS/IT-POLICY tree", etc.
   Traceability of that kind lives in `changelog.md` and project metadata, never
   in report prose (see `feedback_no_process_leaks`).
2. **Locality-as-body-framing.** The running text must not frame the policy as
   *the University of Luxembourg's* policy: no "at our University", "here in
   Luxembourg", "the University's DCS", local org-unit names, local NREN/
   governing-body names, or local jurisdiction strings used as the *default*
   subject of a sentence. Route every such anchor through `\loc{}`/`\Loc{}`
   against its canonical generic Layer-0 role phrase.

## KEEP — what is valued and must be preserved

3. **Authorship of the first version.** Nicolas Guelfi is the **chair of the
   working group** and the **creator of the first version** of this policy and
   technical solution. This is a fact of record, not a locality leak. Keep:
   - the author's name on title pages, author fields, and acknowledgments;
   - the credit "creator of the first version" / "chair of the SUIT working group".

   Do NOT, however, state the **geographic origin** ("originally developed for /
   at the University of Luxembourg") in the GENERIC suite prose or bibliography.
   The front-door framing (README) credits the author and the working group
   **without naming the origin institution**. The University-of-Luxembourg origin
   is an **instantiation** detail: it belongs to the Luxembourg edition under
   `instantiations/lu-university-of-luxembourg/`, and any edition may express it
   through `\loc{author-affiliation}`.

   **The author's name is NOT a forbidden token.** Removing "Nicolas Guelfi" in
   the name of genericity is an error. Authorship ≠ locality-as-framing: a credit
   line records *who created the work*; it does not make the body read as a local
   solution.
4. **Cited scientific works of the author.** The author's own publications cited
   as evidence (`\cite{...}` with their `.bib` entries) are scholarly references,
   not locality. They stay, under the normal evidence and bibliography rules.
5. **Locality tokens as REGULATORY EXAMPLES and in the Luxembourg instantiation.**
   University-of-Luxembourg and Luxembourg/EU tokens are legitimate when used:
   - as **regulatory examples** inside the regulatory module and the
     **localization guide** — i.e. as a *named worked example* of how the generic
     policy instantiates against one jurisdiction, clearly marked as an example,
     not as the body's default subject;
   - in the **Luxembourg instantiation** (`instantiations/lu-university-of-luxembourg/`),
     which legitimately names Luxembourg and the University of Luxembourg as its
     concrete edition.

   In those roles the tokens are content, not leakage. In the GENERIC suite body
   they must be parameterised (`\loc{}`) or removed — including the geographic
   origin of the first version (keep the author / chair credit, not the origin
   institution name).

## Decision Test

For any occurrence of a University-of-Luxembourg or Luxembourg/EU token, ask:

- Is it the **author / chair credit** (who created the first version, who chairs
  the working group)? → KEEP. But the **geographic origin institution** is NOT
  generic-suite provenance — keep it only in the Luxembourg instantiation.
- Is it a **labelled regulatory example** in the regulatory module or
  localization guide? → KEEP, clearly marked as an example.
- Is it the **author's name or a cited work of the author**? → KEEP.
- Is it **migration/source-repo internals**? → REMOVE (move to `changelog.md`).
- Is it the **default subject/framing of body prose**? → REPLACE with the generic
  `\loc{}` role phrase.

When in doubt between "provenance" and "framing": provenance speaks in the past
tense about origin; framing speaks in the present tense about scope. Keep the
former, neutralise the latter.

## Enforcement

- A generic build (Layer 0 only, per `localization-model.md`) MUST read as a
  complete institution-neutral policy: no local org-unit, NREN, governing-body,
  or jurisdiction string as a body subject; 0 migration/source-repo tokens.
- The author's name (with the chair / creator-of-first-version credit) and the
  author's cited works MUST survive that build intact; the generic build does NOT
  name the University of Luxembourg as the origin institution.
- Before commit: grep bodies for source-repo/branch/conflicted-copy vocabulary
  (must be 0) and confirm every retained locality token is provenance, an
  acknowledgment, or a labelled regulatory example.
