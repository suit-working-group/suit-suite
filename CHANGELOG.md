# Changelog — SUIT Infrastructure-Policy Document Suite

All notable changes to the SUIT suite are recorded here. Each applied change references
the **ticket id** of the request that motivated it (see `CONTRIBUTING.md` and `GOVERNANCE.md`)
or, for the founding release, the audit finding id it remediates. Document bodies remain
atemporal; all traceability lives in this file.

The format below is the authoritative record for the working-group era. The table is the
authoritative, one-row-per-change record; the narrative sections synthesise rationale by cluster.

## Version 1.0.0 — Founding release

| Field | Value |
|---|---|
| Suite | SUITPOLICY (`suit-policy/policy-EN.tex`) · SUITPOLICYSUMMARY (`suit-policy/companion/policy-summary-EN.tex`) · SUITSOLUTION (`suit-solution/solution-EN.tex`) · SUITSOLUTIONSUMMARY (`suit-solution/summary/solution-summary-EN.tex`) |
| Version | 1.0.0 |
| Date | 2026-06-09 |
| Author / Chair | Nicolas Guelfi, Chairman of the SUIT Working Group — first version developed at the University of Luxembourg |
| Provenance | Generalisation of the University IT-Policy document suite (Version 2.1) into an institution-neutral framework, parameterised for per-institution instantiation by working-group members |
| Status | Complete — four deliverables compile with 0 undefined references/citations; all confirmed findings from the three substantive audits of 2026-06-09 dispositioned |

### What this release contains

- **Four generic deliverables.** SUITPOLICY (166 pp.) and its SUITPOLICYSUMMARY (8 pp.);
  SUITSOLUTION (229 pp.) and its SUITSOLUTIONSUMMARY (5 pp.). All institution-neutral.
- **Localisation parameter system.** `shared/localization.sty` (`\loc{}`, `\Loc{}`, `\setloc{}`)
  with a three-layer override chain: `shared/localization-defaults.tex` → `categories/<archetype>` →
  `instantiations/<institution>/set.tex`. Completeness invariant: every parameter key has at least
  one consumption site.
- **Category archetypes + instantiation scaffold.** Institution-archetype defaults under `categories/`,
  the per-member instantiation mechanism under `instantiations/`, and a Luxembourg instantiation as an
  end-to-end round-trip validation against the original UL work.
- **Shared bibliography.** `shared/suit-consolidated.bib`, curated to suite standards
  (abstract / fetch_status / fetch_note on every entry), shared across all four documents.
- **Two per-layer Q&A argumentation modules** and the companion executive material.
- **Working-group Claude artifacts.** Three SUIT authoring rules, the `/instantiate` and
  `/instance-audit` skills, and the recurring 7-track audit extended with an instance-coverage (INST) track.

### Audit remediations folded into 1.0.0

The founding release incorporates the remediation of all confirmed findings from the three
substantive audits dated 2026-06-09 (`_AUDITS/2026-06-09`, `…-reaudit`, `…-reaudit2`).

| # | Finding | Severity | Track | Document(s) | Change | Verification | Date |
|---|---|---|---|---|---|---|---|
| 1 | A1 | HIGH | DEF | SUITPOLICY (argumentation Q2.1) | Charter pre-grants scoped **live-incident containment authority**; rebuttal anchored in NIS2 Art.21/23, NIST CSF 2.0 (Respond), ISO/IEC 27035, with cross-reference to Wave 7 | latexmk 0 undefined; answerbox renders | 2026-06-09 |
| 2 | A2 | HIGH | DEF | SUITPOLICY (argumentation Q8.6) + SUITSOLUTION (ch12) | **Evidence store treated as a control**: append-only/WORM, hash-chain tamper-evidence, separation of duties; GDPR Art.32 & 5(1)(f), NIS2 Art.21, ISO/IEC 27001 A.8.15/A.8.16, NIST SP 800-53 AU-9 | latexmk 0 undefined on both documents | 2026-06-09 |
| 3 | A3/A4 | MODERATE | CITE | SUITPOLICY (argumentation) | Source-precision on Verizon DBIR 2024 and the Rennes incident: removed verbatim quotation; reframed lateral movement as the breach-progression mechanism that segmentation (per cited NIST/ISO controls) interrupts | latexmk 0 undefined | 2026-06-09 |
| 4 | A5 | MODERATE | LEG | SUITPOLICY (argumentation Q4.2) | Cross-border transfer answer upgraded from SCCs-only to the **adequacy route (EU–US Data Privacy Framework) or SCCs supplemented, per Schrems II, by a documented Transfer Impact Assessment and supplementary technical measures** | latexmk 0 undefined | 2026-06-09 |
| 5 | A6 | MODERATE | XCOH | SUITSOLUTION (ch02) | Conceptual-frame diagram caption aligned to the actual lifelines (subject + 8 functional roles); cryptographic services described as participating within the certificate/key steps rather than as a separate lifeline | latexmk 0 undefined; caption matches figure | 2026-06-09 |
| 6 | A7 | LOW | CITE | SUITPOLICY (argumentation) | COBIT EDM05 governance-objective title corrected | latexmk 0 undefined | 2026-06-09 |
| 7 | A8 | LOW | XCOH | SUITPOLICYSUMMARY (companion) | "Concentric layers" framed as the executive view of the structural layers detailed in the technical reference | latexmk 0 undefined | 2026-06-09 |
| 8 | C1–C5 | HIGH→LOW | mixed | SUITPOLICY, SUITSOLUTION | Re-audit (first pass) findings: Science DMZ generic framing; ESnet/NSF campus-count sourcing; AI Act citation precision; crypto layer folded into Wave 1 | latexmk 0 undefined | 2026-06-09 |
| 9 | C6–C9 | HIGH→LOW | mixed | SUITSOLUTION | Re-audit (second pass) findings, incl. crypto-layer / Wave 1 conformance linkage and exit criteria | latexmk 0 undefined | 2026-06-09 |

### Provenance and authorship

This suite is the first, founding version of the SUIT framework. Its conceptual model, layered
architecture, conformance methodology, and argumentation were authored by **Nicolas Guelfi** and first
developed at the **University of Luxembourg**; that origin is acknowledged as the provenance of the work.
The published documents are institution-neutral by design: the framework is generic and is instantiated
per institution by working-group members. The Luxembourg instantiation is retained as a reference
round-trip validation, not as the framework's home institution.

<!--
Row format for post-1.0.0 applied changes (ticket-driven):
| #123 | normal | SUITSOLUTION | <what changed> | latexmk: 0 undefined citations/refs | YYYY-MM-DD |
-->
