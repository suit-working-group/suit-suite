# 👥 MEMBERS — Working Group registry

This folder is the **roster of the SUIT Working Group**. Each member has one file,
`MEMBERS/<handle-or-name>.md`. **This registry — not any GitHub access level — is the
authoritative record of who belongs to the working group.** Membership grants no write
access to the repository; the suite stays under its ticket-centralized governance (see
[`GOVERNANCE.md`](../GOVERNANCE.md)).

## Three ways to take part

Registration offers three nested levels (each includes the previous):

| Level | Recorded in | Meaning |
|---|---|---|
| **Supporter** | [`SUPPORTERS/`](../SUPPORTERS/) | Endorses the initiative — **not** a member |
| **Member** | `MEMBERS/` (`participation: member`) | Joins the working group |
| **Member & contributor** | `MEMBERS/` (`participation: contributor`) | Member **and** credited as a GitHub contributor |

Both **individuals** and **organizations** can register as supporters or members;
contributor status is for **individuals** with a GitHub account (no write access is ever granted).

## 🚀 Joining — one web page, no GitHub account needed

The easy way is the one-page form:

### → **https://join.suit.academic-citizens.org**

Fill it in and confirm via the email you receive. That's all — **no GitHub account, no
command line.** Your request opens a pull request adding your registry entry, which the
maintainer reviews and merges. If you supply your (optional) GitHub handle as a
contributor, you are also credited as a **repository contributor** — still without any write access.

You can always join the classic way too: email **Nicolas Guelfi**
([nicolas.guelfi@uni.lu](mailto:nicolas.guelfi@uni.lu)) or open an issue through the
templates in [`.github/ISSUE_TEMPLATE/`](../.github/ISSUE_TEMPLATE/).

## 🗂️ File format

Individual:

```markdown
---
name: "Jane Doe"
entity_type: "individual"
participation: "contributor"   # member | contributor
honorific: "Dr."               # optional — —/Prof./Dr./Prof. Dr.
github: "janedoe"              # only for contributors
affiliation: "University of X" # optional (recommended)
linkedin: "https://www.linkedin.com/in/janedoe"   # optional
role: "CISO"                   # optional
country: "Germany"
contact_point: "Nicolas Guelfi"
joined: 2026-06-15
handle_verified: false         # contributors only
---

A few words (optional).
```

Organization (member):

```markdown
---
name: "University of X"
entity_type: "organization"
participation: "member"
website: "https://www.x.edu"   # optional
contact_person: "Jane Doe"     # optional
country: "Germany"
contact_point: "Nicolas Guelfi"
joined: 2026-06-15
---
```

`handle_verified` is `false` while the GitHub handle is self-declared (the maintainer
eyeballs it at merge). A future verification step may set it to `true`.

## 🏛️ Governance

Registry files land under the same **no-direct-write** rule as the rest of the repository:
an entry arrives via a pull request that the maintainer merges. Membership is informal —
no charter, no workload commitment. The onboarding web service that opens these pull
requests lives in the separate
[`suit-onboarding`](https://github.com/suit-working-group/suit-onboarding) repository.
