import { posix } from 'node:path';

const privateSegments = new Set([
  'private',
  'originals',
  'dados',
  '.ssh',
  '.aws',
]);
const secretPatterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /\b(?:ghp|github_pat)_[A-Za-z0-9_]{20,}\b/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bsk-(?:proj-)?[A-Za-z0-9_-]{32,}\b/,
  /https:\/\/github\.com\/(?:quero-edu|qeevo)\//i,
  /https:\/\/(?:photos\.google\.com|drive\.google\.com)\/(?:u\/\d+\/)?(?:photo|album|file|drive)\//i,
];

export function pathIssue(input) {
  const normalized = input.replaceAll('\\', '/');
  const parts = normalized.split('/');
  if (parts.includes('..') || posix.isAbsolute(normalized))
    return 'Caminho fora do projeto.';
  if (parts.some((part) => privateSegments.has(part)))
    return 'Diretório privado não publicável.';
  if (parts.some((part) => part === '.env' || part.startsWith('.env.')))
    return 'Arquivo de ambiente não publicável.';
  if (/\.(?:pem|key|p12|pfx)$/i.test(normalized))
    return 'Arquivo de credencial não publicável.';
  return null;
}

export function contentIssue(content) {
  if (secretPatterns.some((pattern) => pattern.test(content)))
    return 'Possível segredo ou referência privada; revisar sem imprimir o conteúdo.';
  return null;
}
