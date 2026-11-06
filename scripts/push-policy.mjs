export function pushIssue(update) {
  const parts = update.trim().split(/\s+/);
  if (parts.length !== 4) return 'Atualização Git inválida.';
  const [localRef, localSha, remoteRef] = parts;
  if (/^0+$/.test(localSha)) return 'Exclusão remota não faz parte do fluxo.';
  if (localRef !== 'refs/heads/main' || remoteRef !== 'refs/heads/main')
    return 'Publicar somente main:main, sem branches de feature ou PR.';
  return null;
}
