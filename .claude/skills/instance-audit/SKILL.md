---
name: /instance-audit
description: Audit one deposited instantiation (instantiations/<institution>/) against the four canonical gates — BUILD, COMPLETENESS, FIDELITY, CURRENCY — by applying the TRACK:INST section of _AUDITS/AUDIT-PLAN.md verbatim, and emit a scored per-instance report with severity-ranked findings in the audit-report house style.
---

# /instance-audit — Audit a Deposited Instantiation

Thin invoker over the canonical methodology: **the audit grid lives in
`_AUDITS/AUDIT-PLAN.md`, NOT here** (spec-first contract — this skill must
never restate the gates, or it will drift from the plan).

## Process

1. Identify the target instance (`instantiations/<institution>/`, excluding
   `_TEMPLATE`); ask the user if ambiguous.
2. Read the canonical plan `_AUDITS/AUDIT-PLAN.md` and apply, **verbatim**:
   - the section between `<!-- TRACK:INST -->` and `<!-- /TRACK:INST -->`
     (the four gates BUILD / COMPLETENESS / FIDELITY / CURRENCY, their
     scopes, severities, id and fix rules) — restricted to the chosen
     instance;
   - the plan sections `SCOPE`, `SEVERITY`, `IDS` and `DISPOSITIONS`.
   If the `TRACK:INST` section is missing or empty, stop and report
   `plan-section-missing` — do not improvise a grid.
3. Score the instance per the plan's SEVERITY section (one score per gate +
   an instance aggregate) and write the per-instance report in the
   audit-report house style: gate table, severity-ranked findings (stable
   ids), blocking gates, concrete fixes (a `set.tex` re-binding or a
   regeneration via `tools/regen-instance-wrappers.sh` + rebuild — never a
   generic-body edit).
4. Report to the user; apply nothing without approval.

The full-suite recurring audit (`/suit-audit`) runs this same `TRACK:INST`
grid for every deposited instance — this skill is the single-instance,
on-demand form of it.
