// SUIT — RECURRING SUITE AUDIT (source-free, SUIT-native, real Workflow runtime)
// =============================================================================
// Recurring 7-track substantive audit of the SUIT suite PLUS an instantiation
// track (INST). Entirely self-contained: every path is RELATIVE to the SUIT
// repository root (cwd at run time). There is NO external repository reference,
// NO absolute path, and NO clock/randomness — the run
// date and skeptic count arrive via args so the run is deterministic and
// resumable.
//
// Stages
//   0  Map / baseline  — resolve current structure by title; load the most
//                        recent _AUDITS/<...> run as baseline; load dispositions.
//   1  Find (parallel) — six core content tracks (SCI/TECH/XCOH/LEG/CITE/APP)
//                        over the four documents + two Q&A modules. XCOH carries
//                        the Policy<->Solution traceability sub-axis.
//   1I INST            — per instantiations/<inst>/ (excluding _TEMPLATE):
//                        BUILD / COMPLETENESS / FIDELITY / CURRENCY gates.
//   1B DEF             — cross-cutting defensibility; consumes 1+1I findings.
//   2  Verify          — N skeptics per finding, majority-refute kill.
//   3  Synthesis       — dispositions, dedup, root-cause clustering, baseline diff.
//   4  Report          — atemporal AUDIT-REPORT + AUDIT-CHANGELOG + findings.json.
//
// Resilience: EVERY agent() call goes through tryAgent(), a retry-on-null helper
// that re-issues the call (with backoff) so a transient server rate-limit /
// null return does not abort the whole run; concurrency is kept MODEST (small
// parallel batches) for the same reason. This mirrors this phase's tryAgent
// pattern.
//
// Runtime API (real Workflow runtime): agent(prompt, opts), parallel(fns),
// pipeline(items, fn), phase(name), log(msg). args may arrive as a JSON string.
// =============================================================================

export const meta = {
  name: 'suit-audit',
  description:
    '7-track adversarial audit of the SUIT suite (SCI/TECH/XCOH/LEG/CITE/APP/DEF) over the four documents + two Q&A modules, PLUS an INSTANCE track (INST: BUILD/COMPLETENESS/FIDELITY/CURRENCY per instantiation). Content-derived stable ids, adversarial verification (N skeptics, majority-refute kill), baseline-diff against the most recent _AUDITS run, dispositions-aware, retry-on-null on every agent call. Source-free and repo-relative: no external repository references and no absolute paths.',
  phases: [
    { title: 'Map',           detail: 'structure by title + most-recent _AUDITS baseline + dispositions' },
    { title: 'Find',          detail: 'six core content tracks in parallel' },
    { title: 'Instances',     detail: 'INST track per instantiations/<inst>/ (excl. _TEMPLATE)' },
    { title: 'Defensibility', detail: 'DEF cross-cutting, consumes the find + instance tracks' },
    { title: 'Verify',        detail: 'N skeptics per finding, majority-refute kills it' },
    { title: 'Synthesis',     detail: 'dispositions + dedup + root causes + baseline diff' },
    { title: 'Report',        detail: 'atemporal report + run changelog + findings.json' },
  ],
}

// Real Workflow runtime: the script body runs at TOP LEVEL (no function wrapper); `args` is the global.
const rawArgs = args
  // --------------------------------------------------------------------------
  // 0. Args (may arrive as a JSON string). All paths stay REPOSITORY-RELATIVE.
  // --------------------------------------------------------------------------
  const A = (typeof rawArgs === 'string' ? safeJson(rawArgs) : (rawArgs || {}))
  const DATE = A.date || ''                                   // ISO date or version label; never read from the clock
  if (!DATE) { log('ABORT: set args.date (ISO date or version label for _AUDITS/<date-or-version>/).'); return { aborted: true } }
  const N = (A.skepticCount && A.skepticCount % 2 === 1) ? A.skepticCount : 3   // odd N; majority-refute kills
  const CONCURRENCY = A.concurrency && A.concurrency > 0 ? A.concurrency : 3    // MODEST default, to dodge rate-limits
  const MAX_RETRIES = A.maxRetries && A.maxRetries > 0 ? A.maxRetries : 4       // retry-on-null attempts per agent call
  const DISPO_PATH = (A.dispositionsPath === undefined) ? 'docs/dispositions.json' : A.dispositionsPath
  const OUTDIR = '_AUDITS/' + DATE                            // repo-relative output directory
  const SUITE = 'SUIT — Sustainable University IT Infrastructure & Technology'

  // The four documents + the two Q&A (argumentation) modules. Repo-relative ONLY.
  const DOCS = {
    policy:           'suit-policy/policy-EN.tex',
    policySummary:    'suit-policy/companion/policy-summary-EN.tex',
    solution:         'suit-solution/solution-EN.tex',
    solutionSummary:  'suit-solution/summary/solution-summary-EN.tex',
    qaPolicy:         'suit-policy/argumentation/argumentation-policy-EN.tex',     // Q&A module 1/2
    qaSolution:       'suit-solution/argumentation/argumentation-solution-EN.tex', // Q&A module 2/2
  }
  const DOC_LIST = Object.values(DOCS).map(d => '`' + d + '`').join(', ')

  // --------------------------------------------------------------------------
  // tryAgent — retry-on-null wrapper around EVERY agent() call.
  // A null / undefined return (transient server rate-limit, dropped response)
  // is retried with linear backoff instead of aborting the run. After the last
  // attempt it returns the supplied fallback so the pipeline degrades, never
  // crashes. Mirrors this phase's tryAgent pattern.
  // --------------------------------------------------------------------------
  async function tryAgent(prompt, opts, fallback) {
    const label = (opts && opts.label) || 'agent'
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      let res = null
      try { res = await agent(prompt, opts) } catch (e) { log('tryAgent[' + label + '] attempt ' + attempt + ' threw: ' + (e && e.message ? e.message : e)) }
      if (res !== null && res !== undefined) return res
      if (attempt < MAX_RETRIES) {
        log('tryAgent[' + label + '] null on attempt ' + attempt + '/' + MAX_RETRIES + '; retrying.')
        await sleep(800 * attempt)   // linear backoff to let a rate-limit window clear
      }
    }
    log('tryAgent[' + label + '] exhausted ' + MAX_RETRIES + ' attempts; using fallback.')
    return (fallback === undefined) ? null : fallback
  }

  // mapWithConcurrency — run async tasks in MODEST-sized batches (never a full
  // fan-out) so the server is not hit with an unbounded burst that triggers a
  // rate-limit and aborts the run.
  async function mapWithConcurrency(items, limit, fn) {
    const out = new Array(items.length)
    let next = 0
    async function worker() {
      while (true) {
        const i = next++
        if (i >= items.length) return
        out[i] = await fn(items[i], i)
      }
    }
    const workers = []
    for (let w = 0; w < Math.max(1, Math.min(limit, items.length)); w++) workers.push(worker())
    await Promise.all(workers)
    return out
  }

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }
  function safeJson(s) { try { return JSON.parse(s) } catch (e) { return {} } }
  function asFindings(res) {
    if (!res) return []
    if (Array.isArray(res)) return res
    if (Array.isArray(res.findings)) return res.findings
    return []
  }

  // --------------------------------------------------------------------------
  // Schemas
  // --------------------------------------------------------------------------
  const FINDINGS = { type: 'object', required: ['findings'], properties: {
    findings: { type: 'array', items: { type: 'object', required: ['id', 'severity', 'claim'], properties: {
      id:            { type: 'string' },   // content-derived & STABLE: <TRACK>-<short hash of doc/instance + claim-stem + defect>
      track:         { type: 'string' },
      severity:      { type: 'string', enum: ['CRITICAL', 'HIGH', 'MODERATE', 'LOW', 'INFO'] },
      document:      { type: 'string' },   // repo-relative path (or instance slug for INST)
      location:      { type: 'string' },   // file:line / set.tex key / log line
      claim:         { type: 'string' },
      defectType:    { type: 'string' },
      evidence:      { type: 'string' },
      fix:           { type: 'string' },
      canonicalSource: { type: 'string' }, // cross-doc drift: the recomputed ground truth, NEVER "the other document"
      fixDirection:    { type: 'string' }, // cross-doc drift: which location changes to match canonical
      // XCOH traceability sub-axis:
      traceDirection:  { type: 'string', enum: ['policy->solution', 'solution->policy', 'n/a'] },
      // INST gate:
      gate:            { type: 'string', enum: ['BUILD', 'COMPLETENESS', 'FIDELITY', 'CURRENCY', 'n/a'] },
      instance:        { type: 'string' },
      // DEF only:
      persona:         { type: 'string' },
      rejectionVector: { type: 'string' },
      currentCoverage: { type: 'string' },
      gap:             { type: 'boolean' },
    } } },
  } }
  const VERDICT = { type: 'object', required: ['refuted'], properties: {
    refuted: { type: 'boolean' }, rationale: { type: 'string' }, suggestSeverity: { type: 'string' },
  } }
  const MAP = { type: 'object', properties: {
    baselineDir: { type: 'string' }, baselineFindings: { type: 'array', items: { type: 'object' } },
    dispositions: { type: 'array', items: { type: 'object' } },
    structure: { type: 'object' }, instances: { type: 'array', items: { type: 'string' } },
  } }
  const REPORT = { type: 'object', required: ['reportPath'], properties: {
    reportPath: { type: 'string' }, changelogPath: { type: 'string' }, findingsPath: { type: 'string' },
    confirmedCount: { type: 'integer' }, blockingGates: { type: 'array', items: { type: 'string' } },
    dimensionScores: { type: 'object' }, suiteScore: { type: 'integer' },
  } }

  const DISPO = 'Respect `' + DISPO_PATH + '` (accepted dispositions): never raise an accepted deviation as a ' +
    'CRITICAL/HIGH defect. Settled-by-decision items include the 5-dimension policy grid, the 9-layer architecture, ' +
    'the 10-wave rollout, the size/jurisdiction-invariance minimal-necessary-set principle (EU baseline is an anchor, ' +
    'not lock-in; only the instantiation scales), advisory abstract-length (450-900 chars is a preference), advisory ' +
    'URL-freshness between releases, the technical reference deliberately carrying no approval line, and a single ' +
    'generic role phrase subsuming a compound source affiliation. Sourced EXTERNAL statistics are never suppressed.'

  const STABLE_ID =
    'Every finding id MUST be CONTENT-DERIVED and STABLE across runs: ' +
    'id = "<TRACK>-" + a short stable hash of {document-or-instance, normalised claim-stem, defect-type}, so the same ' +
    'unresolved defect reproduces the SAME id on the next run (enables baseline-diff). NEVER number by emission order.'

  const SCOPE_GUARD =
    'SCOPE: audit ONLY files inside THIS repository, addressed by REPOSITORY-RELATIVE paths. There is no source, ' +
    'migration, or upstream repository — do NOT read or cite any path outside this repo, and do NOT reference a ' +
    'prior/source project. Read-only: do not edit any document. ' + DISPO + ' ' + STABLE_ID

  // ==========================================================================
  // STAGE 0 — MAP / BASELINE (hard gate)
  // ==========================================================================
  phase('Map')
  const mapRes = await tryAgent(
    'You are the MAPPER for a recurring audit of the ' + SUITE + ' suite. All paths are REPOSITORY-RELATIVE; do not ' +
    'leave this repository. Do, then return ONE structured object:\n' +
    '1. STRUCTURE BY TITLE (line numbers shift between revisions): resolve the section/chapter ledger of the four ' +
    'documents (' + DOCS.policy + ', ' + DOCS.policySummary + ', ' + DOCS.solution + ', ' + DOCS.solutionSummary + ') and ' +
    'the two Q&A modules (' + DOCS.qaPolicy + ', ' + DOCS.qaSolution + '), recording live file:line anchors so this ' +
    'run\'s findings are location-stable.\n' +
    '2. BASELINE = MOST RECENT PRIOR RUN: list `_AUDITS/` (exclude `.gitkeep` and the current `' + DATE + '` dir if it ' +
    'already exists), pick the most recent prior run directory by name, read its `findings.json` (or, if absent, its ' +
    '`AUDIT-REPORT-*.md`), and extract every prior finding {id, severity, status}. If none exists, record ' +
    '"first run, no baseline". Return the chosen baselineDir.\n' +
    '3. DISPOSITIONS: read `' + DISPO_PATH + '` if present and extract the accepted-deviation entries (id, appliesTo, ' +
    'doNotRaise) so the find tracks and the synthesiser can suppress settled items. If absent, record "no dispositions".\n' +
    '4. INSTANCES: list `instantiations/` and return every subdirectory EXCEPT `_TEMPLATE` as an instance slug.\n' +
    '5. SOURCE-STABILITY PRECHECK: run `git status --porcelain` and note any uncommitted divergence of the shared bib ' +
    'or a body file so downstream tracks audit a KNOWN state and do not chase phantom defects from a dirty tree (flag, ' +
    'do not block).\n' +
    'Return MAP. Do NOT audit; only map and load.',
    { phase: 'Map', schema: MAP, label: 'map' },
    { baselineDir: '', baselineFindings: [], dispositions: [], structure: {}, instances: [] })

  const baselineDir = (mapRes && mapRes.baselineDir) || ''
  const baselineFindings = (mapRes && mapRes.baselineFindings) || []
  const instances = (mapRes && Array.isArray(mapRes.instances)) ? mapRes.instances.filter(s => s && s !== '_TEMPLATE') : []
  log('Map: baseline=' + (baselineDir || 'NONE (first run)') + ', ' + baselineFindings.length +
      ' baseline findings, ' + instances.length + ' instance(s): ' + (instances.join(', ') || 'none') + '.')

  const LEDGER = 'A structural ledger + the most-recent-run baseline finding ids + the dispositions registry are ' +
    'available; anchor every finding to a real repo-relative file:line. ' + SCOPE_GUARD

  // ==========================================================================
  // STAGE 1 — SIX CORE CONTENT FIND TRACKS (modest-concurrency parallel)
  // ==========================================================================
  phase('Find')
  const TRACKS = [
    { k: 'SCI',  p: 'SCIENTIFIC accuracy / evidence: validate every quantitative / empirical / inferential claim ' +
        'against its cited source (exact figure + year + scope must be present); flag vulgarization, overgeneralization ' +
        '(a single-institution result universalised), negative-existence overclaim, logical fallacies, epistemic ' +
        'overcalibration (proves/demonstrates without >=3 converging evidence layers), and balanced-AI-framing violations.' },
    { k: 'TECH', p: 'TECHNICAL fidelity (chiefly the SUIT Solution): verify the 9-layer / 3-plane architecture soundness, ' +
        'per-layer standard/version correctness (each named standard actually defines the asserted behaviour), sizing/FTE ' +
        'realism (flag any SUMMED headcount), conformance-suite validity/falsifiability, reversibility & coexistence ' +
        'feasibility, and wave-dependency acyclicity & sequencing realism. The grid=5 / layers=9 / waves=10 COUNTS are ' +
        'ratified constants — audit their internal soundness, never the count itself.' },
    { k: 'XCOH', p: 'CROSS-DOCUMENT COHERENCE — make the four documents + two Q&A modules read as one artefact. ' +
        'Reconcile terminology, load-bearing numbers (grid/layers/waves/zones) against a RECOMPUTED canonical_source ' +
        '(never "the other document"), stack names, stakeholder/box colours, and cross-references / capsule fidelity ' +
        'across Policy <-> Policy-Summary <-> Solution <-> Solution-Summary (and the two Q&A modules). ' +
        'PLUS the POLICY<->SOLUTION TRACEABILITY sub-axis (the two co-equal pillars must stay aligned): build the ' +
        'obligation<->mechanism matrix — every SUIT Policy obligation/principle must map to a SUIT Solution mechanism ' +
        'that realises it, and no Solution mechanism may be orphaned (lacking a Policy justification). Report unmapped ' +
        'items in EITHER direction and set traceDirection on each traceability finding (policy->solution for an ' +
        'unrealised obligation, solution->policy for an unjustified mechanism).' },
    { k: 'LEG',  p: 'LEGAL / REGULATORY: article-number correctness (GDPR 32 security vs 35 DPIA vs 25 by-design; NIS2 ' +
        'measures/reporting/governance & thresholds; AI Act research-exemption nuance — commercial-API use is NOT exempt; ' +
        'Charter 13 academic freedom / 7-8 / 10-11; ECHR 8/9/10), case-law holding fidelity (Schrems I vs II not swapped; ' +
        'Barbulescu six-criteria), national-transposition caveats, and regulatory mapping-table correctness. Mark ' +
        'genuinely contested readings the suite already disclaims as NEEDS-COUNSEL, not defects.' },
    { k: 'CITE', p: 'CITATION / BIBLIOGRAPHY integrity: zero undefined keys (cited-but-undefined = CRITICAL), claimed ' +
        'facts carry a citation, field coverage present (abstract + fetch_status in {OK,VERIFIED,PAYWALL} + fetch_note ' +
        'with a 4-digit year), and claim-fidelity spot audits on the highest-stakes single-source metrics. Abstract ' +
        'length (450-900) and URL freshness are ADVISORY (INFO at most), never CRITICAL/HIGH; never inflate an abstract ' +
        'to a count and never move AI-derived / un-fetched text into the abstract field (it stays in `note`).' },
    { k: 'APP',  p: 'WORLD-APPLICABILITY (central criterion): portability to non-EU and non-research-intensive ' +
        'institutions; infrastructure-dependence fallbacks (NREN/eduGAIN/Science-DMZ); cost/FTE down-scaling realism; ' +
        'open-source-gap honesty; precedent representativeness (>=1 teaching-led / non-EU example); and that every ' +
        'remaining local anchor used as a REASON is scoped with a substitution path via the Localization Guide. The ' +
        'minimal necessary set is size/jurisdiction-invariant by ratified principle — do not demand a threshold for it.' },
  ]

  const coreResults = await mapWithConcurrency(TRACKS, CONCURRENCY, (t) => tryAgent(
    'AUDIT TRACK ' + t.k + '. ' + t.p + '\n' +
    'Scope: the four ' + SUITE + ' documents plus the two Q&A modules: ' + DOC_LIST + '. ' + LEDGER + '\n' +
    'For each finding give: a stable content-derived id "' + t.k + '-<short hash>", track="' + t.k + '", severity, ' +
    'document (repo-relative path), location (file:line), claim, defectType, evidence, and a recommended fix ' +
    '(and for any cross-document drift, canonicalSource + fixDirection). Return FINDINGS.',
    { phase: 'Find', schema: FINDINGS, label: 'find:' + t.k },
    { findings: [] }))

  const core = []
  coreResults.forEach((r, i) => asFindings(r).forEach(f => core.push(Object.assign({ track: TRACKS[i].k }, f))))
  log('Find: ' + core.length + ' candidate findings across ' + TRACKS.length + ' core tracks.')

  // ==========================================================================
  // STAGE 1I — INSTANCE TRACK (INST): one audit per instantiations/<inst>/
  // (the generic-suite tracks above do not cover the deposited editions)
  // ==========================================================================
  phase('Instances')
  const instResults = instances.length === 0 ? [] : await mapWithConcurrency(instances, CONCURRENCY, (slug) => tryAgent(
    'AUDIT TRACK INST for the deposited instantiation `instantiations/' + slug + '/`. Audit ONLY this instance ' +
    'directory plus the shared stack it binds against (`shared/localization-defaults.tex`, the archetype named by ' +
    '`\\instcategory` under `categories/`); do NOT read any other repository. ' + SCOPE_GUARD + '\n' +
    'Audit FOUR gates and emit a finding per real defect:\n' +
    '  - BUILD: each of the four rendered documents (`render/policy-EN.tex`, `render/solution-EN.tex`, ' +
    '`render/policy-summary-EN.tex` built AFTER the policy book, `render/solution-summary-EN.tex`) builds clean via ' +
    '`latexmk` only (never pdflatex/biber). From each `render/out/<doc>.log`: 0 undefined citations, 0 undefined ' +
    'references, 0 undefined localization keys, and no `??key??` leak nor `REPLACE:` text in source or rendered PDF. ' +
    'A non-rendering or placeholder-leaking deposit is at least HIGH (CRITICAL if it blocks a clean PDF).\n' +
    '  - COMPLETENESS: every parameterize key the chosen archetype leaves at Layer-0 default is BOUND in `set.tex` ' +
    'with a concrete local value AND CONSUMED at a `\\loc{}` site (0 orphan bindings — an undeclared `\\setloc` that ' +
    'renders nowhere is the finding; a declared reference-only orphan with a why-comment is NOT), 0 undefined loc keys, ' +
    'and 0 `??key??` leak.\n' +
    '  - FIDELITY: the deposit is a THIN SHELL over the UNCHANGED generic bodies — the render wrappers `\\input` the ' +
    'generic `suit-policy/` and `suit-solution/` sources unedited, with only the sanctioned `\\input{../set}` addition ' +
    '(any vendored/edited copy of a generic body is a HIGH fork finding); AND every bound local value is internally ' +
    'consistent and plausible for the declared jurisdiction (real NREN / national DPA / governmental CSIRT / ' +
    'transposition instruments, no cross-jurisdiction contamination).\n' +
    '  - CURRENCY: the instance still TRACKS the current generic suite — no parameterize key added to ' +
    '`shared/localization-defaults.tex` or the archetype since the deposit is left silently defaulted; the generic ' +
    'body parts the wrappers `\\input` still exist at the referenced paths; deposited PDFs are not stale.\n' +
    'Emit findings with stable id "INST-<short hash of instance + gate + defect>", track="INST", the gate ' +
    '(BUILD|COMPLETENESS|FIDELITY|CURRENCY), instance="' + slug + '", severity, document=the instance file, location, ' +
    'claim, defectType, evidence, and a concrete fix (a `set.tex` re-binding or a rebuild, never a generic-body edit). ' +
    'Return FINDINGS.',
    { phase: 'Instances', schema: FINDINGS, label: 'inst:' + slug },
    { findings: [] }))

  const inst = []
  instResults.forEach(r => asFindings(r).forEach(f => inst.push(Object.assign({ track: 'INST' }, f))))
  log('Instances: ' + inst.length + ' candidate findings across ' + instances.length + ' instance(s).')

  const findAndInst = core.concat(inst)

  // ==========================================================================
  // STAGE 1B — DEF (cross-cutting; consumes the find + instance candidates)
  // ==========================================================================
  phase('Defensibility')
  const compact = findAndInst.map(f => ({ id: f.id, track: f.track, document: f.document || f.instance, severity: f.severity, claim: f.claim, defectType: f.defectType }))
  const defRes = await tryAgent(
    'AUDIT TRACK DEF (cross-cutting; runs AFTER the content + instance tracks). You CONSUME the candidate findings ' +
    'below AND independently brainstorm rejection vectors from four hostile reviewer personas (CISO, DPO, CTO, CIO). ' +
    'For each weakness/persona decide whether the suite (a) ELIMINATES it, (b) PRE-EMPTS it with an in-document answer ' +
    'that meets concession-then-rebuttal + >=3 converging evidence layers (map it to a specific Q&A item in ' +
    '`' + DOCS.qaPolicy + '` / `' + DOCS.qaSolution + '`, a Solution chapter, or a summary box), or (c) leaves a ' +
    'defensibility GAP. Emit DEF findings (id "DEF-<short hash of persona + normalised rejection-vector-stem>", ' +
    'track="DEF") only for cases (c) and thin (b), each with persona, rejectionVector, currentCoverage ' +
    '("Answered in <Q-item/chapter/box>" | "Partially answered (where + what is thin)" | "UNANSWERED — gap"), and ' +
    'gap=true/false; weight an UNANSWERED vector a single persona could refuse on as CRITICAL. ' +
    'ALSO test LIBERTY-POSTURE COHERENCE (the suite liberty-first rule, main report par:liberty-first / ' +
    'docs/dispositions.json DISPO-LIBERTY-FIRST): flag as a DEF finding any passage that resolves a ' +
    'freedom-vs-constraint tension by default compliance with a contract, questionnaire or regulation, without the ' +
    'renegotiate-then-reform ladder (design proportionality -> contract renegotiation -> collective ' +
    'influence/reform, Position C); compliance-by-default phrasing is itself a defensibility defect. ' + SCOPE_GUARD + '\n' +
    'Do NOT invent factual defects (those belong to the content/instance tracks); only decide whether residual ' +
    'exposure is pre-empted. Candidates:\n' + JSON.stringify(compact),
    { phase: 'Defensibility', schema: FINDINGS, label: 'find:DEF' },
    { findings: [] })

  const candidates = findAndInst.concat(asFindings(defRes).map(f => Object.assign({ track: 'DEF' }, f)))
  log('Defensibility: ' + asFindings(defRes).length + ' DEF findings. Total candidates entering verification: ' + candidates.length + '.')

  // ==========================================================================
  // STAGE 2 — ADVERSARIAL VERIFY (N skeptics/finding, majority-refute kill)
  // ==========================================================================
  phase('Verify')
  const verified = await mapWithConcurrency(candidates, CONCURRENCY, async (f) => {
    const skeptics = await mapWithConcurrency([...Array(N).keys()], N, (i) => tryAgent(
      'You are SKEPTIC #' + (i + 1) + ' of ' + N + ' for ONE audit finding. Your job is to REFUTE it.\n' +
      'Finding ' + f.id + ' (track ' + (f.track || 'n/a') + '): "' + f.claim + '" — defect: ' + (f.defectType || 'n/a') +
      ', at ' + (f.document || f.instance || 'n/a') + ' ' + (f.location || '') + '.\n' +
      'Re-open the cited repo-relative file:line and read the context; resolve any cited bib key / standard clause / ' +
      'legal article / instance log line. REFUTE (set refuted=true) if the corpus does not actually say what the ' +
      'finding claims, the figure is in fact present/cited, the standard does define the behaviour, the claim is ' +
      'already hedged, the location is wrong, OR a cross-doc finding inverts the canonical source / fix direction. ' +
      'If the finding matches an accepted disposition, REFUTE it as "settled by disposition <id>". ' +
      'For a DEF finding, REFUTE by quoting the exact in-document answer (Q-item / chapter / box) that pre-empts the ' +
      'vector. Keep refuted=false only if the defect is real exactly as stated. ' + SCOPE_GUARD,
      { phase: 'Verify', schema: VERDICT, label: 'verify:' + f.id + '#' + (i + 1) },
      { refuted: false, rationale: 'verifier-unavailable: defaulting to survive' }))
    const v = skeptics.filter(Boolean)
    const refutes = v.filter(x => x.refuted).length
    const survives = v.length > 0 && refutes < Math.ceil(v.length / 2)   // majority-refute kill
    return Object.assign({}, f, { survives, refutes, skeptics: v.length })
  })
  const confirmed = verified.filter(f => f && f.survives)
  log('Verify: ' + confirmed.length + ' / ' + candidates.length + ' findings survived (majority-refute kill; ' +
      (candidates.length - confirmed.length) + ' killed).')

  // ==========================================================================
  // STAGE 3 — SYNTHESIS (dispositions, dedup, root causes, baseline diff)
  // ==========================================================================
  phase('Synthesis')
  const synthRes = await tryAgent(
    'You are the SYNTHESISER. Inputs: the adversarially-CONFIRMED findings, the most-recent-run BASELINE finding set, ' +
    'and the dispositions registry. ' + SCOPE_GUARD + '\n' +
    '1. APPLY DISPOSITIONS: move any confirmed finding matching an accepted deviation into a `dispositioned` list ' +
    '(verification_status "WONTFIX-justified" + the disposition id); do not count it in severity tallies. Never ' +
    'suppress a guardrail violation (presenting an instantiation/sizing/optional component as universally mandatory) ' +
    'or a sourced-external-statistic error.\n' +
    '2. DEDUP: collapse the same physical defect raised by >1 track into one canonical finding (merge ' +
    'contributing tracks; keep the HIGHEST severity).\n' +
    '3. ROOT-CAUSE CLUSTERING: group distinct findings that share one underlying gap; per cluster emit ' +
    '{ id, theme, member_finding_ids, proposed_root_fix, residual_symptoms }.\n' +
    '4. SCORE each dimension 0-100 (SCI, TECH, XCOH incl. its Policy<->Solution traceability sub-score, LEG, CITE, ' +
    'APP, DEF, and INST as the instance-track aggregate) and compute a suite aggregate.\n' +
    '5. BASELINE DIFF on STABLE IDs + severity ONLY (never prose, never line numbers): each confirmed finding -> ' +
    'NEW | REGRESSED | UNCHANGED; every baseline id with no current confirmed match -> RESOLVED.\n' +
    'Return { findings:[canonical confirmed with diff_status], root_causes:[...], dispositioned:[{id,disposition_id}], ' +
    'scores:{...}, suiteScore, diff:{new:[ids],resolved:[ids],regressed:[ids],unchanged:[ids]} }. ' +
    'Use ZERO process/branch/revision vocabulary in any finding prose.\n' +
    'CONFIRMED findings: ' + JSON.stringify(confirmed.map(f => ({ id: f.id, track: f.track, gate: f.gate, instance: f.instance, severity: f.severity, document: f.document, location: f.location, claim: f.claim, defectType: f.defectType, fix: f.fix, traceDirection: f.traceDirection, canonicalSource: f.canonicalSource, fixDirection: f.fixDirection, persona: f.persona, rejectionVector: f.rejectionVector, currentCoverage: f.currentCoverage }))) + '\n' +
    'BASELINE findings (most recent run' + (baselineDir ? ' `' + baselineDir + '`' : ', NONE') + '): ' + JSON.stringify(baselineFindings),
    { phase: 'Synthesis', schema: { type: 'object', properties: {
        findings: { type: 'array', items: { type: 'object' } },
        root_causes: { type: 'array', items: { type: 'object' } },
        dispositioned: { type: 'array', items: { type: 'object' } },
        scores: { type: 'object' }, suiteScore: { type: 'integer' },
        diff: { type: 'object' },
      } }, label: 'synthesis' },
    { findings: confirmed, root_causes: [], dispositioned: [], scores: {}, suiteScore: 0,
      diff: { new: confirmed.map(f => f.id), resolved: [], regressed: [], unchanged: [] } })

  const finalFindings = (synthRes && Array.isArray(synthRes.findings) && synthRes.findings.length) ? synthRes.findings : confirmed
  const diff = (synthRes && synthRes.diff) || { new: [], resolved: [], regressed: [], unchanged: [] }
  log('Synthesis: ' + finalFindings.length + ' canonical findings; diff vs ' + (baselineDir || 'no baseline') +
      ' — new ' + ((diff.new || []).length) + ', resolved ' + ((diff.resolved || []).length) +
      ', regressed ' + ((diff.regressed || []).length) + ', unchanged ' + ((diff.unchanged || []).length) + '.')

  // ==========================================================================
  // STAGE 4 — REPORT (atemporal) + CHANGELOG (traceability) + findings.json
  // ==========================================================================
  phase('Report')
  const sevCount = sev => finalFindings.filter(f => (f.final_severity || f.severity) === sev).length
  const blocking = finalFindings.filter(f => /CRITICAL|HIGH/.test(f.final_severity || f.severity || '')).map(f => f.id)

  const report = await tryAgent(
    'You are the REPORTER. Write the three audit deliverables into `' + OUTDIR + '/` (create the directory). All paths ' +
    'repository-relative. ' + SCOPE_GUARD + '\n' +
    '1. `AUDIT-REPORT-' + DATE + '.md` — a SINGLE ATEMPORAL audit report of the ' + SUITE + ' suite. The body must read ' +
    'as the ONE TRUE CURRENT STATE: NO branch / HEAD / revision / run / "since last run" / phase vocabulary anywhere. ' +
    'Sections, in order: (a) executive header — suite name, the dimension scores (SCI/TECH/XCOH+traceability/LEG/CITE/' +
    'APP/DEF/INST), suite aggregate, and finding counts by severity (CRITICAL=' + sevCount('CRITICAL') + ', HIGH=' +
    sevCount('HIGH') + ', MODERATE=' + sevCount('MODERATE') + ', LOW=' + sevCount('LOW') + '); ' +
    '(a2) Root causes — each cluster\'s theme, single proposed root fix, and member findings, BEFORE the per-finding ' +
    'list; (b) canonical findings grouped by severity then track, each with id, claim, location (repo-relative ' +
    'file:line), severity, contributing tracks, evidence, recommended fix, and (for cross-doc drift) canonicalSource + ' +
    'fixDirection; (b1) a Policy<->Solution TRACEABILITY view of the XCOH traceability findings (unrealised obligations ' +
    'and orphaned mechanisms, by traceDirection); (b2) an INSTANCE-AUDIT view of the INST findings grouped by instance ' +
    'then gate (BUILD/COMPLETENESS/FIDELITY/CURRENCY); (b3) a Defensibility & Rejection-Resistance view of the DEF ' +
    'findings by persona (CISO/DPO/CTO/CIO) with rejectionVector / currentCoverage; (b4) a short "Settled by ' +
    'disposition" list (ids + disposition id only); (c) BLOCKING GATES — every CRITICAL and HIGH finding; (d) a ' +
    'neutral Diff Summary — counts + id lists for new / resolved / regressed / unchanged.\n' +
    '2. `AUDIT-CHANGELOG.md` — ALL run/process traceability lives HERE and ONLY here: run label ' + DATE + ', the ' +
    'repository git HEAD and working-tree state, the tracks exercised (SCI/TECH/XCOH/LEG/CITE/APP/INST/DEF), the ' +
    'baseline used (' + (baselineDir ? '`' + baselineDir + '`' : 'first run, no baseline') + '), skeptic N=' + N + ', ' +
    'candidate-vs-confirmed counts, killed-candidate ids with refute tallies, and per-survivor skeptic tallies.\n' +
    '3. `findings.json` — the machine-readable canonical findings array (each with its stable id, track, gate/instance ' +
    'where applicable, severity, document, location, claim, defectType, fix, and diff_status) plus { date, suite, ' +
    'baselineDir, scores, suiteScore, diff }, per the _AUDITS/README convention so the next run can baseline-diff ' +
    'against it.\n' +
    'Then `git add -A && git commit` with message "audit: SUIT suite ' + DATE + ' recurring 7+INST-track audit ' +
    '(report + changelog + findings.json)" and the Co-Authored-By trailer (no push). Return REPORT with reportPath, ' +
    'changelogPath, findingsPath (all repo-relative), confirmedCount, blockingGates, dimensionScores, suiteScore.\n' +
    'Canonical findings (JSON): ' + JSON.stringify(finalFindings) + '\n' +
    'Root causes: ' + JSON.stringify((synthRes && synthRes.root_causes) || []) + '\n' +
    'Dispositioned: ' + JSON.stringify((synthRes && synthRes.dispositioned) || []) + '\n' +
    'Scores: ' + JSON.stringify((synthRes && synthRes.scores) || {}) + ', suiteScore=' + ((synthRes && synthRes.suiteScore) || 0) + '\n' +
    'Diff: ' + JSON.stringify(diff) + '\n' +
    'Pre-computed blocking ids: ' + JSON.stringify(blocking),
    { phase: 'Report', schema: REPORT, label: 'report' },
    { reportPath: OUTDIR + '/AUDIT-REPORT-' + DATE + '.md',
      changelogPath: OUTDIR + '/AUDIT-CHANGELOG.md',
      findingsPath: OUTDIR + '/findings.json',
      confirmedCount: finalFindings.length, blockingGates: blocking,
      dimensionScores: (synthRes && synthRes.scores) || {}, suiteScore: (synthRes && synthRes.suiteScore) || 0 })

  log('Audit complete. Suite score: ' + (report && report.suiteScore) + '. Blocking gates: ' +
      (report && (report.blockingGates || []).length) + '. Output: ' + (report && report.reportPath) + '.')

  return {
    date: DATE, baselineDir, skepticCount: N, concurrency: CONCURRENCY,
    tracks: TRACKS.map(t => t.k).concat(['INST', 'DEF']),
    instances, candidates: candidates.length, confirmed: finalFindings.length,
    diff, report,
  }
