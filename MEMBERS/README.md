# 👥 MEMBERS — Working Group registry

This folder is the **roster of the SUIT Working Group**. Each member has one file,
`MEMBERS/<handle-or-name>.md`, recording their name, affiliation, role, country, and
point of contact. **This registry — not any GitHub access level — is the authoritative
record of who belongs to the working group.** Membership grants no write access to the
repository; the suite stays under its ticket-centralized governance (see
[`GOVERNANCE.md`](../GOVERNANCE.md)).

## 🚀 Joining — one web page, no GitHub account needed

The easy way to join is the one-page form:

### → **https://join.suit.ros.lu**

Fill it in and confirm via the email you receive. That's all — **no GitHub account, no
command line.** Your request opens a pull request adding your `MEMBERS/` entry, which the
maintainer reviews and merges. If you supply your (optional) GitHub handle, you are also
credited as a **repository contributor** — still without any write access.

You can always join the classic way too: email **Nicolas Guelfi**
([nicolas.guelfi@uni.lu](mailto:nicolas.guelfi@uni.lu)) or open an issue through the
templates in [`.github/ISSUE_TEMPLATE/`](../.github/ISSUE_TEMPLATE/).

## 🗂️ File format

```markdown
---
name: "Jane Doe"
github: "janedoe"            # optional — provide it to also appear as a contributor
affiliation: "University of X"
role: "architect"           # decision-maker | architect | engineer | teacher | researcher | student
country: "DE"
contact_point: "Nicolas Guelfi"
joined: 2026-06-15
handle_verified: false
---

A few words about you (optional).
```

`handle_verified` is `false` while the GitHub handle is self-declared (the maintainer
eyeballs it at merge). A future verification step may set it to `true`.

## 🏛️ Governance

Member files land under the same **no-direct-write** rule as the rest of the repository:
an entry arrives via a pull request that the maintainer merges. Membership is informal —
no charter, no workload commitment. The onboarding web service that opens these pull
requests lives in the separate
[`suit-onboarding`](https://github.com/suit-working-group/suit-onboarding) repository.
