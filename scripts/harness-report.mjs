import { spawnSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

mkdirSync('reports', { recursive: true });
const cli = resolve('node_modules/harness-score/dist/cli.js');
const result = spawnSync(
  process.execPath,
  [cli, '.', '--json', '--md', 'reports/harness.md'],
  { encoding: 'utf8' },
);
if (result.status !== 0) {
  console.error(result.stderr);
  process.exit(result.status ?? 1);
}
const report = JSON.parse(result.stdout);
writeFileSync('reports/harness.json', result.stdout);
console.log(
  `L${report.level.index}: ${report.score.earned}/${report.score.max} (${report.score.percent}%). Relatórios em reports/.`,
);
