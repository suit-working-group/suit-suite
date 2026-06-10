# /stakeholder-messages — Generate Stakeholder-Specific Messages

Generate color-coded tcolorbox messages tailored to each stakeholder group.

## Input
- `$ARGUMENTS` — path to the main .tex document, optionally followed by comma-separated list of stakeholder roles

## Procedure

### Step 1: Identify stakeholders
If roles are provided, use those. Otherwise, analyze the main document to identify all stakeholder groups mentioned (e.g., Board/Rectorate, CISO, Central IT, Research Units, Teaching Staff, Administrative Staff, Students).

### Step 2: Assign colors
Assign a semantically meaningful color per stakeholder from the dvipsnames palette:
- Board/Governance → blue
- Security/CISO → red or BrickRed
- Central IT → teal or Cyan
- Research → OliveGreen
- Teaching → orange
- Staff/BYOD → purple or Plum
- Students → RoyalBlue

### Step 3: Generate messages
For each stakeholder, create a `stakeholderbox` with:

1. **Title**: Role name
2. **Strategic issue** (2-3 sentences): Frame the document's proposals in terms of THIS stakeholder's priorities, concerns, and responsibilities
3. **Key regulatory anchors** (bullet list): Cite 2-3 specific regulations/standards most relevant to this role
4. **What changes for you** (bullet list): 3-5 concrete, specific impacts
5. **Where to find details**: Section references in the main document

### Step 4: Generate LaTeX
Output the stakeholder boxes as a sequence of tcolorbox environments ready to insert into the main document's stakeholder summary section:

```latex
\begin{stakeholderbox}[Stakeholder Role Name]{ColorName}
\textbf{Strategic issue:} ...

\textbf{Key regulatory framework:}
\begin{itemize}[nosep]
  \item ...
\end{itemize}

\textbf{What changes for you:}
\begin{itemize}[nosep]
  \item ...
\end{itemize}
\end{stakeholderbox}
```

### Output
- LaTeX fragment with all stakeholder boxes
- Each box self-contained and insertable
- All citations referencing the shared .bib file
