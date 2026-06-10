# Changelog — SUIT Infrastructure-Policy Document Suite

All notable changes to the SUIT suite are recorded here. From the first public
release onward, each applied change references the **ticket id** of the request
that motivated it (see `CONTRIBUTING.md` and `GOVERNANCE.md`). Document bodies
remain atemporal; all traceability lives in this file.

## Unreleased — 2026-06-10 — Audit 260609-2153 remediation · liberty-first rule · instantiation-library publication

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
