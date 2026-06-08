# Governance

This document defines how the **SUIT — Sustainable University IT Infrastructure & Technology** suite is governed and maintained.

## Mission

SUIT is an international working group of university IT decision-makers, architects, and engineers. It produces and maintains a reference suite — Policy, Policy Summary, Solution, Solution Summary — that any university can adopt to build, operate, and sustain its research and education IT infrastructure.

## Core rule: no direct write access to the documents

The defining governance rule of this repository:

- The community has **read** access and proposes changes via **issues (tickets) only**.
- There is **no direct write access** to the documents for the community, and unsolicited content PRs are **not merged directly**.
- A single **manager/maintainer** centralizes, triages, decides, and applies every change, recording each in `CHANGELOG.md` against its ticket id.

This single point of integration is what keeps the four documents coherent in terminology, evidence, and cross-references.

## Roles

- **Manager / Maintainer** — owns the repository, triages tickets, makes final decisions, applies changes, cuts releases. Currently **@nicolasguelfi**.
- **Working group members** — propose changes, review proposals, and contribute evidence through tickets and discussion.
- **Adopting institutions** — use the suite and request localization guidance through the *Localization request* template.

## Decision process

1. A change is proposed as a **Document change request** ticket (with target, current text, proposal, rationale, evidence).
2. The maintainer triages: accept / refine / decline, with a rationale recorded on the ticket.
3. Accepted changes are applied by the maintainer, verified by a clean `latexmk` build (0 undefined citations/references), and recorded in `CHANGELOG.md` with the ticket id.
4. Substantive or contested changes may be put to the working group for input before a decision.

## Release cadence

- Releases are versioned (`vMAJOR.MINOR.PATCH`) and tagged.
- A release bundles the four documents in a consistent state; the `CHANGELOG.md` lists every applied change since the previous release with its ticket id.

## Localization

The documents are institution-neutral by design. An adopting university instantiates the generic material via `shared/localization-guide-EN.tex`. Localization questions are handled through the *Localization request* template; localization forks are encouraged and remain under the suite's licenses.

## Enforcing the model on GitHub (maintainer setup)

The no-direct-write rule is enforced by repository configuration (manual GitHub settings, to be applied before publication):

- **Branch protection** on the default branch: require pull-request review, disallow direct pushes by non-maintainers.
- **`CODEOWNERS`** assigns every path to the maintainer, so any PR requires maintainer review.
- **Blank issues disabled**; all issues routed through the templates in `.github/ISSUE_TEMPLATE/`.
