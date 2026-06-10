// SUIT — RECURRING SUITE AUDIT (source-free, SUIT-native, real Workflow runtime)
// =============================================================================
// Recurring 7-track substantive audit of the SUIT suite PLUS an instantiation
// track (INST). Entirely self-contained: every path is RELATIVE to the SUIT
// repository root (cwd at run time). There is NO external repository reference,
// NO absolute path, and NO clock/randomness — the run
// date and skeptic count arrive via args so the run is deterministic and
// resumable.
//
// Stages — each run is SELF-CONTAINED: it depends only on the current
// repository state, the canonical plan, and docs/dispositions.json — NEVER on
// a prior run (no baseline, no diff; stable ids allow external comparison).
//   0  Map             — resolve current structure by title; verify the
//                        canonical plan; load dispositions.
//   1  Find (parallel) — six core content tracks (SCI/TECH/XCOH/LEG/CITE/APP)
//                        over the four documents + two Q&A modules. XCOH carries
//                        the Policy<->Solution traceability sub-axis.
//   1I INST            — per instantiations/<inst>/ (excluding _TEMPLATE):
//                        BUILD / COMPLETENESS / FIDELITY / CURRENCY gates.
//   1B DEF             — cross-cutting defensibility; consumes 1+1I findings.
//   2  Verify          — N skeptics per finding, majority-refute kill.
//   3  Synthesis       — dispositions, dedup, root-cause clustering, scoring.
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
//
// SPEC-FIRST CONTRACT: this file is ORCHESTRATION ONLY (stages, concurrency,
// retries, rotation, output schemas). The METHODOLOGY — grids, severity,
// scope, ids, dispositions, verification/synthesis/report protocols, coverage
// and reading order — lives canonically in `_AUDITS/AUDIT-PLAN.md`, whose
// marked sections every agent reads VERBATIM at run time. Edit the PLAN (not
// this file) to change audit behaviour; tools/suite-gates.sh (G7) enforces
// plan<->orchestrator lockstep, and a missing plan section fails the run
// loudly (CRITICAL plan-section-missing finding).
// =============================================================================

export const meta = {
  name: 'suit-audit',
  description:
    'Spec-first adversarial audit of the SUIT suite, driven by the canonical plan _AUDITS/AUDIT-PLAN.md (agents read its marked sections verbatim as their grids): content tracks SCI/TECH/XCOH/LEG/CITE/APP (+ optional GOV via args.includeGov), INSTANCE track (BUILD/COMPLETENESS/FIDELITY/CURRENCY per instantiation), ARCH archetype rotation, cross-cutting DEF. Content-derived stable ids, N-skeptic majority-refute verification, dispositions-aware, retry-on-null on every agent call. Each run is SELF-CONTAINED (no dependency on any prior audit). Source-free and repo-relative.',
  phases: [
    { title: 'Map',           detail: 'structure by title + canonical plan + dispositions' },
    { title: 'Find',          detail: 'six core content tracks in parallel (+ optional GOV)' },
    { title: 'Instances',     detail: 'INST track per instantiations/<inst>/ (excl. _TEMPLATE) + ARCH rotation' },
    { title: 'Defensibility', detail: 'DEF cross-cutting, consumes the find + instance tracks' },
    { title: 'Verify',        detail: 'N skeptics per finding, majority-refute kills it' },
    { title: 'Synthesis',     detail: 'dispositions + dedup + root causes + scoring' },
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
    planVersion: { type: 'string' }, planTracks: { type: 'array', items: { type: 'string' } },
    dispositions: { type: 'array', items: { type: 'object' } },
    structure: { type: 'object' }, instances: { type: 'array', items: { type: 'string' } },
  } }
  const REPORT = { type: 'object', required: ['reportPath'], properties: {
    reportPath: { type: 'string' }, changelogPath: { type: 'string' }, findingsPath: { type: 'string' },
    confirmedCount: { type: 'integer' }, blockingGates: { type: 'array', items: { type: 'string' } },
    dimensionScores: { type: 'object' }, suiteScore: { type: 'integer' },
  } }

  // SPEC-FIRST: the methodology lives in the canonical plan; every agent reads
  // its marked sections verbatim. This guard is the only methodology pointer
  // the orchestrator carries (plus a one-line defense-in-depth restatement).
  const PLAN = '_AUDITS/AUDIT-PLAN.md'
  const SCOPE_GUARD =
    'CANONICAL METHODOLOGY: `' + PLAN + '` is the single source of truth. READ and APPLY its marked sections ' +
    'SCOPE, SEVERITY, IDS and DISPOSITIONS (each between "<!-- SECTION:X -->" and "<!-- /SECTION:X -->"), plus any ' +
    '`.claude/rules/*.md` contract your grid points to; `' + DISPO_PATH + '` has precedence over everything, the ' +
    'plan over the pointed rules, and a detected conflict between sources is itself a finding (never arbitrate ' +
    'silently). HARD RULES (defense-in-depth restatement of the plan): repository-relative paths only; read-only — ' +
    'never edit a document. If a required plan section is missing or empty, emit exactly ONE finding ' +
    '{severity:"CRITICAL", defectType:"plan-section-missing"} naming the section, and nothing else.'

  // ==========================================================================
  // STAGE 0 — MAP (hard gate: canonical plan + dispositions; no prior-run read)
  // ==========================================================================
  phase('Map')
  const mapRes = await tryAgent(
    'You are the MAPPER for a recurring audit of the ' + SUITE + ' suite. All paths are REPOSITORY-RELATIVE; do not ' +
    'leave this repository. Do, then return ONE structured object:\n' +
    '0. CANONICAL PLAN: read `' + PLAN + '`; record its `<!-- PLAN-VERSION: x -->` value as planVersion and the list ' +
    'of "<!-- TRACK:K -->" keys present as planTracks. If the plan is missing or carries no PLAN-VERSION, return ' +
    'planVersion="" (the run will abort: spec-first runs refuse to improvise).\n' +
    '1. STRUCTURE BY TITLE (line numbers shift between revisions): resolve the section/chapter ledger of the four ' +
    'documents (' + DOCS.policy + ', ' + DOCS.policySummary + ', ' + DOCS.solution + ', ' + DOCS.solutionSummary + ') and ' +
    'the two Q&A modules (' + DOCS.qaPolicy + ', ' + DOCS.qaSolution + '), recording live file:line anchors so this ' +
    'run\'s findings are location-stable. (RUN INDEPENDENCE: do NOT read any prior `_AUDITS/` run — every audit is ' +
    'self-contained and judges only the current repository state.)\n' +
    '2. DISPOSITIONS: read `' + DISPO_PATH + '` if present and extract the accepted-deviation entries (id, appliesTo, ' +
    'doNotRaise) so the find tracks and the synthesiser can suppress settled items. If absent, record "no dispositions".\n' +
    '3. INSTANCES: list `instantiations/` and return every subdirectory EXCEPT `_TEMPLATE` as an instance slug.\n' +
    '4. SOURCE-STABILITY PRECHECK: run `git status --porcelain` and note any uncommitted divergence of the shared bib ' +
    'or a body file so downstream tracks audit a KNOWN state and do not chase phantom defects from a dirty tree (flag, ' +
    'do not block).\n' +
    'Return MAP. Do NOT audit; only map and load.',
    { phase: 'Map', schema: MAP, label: 'map' },
    { planVersion: '', planTracks: [], dispositions: [], structure: {}, instances: [] })

  const planVersion = (mapRes && mapRes.planVersion) || ''
  if (!planVersion) {
    log('ABORT: canonical plan `' + PLAN + '` missing or without a PLAN-VERSION marker — a spec-first run refuses to improvise its methodology.')
    return { aborted: true, reason: 'plan-missing' }
  }
  const instances = (mapRes && Array.isArray(mapRes.instances)) ? mapRes.instances.filter(s => s && s !== '_TEMPLATE') : []
  log('Map: plan v' + planVersion + ', ' + instances.length + ' instance(s): ' + (instances.join(', ') || 'none') + '.')

  const LEDGER = 'A structural ledger + the dispositions registry are ' +
    'available; anchor every finding to a real repo-relative file:line. ' + SCOPE_GUARD

  // ==========================================================================
  // STAGE 1 — SIX CORE CONTENT FIND TRACKS (modest-concurrency parallel)
  // ==========================================================================
  phase('Find')
  // Track KEYS only — every grid lives in the canonical plan between its
  // "<!-- TRACK:K -->" markers and is read VERBATIM by the track agent.
  const TRACKS = [{ k: 'SCI' }, { k: 'TECH' }, { k: 'XCOH' }, { k: 'LEG' }, { k: 'CITE' }, { k: 'APP' }]
  if (A.includeGov) TRACKS.push({ k: 'GOV' })   // optional governance/diffusion meta-file track (grid in the plan)

  const coreResults = await mapWithConcurrency(TRACKS, CONCURRENCY, (t) => tryAgent(
    'AUDIT TRACK ' + t.k + '. Your COMPLETE audit grid is the section between "<!-- TRACK:' + t.k + ' -->" and ' +
    '"<!-- /TRACK:' + t.k + ' -->" in `' + PLAN + '`: read it FIRST and apply it VERBATIM — do not improvise beyond ' +
    'it. Corpus: the documents named by the plan\'s "Audited corpus" section (' + DOC_LIST + '). ' + LEDGER + '\n' +
    'For each finding give: a stable content-derived id "' + t.k + '-<short hash>" (per the plan IDS section), ' +
    'track="' + t.k + '", severity, document (repo-relative path), location (file:line), claim, defectType, ' +
    'evidence, and a recommended fix (and for any cross-document drift, canonicalSource + fixDirection). Return FINDINGS.',
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
    'AUDIT TRACK INST for the deposited instantiation `instantiations/' + slug + '/` (instance="' + slug + '"). ' +
    'Your COMPLETE audit grid (the four gates BUILD/COMPLETENESS/FIDELITY/CURRENCY, scopes, severities, id and fix ' +
    'rules) is the section between "<!-- TRACK:INST -->" and "<!-- /TRACK:INST -->" in `' + PLAN + '`: read it FIRST ' +
    'and apply it VERBATIM to THIS instance only. ' + SCOPE_GUARD + '\n' +
    'Return FINDINGS.',
    { phase: 'Instances', schema: FINDINGS, label: 'inst:' + slug },
    { findings: [] }))

  const inst = []
  instResults.forEach(r => asFindings(r).forEach(f => inst.push(Object.assign({ track: 'INST' }, f))))
  log('Instances: ' + inst.length + ' candidate findings across ' + instances.length + ' instance(s).')

  // ARCH rotation — audit ONE archetype not bound by any deposited edition,
  // rotating deterministically on the run date (no clock, no randomness), so
  // the six categories/ archetypes are fully covered across successive runs.
  const ALL_ARCH = ['EU-PUB-RI', 'US-PUB-R1', 'US-PRIV-R1', 'UK-RES', 'LATAM-PUB', 'AFR-PUB']
  let archSeed = 0
  for (let i = 0; i < DATE.length; i++) archSeed = (archSeed + DATE.charCodeAt(i)) % ALL_ARCH.length
  const ROTATION = ALL_ARCH.slice(archSeed).concat(ALL_ARCH.slice(0, archSeed))
  const archRes = await tryAgent(
    'AUDIT TRACK ARCH (archetype rotation). Deterministic rotation order for this run (orchestrator-supplied, seeded ' +
    'on the run date): ' + ROTATION.join(', ') + '. Your COMPLETE audit grid (how to pick the unbound archetype from ' +
    'this order, what to check, ids) is the section between "<!-- TRACK:ARCH -->" and "<!-- /TRACK:ARCH -->" in `' +
    PLAN + '`: read it FIRST and apply it VERBATIM. ' + SCOPE_GUARD + '\n' +
    'Return FINDINGS.',
    { phase: 'Instances', schema: FINDINGS, label: 'find:ARCH' },
    { findings: [] })
  const arch = asFindings(archRes).map(f => Object.assign({ track: 'ARCH' }, f))
  log('Archetype rotation: ' + arch.length + ' candidate findings.')

  const findAndInst = core.concat(inst).concat(arch)

  // ==========================================================================
  // STAGE 1B — DEF (cross-cutting; consumes the find + instance candidates)
  // ==========================================================================
  phase('Defensibility')
  const compact = findAndInst.map(f => ({ id: f.id, track: f.track, document: f.document || f.instance, severity: f.severity, claim: f.claim, defectType: f.defectType }))
  const defRes = await tryAgent(
    'AUDIT TRACK DEF (cross-cutting; runs AFTER the content + instance tracks). Your COMPLETE audit grid (personas, ' +
    'the eliminate/pre-empt/gap decision rule, the liberty-posture coherence test, ids) is the section between ' +
    '"<!-- TRACK:DEF -->" and "<!-- /TRACK:DEF -->" in `' + PLAN + '`: read it FIRST and apply it VERBATIM. ' +
    SCOPE_GUARD + '\n' +
    'Candidate findings to consume:\n' + JSON.stringify(compact),
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
      'You are SKEPTIC #' + (i + 1) + ' of ' + N + ' for ONE audit finding. Your job is to REFUTE it. Your protocol ' +
      'is the section between "<!-- SECTION:VERIFY -->" and "<!-- /SECTION:VERIFY -->" in `' + PLAN + '`: read it ' +
      'FIRST and apply it VERBATIM. ' + SCOPE_GUARD + '\n' +
      'Finding ' + f.id + ' (track ' + (f.track || 'n/a') + '): "' + f.claim + '" — defect: ' + (f.defectType || 'n/a') +
      ', at ' + (f.document || f.instance || 'n/a') + ' ' + (f.location || '') + '. Return VERDICT.',
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
  // STAGE 3 — SYNTHESIS (dispositions, dedup, root causes, scoring)
  // ==========================================================================
  phase('Synthesis')
  const synthRes = await tryAgent(
    'You are the SYNTHESISER. Your rules are the section between "<!-- SECTION:SYNTHESIS -->" and ' +
    '"<!-- /SECTION:SYNTHESIS -->" in `' + PLAN + '`: read them FIRST and apply them VERBATIM (dispositions, dedup, ' +
    'root-cause clustering, scoring per the plan SEVERITY section). ' + SCOPE_GUARD + '\n' +
    'Return { findings:[canonical confirmed], root_causes:[...], dispositioned:[{id,disposition_id}], ' +
    'scores:{...}, suiteScore }.\n' +
    'CONFIRMED findings: ' + JSON.stringify(confirmed.map(f => ({ id: f.id, track: f.track, gate: f.gate, instance: f.instance, severity: f.severity, document: f.document, location: f.location, claim: f.claim, defectType: f.defectType, fix: f.fix, traceDirection: f.traceDirection, canonicalSource: f.canonicalSource, fixDirection: f.fixDirection, persona: f.persona, rejectionVector: f.rejectionVector, currentCoverage: f.currentCoverage }))) ,
    { phase: 'Synthesis', schema: { type: 'object', properties: {
        findings: { type: 'array', items: { type: 'object' } },
        root_causes: { type: 'array', items: { type: 'object' } },
        dispositioned: { type: 'array', items: { type: 'object' } },
        scores: { type: 'object' }, suiteScore: { type: 'integer' },
      } }, label: 'synthesis' },
    { findings: confirmed, root_causes: [], dispositioned: [], scores: {}, suiteScore: 0 })

  const finalFindings = (synthRes && Array.isArray(synthRes.findings) && synthRes.findings.length) ? synthRes.findings : confirmed
  log('Synthesis: ' + finalFindings.length + ' canonical findings (self-contained run; no baseline dependency).')

  // ==========================================================================
  // STAGE 4 — REPORT (atemporal) + CHANGELOG (traceability) + findings.json
  // ==========================================================================
  phase('Report')
  const sevCount = sev => finalFindings.filter(f => (f.final_severity || f.severity) === sev).length
  const blocking = finalFindings.filter(f => /CRITICAL|HIGH/.test(f.final_severity || f.severity || '')).map(f => f.id)

  const report = await tryAgent(
    'You are the REPORTER. Your deliverables specification is the section between "<!-- SECTION:REPORT -->" and ' +
    '"<!-- /SECTION:REPORT -->" in `' + PLAN + '`: read it FIRST and follow it VERBATIM, writing the three ' +
    'deliverables into `' + OUTDIR + '/` (create the directory; all paths repository-relative). ' + SCOPE_GUARD + '\n' +
    'Run facts for the changelog: run label ' + DATE + '; PLAN-VERSION ' + planVersion + '; tracks exercised ' +
    TRACKS.map(t => t.k).join('/') + '/INST/ARCH/DEF; self-contained run (no baseline dependency); skeptic N=' + N +
    '; severity counts ' +
    'CRITICAL=' + sevCount('CRITICAL') + ', HIGH=' + sevCount('HIGH') + ', MODERATE=' + sevCount('MODERATE') +
    ', LOW=' + sevCount('LOW') + '.\n' +
    'Do NOT git-commit anything: run folders are LOCAL working artefacts (only AUDIT-PLAN.md and README.md are ' +
    'tracked under _AUDITS/). Return REPORT with reportPath, changelogPath, findingsPath (all ' +
    'repo-relative), confirmedCount, blockingGates, dimensionScores, suiteScore.\n' +
    'Verification tallies (for the changelog; killed + survivors): ' +
    JSON.stringify(verified.map(f => ({ id: f.id, survives: f.survives, refutes: f.refutes, skeptics: f.skeptics }))) + '\n' +
    'Canonical findings (JSON): ' + JSON.stringify(finalFindings) + '\n' +
    'Root causes: ' + JSON.stringify((synthRes && synthRes.root_causes) || []) + '\n' +
    'Dispositioned: ' + JSON.stringify((synthRes && synthRes.dispositioned) || []) + '\n' +
    'Scores: ' + JSON.stringify((synthRes && synthRes.scores) || {}) + ', suiteScore=' + ((synthRes && synthRes.suiteScore) || 0) + '\n' +
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
    date: DATE, planVersion, skepticCount: N, concurrency: CONCURRENCY,
    tracks: TRACKS.map(t => t.k).concat(['INST', 'ARCH', 'DEF']),
    instances, candidates: candidates.length, confirmed: finalFindings.length,
    report,
  }
