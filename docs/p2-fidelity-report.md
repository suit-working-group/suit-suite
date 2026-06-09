# P2 Genericization Fidelity Report — Autonomous Auto-Resolve

**Suite:** SUIT — Sustainable University IT Infrastructure & Technology
**Run:** unattended overnight auto-resolve
**Date:** 2026-06-09
**Baseline:** `db8fb2d4146a3480e398d5737a2b97a108898ccb` (pre-genericization)
**Working tree:** genericization pass (uncommitted) + this auto-resolve pass

---

## How to read this report

Every entry below is an item the auto-resolve pass touched or consciously left
in place, and every one is marked **AUTO-RESOLVED — needs human confirmation**.
The pass applied the safest disposition per the run instruction:

- **missing-action / residual UL surface** → reapply genericization as clean
  role-based prose (no tokens).
- **divergent multi-entity affiliation** → collapse to a single generic role
  phrase per `docs/dispositions.json` (DISPO-MULTI-ENTITY-AFFILIATION-SINGLE-ROLE);
  no second variable invented.
- **unexplained-edit / content-loss** → revert that hunk to the baseline content
  (forfeit that one genericization) where the lost content was load-bearing and
  not a UL-identity anchor.
- **genuine conflict** → apply the matrix's safer option (parameterize/keep).

### Decisive finding that governs most dispositions

`shared/localization-guide-EN.tex` (populated in this pass's working tree)
**explicitly ratifies a prose-only hybrid localization model**: the SUIT bodies
contain *finished generic prose with NO `{{PLACEHOLDER}}` tokens and no
`\locvar`/`\locdefine` macros*; localization is a human-facing lookup table, not
a build-time token sweep. The guide table is populated with one row per
parameterize anchor (NREN_NAME, DATA_PROTECTION_REGIME, STAFFING_PROFILE,
INSTITUTION_NAME, INCUMBENT_IDENTITY_SUITE_VENDOR, NATIONAL_DPA,
IDENTITY_FEDERATION_PROFILE, etc.), each mapping a generic role phrase to the
adopter's local value.

**Consequence:** the single largest class of deviations — "parameterize was
specified but generalize-in-prose was delivered / no `{{TOKEN}}` emitted" — is
**correct-by-design**, not a defect. Reverting those would reintroduce the very
UL-specific surface forms the guardrail forbids. They are therefore KEPT and
recorded below as `keep (prose model ratified)`. The canonical
`docs/genericization-matrix.json` (91 anchors) was also used to adjudicate
"out-of-slice" flags: most were slice artifacts; the full matrix authorizes the
edit (e.g. GEANT generalize, peer-roster generalize, jurisdiction generalize,
dominant-suite-vendor generalize).

### Build status (pre-existing blocker, NOT introduced here)

`suit-solution/solution-EN.tex` cannot be compiled in this tree: its unmodified
preamble does `\input{../shared/glossary-EN}`, but `shared/glossary-EN.tex` does
not exist and was **never present in baseline `db8fb2d4`** (only
`shared/glossary-defs.tex` exists). This is a scaffold-phase gap, independent of
the genericization. It was **left untouched** (fixing it would be an
out-of-scope "other change"). All files edited by this pass were verified to have
balanced braces and `\begin`/`\end` environments, and every `\gls{...}` key used
(e.g. `nren`, `gdpr`) is defined in `shared/glossary-defs.tex`.
**Human action:** populate `shared/glossary-EN.tex` (or repoint the preamble)
before a release build.

---

## WORST-FIRST — HIGH severity

### H1. `suit-policy/policy-EN.tex` — approval block, multi-entity affiliation (content-loss "Medicine" dropped)
**AUTO-RESOLVED — needs human confirmation.**
Baseline: "Faculty of Science, Technology and Medicine and Department of Computer
Science". The genericization pass dropped "Medicine" ("science and technology
faculty") and listed two sub-entities. **Done:** collapsed to a single generic
role phrase per DISPO-MULTI-ENTITY-AFFILIATION-SINGLE-ROLE → "the approving
academic units of the adopting institution." No second variable; no named domain
silently lost (all named domains generalized to one role).
**Double-check:** confirm a single role phrase is acceptable for the approval
line, and that you do not want the STM-faculty domains named.

### H2. `suit-solution/foreword-EN.tex` — authorship/contact, multi-entity affiliation + added framing
**AUTO-RESOLVED — needs human confirmation.**
Pass had dissolved "Nicolas Guelfi (Department of Computer Science, University of
Luxembourg)" into prose and injected the new assertion "acting on behalf of that
institution." **Done:** collapsed to a single clean generic role ("the adopting
institution's designated lead author"), and **removed the injected
"acting on behalf of that institution" framing** (DEV-05 content injection).
**Double-check:** AUTHOR_NAME / CS_RESEARCH_UNIT / AUTHOR_AFFILIATION /
INSTITUTION_NAME are now one role phrase, mapped via the localization guide — no
separate per-entity slot. Confirm that is intended; confirm the named convener
need not appear here.

### H3. `suit-solution/ch06-identity-EN.tex` — regulatory anchoring, GDPR/NIS2 article + sub-item loss
**AUTO-RESOLVED — needs human confirmation.**
Pass had deleted `GDPR Art.~32(1)(b)`, the `NIS2 Art.~21(2)` reference, and the
`(i)`/`(j)` sub-item letters while keeping ISO/eIDAS/NIST pinpoints (asymmetric
loss). **Done:** reapplied the sibling pattern — kept the generic regime phrasing
and restored the article-level precision as a worked instantiation:
"the applicable data-protection regime (e.g. GDPR Art.~32(1)(b)) ... the
applicable cybersecurity baseline regime (e.g. NIS2 Art.~21(2)): (i) ... (j) ...".
**Double-check:** wording of the worked-instantiation parentheticals; that (i)/(j)
still map to the intended measures.

### H4. `suit-solution/ch22-wave4-policy-EN.tex` — regulatory anchoring, GDPR/NIS2/AI-Act article loss
**AUTO-RESOLVED — needs human confirmation.**
Pass had removed `GDPR Art.~25`, `NIS2 Art.~21(2)(a)/(i)`, `EU AI Act Art.~5/50`.
**Done:** reapplied article pinpoints as worked instantiation inside the generic
prose (e.g. GDPR Art.~25; NIS2 Art.~21(2)(a) and (i); EU AI Act Art.~5 and
Art.~50). Restores citation parity with the retained ISO/NIST pinpoints and with
sibling chapters.
**Double-check:** that the `\S\ref{sec:rm-gdpr}/sec:rm-nis2/sec:rm-ai-act`
cross-references at the paragraph end still align with the restored articles.

### H5. `suit-solution/ch24-wave6-endpoint-EN.tex` — regulatory anchoring, NIS2 article loss
**AUTO-RESOLVED — needs human confirmation.**
Pass had dropped `NIS2 Art.~21(2)(g)/(i)/(j)` (GDPR Art.~32 was retained).
**Done:** reapplied the exact sibling pattern (matches ch20/ch25): generic regime
phrase + "the national transposition of the NIS2 Directive where it applies" +
restored Art.~21(2)(g)/(i)/(j) pinpoints.
**Double-check:** cross-ref `\S\ref{sec:rm-nis2}` consistency; wording.

### H6. `suit-solution/ch13-crypto-EN.tex` — key-custody posture over-specified (residual-specificity, opposite of intent)
**AUTO-RESOLVED — needs human confirmation.**
Pass had rewritten the already-abstract baseline ("keep the trust anchor under
institutional custody regardless of the operational instantiation") into a MORE
specific assertion ("under the institution's own key custody --- holds and
controls key material in hardware it operates ---", and added "deployment").
**Done:** reverted this hunk to the baseline abstract wording (forfeit the
over-specific rewrite), per the content-loss/unexplained-edit rule.
**Double-check:** confirm the deployment-neutral custody posture is the intended
final wording.

### H7. `suit-solution/ch01-synthesis-EN.tex` — opening scope narrowed (content-loss / number disagreement)
**AUTO-RESOLVED — needs human confirmation.**
Pass had narrowed the already-generic baseline ("a migration playbook applicable
across institutions and jurisdictions") to a singular EU/Council-of-Europe /
single-regime scope. **Done:** reverted this hunk to the baseline generic,
jurisdiction-neutral wording.
**Double-check:** none expected; this restores the original cross-jurisdictional
applicability claim verbatim.

### H8. `suit-solution/ch32-external-references-EN.tex` — eduTEAMS / AARC Blueprint de-named, cite keys orphaned in prose
**AUTO-RESOLVED — needs human confirmation.**
Pass had de-named eduTEAMS and AARC Blueprint (no anchor covers them) while
retaining `\cite{eduteams}`/`\cite{aarc-blueprint}`, leaving generic prose backed
by specific sources; names survive in ch07. **Done:** restored the named entities
parenthetically (eduGAIN as worked instantiation of the generic federation
profile; eduTEAMS; AARC Blueprint), re-aligning prose with the retained citations.
**Double-check:** that keeping eduGAIN/eduTEAMS/AARC named (as illustrative
research-network artifacts, citation-backed) is acceptable in the generic edition.

### H9. (kept) Out-of-slice edits authorized by the canonical matrix — GEANT, peer-roster, jurisdiction, dominant-suite-vendor, DPA, ENISA/NIS2
**AUTO-RESOLVED (keep, matrix-authorized) — needs human confirmation.**
Many HIGH "out-of-slice / unexplained-edit" flags (companion-body GEANT→
"pan-European backbone services"; ch03 EDPB→competent DPA, ENISA/NIS2 generalize,
EU-jurisdiction framing, Entra/Conditional-Access Case-2 rewrite; ch08 LHCONE/
CERN/WLCG generalize; ch31 peer-institution roster generalize; ch28 Microsoft/
GEANT/NREN generalize) are **authorized by `docs/genericization-matrix.json`**
(ANCHOR-GEANT-BACKBONE=generalize, ANCHOR-PEER-INSTITUTION-ROSTER=generalize,
ANCHOR-JURISDICTION=generalize, ANCHOR-DOMINANT-SUITE-VENDOR=generalize,
ANCHOR-DPA / ANCHOR-NATIONAL-INFOSEC-AGENCY=parameterize, ANCHOR-PROPRIETARY-IDP=
parameterize). The "out-of-slice" label was an artifact of the 12-anchor audit
slice. **Done:** KEPT (reverting would reintroduce named UL/EU-specific entities,
violating the safer-default guardrail).
**Double-check:** spot-confirm that the full-matrix authority was indeed intended
for this pass (the run brief named the matrix as the conflict authority).

### H10. (kept, prose model) "parameterize specified, prose delivered, no {{TOKEN}}" — all HIGH divergent-replacement items
**AUTO-RESOLVED (keep, prose model ratified) — needs human confirmation.**
Affected (HIGH): abstract-EN (REGULATORY-STACK/NIS-REGIME — see L1 below for the
one true missing-action), ch03 DOMINANT-SUITE-VENDOR, ch04 NREN/INSTITUTION-TYPE,
ch05 IDENTITY-FEDERATION ×2, ch06 NREN/PROPRIETARY-IDP/DATA-PROTECTION/NIS-REGIME,
ch08 NREN/RESEARCH-BACKBONE-SCALE, ch15 INSTITUTION-TYPE/NREN, ch18 FTE-MAGNITUDE,
ch25 NREN-CSIRT/GOV-CSIRT/NIS-REGIME, ch26 three regime anchors, ch31
NREN/IDENTITY-FEDERATION/EUROHPC, policy-EN AUTHOR-NAME citation. **Done:** KEPT.
Per `shared/localization-guide-EN.tex`, prose-with-guide IS the ratified
realization of "parameterize"; no in-prose token exists or is expected.
**Double-check:** if you later want a build-time token mechanism, these are the
substitution points the localization guide table already enumerates.

### H11. (kept) "missing-action / empty diff" files — ch16, ch23
**AUTO-RESOLVED (keep) — needs human confirmation.**
`ch16-conformance-EN.tex` and `ch23-wave5-pilot-EN.tex` show no diff vs baseline.
Inspection: their parameterize targets (regime names, pilot entities, CS unit,
HPC facility, FTE figures) are **already generic in the baseline** (no UL-named
surface to genericize) or are covered by the prose model. **Done:** left
unchanged (no residual UL surface to reapply over). The two "keep" anchors are
satisfied.
**Double-check:** confirm ch16/ch23 genuinely carry no UL-specific surface (a
quick grep for RESTENA/Luxembourg/Entra/MeluXina returns nothing in these files).

---

## WORST-FIRST — MODERATE severity

### M1. `suit-policy/policy-EN.tex` — Ch.15 sizing label "R1 institution" mismapped to staffing
**AUTO-RESOLVED — needs human confirmation.**
Pass had folded the institution-TIER label ("R1 institution") into a STAFFING
concept ("the adopting institution's staffing profile"), changing the referent of
"orders of magnitude". **Done:** generalized the tier correctly (matrix
ANCHOR-INSTITUTION-TYPE intent) → "a large research-intensive institution"; the
adjacent "FTE envelopes per layer" carries the staffing concept.
**Double-check:** wording "large research-intensive institution".

### M2. `suit-solution/ch10-storage-EN.tex` — GDPR article loss (Art.~32 / 5(1)(c) / 44–49)
**AUTO-RESOLVED — needs human confirmation.**
Pass had paraphrased away GDPR Art.~32, Art.~5(1)(c), Art.~44–49 while keeping
NIS2/ISO/NIST pinpoints. **Done:** restored the three GDPR pinpoints as worked
instantiation inside the generic data-protection-regime prose.
**Double-check:** parenthetical wording.

### M3. `suit-policy/companion/companion-body-EN.tex` — alertbox title/body date inconsistency
**AUTO-RESOLVED — needs human confirmation.**
Body dropped "2024–2025"; title still read "(2024–2025)". **Done:** genericized
the title to "What the most publicised recent university incidents actually show",
bringing it in line with the generalized body (the named incidents Paris-Saclay/
Western Sydney/Texas Tech were already generalized per ANCHOR-PEER-BREACH-INCIDENTS
=generalize; reverting the body would reintroduce the named incidents).
**Double-check:** that dropping the explicit year window (vs. keeping it in both
title and body) is the preferred direction.

### M4. `suit-policy/companion/companion-body-EN.tex` — AI Act Art.~2(6) pin-cite on generic "AI regulation"
**AUTO-RESOLVED — needs human confirmation.**
The instrument name was genericized to "applicable AI regulation" but the
EU-specific `Art.~2(6)` remained, re-binding the clause to the EU AI Act. **Done:**
softened to "the applicable AI regulation's research-and-development exemption
(where one exists --- e.g. Art.~2(6) of the EU AI Act)".
**Double-check:** wording; whether to keep the EU example at all.

### M5. `suit-policy/companion/companion-body-EN.tex` — "applicable … applicable" echo
**AUTO-RESOLVED — needs human confirmation.**
Genericization put two "applicable" in one clause. **Done:** reworded to
"the resulting obligations depend on…".
**Double-check:** none expected (cosmetic).

### M6. `suit-solution/ch13-crypto-EN.tex` — tautology "envelope-encryption (transit) engine for envelope encryption"
**AUTO-RESOLVED — needs human confirmation.**
Vendor-rename left a redundant trailing "for envelope encryption". **Done:**
dropped the dangling clause.
**Double-check:** none expected (cosmetic).

### M7. `suit-solution/ch18-wave0-foundations-EN.tex` — named-example attributes blurred (EDUCAUSE / MIT / Cambridge)
**AUTO-RESOLVED — needs human confirmation.**
MIT and Cambridge are deliberately kept as named examples, but the pass had
(a) genericized EDUCAUSE → "sector bodies for higher-education IT" (EDUCAUSE is a
named sector body retained verbatim across ch19/ch27/ch32), (b) blurred MIT's real
reporting line "Provost and Executive Vice President" → "senior executive
leadership", and (c) changed Cambridge "college-level" → "unit-level" while still
saying "collegiate model". **Done:** restored EDUCAUSE, MIT's reporting line, and
Cambridge's "college-level" (keep named examples' true attributes).
**Double-check:** confirm EDUCAUSE/MIT/Cambridge are intended to remain named with
true attributes (consistent with the rest of the suite).

### M8. `suit-solution/ch31-institutional-precedents-EN.tex` — body claims contradict anonymized catalogue
**AUTO-RESOLVED — needs human confirmation.**
The catalogue was fully anonymized (matrix ANCHOR-PEER-INSTITUTION-ROSTER=
generalize), but body prose at L31/L62 still asserted "named institutions" / "the
named institution". **Done:** rewrote both to pattern/kind-of-institution framing
so the body no longer contradicts the anonymized catalogue.
**Double-check:** wording at the two sites; that full anonymization of the
catalogue is intended (it is matrix-authorized).

### M9. `suit-solution/ch31-institutional-precedents-EN.tex` — methodology lost named sector/standards bodies
**AUTO-RESOLVED — needs human confirmation.**
Methodology had dropped EDUCAUSE, NIST/ISO, and GÉANT/ESnet/Internet2 (standards
bodies and conferences — not institution-identity anchors). **Done:** restored
EDUCAUSE and "NIST or ISO/IEC" (clearly out-of-anchor-scope named bodies, retained
elsewhere in the suite); left the research-network case-study phrasing generic
(NRENs are matrix-generalizable).
**Double-check:** whether GÉANT/ESnet/Internet2 should also be re-named in the
case-study clause, or remain generic.

### M10. `suit-solution/ch28-cross-cutting-EN.tex` — GEANT "regional" mischaracterization + project self-reference
**AUTO-RESOLVED — needs human confirmation.**
GEANT had been generalized to "the regional research-network federation" (GEANT is
pan-European, and the word collided with "analogous regional federations"), and the
sentence kept "the international network anticipated in phase~2 of this initiative".
**Done:** reworded to "its pan-European or regional research-network federation"
(removes mischaracterization + collision) and generalized the self-reference to
"any cross-institutional academic network it joins". GEANT de-naming itself is
matrix-authorized and kept.
**Double-check:** wording; consistency with the suite-wide phase-2 framing (see
note O1 below).

### M11. `suit-solution/ch24-wave6-endpoint-EN.tex` — cross-ref to NIS2 article table
**AUTO-RESOLVED — needs human confirmation.**
Resolved automatically by H5 (restoring the NIS2 article pinpoints): the
`\S\ref{sec:rm-nis2}` cross-reference now matches the table it points to again.
**Double-check:** none beyond H5.

### M12. (kept, prose model) MODERATE divergent-replacement / residual-specificity items
**AUTO-RESOLVED (keep) — needs human confirmation.**
ch04/ch05/ch06/ch08/ch09/ch11/ch12/ch14/ch15/ch17/ch19/ch20/ch21/ch22/ch24/ch25/
ch26/ch27/ch29/ch30/ch31/ch32 items where parameterize was realized as clean
role-based prose, or a named third-party precedent was generalized under a
matrix-authorized anchor, or an FTE figure was abstracted (consistent with the
standing "abstract over quantitative self-references" preference). **Done:** KEPT
under the ratified prose model and the canonical matrix. Quantitative envelopes
(e.g. "three to six engineers", "one to two engineer-years") that were softened to
qualitative phrasing were left softened (matches the user's standing preference);
no fabricated numbers introduced.
**Double-check:** if any specific FTE range is considered load-bearing, restore it
inline; the localization guide STAFFING_PROFILE row carries the localization point.

---

## WORST-FIRST — LOW severity

### L1. `suit-solution/abstract-EN.tex` — regulatory stack hard-coded (true missing-action) + EU-specific list
**AUTO-RESOLVED — needs human confirmation.**
The abstract still hard-coded "GDPR, NIS2, EU AI Act, Schrems II, NIST CSF 2.0,
eIDAS 2, ISO/IEC 27001/27002/27005, COBIT 2019" (no edit had been applied).
**Done:** reapplied the localization-guide framing — generic
"applicable data-protection, network-and-information-security, trust-services and
AI-governance regime, together with its cross-border data-transfer regime", with
GDPR/NIS2/EU AI Act/eIDAS 2/Schrems II as a *worked instantiation*, and the
jurisdiction-neutral standards spine (NIST CSF 2.0, ISO/IEC 27001/27002/27005,
COBIT 2019) kept named. The pre-existing phase-2 self-reference was left as
baseline (out of scope).
**Double-check:** wording of the regime framing in the abstract; the abstract has
no UL institution name to parameterize (ANCHOR-INSTITUTION-NAME / ANCHOR-NREN do
not surface here, so those abstract "missing-action" flags are non-applicable).

### L2. `suit-solution/ch15-sizing-EN.tex` — header-comment "R1" residual (×2)
**AUTO-RESOLVED — needs human confirmation.**
Non-rendering `%` comments at L4 and L11 still carried "R1 institution" after the
body was genericized to "research-intensive". **Done:** updated both comments to
"research-intensive institution" for source consistency.
**Double-check:** none expected (comments only, no PDF impact).

### L3. `suit-solution/ch21-wave3-network-EN.tex` — header-comment "faculty" residual
**AUTO-RESOLVED — needs human confirmation.**
D21.2 comment said "building/faculty/segment" after the body moved to
"organizational unit". **Done:** updated comment to
"building/organizational-unit/segment".
**Double-check:** none expected (comment only).

### L4. `suit-solution/ch22-wave4-policy-EN.tex` — internal decision-ID "D7.7" leaked into rendered prose
**AUTO-RESOLVED — needs human confirmation.**
"specified by D7.7" surfaced an internal coherence-registry decision number in
body text (no-process-leak rule). **Done:** replaced with the existing
cross-reference form: "specified in `\trchap{ch:policy}{}`".
**Double-check:** that ch:policy is the correct target for the identity-schema
mapping (D7.7 lived in the policy/identity decision register).

### L5. `suit-solution/ch22-wave4-policy-EN.tex` — project-specific "phase-2 … by this Reference" construct
**AUTO-RESOLVED — needs human confirmation.**
Self-referential "The phase-2 international university network anticipated by this
Reference". **Done:** generalized to a role-based forward-looking statement: "A
cross-institutional academic network would be one of the contexts…".
**Double-check:** see O1 — the suite uses this phase-2 framing pervasively; this
one site was flagged (reapply) and is now divergent from the unflagged siblings.

### L6. `suit-solution/ch25-wave7-audit-ir-EN.tex` — `\gls{nren}-CSIRT` semantic command dropped
**AUTO-RESOLVED — needs human confirmation.**
L258 had spelled-out "research-and-education network CSIRT" while L91/L251 use
`\gls{nren}-CSIRT`. **Done:** restored `\gls{nren}-CSIRT counterparts` (semantic
command + intra-chapter consistency; CLAUDE.md mandate).
**Double-check:** none expected; `nren` glossary key is defined in
`shared/glossary-defs.tex`.

### L7. `suit-solution/ch32-external-references-EN.tex` — EDUCAUSE "North America" de-localized (unexplained-edit)
**AUTO-RESOLVED — needs human confirmation.**
"The principal venue … in North America" had become "A major venue … with broad
international reach" — a factual attribute change of a named sector body with no
covering anchor. **Done:** reverted to the baseline factual description.
**Double-check:** none expected (restores verifiable fact; EDUCAUSE is retained
verbatim suite-wide).

### L8. (kept, prose model) LOW divergent-replacement / residual / cosmetic items
**AUTO-RESOLVED (keep / accept) — needs human confirmation.**
Includes: ch01 ETH-roster gloss; ch03 Schrems-II / Conditional-Access score-cell
genericization (matrix-authorized) and "European"→generic majority; ch06 cite-key
retention (microsoft-entra/keycloak/shibboleth as representative cites);
ch09/ch11/ch12/ch19/ch24/ch26/ch27/ch29/ch30/ch31 prose-realized parameterize and
retained representative citations (jetstream2, cern-keycloak, edugain, eduteams);
ch30 source line-wrap artifact (no PDF impact); ch32 pre-existing hyphen wraps;
ch33 standards-spine asymmetry; solution-EN/reading-guide INSTITUTION_NAME prose.
**Done:** KEPT (prose model ratified; representative citations are the same pattern
the suite uses elsewhere; cosmetic source wraps have no rendered impact).
**Double-check:** citation-retention policy for parameterized anchors (whether a
single representative cite may remain on now-generic prose) — this is a standing
policy question, not a per-site defect.

---

## Cross-cutting observations (no edit made — flagged for human decision)

### O1. Suite-wide "phase-2 international university network … of this initiative" self-reference
This SUIT-specific roadmap construct appears in the **baseline** across ~16 files
(ch03, ch04, ch05, ch07, ch14, ch27, ch29, ch31, ch33, foreword, companion-body,
etc.). It is **pre-existing**, not introduced by the genericization pass, and was
**not** in the deviation set except where explicitly flagged (ch22 reapply, ch28
hunk). Per "introduce no other change", the unflagged occurrences were **left
untouched**. As a result, the two sites this pass generalized (ch22, ch28) now
diverge from the unflagged siblings.
**Human action:** decide whether the phase-2/this-initiative construct should be
genericized suite-wide (a deliberate, separate pass) or kept as the project's own
forward-looking framing — then reconcile ch22/ch28 with that decision.

### O2. `policy-EN.tex` citation line now names no author
H10 keeps "Citation: the document's lead author, …" (matrix AUTHOR_NAME=
parameterize, realized as prose). This degrades a formal bibliographic citation
into a non-citation, while `\cite{ng-tech-ref-2026}` still encodes "ng".
**Human action:** decide whether the generic edition should keep a real citable
author (named, with a localization note) or accept the role-phrase citation.

### O3. Build blocker (`shared/glossary-EN.tex` missing) — see header.
**Human action:** create/populate `shared/glossary-EN.tex` or repoint the
`\input` so the suite compiles; then verify 0 undefined citations / references per
CLAUDE.md (could not be verified here because of this pre-existing gap).

---

## Summary of edits applied by this pass

| File | Disposition applied |
|---|---|
| `suit-policy/policy-EN.tex` | collapse multi-entity affiliation (H1); generalize tier label (M1) |
| `suit-solution/foreword-EN.tex` | collapse multi-entity affiliation + remove injected framing (H2) |
| `suit-solution/ch06-identity-EN.tex` | reapply GDPR/NIS2 article pinpoints (H3) |
| `suit-solution/ch22-wave4-policy-EN.tex` | reapply article pinpoints (H4); de-leak D7.7 (L4); generalize phase-2 (L5) |
| `suit-solution/ch24-wave6-endpoint-EN.tex` | reapply NIS2 sibling pattern (H5) |
| `suit-solution/ch13-crypto-EN.tex` | revert over-specific custody hunk (H6); drop tautology (M6) |
| `suit-solution/ch01-synthesis-EN.tex` | revert scope to baseline generic (H7) |
| `suit-solution/ch32-external-references-EN.tex` | restore eduGAIN/eduTEAMS/AARC names (H8); revert EDUCAUSE fact (L7) |
| `suit-solution/ch10-storage-EN.tex` | reapply GDPR article pinpoints (M2) |
| `suit-policy/companion/companion-body-EN.tex` | genericize alertbox title (M3); soften Art.2(6) (M4); de-echo (M5) |
| `suit-solution/ch18-wave0-foundations-EN.tex` | restore EDUCAUSE/MIT/Cambridge attributes (M7) |
| `suit-solution/ch31-institutional-precedents-EN.tex` | reconcile body to anonymized catalogue (M8); restore EDUCAUSE/NIST/ISO in method (M9) |
| `suit-solution/ch28-cross-cutting-EN.tex` | fix GEANT mischaracterization + generalize self-ref (M10) |
| `suit-solution/abstract-EN.tex` | reapply regime framing / worked instantiation (L1) |
| `suit-solution/ch15-sizing-EN.tex` | update R1 header comments (L2) |
| `suit-solution/ch21-wave3-network-EN.tex` | update faculty header comment (L3) |
| `suit-solution/ch25-wave7-audit-ir-EN.tex` | restore `\gls{nren}-CSIRT` (L6) |

All other deviations were **AUTO-RESOLVED as keep** under the ratified prose
localization model and the canonical genericization matrix (H9, H10, H11, M12,
L8). No mustache/`{{}}` tokens were introduced. All edited files have balanced
braces and environments. No change was introduced outside the deviation set
(per "introduce no other change"), except the minimal report file itself.
