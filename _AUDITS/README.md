# `_AUDITS/` — Quality audits

This directory holds the SUIT suite's quality-audit methodology and the LOCAL
outputs of audit runs. The methodology is defined **once, canonically and
machine-consumed**, in [`AUDIT-PLAN.md`](AUDIT-PLAN.md): the audit agents read
its marked sections verbatim as their grids at run time, and the orchestrator
(`.claude/workflows/suit-audit.workflow.js`) carries scheduling only. To
change what an audit checks, edit the PLAN — the release gate
`tools/suite-gates.sh` (G7) enforces plan↔orchestrator lockstep.

## Run independence

**Every audit run is self-contained**: it judges the current repository state
only, against the plan and `docs/dispositions.json` — it never reads, and
never depends on, any prior run. There is no baseline and no diff stage.
Finding ids are content-derived and stable, so two independently produced
reports remain comparable by a human when useful; that comparison is not part
of a run.

## Tracking policy (what is on GitHub)

Under `_AUDITS/`, **only two files are tracked**: `AUDIT-PLAN.md` (the
canonical methodology) and this `README.md`. Every run folder is a local
working artefact (`.gitignore: _AUDITS/*` with those two exceptions) — audit
history never pollutes the repository's change tracking. Quality statements
for a release are carried by `CHANGELOG.md`, which records each release's
audit outcome (run label, plan version, scores, blocking-gate status).

## Run-folder convention (local)

```
_AUDITS/<date>/
  AUDIT-REPORT-<date>.md   atemporal report: scores, root causes, findings, blocking gates
  AUDIT-CHANGELOG.md       run metadata: PLAN-VERSION, git HEAD, tracks, skeptic tallies
  findings.json            machine-readable findings with stable ids
```

## Running an audit

The recurring audit is the `suit-audit` workflow
(`.claude/workflows/suit-audit.workflow.js`), repo-relative and source-free;
run it from the repository root with a `date` argument (deterministic — never
read from the clock) and optionally `skepticCount`, `concurrency`,
`includeGov`. It exercises the content tracks, the INST track per deposited
instantiation, the ARCH archetype rotation and the cross-cutting DEF track,
and applies N-skeptic adversarial verification. The single-instance,
on-demand form is the `/instance-audit` skill (same `TRACK:INST` grid from
the plan).

## Cadence

Audit **before each release** (see `GOVERNANCE.md`). A release candidate is
clean only when every blocking gate (CRITICAL + HIGH) is remediated or
formally dispositioned in `docs/dispositions.json`; the release's CHANGELOG
entry records the audit outcome.
