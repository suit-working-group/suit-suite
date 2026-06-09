# `_AUDITS/` — Quality audits

This directory holds the SUIT suite's quality-audit outputs. The methodology is
defined once in [`AUDIT-PLAN.md`](AUDIT-PLAN.md); this file explains how runs are
organised and how to produce one.

## Run-folder convention

Each audit run is a single folder named for the version it audits (or the run date
for an interim audit):

```
_AUDITS/<version-or-date>/
  AUDIT-REPORT.md      atemporal report body: dimension scores, clustered findings, blocking gates
  AUDIT-CHANGELOG.md   run metadata: version, date, tracks exercised, finding counts
  findings.json        machine-readable findings with stable ids — the baseline for the next diff
```

The most recent run is the **baseline**; the next run diffs against its
`findings.json` (see the baseline-diff convention in `AUDIT-PLAN.md`).

The shipped baseline for the current release is `_AUDITS/v1.0.0/`.

## Running an audit

The recurring audit is implemented as a workflow at
`.claude/workflows/suit-audit.workflow.js`. It is repo-relative and source-free:
run it from the repository root. It exercises the seven document tracks plus the
INST track for any instantiations, applies adversarial verification, respects
`docs/dispositions.json`, and diffs against the most recent `_AUDITS` run.

The run date and the skeptic count are supplied as arguments so a run is
deterministic and reproducible.

## Cadence

Audit **before each release** (see `GOVERNANCE.md`). A release candidate is clean
only when every blocking gate (CRITICAL + HIGH) is remediated or formally
dispositioned in `docs/dispositions.json`.
