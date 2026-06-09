# Changelog — SUITSOLUTION

Top-level document: `solution-EN.tex` (229 pp.). The suite-level record is in the
repository-root `CHANGELOG.md`; this file tracks changes specific to SUITSOLUTION.

## Version 1.0.0 — 2026-06-09

- Founding institution-neutral technical reference, generalised from the University IT-Policy
  technical reference (Version 2.1): conceptual frame, layered architecture, wave plan,
  observability, and the conformance suite — all rendered generic.
- Audit remediations folded in (see suite `CHANGELOG.md`): A2 (ch12 audit-store integrity —
  append-only/WORM, hash-chain tamper-evidence, separation of duties), A6 (ch02 conceptual-frame
  diagram caption aligned to the actual lifelines), and the re-audit C6–C9 findings including the
  crypto layer folded into Wave 1 with conformance linkage and exit criteria.
- Builds clean: latexmk 0 undefined citations / references.
