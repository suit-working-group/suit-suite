# Round-Trip Validation — UL ⇄ SUIT (Luxembourg reference instantiation)

**Question.** Does the *generic SUIT suite + Luxembourg instantiation* pipeline
**reproduce the UL-applicable substance** that the original UL documents carried?
This is a SUBSTANCE-level round-trip, not a byte diff: we genericized the UL
documents into SUIT, then re-instantiated them for the University of Luxembourg
(`instantiations/lu-university-of-luxembourg/`). The rendered LU edition should
land back on the UL substance.

**Verdict: GAPS.** The structure, the architecture, the argument, the
regulatory mapping and most named third-party entities round-trip faithfully —
and several things are strictly better in SUIT (multi-regime regulatory module,
structured audit, a new operational summary). But the localization pipeline does
**not close the loop for ~30 of the 45 keys bound in `set.tex`**: those bindings
have **no `\loc{}` consumption site** in the generic body, so their Luxembourg
values never render. For the subset where the generic prose already carries the
substance, this is harmless redundancy. For a hard core of LU-specific *named
instruments and authorities* (CNPD, GOVCERT.LU, PSI-LU, projet de loi 8307, the
Law of 28 Nov 2006, the author's UL affiliation/email), the substance is
genuinely **lost on round-trip** — the LU edition cannot say what the original
said.

---

## Method

Document correspondence used for the comparison:

| Original UL | SUIT generic | LU render wrapper |
|---|---|---|
| `book/book-EN.pdf` (153 pp) | `suit-policy` (abstract+companion+main+argumentation, +Reg. annex) | `render/policy-EN.pdf` (164 pp) |
| `technical/technical-reference-EN.pdf` (218 pp) | `suit-solution` (33 chapters) | `render/solution-EN.pdf` (229 pp) |
| `companion/companion-rectorate-EN.pdf` (8 pp) | `suit-policy/companion` | `render/policy-summary-EN.pdf` (8 pp) |
| `main/infra-uni-consolidé-EN.pdf` (96 pp) | `suit-policy/main` (folded into policy book) | (in `policy-EN`) |
| `argumentation/argumentation-EN.pdf` (43 pp) | `suit-policy/argumentation` (folded into policy book) | (in `policy-EN`) |
| — (no UL equivalent) | `suit-solution/summary` | `render/solution-summary-EN.pdf` (5 pp) — **new** |

Evidence base: extracted PDF text of both sides; the bound keys in
`set.tex`; the `\loc{}` consumption sites across `suit-solution`, `suit-policy`,
`shared`; the `parameterize` dispositions in `docs/genericization-matrix.json`;
the EU regime subsection of `shared/regulatory-applicability-EN.tex`; and the
build logs in `render/out/`.

The LU render is **build-clean**: 0 undefined citations, 0 undefined
references, 0 undefined localization keys across all four documents; no
`REPLACE:` or `??key??` leakage in any rendered PDF.

---

## The structural finding that governs the verdict

`set.tex` binds **45 localization keys** with the original UL surface forms.
The generic suite consumes only **16 distinct `\loc{}` keys**, most of them once
or twice. **30 of the 45 bound keys are never consumed** — their LU values are
defined and then dropped on the floor. The suite is a *prose-only* localization
model (finished generic prose, almost no `\loc{}` insertion points); the
`set.tex` bindings for the unconsumed keys are dead.

This matters because `docs/genericization-matrix.json` marks every one of these
anchors **`parameterize`** — i.e. the design intent is "the adopter re-inserts
its own value." The round-trip therefore *should* re-surface the LU value. It
does not, because the parameterize intent was realized as a non-substitutable
lookup table rather than as a build-time slot.

Two consequences, of very different severity:

- **Redundant orphans (harmless):** keys whose substance the generic prose
  *already carries verbatim*, so the missing `\loc` changes nothing. Verified by
  presence in the LU render: Microsoft Entra ID (199 occ.), HSM/institutional
  key custody (36), EU/EEA sovereignty (20), eduTEAMS/AARC Blueprint/eduGAIN
  (5/5/29), the NIS2 sanction ceiling, SERIMA, NCSS III, RESTENA, MeluXina,
  SnT, ULHPC, MONARC-as-an-example. These round-trip.
- **True losses (regressions):** keys that were *both* orphaned *and*
  genericized out of the prose with no recovery (see "missing" below).

---

## Preserved — UL-applicable substance faithfully reproduced

- **Whole architecture and argument.** The 5-dimension sovereignty grid, the
  9 functional layers, the 10-wave migration playbook, the self-assessment, the
  conceptual frame, reversibility and coexistence patterns all reproduce
  one-to-one (`suit-solution` ch01–ch32 mirror UL `technical` ch01–ch32; chapter
  titles and section structure align).
- **Regulatory-mapping chapter (ch33).** Every UL section survives — GDPR,
  NIS2, EU AI Act, Schrems II, NIST CSF 2.0, eIDAS 2, ISO/IEC 27001/27002/27005,
  COBIT 2019, applicability-beyond-EU, national-transposition note,
  reading-in-conjunction. The article-level pinpoints lost in the first
  genericization pass (GDPR Art. 32/33-34/25/5(1)(c)/44-49; NIS2 Art. 21(2)/23;
  AI Act Art. 5/50/2(6)) were restored as worked instantiations.
- **Named third-party entities** that are not LU-identity anchors: GÉANT,
  eduGAIN, eduTEAMS, AARC Blueprint, EDUCAUSE, MIT, Cambridge, ENISA, EDPB,
  CERN/WLCG — all retained with their true attributes.
- **The institution itself round-trips** through the consumed keys:
  "the University of Luxembourg" (`institution-name`), the Board of Governors /
  Conseil de Gouvernance (`governing-board`), the DCS (`cs-research-unit`), the
  SnT (`security-research-centre`), RESTENA (`nren-name`), MeluXina
  (`national-hpc-facility`), SERIMA (`national-notification-platform`), NCSS III
  (`national-cyber-strategy`), ANSSI-LU (`national-infosec-agency`), the ILR
  (`nis2-supervisory-authority`), projet de loi 8364 (`nis2-national-transposition`).
- **Author byline.** "Nicolas Guelfi, Chairman of the SUIT Working Group" is
  preserved (and enriched with "originally developed for the University of
  Luxembourg").
- **The NIS2 essential-entity classification substance** (public-administration
  route, no size threshold) is preserved in prose.

## Improved — better in SUIT than in the UL original

- **Multi-regime regulatory module** (`shared/regulatory-applicability-EN.tex`,
  rendered as Part IV / the ch33 annex). The UL original mapped a single
  EU/Luxembourg regime. SUIT generalizes to a size- and jurisdiction-invariant
  F1–F6 obligation spine, then instantiates it for **five regimes** (EU/EEA, US,
  UK, Brazil, South Africa) and gives a 7-step **derivation method** for any
  unlisted regime. The EU/EEA subsection preserves the full LU-applicable
  substance (GDPR Art. 32/33-34, NIS2 Art. 21(2)/23 + Implementing Reg.
  2024/2690, eIDAS 2, AI Act phasing, Schrems II transfer posture, national
  single-window platform). This is a strict superset of what UL carried.
- **Structured suite audit** (`_AUDITS/2026-06-09/`): a 7-dimension scored audit
  (SCI/TECH/XCOH/LEG/CITE/APP/DEF, aggregate 72/100) with severity-ranked
  findings. No UL equivalent existed.
- **New operational summary** (`solution-summary-EN.pdf`): a 5-page operational
  companion to the technical reference that the UL suite never had (UL had only
  the rectorate companion).
- **Archetype + category layer** (`categories/EU-PUB-RI.tex` + the six worked
  archetypes): the localization stack lets the same body serve any peer
  institution, which the single-institution UL suite could not.

## Changed — restructured but substance retained

- **Document packaging.** UL shipped five separate PDFs (book, technical,
  companion, main, argumentation). SUIT folds abstract + companion-body +
  main-body + argumentation into a single **Policy dossier** (`policy-EN`) with
  the regulatory module as Part IV, keeping the **Solution** (technical
  reference) and the two summaries as separate documents. All UL Parts I–IV are
  present; a Part IV regulatory annex is added.
- **MONARC treatment.** UL had a dedicated subsection "10.5 MONARC: Luxembourg
  risk-analysis methodology"; SUIT retitles it "10.5 A nationally provided
  risk-analysis methodology" and keeps MONARC only as one named example among
  "(MONARC, ISO/IEC 27005, FAIR, or comparable)". Substance survives; the
  LU-specific dedicated framing does not.
- **DPA / gov-CSIRT phrasing.** Where UL named the CNPD and GOVCERT.LU, the
  rendered LU edition uses role phrases ("the competent data-protection
  authority", "the governmental CSIRT"). Grammatically clean, but de-named
  (see missing).
- **Approval line.** UL: "Faculty of Science, Technology and Medicine and
  Department of Computer Science". LU render: "the approving academic units of
  the University of Luxembourg" — collapsed to one role phrase (Medicine/STM
  domains dropped).

## Missing — UL substance genuinely lost on round-trip (the real regressions to fix)

Each item below is bound in `set.tex`, marked `parameterize` in the matrix, but
has **no `\loc{}` site**, and the generic prose **does not** otherwise carry the
named entity. Counts are PDF occurrences (UL → LU render):

1. **CNPD** — the Luxembourg national DPA (10 → 0). The LU edition cannot name
   its own data-protection authority; it says "the competent data-protection
   authority". `set.tex` `national-dpa` binding is dead.
2. **GOVCERT.LU** — the governmental CSIRT and the institution's primary
   incident-reporting route (26 → 0). UL carried operational substance ("the
   University reports incidents primarily through GOVCERT.LU"); the LU render
   loses both the name and that routing fact. `national-gov-csirt` dead.
3. **PSI-LU** — the Luxembourg state information-security baseline (14 → 0).
   Replaced by "the national public-sector information-security policy".
   `national-public-sector-isp` dead.
4. **projet de loi 8307 / CER Directive transposition** (10 → 0). The CER
   transposition instrument is named nowhere in the LU render.
   `cer-national-transposition` dead.
5. **Law of 28 November 2006** (equal-treatment / reasonable-adjustment legal
   basis) (2 → 0). The named national legal instrument behind the
   reasonable-adjustment obligation is gone. `national-equal-treatment-law` dead.
6. **Author affiliation + contact** — "Department of Computer Science,
   University of Luxembourg" and `nicolas.guelfi@uni.lu` (uni.lu: 3 → 0). The
   named convener's institutional affiliation and contact email do not
   round-trip. `author-affiliation` dead.
7. **STM faculty domains** in the approval block — "Medicine" and the named
   faculty domains (Medicine occurrences 23 → 9) are collapsed into a generic
   "approving academic units" phrase.

Lower-impact dead bindings whose substance *is* preserved elsewhere in prose
(so not counted as regressions, but the bindings should still be wired or
removed for honesty of the localization model): `national-spoc-authority`
(HCPN), `national-cyber-competence-centre` (NC3), `national-risk-method`
(MONARC, kept as example), `national-cyber-commissariat-founding-law`,
`national-legislature`, `national-executive-department`, `nis2-sanction-ceiling`,
`nren-csirt` (RESTENA-CSIRT), `regulatory-regime`, `data-protection-regime`,
`cybersecurity-baseline-regime`, `eid-trust-services-regime`,
`data-custody-sovereignty-profile`, `identity-federation-profile`,
`incumbent-identity-suite-vendor` (Entra, fully present in prose),
`institution-type`, `institution-hpc-facility`, `executive-leadership`,
`academic-governing-bodies`, `essential-entity-classification-basis`.

### Recommended fix

The regressions are all one root cause: `parameterize` anchors realized without
a substitution slot. Two clean options:

- **(preferred) Wire the consumption sites.** Add `\loc{national-dpa}`,
  `\loc{national-gov-csirt}`, `\loc{national-public-sector-isp}`,
  `\loc{cer-national-transposition}`, `\loc{national-equal-treatment-law}`,
  `\loc{author-affiliation}` (and the lower-impact ones if full fidelity is
  wanted) at the points where the generic prose currently hard-codes the role
  phrase. Then the LU values in `set.tex` render and the round-trip closes;
  every other archetype gets the same slot.
- **Or** prune the dead bindings from `set.tex` and accept the de-named generic
  prose as the intended edition — but that abandons the matrix's `parameterize`
  intent for these anchors and permanently forfeits the CNPD/GOVCERT.LU/PSI-LU
  named precision the UL original carried.

The first option restores full round-trip fidelity for the LU reference
instantiation while keeping the suite generic; it is the change that turns this
verdict from GAPS toward EQUIVALENT.

---

## Summary

| Axis | Result |
|---|---|
| Architecture / argument / playbook | Round-trips fully |
| Regulatory mapping | Round-trips + improved (multi-regime + method) |
| Named non-identity entities | Round-trips fully |
| Institution + most LU anchors (16 consumed keys) | Round-trips |
| ~30 orphaned `parameterize` bindings | Not consumed; substance redundant for most |
| CNPD / GOVCERT.LU / PSI-LU / PL 8307 / 28-Nov-2006 law / author affiliation | **Lost** — no consumption site, not in prose |
| New material (audit, operational summary, archetypes) | Net additive |

**Verdict: GAPS** — driven by the un-wired `parameterize` slots for a hard core
of LU-named instruments and authorities. Everything else is EQUIVALENT or better.

*(This was the v1 verdict, before the retrofit. See the v2 section below for the
post-retrofit re-evaluation.)*

---

## v2 — after retrofit completion (`\loc` consumption sites wired)

The `\loc{}` consumption sites for the regressed and lower-impact bindings were
wired into the generic body, each defaulting to the prior generic role phrase so
**the generic edition renders byte-for-byte unchanged**, and instantiating to the
Luxembourg surface form in the LU edition. A new `\Loc{}` (sentence-initial,
first-letter-capitalising) variant was added to `localization.sty` for slots that
open a sentence. A new key `approving-academic-units` was introduced for the
internal-approval byline (it also removed a stray UL-named leftover —
"Faculty of Science, Technology and Medicine and Department of Computer Science" —
that had survived in the *generic* rectorate summary). The `author-affiliation`
key became an **optional trailing byline clause** (empty default → the
working-group attribution stands alone in the generic edition; the LU edition
appends the DCS / University of Luxembourg affiliation and `nicolas.guelfi@uni.lu`).

### Keys wired in this pass (new consumption sites)

| Key | How wired | Generic default render | LU render |
|---|---|---|---|
| `national-dpa` | replaced literal role phrase (4 sites: main ×3, ch25) | "the competent data-protection authority" | CNPD |
| `national-gov-csirt` | named the team + kept the incident-routing fact (main ×3, ch25 ×2) | "the national/governmental CSIRT" | GOVCERT.LU |
| `national-public-sector-isp` | replaced role phrase (main) | "a national public-sector information-security policy" | PSI-LU |
| `cer-national-transposition` | minimal sentence-initial slot (main, `\Loc`) | "The national CER transposition law" | projet de loi 8307 |
| `national-equal-treatment-law` | replaced the bold instrument phrase (main) | "the national transposition of Directive 2000/78/EC into labour law" | Law of 28 November 2006 |
| `author-affiliation` | optional trailing byline clause (all 4 doc bylines + `_TEMPLATE`) | *(empty)* | DCS, University of Luxembourg (`nicolas.guelfi@uni.lu`) |
| `approving-academic-units` | new key; internal-approval byline (policy + summary wrappers + `_TEMPLATE`) | "the approving academic units of the institution" | Faculty of Science, Technology and Medicine + Department of Computer Science |
| `national-spoc-authority` | replaced role phrase (main) | "the national single point of contact" | HCPN |
| `national-cyber-competence-centre` | replaced role phrase (main) | "a national cybersecurity competence centre" | NC3 |
| `national-risk-method` | replaced the leading example in the risk-method list (ch28) | "a national risk-analysis method" | MONARC |
| `nren-csirt` | replaced "a \loc{nren-name} CSIRT" (companion) | "the NREN CSIRT" | RESTENA-CSIRT |
| `nis2-sanction-ceiling` | replaced the literal ceiling figure (main) | "up to EUR 10 M or 2 % of annual turnover" | (same EU figure) |
| `executive-leadership` | replaced role phrase in the NIS2 Art. 20(2) item (main) | "the institution's central executive leadership" | the Rectorate |

### Keys deliberately left unconsumed (documented in `set.tex`)

- **Substance-in-prose orphans** (regime/profile/governance anchors:
  `regulatory-regime`, `data-protection-regime`, `cybersecurity-baseline-regime`,
  `eid-trust-services-regime`, `data-custody-sovereignty-profile`,
  `identity-federation-profile`, `incumbent-identity-suite-vendor`,
  `institution-type`, `institution-hpc-facility`, `academic-governing-bodies`,
  `essential-entity-classification-basis`, `research-backbone-scale`,
  `internal-emergency-incident-contact`, `institution-macro-set`, `author-name`):
  their LU substance is already present verbatim in the generic body (Entra ID,
  on-prem HSM custody, EU/EEA posture, GÉANT/RESTENA tier, eduGAIN/eduTEAMS,
  essential-entity route, internal emergency contact). Retained as authoritative
  `parameterize` anchors for future consumption sites; not regressions.
- **Reference-only authority bindings** (`national-legislature`,
  `national-executive-department`, `national-cyber-commissariat-founding-law`):
  administrative back-references with no surface in the rendered argument; the
  HCPN/ANSSI-LU substance they support is already surfaced through
  `national-spoc-authority` / `national-infosec-agency` / `national-gov-csirt`.
  Retained and explicitly noted in `set.tex` as intentionally non-rendering.

### Build verification (v2)

- **Generic suite** (6 documents, built from each dir): policy-EN (166 pp),
  policy-summary-EN, argumentation-policy-EN, solution-EN, solution-summary-EN,
  argumentation-solution-EN — all clean: 0 undefined citations, 0 undefined
  references, 0 undefined localization keys, no `??key??` leak. Generic role
  phrases confirmed present and **no LU name leaks** (CNPD/GOVCERT.LU/PSI-LU/8307/
  28-Nov-2006/uni.lu/MeluXina all absent from the generic policy-EN). The generic
  approval line reads "the approving academic units of the institution"; the
  generic byline ends at "Working Group." — both unchanged in appearance.
- **LU instantiation** (4 render documents): all clean on the same four checks.
  Previously-lost values now RENDER (occurrences across the 4 LU documents):
  CNPD ×4, GOVCERT.LU ×5, PSI-LU ×1, 8307 ×1, "28 November 2006" ×1,
  `nicolas.guelfi@uni.lu` ×4, "Faculty of Science, Technology and Medicine" ×1,
  plus the already-fine RESTENA ×12, MeluXina, ANSSI Luxembourg ×4, ILR ×3,
  HCPN ×5, NC3 ×2, SERIMA ×2.

### v2 round-trip table

| Axis | Result (v2) |
|---|---|
| Architecture / argument / playbook | Round-trips fully |
| Regulatory mapping | Round-trips + improved (multi-regime + method) |
| Named non-identity entities | Round-trips fully |
| Institution + consumed keys | Round-trips |
| The 7 v1 regressions (CNPD / GOVCERT.LU / PSI-LU / PL 8307 / 28-Nov-2006 law / author affiliation / STM faculty domains) | **Closed** — wired, render in the LU edition |
| Substance-in-prose orphans + reference-only bindings | Retained, documented; not rendered by design |
| New material (audit, operational summary, archetypes) | Net additive |

### Residual deltas (v2)

- **Count parity, not exact:** the LU render surfaces each named instrument at
  least once but not always at the same *frequency* as the UL original (e.g.
  GOVCERT.LU 15→5, CNPD 6→4). The substance and the operational facts
  (incident-routing through GOVCERT.LU, CNPD as DPA, PSI-LU baseline) round-trip;
  the raw occurrence counts differ because the SUIT body is genericised prose with
  single named slots rather than repeated literal mentions. This is expected and
  not a substance loss.
- **MONARC framing:** still a named *example* (not a dedicated subsection as in
  the UL original); its named value now renders via `national-risk-method`.
- **Reference-only LU instruments** (Chambre des Députés, Ministère d'État, HCPN
  founding statute) remain intentionally non-rendered; they were never part of
  the rendered UL argument surface either.

**Verdict (v2): EQUIVALENT (with minor, expected deltas).** All seven v1
regressions are closed; every LU-named instrument and authority the UL original
carried now renders in the LU edition, the generic edition is unchanged, and the
remaining unconsumed bindings are either substance-redundant or intentionally
reference-only and documented as such in `set.tex`. The localization model is now
an honest, build-time-substitutable slot model rather than a partly-dead lookup
table.
