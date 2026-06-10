# Changelog — SUIT Solution

Top-level document: `solution-EN.tex`. The suite-level record is in the
repository-root `CHANGELOG.md`; this file tracks changes specific to SUIT Solution.

## v1.0.0 — 2026-06-09

- Initial public release: the institution-neutral technical reference — conceptual
  frame, layered architecture, wave roadmap, observability, and the conformance
  suite — with the per-layer technical argumentation module.
- The cryptographic layer is closed within the Wave 1 foundations, with conformance
  linkage and exit criteria; audit-store integrity controls (append-only/WORM,
  hash-chain tamper-evidence, separation of duties) are specified in the
  observability chapter.
- Builds cleanly: latexmk 0 undefined citations / references.
