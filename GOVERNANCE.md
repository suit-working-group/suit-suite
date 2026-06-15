# 🏛️ Governance

This document defines how the **SUIT — Sustainable University IT Infrastructure & Technology** suite is governed and maintained.

## 🎯 Mission

SUIT is an international working group of academic-community members that includes university IT decision-makers, architects, engineers, teachers, researchers and students. It produces and maintains a reference suite — Policy, Policy Summary, Solution, Solution Summary — that any university can adopt to build, operate, and sustain its research and education IT infrastructure.

## 🌱 Origins

The SUIT suite builds on a first version — the policy and the technical solution together with their respective executive companion — created by **Nicolas Guelfi**, chair of the SUIT working group. The international working group generalises that foundation into an institution-neutral reference adoptable by any university. The suite is institution-neutral by design so that it reads as a shared international reference rather than a single university's local policy; the original authorship and the prior work are acknowledged, not erased.

## 🔒 Core rule: no direct write access to the documents

The defining governance rule of this repository:

- The community has **read** access and proposes changes via **issues (tickets) only**.
- There is **no direct write access** to the documents for the community, and unsolicited content PRs are **not merged directly**.
- A single **manager/maintainer** centralizes, triages, decides, and applies every change, recording each in `CHANGELOG.md` against its ticket id.

This single point of integration is what keeps the four documents coherent in terminology, evidence, and cross-references.

## 👥 Roles

- **Chairman / Maintainer** — **Nicolas Guelfi** (**@nicolasguelfi**), chair of the SUIT working group and creator of the first version of the policy and technical solution and their executive companions. Owns the repository, triages tickets, makes final decisions, applies changes, cuts releases. Contact: [nicolas.guelfi@uni.lu](mailto:nicolas.guelfi@uni.lu).
- **Working group members** — propose changes, review proposals, and contribute evidence through tickets and discussion. Membership is open to the whole academic community — decision-makers, architects, engineers, teachers, researchers and students.
- **Adopting institutions** — use the suite and request localization guidance through the *Localization request* template.

## 🤝 Joining the working group

The working group is open and we actively welcome new members. The easiest way to join is the **one-page web form at [join.suit.ros.lu](https://join.suit.ros.lu)** — **no GitHub account needed**: fill it in, confirm by email, and you are recorded in the [`MEMBERS/`](MEMBERS/) registry once the maintainer reviews the request. Supplying your (optional) GitHub handle also credits you as a repository contributor, without any write access.

You can also join the classic way — to propose changes, contribute evidence, or deposit your institution's instantiation — by writing to **Nicolas Guelfi** at [nicolas.guelfi@uni.lu](mailto:nicolas.guelfi@uni.lu), or opening an issue through the templates in `.github/ISSUE_TEMPLATE/`. The [`MEMBERS/`](MEMBERS/) registry — not any access level — is the authoritative record of working-group membership.

## 🔁 Decision process

1. A change is proposed as a **Document change request** ticket (with target, current text, proposal, rationale, evidence).
2. The maintainer triages: accept / refine / decline, with a rationale recorded on the ticket.
3. Accepted changes are applied by the maintainer, verified by a clean `latexmk` build (0 undefined citations/references), and recorded in `CHANGELOG.md` with the ticket id.
4. Substantive or contested changes may be put to the working group for input before a decision.

## 🚀 Release cadence

- Releases are versioned (`vMAJOR.MINOR.PATCH`) and tagged.
- A release bundles the four documents in a consistent state; the `CHANGELOG.md` lists every applied change since the previous release with its ticket id.

## 🌍 Localization

The documents are institution-neutral by design. An adopting university instantiates the generic material via `shared/localization-guide-EN.tex`. Localization questions are handled through the *Localization request* template; localization forks are encouraged and remain under the suite's licenses.

## 🧩 The instantiation library

The generic suite is the shared baseline; the **instantiation library** at `instantiations/` is where it is turned into concrete, build-clean editions and made available to the whole working group.

- **What an instantiation is.** A participant who applies the instantiation methodology (`instantiations/_TEMPLATE/README.md`) selects a category archetype from `categories/`, fills the country-specific values in a single `set.tex`, and builds the four documents (Policy, Policy Summary, Solution, Solution Summary) through thin render wrappers. The wrappers `\input` the **unchanged** generic bodies, so an instantiation is a shell over the canonical suite, never a fork of its content — it keeps tracking the suite as the suite evolves.
- **How it is deposited.** A participant deposits `instantiations/<institution>/` (the `set.tex`, the render wrappers, and the four built PDFs) through the **Instantiation contribution** ticket (`.github/ISSUE_TEMPLATE/instantiation-contribution.yml`) and the PR flow. The same **no-direct-write** rule applies: the maintainer reviews the ticket, verifies the build is clean (0 undefined citations/references, 0 undefined localization keys), and brings the instantiation into the library, recording it in `CHANGELOG.md` against its ticket id.
- **Why it is shared.** Once accepted, the full concrete documents for that institution are available to **all other participants**. Each deposited archetype-and-edition is a worked example others can learn from, compare against, or adapt. **The library grows with the working group** — every applied instantiation adds one institution to the shared set.

The maintainer keeps the library coherent: the six archetypes and the localization key catalogue remain centrally governed, so that instantiations stay comparable across institutions and continue to build against the current generic suite.

## ⚙️ Enforcing the model on GitHub (maintainer setup)

The no-direct-write rule is enforced by repository configuration (manual GitHub settings, to be applied before publication):

- **Branch protection** on the default branch: require pull-request review, disallow direct pushes by non-maintainers.
- **`CODEOWNERS`** assigns every path to the maintainer, so any PR requires maintainer review.
- **Blank issues disabled**; all issues routed through the templates in `.github/ISSUE_TEMPLATE/`.
