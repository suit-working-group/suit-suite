# 🛠️ CONTRIBUTORS — working-group members credited on the repository

This folder lists **working-group members who are also credited as GitHub
contributors**. A contributor is a [member](../MEMBERS/) who supplied a GitHub
handle and agreed to be credited on the repository — **without ever being granted
write access**. The suite stays under its ticket-centralized governance (see
[`GOVERNANCE.md`](../GOVERNANCE.md)).

Each contributor has one file, `CONTRIBUTORS/<handle>.md`. Contributors also appear
in the native **[repository contributor graph](https://github.com/suit-working-group/suit-suite/graphs/contributors)**,
credited via the `Co-authored-by` trailer on the commit that adds their entry.

## The three participation levels

Registration offers three levels, each recorded in **its own folder**:

| Level | Recorded in | Meaning |
|---|---|---|
| **Supporter** | [`SUPPORTERS/`](../SUPPORTERS/) | Endorses the initiative — **not** a member |
| **Member** | [`MEMBERS/`](../MEMBERS/) | Joins the working group |
| **Member & contributor** | `CONTRIBUTORS/` | Member **and** credited as a GitHub contributor |

Contributor status is for **individuals** with a GitHub account. Organizations can
register as supporters or members, but not as contributors.

## 🚀 Becoming a contributor — one web page

Use the one-page form and choose **“Member & contributor”**, giving your GitHub handle:

### → **https://join.suit.academic-citizens.org**

Fill it in and confirm via email. Your request opens a pull request adding this entry;
when the maintainer merges it, you are recorded here **and** credited as a repository
contributor — still without any write access.

## 🗂️ File format

```markdown
---
name: "Jane Doe"
entity_type: "individual"
participation: "contributor"
honorific: "Dr."               # optional — —/Prof./Dr./Prof. Dr.
github: "janedoe"              # required for contributors
affiliation: "University of X" # optional (recommended)
linkedin: "https://www.linkedin.com/in/janedoe"   # optional
role: "CISO"                   # optional
country: "Germany"
contact_point: "Nicolas Guelfi"
joined: 2026-06-15
handle_verified: false
---

A few words (optional).
```

`handle_verified` is `false` while the GitHub handle is self-declared (the maintainer
eyeballs it at merge). A future verification step may set it to `true`.

## 🏛️ Governance

Contributor files follow the same **no-direct-write** rule as the rest of the
repository: an entry arrives via a maintainer-merged pull request opened by the
[`suit-onboarding`](https://github.com/suit-working-group/suit-onboarding) service.
