import { execFileSync } from 'node:child_process';

// CI has its own checks; never alter the runner's Git configuration.
if (!process.env.CI) {
  execFileSync('git', ['config', '--local', 'core.hooksPath', '.githooks']);
  console.log(
    'Hooks locais ativados em .githooks. Fluxo: commit e push na main.',
  );
}
