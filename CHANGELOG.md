# Changelog — SUIT Infrastructure-Policy Document Suite

All notable changes to the SUIT suite are recorded here. From the first public
release onward, each applied change references the **ticket id** of the request
that motivated it (see `CONTRIBUTING.md` and `GOVERNANCE.md`). Document bodies
remain atemporal; all traceability lives in this file.

The current generic **suite version** is recorded in `shared/suite-version.tex`
and rendered on every document ("SUIT suite version X.Y.Z"). Each release bumps
it via `tools/bump-version.sh` (patch by default — one bump per release); the
`## [Unreleased]` section below is stamped with the new version at that point.

## [Unreleased]

_No changes yet since 1.0.2._

## 1.0.2 — 2026-06-15 — community onboarding + "sustainable" disambiguation

Suite version bumped **1.0.1 → 1.0.2** (`shared/suite-version.tex`). All generic
documents and the Luxembourg edition were rebuilt to render "SUIT suite version
1.0.2" (0 undefined citations/references, 0 `??key??`). This release bundles the
community-onboarding integration and a terminology clarification.

- **Community onboarding integrated into the suite front-door.** New `MEMBERS/`
  (working-group roster) and `SUPPORTERS/` (endorsements) registries, with three
  nested participation levels — **supporter / member / member & contributor**,
  open to individuals and organizations. The one-page web join flow
  (`https://join.suit.ros.lu`, no GitHub account required) is surfaced in
  `README.md`, `GOVERNANCE.md` and a prominent "Join or Support" button;
  membership grants **no write access** at any level. The onboarding service
  itself lives in the separate `suit-onboarding` repository.
- **"Sustainable" disambiguation (longevity, not environmental).** A one-line
  gloss was added where the term is introduced — README overview, GOVERNANCE
  mission, CONTRIBUTING intro, and a footnote on the working-group name in the
  Solution foreword — clarifying that in SUIT "sustainable" means *built to last*
  (operational, financial and organisational durability and continuity over
  time), not environmental sustainability. Policy documents were untouched (the
  word does not appear there).

## 1.0.1 — 2026-06-11 — post-1.0.0 maintenance release

Suite version bumped **1.0.0 → 1.0.1** (one patch for this release;
`shared/suite-version.tex`). Documents now render "SUIT suite version 1.0.1";
the Luxembourg edition renders "Edition version 2.1.0 · tracks SUIT suite 1.0.1".
This release consolidates all post-1.0.0 maintenance — the items below plus the
two remediation efforts that follow as sub-sections.

- **Two-axis document versioning** (suite + per-document edition). One
  maintainer-managed semver suite version (`shared/suite-version.tex`), shown on
  every generic document; per-document `<doc>-edition-version` keys filled by
  each instantiation, shown as "Edition version X.Y.Z · tracks SUIT suite X.Y.Z".
  `\suitmetablock` selects the document by `\jobname` (catcode-robust `\csname`,
  `\ifcsname` fall-through to the suite version for any document without a key);
  no wrapper/generator change. New `tools/bump-version.sh [patch|minor|major]
  [--tag]` (one bump per release, patch default; minor/major manual) and a
  non-blocking freshness gate G9. The LU edition is initialised at edition
  version 2.1.0 on all four documents.
- **SUIT logo assets published** for participants (`logo/`: PNG + SVG colour
  variants and the generator `logo/logo-one.py`); working-only variants moved
  out of the repository tree.
- **Find-only audit remediation** (audit run `_AUDITS/2026-06-11/`, candidates
  manually verified read-only before any fix): single-sourced two stale cited
  titles and a literal cover title via the title macros (lot A); cross-document
  coherence — clarification-box colour unified to orange, phase-2 terminology
  aligned, AI Act high-risk Annex-III date precision (lot B); citation hygiene —
  an unsourced quantitative claim reformulated, four inline citations added, the
  27 `IMPOSSIBLE TO FETCH` abstract placeholders replaced with honest concise
  abstracts (lot C); `categories/US-PUB-R1.tex` now leaves `nren-csirt` at its
  Layer-0 default, matching the rule and US-PRIV-R1 (lot D). Several find-only
  candidates were **refuted on verification** (a Gartner-citation false positive;
  a README "self-conflict"; two design candidates already disclosed in
  `ch31`/`ch16`) and correctly **not** changed.

### Non-regression remediation of the University-of-Luxembourg edition

Motivating record: a read-only, multi-agent non-regression review comparing the
pre-refactoring University-of-Luxembourg suite against the instantiated SUIT
Luxembourg edition (`_TEMP/maintenance/SUIT-regression-report/`), and the
maintainer session of 2026-06-11. Ticket id: assigned by the maintainer at issue
creation.

- **LU-specific facts restored through the localization mechanism, never as
  generic-body locality.** Every recovered University-of-Luxembourg anchor is
  carried by a `\loc{}` key with a clean Layer-0 generic default and the LU
  surface form in `instantiations/lu-university-of-luxembourg/set.tex`; the
  generic build remains institution-neutral and the deposit bar stays clean.
- **NIS2 essential-entity status re-asserted for the LU edition** (C1–C3, M9):
  conditional-fact keys (`essential-entity-modality`, `nis2-status-conditional-tail`,
  `essential-entity-classification-basis`) render the established classification
  by the ILR — confirmed by a letter notified to the DCS on 3 April 2026, under
  projet de loi 8364 Art. 2(34°)/11(1)(4°) — while the generic build keeps the
  hedged formulation; CER non-designation restored (`cer-designation-status`);
  the "is may be classified" typo removed.
- **Edition bibliography overlay** (C4, M2, M10): new
  `instantiations/lu-university-of-luxembourg/lu-sources.bib` carries the 15
  named, verifiable Luxembourg sources (Chambre des Députés, ILR, GOVCERT.LU,
  HCPN, ANSSI-LU, PSI-LU, CIRCL, CSSF, SERIMA, MONARC, NCSS III, PL 8307, Loi du
  28 Nov 2006, RESTENA-CSIRT, UL adjustments committee), recovered verbatim from
  the original UL bibliography. The three previously depersonalised generic
  entries were removed from the shared bib, and every Luxembourg citation is
  routed through empty-in-generic `cite-*` keys; the generic suite no longer
  cites any specific national instrument.
- **Dead bindings reconnected and ecosystem restored** (M1, C5–C8, C12, M3, M5):
  the Faculty/University Councils, the Rectorate, ULHPC, MONARC, the RESTENA
  federation, the two-tier endorsement path and the "three faculties" structure
  now render in the LU edition; CIRCL/CSSF disambiguation, the dated
  RESTENA/ULHPC Science-DMZ finding, LIST/LIH and the RESTENA ecosystem item
  restored.
- **Companion openness-status table de-templated** (C11): the unfilled
  three-marker gabarit and its visible edit instruction are replaced by one
  `\loc{status-*}` per element (generic = single neutral marker; LU = the 15
  original University-of-Luxembourg verdicts).
- **Abstract genesis, adjustments-committee precedent and financial premise**
  (C10, C9, M7): "at the University of Luxembourg", the existing Committee for
  Reasonable Adjustments (cited), and the wealthiest-country / sole-objective /
  multi-year-State-agreement framing restored as LU surface forms.
- **Named non-Luxembourg precedents restored where the source supports them**
  (M6): Leeds/Warwick/Eindhoven (ISO 27001); the MOVEit victim list corrected to
  the source-supported set (UCLA, Stanford Medicine, University System of
  Georgia); ETH Zurich's CSCS; and the MIT/Stanford/Oxford/ETH/Cambridge/CERN/
  Michigan/EPFL reference list — these benefit the generic suite as well.
- **Double-article ("the the") rendering fixed** at nine companion sites in both
  the generic and edition builds; GÉANT backbone capacity aligned to 500 Gbps.
- **Deliberately NOT restored (claim-to-record / editorial decisions, not
  regressions):** the Magna Charta "over 1 000 signatories from 94 countries"
  figure (not supported by the cited source abstract); the NSF "500 awards since
  2012" figure (already reconciled to the source-verified "over 100 campuses");
  and the Paris-Saclay "did not pay the ransom" incident detail (its dedicated
  incident item was editorially replaced by the Texas Tech / Howard analyses).

### Audit 260609-2153 remediation · liberty-first rule · instantiation-library publication

Motivating record: the recurring suite audit `_AUDITS/260609-2153/`
(74 confirmed findings, 13 blocking gates) and the maintainer session of
2026-06-10. Ticket id: assigned by the maintainer at issue creation.

- **Audit remediation — all 74 findings closed, all 13 blocking gates
  cleared.** Highlights: literal §-references converted to `\S\ref{}`;
  Q&A defences realigned to the canonical four-item sets; dossier capsules of
  the anonymised chapters regenerated; suite-composition passages corrected;
  standards table normalised (RFC 8881, RFC 2866, CNI specification,
  de-facto/vendor qualifiers, XACML acknowledgement); every NIS2 statement
  re-derived against the directive (Art. 21(2)(a)–(j), one-month final report,
  transposition-hedged classification, Art. 2(1)/2(2) scoping); Implementing
  Regulation 2024/2690 scoped to its Art. 1 classes; AI-Act / GDPR-Chapter-V /
  TIA provision anchors fixed; prose realigned to the verified bibliography
  records (incident re-attributed to Université Paris 1 Panthéon-Sorbonne,
  UNHRC consensus adoption, ESnet case figures, security-spend benchmark
  honestly re-anchored); residual bare EU anchors routed or labelled
  (`\loc{governing-board}` ×14, continental-backbone labelled pattern); zone
  responsibility charters realised in the Technical Reference and
  Proposition 10 given the no-federation fallback; NEW §5.6 “Availability and
  failure semantics of the mediation planes” + O1.2/O2.2 + HSM wrap-export
  exit precondition (CRITICAL DEF-2103e86b closed); cyber-insurance Q9.5 and
  the `staff-representation-body` Wave-2 precondition; suite-wide colour
  semantics unified; bibliography curated (new rfc-8881-nfs41,
  rfc-2866-radius-acct, cni-spec; gartner-security-spend2024 corrected;
  Oracle-EBS note enriched; curated-reserve block).
- **Liberty-first rule.** Named principle in the main report (constraint is
  never preferred to freedom by default; a constraining contract is first
  renegotiated; regulation is engaged collectively through influence and
  reform, Position C), echoed in the companion and applied by Q9.5; the audit
  workflow’s DEF track now tests liberty-posture coherence;
  `DISPO-LIBERTY-FIRST` added to `docs/dispositions.json`.
- **Tooling and release gates.** `tools/suite-gates.sh` (G1–G6) and
  `tools/regen-instance-wrappers.sh` (the executable sanctioned delta; the
  edition set loads last, just before `\begin{document}`); release-gate rule
  in `CLAUDE.md`; LU and `_TEMPLATE` wrappers regenerated. Ticket-filing
  artefacts added: `tools/file-ticket.sh` (CLI: compose → preview → confirm →
  `gh issue create` for the four issue templates) and the `/suit-ticket`
  skill (`.claude/skills/suit-ticket/`), referenced from `CONTRIBUTING.md`.
- **Instantiation-library publication.** `instantiations/README.md` front
  door (library + 6-step process); the University-of-Luxembourg directory
  rewritten as the reference-edition presentation (process as lived); root
  README library section and direct PDF links for all documents;
  `.gitignore` fixed so deposited editions track their four PDFs (the LU PDFs
  are deposited); CONTRIBUTING pointer; LU `set.tex`: `doc-*` title keys,
  `staff-representation-body`, origin folded into `author-affiliation`,
  §6 coverage note recounted; `tools/` added to the MIT-tooling license scope.

All four generic documents, both standalone Q&A modules, the LU edition and
the template build clean (`latexmk`; 0 undefined citations, references and
localization keys); `tools/suite-gates.sh` passes.

- **Audit governance — spec-first, self-contained, untracked outputs.** The
  audit methodology is now SPEC-FIRST: `_AUDITS/AUDIT-PLAN.md`
  (PLAN-VERSION 2.0) is the canonical, machine-consumed single source whose
  marked sections the audit agents read verbatim as their grids; the
  workflow is orchestration-only; the `/instance-audit` skill defers to the
  plan's `TRACK:INST` section; gate G7 enforces plan↔orchestrator lockstep.
  New tracks: ARCH (one unbound `categories/` archetype per run, in
  deterministic rotation) and optional GOV (governance/diffusion meta files,
  `args.includeGov`); the DEF track additionally tests liberty-posture
  coherence. Every audit run is now **self-contained** — no baseline, no
  diff, no reading of prior runs. Under `_AUDITS/`, only `AUDIT-PLAN.md` and
  `README.md` are tracked: all run folders (including the formerly tracked
  `2026-06-09-genericity`, `260609-2153` and the `v1.0.0` baseline folder,
  retired from the repository by this change) are local working artefacts,
  and release quality outcomes are recorded here in `CHANGELOG.md`. For the
  record: the 260609-2153 run closed with all 74 findings remediated, all 13
  blocking gates cleared, suite score 73/100 pre-remediation.
- **Title single-sourcing and visible edition identity.** The "Companion to
  the report" box of the Technical Reference (and the summary footers) cited
  the main report under a retired title; every site that cites a suite
  document by title now consumes the canonical title macros
  (`\suitpolicytitle`/`\suitpolicysubtitle`,
  `\suitsolutiontitle`/`\suitsolutionsubtitle` in `shared/localization.sty`),
  so a renaming can no longer go stale. NEW `edition-name` localization key:
  every title page now carries a prominent edition banner
  (`\suiteditionline`) and `\suitmetablock` an `Edition:` line — the LU
  edition reads "Edition of the University of Luxembourg", an uninstantiated
  build self-identifies as "Generic reference edition (not instantiated)",
  and the template requires the binding (`REPLACE:`). Audit plan
  (PLAN-VERSION 2.1): XCOH gains the cited-title-concordance check, INST the
  edition-identity-visible gate.
- **Depersonalised attribution.** The Technical Reference title page carried a
  personal byline (named chairman, host-department affiliation and personal
  email); the suite belongs to the working group, not to an individual, so the
  byline is replaced by the public organisation URL
  (`https://github.com/suit-working-group`). The now-dead `author-name` /
  `author-affiliation` localization keys are removed (Layer 0 and the LU
  edition). The self-referential bibliography records (`suit-wg`,
  `ng-tech-ref-2026`) are re-authored as `{SUIT Working Group}`, carry the
  organisation and repository URLs, and `ng-tech-ref-2026`'s note now cites
  the main report under its current title.

## v1.0.0 — 2026-06-09 — Initial public release of the SUIT suite

The first public release of the SUIT reference suite: four institution-neutral
documents for building, operating, and sustaining university IT infrastructure.

- **SUIT Policy** (`suit-policy/policy-EN.tex`) — the governance reference.
- **SUIT Policy Summary** (`suit-policy/companion/policy-summary-EN.tex`) — its executive companion.
- **SUIT Solution** (`suit-solution/solution-EN.tex`) — the technical reference.
- **SUIT Solution Summary** (`suit-solution/summary/solution-summary-EN.tex`) — its operational executive summary.

Each pillar ships a per-layer anticipatory **argumentation** module. The suite is
parameterised for per-institution adoption through a shared localization system
(`shared/localization.sty` and `shared/localization-defaults.tex`), with category
archetypes under `categories/` and a worked reference edition under
`instantiations/lu-university-of-luxembourg/`. A single curated bibliography
(`shared/suit-consolidated.bib`) is shared across all four documents. A versioned
quality baseline is shipped under `_AUDITS/v1.0.0/`.

This suite builds on a first version created by **Nicolas Guelfi**, chairman of the
SUIT working group, originally developed at the University of Luxembourg and
generalised by the working group into an institution-neutral reference.

All four documents build cleanly (`latexmk`: 0 undefined citations, 0 undefined references).

## Working-group change log

From v1.0.0 onward, applied changes are recorded one row per change, each tied to
the ticket that motivated it.

| Ticket | Document(s) | Change | Verification | Date |
|---|---|---|---|---|
| — | — | _v1.0.0 — initial public release (no ticket)._ | latexmk: 0 undefined citations/refs | 2026-06-09 |
| `_AUDITS/2026-06-09-genericity` | suite-wide (≈42 body/shared files; dispositions in the audit `findings.json`) | Genericity & maintainability remediation of the 103 audited findings (families A–L). Trajectory label unified to `brownfield single-suite-centric`, vendor names (Microsoft/Entra/M365/Sentinel) demoted to labelled examples; NIS2/GDPR/AI-Act/Schrems/eIDAS routed through the `\loc{}` regime keys with EU instruments kept as `in the EU, …` examples; `institution-type` / `R1` routed through `\loc{institution-type}`; NREN, identity-federation and sector-body (REN-ISAC/EDUCAUSE/Jisc/JRES) exemplars demoted to labelled regional examples; `world-leading`→peer/reference framing; ICRADP deadlines, the assurance-recency window and the 80% / per-layer test-count magic numbers centralised or softened; University-of-Luxembourg origin confirmed edition-only. Localization consumption coverage substantially increased (e.g. `institution-type` 1→11, `data-protection-regime` 1→10, `cybersecurity-baseline-regime` 1→9 `\loc{}` sites) with 0 dead bindings across the 57 Layer-0 keys; 3 keys created (`icradp-decision-deadline`, `icradp-emergency-deadline`, `assurance-recency-window`). | latexmk: 6 generic documents + the Luxembourg reference edition build clean — 0 undefined citations/refs, 0 undefined localization keys, 0 `??key??` tokens | 2026-06-09 |
