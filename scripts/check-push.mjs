import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { pushIssue } from './push-policy.mjs';

const branch = execFileSync('git', ['branch', '--show-current'], {
  encoding: 'utf8',
}).trim();
if (branch !== 'main') {
  console.error('Este projeto usa commit e push direto na main.');
  process.exit(1);
}
const head = execFileSync('git', ['rev-parse', 'HEAD'], {
  encoding: 'utf8',
}).trim();
const pending = execFileSync('git', ['status', '--porcelain=v1', '-z'], {
  encoding: 'utf8',
});
if (pending) {
  console.error(
    'Push recusado: conclua o commit ou guarde as mudanças pendentes. Os checks devem validar exatamente o commit enviado.',
  );
  process.exit(1);
}
const updates = readFileSync(0, 'utf8').trim().split('\n').filter(Boolean);
for (const update of updates) {
  const issue = pushIssue(update);
  if (issue) {
    console.error(issue);
    process.exit(1);
  }
  const [, localSha, , remoteSha] = update.split(/\s+/);
  if (localSha !== head) {
    console.error(
      'Push recusado: o SHA enviado precisa ser o HEAD validado da main.',
    );
    process.exit(1);
  }
  if (!/^0+$/.test(remoteSha)) {
    try {
      execFileSync(
        'git',
        ['merge-base', '--is-ancestor', remoteSha, localSha],
        { stdio: 'pipe' },
      );
    } catch {
      console.error(
        'Push recusado: integre origin/main sem sobrescrever histórico.',
      );
      process.exit(1);
    }
  }
}
