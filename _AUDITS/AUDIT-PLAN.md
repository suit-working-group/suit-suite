# SUIT Audit Plan — Methodology

This document defines the audit methodology for the SUIT suite. It is the stable
reference that every audit run follows. A run produces a dated/versioned folder
under `_AUDITS/` (see `_AUDITS/README.md` for the run convention and how to invoke
the audit); this file defines *what* an audit checks and *how* findings are scored,
identified, and dispositioned.

## Scope of an audit

A full audit covers the four deliverables and the two argumentation modules:

- SUIT Policy — `suit-policy/policy-EN.tex`
- SUIT Policy Summary — `suit-policy/companion/policy-summary-EN.tex`
- SUIT Solution — `suit-solution/solution-EN.tex`
- SUIT Solution Summary — `suit-solution/summary/solution-summary-EN.tex`
- Policy argumentation — `suit-policy/argumentation/argumentation-policy-EN.tex`
- Solution argumentation — `suit-solution/argumentation/argumentation-solution-EN.tex`

When instantiations are present, the audit additionally covers each concrete
edition under `instantiations/` through the **INST** track (below).

## The seven document tracks

| Track | Name | What it checks |
|---|---|---|
| **SCI** | Scientific accuracy | Claim → evidence → strength; no vulgarisation, overgeneralisation, fallacy, or unsupported AI-capability framing. Every load-bearing claim is supportable. |
| **TECH** | Technical fidelity | Architecture, stack, standards, sizing, conformance suite, and wave roadmap are sound; wave dependencies are acyclic; layer-coverage is self-consistent (every architecture layer is closed by the roadmap). |
| **XCOH** | Cross-coherence | Consistency across the four documents + two modules: terminology, load-bearing numbers, colours, cross-reference macros — **plus** Policy↔Solution traceability (every Policy obligation maps to a Solution mechanism and no mechanism is orphaned). |
| **LEG** | Legal / regulatory | Article numbers, case-law holdings, statutory exemptions and thresholds, transposition caveats, and the correctness of every regulatory mapping table. |
| **CITE** | Citation coherence | Zero undefined citation keys; every factual claim carries a citation; bibliography field coverage (abstract / `fetch_status` / `fetch_note`); URL freshness is advisory. |
| **APP** | World-applicability | Portability beyond a single region or research-intensive profile; cost/FTE down-scaling; honesty about OSS gaps; every local anchor scoped through the localization guide rather than hard-coded. |
| **DEF** | Defensibility | Each weakness is either eliminated, pre-empted (concession + ≥3 converging evidence layers, mapped to a Q&A item), or explicitly flagged as a gap — tested against hostile CISO / DPO / CTO / CIO personas. |

## The instance track (INST)

For each instantiation under `instantiations/`, the INST track checks four sub-dimensions:

- **BUILD** — the edition renders cleanly (`latexmk`, 0 undefined citations/references).
- **COMPLETENESS** — every localization variable resolves to a concrete value; no dead bindings and no unresolved placeholders.
- **FIDELITY** — the rendered edition is faithful to the generic suite's substance (no dropped sections, no contradictory claims introduced by the bindings).
- **CURRENCY** — institution- and jurisdiction-specific facts in the edition are current and internally consistent.

## Severity ladder

| Severity | Meaning |
|---|---|
| **CRITICAL** | A defect that makes a document wrong or indefensible as published; blocks release. |
| **HIGH** | A material defect that a hostile expert reviewer would land on; blocks release until dispositioned. |
| **MODERATE** | A real defect that weakens the work but is not release-blocking on its own. |
| **LOW** | A precision or polish defect; correct when convenient. |

**Blocking gates** = all CRITICAL + HIGH findings. A release candidate is clean
only when every blocking gate is either remediated or formally dispositioned.

## Stable finding identifiers

Each finding carries a **content-derived stable id** of the form

```
<TRACK>-<short hash of: document + normalized claim-stem + defect-type>
```

The id is a function of the finding's content, not of run order, so the *same*
defect receives the *same* id across runs. This makes runs diffable: a finding
that persists keeps its id; a remediated finding disappears from the next run's
set; a genuinely new defect gets a new id.

## Dispositions

`docs/dispositions.json` records the suite's **accepted design constants and
standing decisions** — properties that have been reviewed and ratified (e.g. the
5-dimension policy grid, the 9-layer architecture, the 10-wave roadmap, the
single-source-per-pillar bibliography). Audit tracks must treat these as
correct-by-decision and must **never** re-raise them as findings. Every track
reads `docs/dispositions.json` before reporting.

## Adversarial verification

Before a finding is recorded as confirmed, it is independently challenged by
multiple skeptics whose task is to *refute* it. A finding survives only if it is
not refuted by a majority. This filters plausible-but-wrong findings before they
reach the report.

## Baseline-diff convention

The most recent run under `_AUDITS/` is the **baseline**. A new run diffs its
finding set against the baseline's `findings.json`:

- **Persisting** — same stable id in both → still open.
- **Closed** — in the baseline but not the new run → remediated (or re-dispositioned).
- **New** — in the new run but not the baseline → newly surfaced; triage by severity.

The shipped baseline for the current release lives at `_AUDITS/<version>/findings.json`.
