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
