# SUIT Audit Plan — Canonical Methodology

<!-- PLAN-VERSION: 2.1 -->

This file is **the single source of truth for the SUIT suite audit**. It is
written for two readers at once:

- **humans** read it to understand exactly what an audit checks, in what
  order, and where every related artefact lives;
- **the audit agents read the very same sections at run time as their
  literal grids** — the orchestrator
  (`.claude/workflows/suit-audit.workflow.js`) carries scheduling only
  (stages, concurrency, retries, rotation, output schemas) and **no
  methodology of its own**. What you read here is what the agents apply,
  verbatim. Changing audit behaviour = editing THIS file.

Robustness contract: the release gate `tools/suite-gates.sh` (G7) verifies
plan↔orchestrator lockstep (every track key in both, no empty section, every
pointed contract resolving, every cited disposition existing). A missing or
malformed plan makes the run **fail loudly** (a `plan-section-missing`
CRITICAL finding), never silently degrade.

## Sources-of-truth map (and precedence for agents)

When sources could disagree, agents apply this precedence — and report any
detected conflict as a finding, never arbitrate silently:

1. **`docs/dispositions.json`** — ratified design constants and standing
   decisions. Never re-raised as defects.
2. **This plan's sections** — the audit grids and protocols.
3. **The pointed normative contracts** in `.claude/rules/` — what the suite
   promises; the grids below point to them instead of paraphrasing them:
   `.claude/rules/suit-domain.md` (domain and reference frameworks),
   `.claude/rules/no-false-locality.md` (institution-neutral bodies),
   `.claude/rules/localization-model.md` (the `\setloc`/`\loc` contract),
   `.claude/rules/instantiation-model.md` (thin-shell editions, deposit bar),
   `.claude/rules/bibliography-curation.md` (bib field discipline),
   `.claude/rules/academic-writing.md` and
   `.claude/rules/evidence-methodology.md` (claim/evidence discipline).
4. The mechanical release gates (`tools/suite-gates.sh`) are
   **preconditions**, not part of the audit: G1–G8 catch known regressions
   cheaply at commit time; the audit hunts what is not yet known.

## Audited corpus and reading order

Stage order is guaranteed (each stage is a barrier); within a track the agent
explores freely (targeted search, not linear reading).

| Stage | In scope |
|---|---|
| Map | The six documents below + their `\input` bodies; `docs/dispositions.json`; the `instantiations/` listing; `git status` (dirty-tree precheck — flag, do not block); THIS PLAN (version + section inventory). **Run independence: no prior `_AUDITS/` run is ever read — every audit is self-contained.** |
| Find | The same six-document corpus per track (CITE additionally reads `shared/suit-consolidated.bib` in full); optional GOV track on the governance/diffusion meta files. |
| Instances | `instantiations/<slug>/` + `shared/localization-defaults.tex` + the bound `categories/<archetype>.tex`; plus ONE unbound archetype per run (ARCH rotation, deterministic on the run date). |
| Defensibility | The candidate findings + the two Q&A modules + the liberty-first rule. |
| Verify / Synthesis / Report | Confirmed findings, baseline, dispositions; writes `_AUDITS/<date>/` only. |

The six documents:
`suit-policy/policy-EN.tex`, `suit-policy/companion/policy-summary-EN.tex`,
`suit-solution/solution-EN.tex`, `suit-solution/summary/solution-summary-EN.tex`,
`suit-policy/argumentation/argumentation-policy-EN.tex`,
`suit-solution/argumentation/argumentation-solution-EN.tex`.

Not covered by design: `tools/` and `.claude/` machinery (G7 covers their
self-consistency mechanically) and generic-PDF freshness (deposited-edition
PDFs are covered by the INST CURRENCY gate).

## How a run executes

Arguments: `date` (mandatory — never read from the clock; runs are
deterministic and resumable), `skepticCount` (odd, default 3), `concurrency`
(default 3), `maxRetries` (default 4), `includeGov` (default false),
`dispositionsPath` (default `docs/dispositions.json`). Stages: Map → Find
(parallel tracks) → Instances (+ ARCH rotation) → Defensibility → Verify
(N skeptics per finding, majority-refute kill) → Synthesis → Report into
`_AUDITS/<date>/`. Every agent call is retried on null with backoff.
**Each run is self-contained**: it judges the current repository state only,
with no dependency on — and no reading of — any prior audit run.

<!-- SECTION:SCOPE -->
## Scope guard (applies to every agent)

Audit ONLY files inside THIS repository, addressed by REPOSITORY-RELATIVE
paths. There is no source, migration, or upstream repository — do NOT read or
cite any path outside this repo, and do NOT reference a prior/source project.
Read-only: do not edit any document. Anchor every finding to a real
repo-relative `file:line` (the Map stage publishes a structural ledger by
title because line numbers shift between revisions).
<!-- /SECTION:SCOPE -->

<!-- SECTION:SEVERITY -->
## Severity ladder and scoring

| Severity | Meaning | Score deduction |
|---|---|---|
| **CRITICAL** | Makes a document wrong or indefensible as published (a single persona could refuse on it; a legal falsity; a broken build); blocks release. | −22 |
| **HIGH** | A material defect a hostile expert reviewer would land on; blocks release until remediated or dispositioned. | −9 |
| **MODERATE** | A real defect that weakens the work but is not release-blocking on its own. | −3 |
| **LOW** | A precision or polish defect; correct when convenient. | −1 |
| **INFO** | A verification record (PASS notes, advisory observations); never blocking. | 0 |

Per-dimension score = 100 minus the weighted deductions over the canonical
post-merge findings. **Blocking gates** = all CRITICAL + HIGH findings; a
release candidate is clean only when every blocking gate is remediated or
formally dispositioned.
<!-- /SECTION:SEVERITY -->

<!-- SECTION:IDS -->
## Stable finding identifiers

Every finding id MUST be CONTENT-DERIVED and STABLE across runs:
`id = "<TRACK>-" + a short stable hash of {document-or-instance, normalised
claim-stem, defect-type}`, so the same unresolved defect reproduces the SAME
id on any future independent run (two reports can therefore be compared
outside the audit when useful). NEVER number by emission order.
<!-- /SECTION:IDS -->

<!-- SECTION:DISPOSITIONS -->
## Dispositions

Respect `docs/dispositions.json` (accepted dispositions): never raise an
accepted deviation as a CRITICAL/HIGH defect. Settled-by-decision items
include the 5-dimension policy grid, the 9-layer architecture, the 10-wave
rollout, the size/jurisdiction-invariance minimal-necessary-set principle (EU
baseline is an anchor, not lock-in; only the instantiation scales), advisory
abstract-length (450–900 chars is a preference), advisory URL-freshness
between releases, the technical reference deliberately carrying no approval
line, a single generic role phrase subsuming a compound source affiliation,
the labelled-example treatment of local anchors, the scoped precedent panel,
and the liberty-first rule (`DISPO-LIBERTY-FIRST`). Sourced EXTERNAL
statistics are never suppressed.
<!-- /SECTION:DISPOSITIONS -->

## The audit grids (one per track — consumed verbatim by the agents)

<!-- TRACK:SCI -->
SCIENTIFIC accuracy / evidence: validate every quantitative / empirical /
inferential claim against its cited source (exact figure + year + scope must
be present); flag vulgarization, overgeneralization (a single-institution
result universalised), negative-existence overclaim, logical fallacies,
epistemic overcalibration (proves/demonstrates without >=3 converging
evidence layers per `.claude/rules/evidence-methodology.md`), and
balanced-AI-framing violations per `.claude/rules/academic-writing.md`.
<!-- /TRACK:SCI -->

<!-- TRACK:TECH -->
TECHNICAL fidelity (chiefly the SUIT Solution): verify the 9-layer / 3-plane
architecture soundness, per-layer standard/version correctness (each named
standard actually defines the asserted behaviour), sizing/FTE realism (flag
any SUMMED headcount), conformance-suite validity/falsifiability,
reversibility & coexistence feasibility, and wave-dependency acyclicity &
sequencing realism. The grid=5 / layers=9 / waves=10 COUNTS are ratified
constants — audit their internal soundness, never the count itself.
<!-- /TRACK:TECH -->

<!-- TRACK:XCOH -->
CROSS-DOCUMENT COHERENCE — make the four documents + two Q&A modules read as
one artefact. Reconcile terminology, load-bearing numbers
(grid/layers/waves/zones) against a RECOMPUTED canonical_source (never "the
other document"), stack names, stakeholder/box colours, and cross-references
/ capsule fidelity across Policy <-> Policy-Summary <-> Solution <->
Solution-Summary (and the two Q&A modules). PLUS the POLICY<->SOLUTION
TRACEABILITY sub-axis (the two co-equal pillars must stay aligned): build the
obligation<->mechanism matrix — every SUIT Policy obligation/principle must
map to a SUIT Solution mechanism that realises it, and no Solution mechanism
may be orphaned (lacking a Policy justification). Report unmapped items in
EITHER direction and set traceDirection on each traceability finding
(policy->solution for an unrealised obligation, solution->policy for an
unjustified mechanism).

PLUS cited-title concordance: every site where one suite document cites
another by title (the "Companion to" cover boxes and footers, the
"Full document:" / "Citation:" lines, header comments) must render the CITED
document's CURRENT cover title. Verify the sites consume the canonical title
macros of `shared/localization.sty` (`\suitpolicytitle`, `\suitpolicysubtitle`,
`\suitsolutiontitle`, `\suitsolutionsubtitle`) rather than a literal copy: a
literal copy of a suite-document title outside `shared/localization.sty` is a
finding (defectType `stale-cited-title` if it diverges, `literal-title-copy`
if it merely duplicates).
<!-- /TRACK:XCOH -->

<!-- TRACK:LEG -->
LEGAL / REGULATORY: article-number correctness (GDPR 32 security vs 35 DPIA
vs 25 by-design; NIS2 measures/reporting/governance & thresholds; AI Act
research-exemption nuance — commercial-API use is NOT exempt; Charter 13
academic freedom / 7-8 / 10-11; ECHR 8/9/10), case-law holding fidelity
(Schrems I vs II not swapped; Barbulescu six-criteria),
national-transposition caveats (cite the Union instrument, demote national
mechanics to labelled worked-transposition examples), and regulatory
mapping-table correctness. Mark genuinely contested readings the suite
already disclaims as NEEDS-COUNSEL, not defects. Domain reference:
`.claude/rules/suit-domain.md`.
<!-- /TRACK:LEG -->

<!-- TRACK:CITE -->
CITATION / BIBLIOGRAPHY integrity per
`.claude/rules/bibliography-curation.md`: zero undefined keys
(cited-but-undefined = CRITICAL), claimed facts carry a citation, field
coverage present (abstract + fetch_status in {OK,VERIFIED,PAYWALL} +
fetch_note with a 4-digit year), and claim-fidelity spot audits on the
highest-stakes single-source metrics. Abstract length (450-900) and URL
freshness are ADVISORY (INFO at most), never CRITICAL/HIGH; never inflate an
abstract to a count and never move AI-derived / un-fetched text into the
abstract field (it stays in `note`).
<!-- /TRACK:CITE -->

<!-- TRACK:APP -->
WORLD-APPLICABILITY (central criterion) per
`.claude/rules/no-false-locality.md`: portability to non-EU and
non-research-intensive institutions; infrastructure-dependence fallbacks
(NREN/eduGAIN/Science-DMZ); cost/FTE down-scaling realism; open-source-gap
honesty; precedent representativeness (>=1 teaching-led / non-EU example);
and that every remaining local anchor used as a REASON is scoped with a
substitution path via the Localization Guide. The minimal necessary set is
size/jurisdiction-invariant by ratified principle — do not demand a threshold
for it.
<!-- /TRACK:APP -->

<!-- TRACK:GOV -->
GOVERNANCE / DIFFUSION coherence (OPTIONAL track, `args.includeGov: true`;
meta files only — never re-audit document prose, that belongs to the content
tracks). Scope: README.md, CONTRIBUTING.md, GOVERNANCE.md,
CODE_OF_CONDUCT.md, CHANGELOG.md, .gitignore,
`.github/ISSUE_TEMPLATE/*.yml`, `instantiations/README.md` and each deposited
edition README. Check: the ticket-centralized rule stated consistently
everywhere it appears; the deposit bar consistent with `.gitignore`
(deposited editions track their four PDFs; `_TEMPLATE` does not); every
relative link target existing; the split-licensing scope matching the actual
repository layout (documents CC-BY-SA-4.0; tooling MIT including `tools/`);
the library front door listing every deposited edition; issue-template fields
matching what CONTRIBUTING and the filing tooling describe; CHANGELOG entries
carrying their motivating record / ticket field.
<!-- /TRACK:GOV -->

<!-- TRACK:INST -->
INSTANCE audit of one deposited instantiation `instantiations/<slug>/` per
`.claude/rules/instantiation-model.md` and
`.claude/rules/localization-model.md`. Audit ONLY this instance directory
plus the shared stack it binds against (`shared/localization-defaults.tex`,
the archetype named by `\instcategory` under `categories/`). Audit FOUR gates
and emit a finding per real defect:

- **BUILD**: each of the four rendered documents (`render/policy-EN.tex`,
  `render/solution-EN.tex`, `render/policy-summary-EN.tex` built AFTER the
  policy book, `render/solution-summary-EN.tex`) builds clean via `latexmk`
  only (never pdflatex/biber). From each `render/out/<doc>.log`: 0 undefined
  citations, 0 undefined references, 0 undefined localization keys, and no
  `??key??` leak nor `REPLACE:` text in source or rendered PDF. A
  non-rendering or placeholder-leaking deposit is at least HIGH (CRITICAL if
  it blocks a clean PDF).
- **COMPLETENESS**: every parameterize key the chosen archetype leaves at
  Layer-0 default is BOUND in `set.tex` with a concrete local value AND
  CONSUMED at a `\loc{}` site (0 orphan bindings — an undeclared `\setloc`
  that renders nowhere is the finding; a declared reference-only orphan with
  a why-comment is NOT), 0 undefined loc keys, and 0 `??key??` leak.
- **FIDELITY**: the deposit is a THIN SHELL over the UNCHANGED generic bodies
  — the render wrappers are GENERATED by `tools/regen-instance-wrappers.sh`
  and must be byte-identical to a fresh regeneration (any vendored/edited
  copy of a generic body is a HIGH fork finding); AND every bound local value
  is internally consistent and plausible for the declared jurisdiction (real
  NREN / national DPA / governmental CSIRT / transposition instruments, no
  cross-jurisdiction contamination).
- **COMPLETENESS (edition identity)**: `set.tex` binds `edition-name` and the
  edition identity is VISIBLE on the title page of each of the four deposited
  PDFs (the `\suiteditionline` banner and the `Edition:` line of
  `\suitmetablock` must render the edition's own name, never the Layer-0
  "Generic reference edition" self-identification). An instance PDF that does
  not say which edition it is, is a HIGH finding (defectType
  `edition-identity-missing`).
- **CURRENCY**: the instance still TRACKS the current generic suite — no
  parameterize key added to `shared/localization-defaults.tex` or the
  archetype since the deposit is left silently defaulted; the generic body
  parts the wrappers `\input` still exist at the referenced paths; deposited
  PDFs are not stale.

Each finding: stable id `INST-<short hash of instance + gate + defect>`,
track="INST", the gate (BUILD|COMPLETENESS|FIDELITY|CURRENCY), the instance
slug, severity, document=the instance file, location, claim, defectType,
evidence, and a concrete fix (a `set.tex` re-binding or a regeneration +
rebuild, never a generic-body edit).
<!-- /TRACK:INST -->

<!-- TRACK:ARCH -->
ARCHETYPE rotation audit: each run audits ONE archetype under `categories/`
that is NOT bound by any deposited edition (the orchestrator supplies the
deterministic rotation order seeded on the run date; first read every
`instantiations/*/set.tex` excluding `_TEMPLATE` to identify the bound
archetypes, then pick the FIRST unbound archetype in the rotation order).
Audit `categories/<pick>.tex` ONLY:

- jurisdictional plausibility: every bound value is correct IN ROLE TERMS for
  the archetype's regime profile (instruments, authorities, NREN tier), with
  no invented institution or instrument;
- no country-specific NAME key pinned (nren-name, national-dpa,
  national-gov-csirt — plus nren-csirt for the US archetypes — must stay at
  Layer-0 default);
- lockstep with the `categories/README.md` §3 matrix: every key of the
  archetype's matrix column exists in the file with the matrix's surface
  form, and vice versa;
- portability: a peer jurisdiction inside the same archetype could re-point
  the values without forking the file.

Emit findings with stable id `ARCH-<short hash of archetype + claim-stem +
defect>`, track="ARCH", document=`categories/<pick>.tex`. Also emit ONE INFO
finding recording which archetype was audited this run (so the rotation is
traceable across baselines).
<!-- /TRACK:ARCH -->

<!-- TRACK:DEF -->
DEFENSIBILITY (cross-cutting; runs AFTER the content + instance tracks; you
CONSUME their candidate findings AND independently brainstorm rejection
vectors) from four hostile reviewer personas (CISO, DPO, CTO, CIO). For each
weakness/persona decide whether the suite (a) ELIMINATES it, (b) PRE-EMPTS it
with an in-document answer that meets concession-then-rebuttal + >=3
converging evidence layers (map it to a specific Q&A item in
`suit-policy/argumentation/argumentation-policy-EN.tex` /
`suit-solution/argumentation/argumentation-solution-EN.tex`, a Solution
chapter, or a summary box), or (c) leaves a defensibility GAP. Emit DEF
findings (id `DEF-<short hash of persona + normalised
rejection-vector-stem>`) only for cases (c) and thin (b), each with persona,
rejectionVector, currentCoverage ("Answered in <Q-item/chapter/box>" |
"Partially answered (where + what is thin)" | "UNANSWERED — gap"), and
gap=true/false; weight an UNANSWERED vector a single persona could refuse on
as CRITICAL. ALSO test LIBERTY-POSTURE COHERENCE (the suite liberty-first
rule, main report `par:liberty-first` / `docs/dispositions.json`
`DISPO-LIBERTY-FIRST`): flag as a DEF finding any passage that resolves a
freedom-vs-constraint tension by default compliance with a contract,
questionnaire or regulation, without the renegotiate-then-reform ladder
(design proportionality -> contract renegotiation -> collective
influence/reform, Position C); compliance-by-default phrasing is itself a
defensibility defect. Do NOT invent factual defects (those belong to the
content/instance tracks); only decide whether residual exposure is
pre-empted.
<!-- /TRACK:DEF -->

<!-- SECTION:VERIFY -->
## Adversarial verification protocol

Each candidate finding is independently challenged by N skeptics (odd, default
3) whose only job is to REFUTE it. A skeptic re-opens the cited repo-relative
file:line and reads the context; resolves any cited bib key / standard clause
/ legal article / instance log line. REFUTE (refuted=true) if the corpus does
not actually say what the finding claims, the figure is in fact
present/cited, the standard does define the behaviour, the claim is already
hedged, the location is wrong, OR a cross-doc finding inverts the canonical
source / fix direction. If the finding matches an accepted disposition,
REFUTE it as "settled by disposition <id>". For a DEF finding, REFUTE by
quoting the exact in-document answer (Q-item / chapter / box) that pre-empts
the vector. Keep refuted=false only if the defect is real exactly as stated.
A finding is KILLED when a majority of skeptics refute it.
<!-- /SECTION:VERIFY -->

<!-- SECTION:SYNTHESIS -->
## Synthesis rules

Inputs: the adversarially-CONFIRMED findings and the dispositions registry
(nothing else — a run is self-contained).

1. APPLY DISPOSITIONS: move any confirmed finding matching an accepted
   deviation into a `dispositioned` list (verification_status
   "WONTFIX-justified" + the disposition id); do not count it in severity
   tallies. Never suppress a guardrail violation (presenting an
   instantiation/sizing/optional component as universally mandatory) or a
   sourced-external-statistic error.
2. DEDUP: collapse the same physical defect raised by >1 track into one
   canonical finding (merge contributing tracks; keep the HIGHEST severity).
3. ROOT-CAUSE CLUSTERING: group distinct findings that share one underlying
   gap; per cluster emit { id, theme, member_finding_ids, proposed_root_fix,
   residual_symptoms }.
4. SCORE each dimension 0-100 per the SEVERITY section (SCI, TECH, XCOH incl.
   its Policy<->Solution traceability sub-score, LEG, CITE, APP, GOV when
   exercised, DEF, INST as the instance-track aggregate, ARCH) and compute a
   suite aggregate.

Use ZERO process/branch/revision vocabulary in any finding prose.
<!-- /SECTION:SYNTHESIS -->

<!-- SECTION:REPORT -->
## Deliverables

Write three deliverables into `_AUDITS/<date>/` (create the directory):

1. `AUDIT-REPORT-<date>.md` — a SINGLE ATEMPORAL audit report. The body reads
   as the ONE TRUE CURRENT STATE: NO branch / HEAD / revision / run / "since
   last run" / phase vocabulary anywhere. Sections, in order: (a) executive
   header — suite name, dimension scores, suite aggregate, finding counts by
   severity; (a2) root causes (theme, single proposed root fix, members)
   BEFORE the per-finding list; (b) canonical findings grouped by severity
   then track, each with id, claim, location (repo-relative file:line),
   severity, contributing tracks, evidence, recommended fix, and (for
   cross-doc drift) canonicalSource + fixDirection; (b1) a Policy<->Solution
   TRACEABILITY view; (b2) an INSTANCE-AUDIT view by instance then gate;
   (b3) a Defensibility & Rejection-Resistance view by persona; (b4) a short
   "Settled by disposition" list; (c) BLOCKING GATES — every CRITICAL and
   HIGH finding; (d) a neutral Diff Summary — counts + id lists for new /
   resolved / regressed / unchanged.
2. `AUDIT-CHANGELOG.md` — ALL run/process traceability lives HERE and ONLY
   here: run label, **the PLAN-VERSION of this plan**, the repository git
   HEAD and working-tree state, the tracks exercised, skeptic N,
   candidate-vs-confirmed counts, killed-candidate ids with refute tallies,
   and per-survivor skeptic tallies.
3. `findings.json` — the machine-readable canonical findings array (each with
   its stable id, track, gate/instance where applicable, severity, document,
   location, claim, defectType and fix) plus { date, suite, planVersion,
   scores, suiteScore }.

The report carries NO diff section: a run is judged on its own merits.
Do NOT commit anything: run folders are LOCAL working artefacts — under
`_AUDITS/`, only `AUDIT-PLAN.md` and `README.md` are tracked
(`.gitignore`).
<!-- /SECTION:REPORT -->

## Run independence

Each audit run is **self-contained**: it depends only on the current
repository state, this plan, and `docs/dispositions.json` — never on a prior
run, whose existence it must not even check. There is no baseline and no
diff stage. Because finding ids are content-derived and stable (IDS
section), any two independently produced reports remain comparable outside
the audit when that is useful — the comparison is a human/maintainer
activity, not part of a run.
