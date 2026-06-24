# 👥 MEMBERS — Working Group registry

This folder lists **working-group members** — people who joined without GitHub
contributor credit. Members who are also credited on the repository live in
[`CONTRIBUTORS/`](../CONTRIBUTORS/); together, `MEMBERS/` and `CONTRIBUTORS/` form the
working-group roster. Each member has one file, `MEMBERS/<handle-or-name>.md`. **This
registry — not any GitHub access level — is the authoritative record of who belongs to
the working group.** Membership grants no write access to the repository; the suite stays
under its ticket-centralized governance (see [`GOVERNANCE.md`](../GOVERNANCE.md)).

## Three ways to take part

Registration offers three levels, each recorded in **its own folder**:

| Level | Recorded in | Meaning |
|---|---|---|
| **Supporter** | [`SUPPORTERS/`](../SUPPORTERS/) | Endorses the initiative — **not** a member |
| **Member** | `MEMBERS/` | Joins the working group |
| **Member & contributor** | [`CONTRIBUTORS/`](../CONTRIBUTORS/) | Member **and** credited as a GitHub contributor |

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
participation: "member"
honorific: "Dr."               # optional — —/Prof./Dr./Prof. Dr.
affiliation: "University of X" # optional (recommended)
linkedin: "https://www.linkedin.com/in/janedoe"   # optional
role: "CISO"                   # optional
country: "Germany"
contact_point: "Nicolas Guelfi"
joined: 2026-06-15
---

A few words (optional).
```

Members who are also credited on the repository (with a GitHub handle) live in
[`CONTRIBUTORS/`](../CONTRIBUTORS/) — see that folder's README for the contributor format.

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

## 🏛️ Governance

Registry files land under the same **no-direct-write** rule as the rest of the repository:
an entry arrives via a pull request that the maintainer merges. Membership is informal —
no charter, no workload commitment. The onboarding web service that opens these pull
requests lives in the separate
[`suit-onboarding`](https://github.com/suit-working-group/suit-onboarding) repository.
