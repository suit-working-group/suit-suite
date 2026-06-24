#!/usr/bin/env node
// Regenerate the "Working group participants" section of README.md from the
// MEMBERS/ and SUPPORTERS/ registries (the source of truth). Names are grouped
// by participation and sorted alphabetically by last name. No dependencies.
//
// Run locally:  node scripts/build-members-list.mjs
// In CI: run on every push to main that touches MEMBERS/** or SUPPORTERS/**.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';

const START = '<!-- MEMBERS-LIST:START -->';
const END = '<!-- MEMBERS-LIST:END -->';

// Read one front-matter field from a registry file's YAML block.
function field(md, key) {
  const fm = md.split(/^---$/m)[1] || md; // between the first pair of --- lines
  const m = fm.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : '';
}

// Collect { name, participation } from every *.md in a folder (excluding READMEs).
function readFolder(dir, fallbackParticipation) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f.toLowerCase() !== 'readme.md')
    .map((f) => {
      const md = readFileSync(`${dir}/${f}`, 'utf8');
      return {
        name: field(md, 'name'),
        participation: field(md, 'participation') || fallbackParticipation,
      };
    })
    .filter((p) => p.name);
}

const all = [...readFolder('MEMBERS', 'member'), ...readFolder('SUPPORTERS', 'supporter')];

const lastName = (n) => n.trim().split(/\s+/).pop() || n;
const byLastName = (a, b) =>
  lastName(a).localeCompare(lastName(b), 'fr', { sensitivity: 'base' }) ||
  a.localeCompare(b, 'fr', { sensitivity: 'base' });

const pick = (kind) =>
  all.filter((p) => p.participation === kind).map((p) => p.name).sort(byLastName);

const contributors = pick('contributor');
const members = pick('member');
const supporters = pick('supporter');

const list = (names) => (names.length ? names.join(', ') : '—');

const section = [
  '## 👥 Working group participants',
  '',
  '_Auto-generated from the [`MEMBERS/`](MEMBERS/) and [`SUPPORTERS/`](SUPPORTERS/) registries — do not edit this section by hand._',
  '',
  `**CONTRIBUTORS:** ${list(contributors)}`,
  '',
  `**MEMBERS:** ${list(members)}`,
  '',
  `**SUPPORTERS:** ${list(supporters)}`,
].join('\n');

const block = `${START}\n${section}\n${END}`;

let readme = readFileSync('README.md', 'utf8');
if (readme.includes(START) && readme.includes(END)) {
  readme = readme.replace(new RegExp(`${START}[\\s\\S]*?${END}`), block);
} else {
  readme = `${readme.replace(/\s*$/, '')}\n\n${block}\n`;
}
writeFileSync('README.md', readme);

console.log(
  `Participants: ${contributors.length} contributor(s), ${members.length} member(s), ${supporters.length} supporter(s).`,
);
