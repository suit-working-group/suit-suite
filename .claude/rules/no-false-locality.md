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

3. **Authorship and provenance of the first version.** Nicolas Guelfi is the
   **chairman of the working group** and the **creator of the first version** of
   this policy. This is a fact of record, not a locality leak. Keep:
   - the author's name on title pages, author fields, and acknowledgments;
   - the provenance statement that the policy was **"originally developed for the
     University of Luxembourg"** — phrased as historical origin/credit, NOT as
     the document's current scope or subject.

   **The author's name is NOT a forbidden token.** Removing "Nicolas Guelfi" in
   the name of genericity is an error. Provenance ≠ locality-as-framing: a credit
   line records *where the work came from*; it does not make the body read as a
   local solution.
4. **Cited scientific works of the author.** The author's own publications cited
   as evidence (`\cite{...}` with their `.bib` entries) are scholarly references,
   not locality. They stay, under the normal evidence and bibliography rules.
5. **Locality tokens as PROVENANCE/acknowledgments and as REGULATORY EXAMPLES.**
   University-of-Luxembourg and Luxembourg/EU tokens are legitimate when used:
   - in **provenance and acknowledgment** passages (origin, working-group credit);
   - as **regulatory examples** inside the regulatory module and the
     **localization guide** — i.e. as a *named worked example* of how the generic
     policy instantiates against one jurisdiction, clearly marked as an example,
     not as the body's default subject.

   In those two roles the tokens are content, not leakage. Elsewhere in the body,
   they must be parameterised (`\loc{}`) or removed.

## Decision Test

For any occurrence of a University-of-Luxembourg or Luxembourg/EU token, ask:

- Is it **provenance/acknowledgment** (where the work came from, who chaired it)?
  → KEEP, phrased as origin/credit.
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
- The author's name, the "originally developed for the University of Luxembourg"
  provenance line, and the author's cited works MUST survive that build intact.
- Before commit: grep bodies for source-repo/branch/conflicted-copy vocabulary
  (must be 0) and confirm every retained locality token is provenance, an
  acknowledgment, or a labelled regulatory example.
