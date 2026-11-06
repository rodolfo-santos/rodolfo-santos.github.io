import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { contentIssue, pathIssue } from './public-policy.mjs';

const staged = process.argv.includes('--staged');
const git = (args, options = {}) =>
  execFileSync('git', args, { maxBuffer: 20 * 1024 * 1024, ...options });
const files = git(
  staged
    ? ['diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z']
    : ['ls-files', '--cached', '--others', '--exclude-standard', '-z'],
)
  .toString()
  .split('\0')
  .filter(Boolean);
let failed = false;
for (const file of new Set(files)) {
  let issue = pathIssue(file);
  // Scan the index at commit time, so unstaged edits cannot hide staged secrets.
  let bytes;
  if (staged) bytes = git(['show', `:${file}`]);
  else {
    try {
      bytes = readFileSync(file);
    } catch (error) {
      if (error.code === 'ENOENT') continue;
      throw error;
    }
  }
  if (!issue && !bytes.includes(0))
    issue = contentIssue(bytes.toString('utf8'));
  if (issue) {
    console.error(`${file}: ${issue}`);
    failed = true;
  }
}
if (failed) process.exitCode = 1;
else
  console.log(
    `Privacidade: ${new Set(files).size} caminhos verificados${staged ? ' no índice Git' : ''}.`,
  );
