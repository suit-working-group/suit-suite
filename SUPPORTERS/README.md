# 🤝 SUPPORTERS — endorsements of the SUIT initiative

This folder lists **individuals and organizations that support the SUIT initiative
without being working-group members**. A supporter endorses the goals of the suite; a
[member](../MEMBERS/) actively takes part in the working group. Supporting grants no
write access and carries no workload commitment.

Each supporter has one file, `SUPPORTERS/<slug>.md`. This is an **endorsement list**, kept
separate from the [`MEMBERS/`](../MEMBERS/) roster on purpose: support ≠ membership.

## 🚀 How to support

Use the one-page form and choose **“Supporter”**:

### → **https://join.suit.ros.lu**

Fill it in and confirm via email — **no GitHub account needed**. Your request opens a pull
request adding your `SUPPORTERS/` entry, which the maintainer reviews and merges. Want to
do more later? Re-register as a **member** or **contributor** anytime.

## 🗂️ File format

```markdown
---
name: "University of X"        # person or organization name
entity_type: "organization"    # individual | organization
participation: "supporter"
website: "https://www.x.edu"   # organizations — optional
affiliation: "University of X" # individuals — optional
country: "Germany"
contact_point: "Nicolas Guelfi"
joined: 2026-06-15
---

A few words (optional).
```

## 🏛️ Governance

Supporter files follow the same **no-direct-write** rule as the rest of the repository:
an entry arrives via a maintainer-merged pull request opened by the
[`suit-onboarding`](https://github.com/suit-working-group/suit-onboarding) service. See
[`GOVERNANCE.md`](../GOVERNANCE.md).
