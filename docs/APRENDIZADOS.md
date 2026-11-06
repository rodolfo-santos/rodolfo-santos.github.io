# Aprendizados de execução

Registrar problemas observados, causa, correção e prevenção. Não usar este arquivo como log integral de conversa.

## 06/11/2026: contexto sem comandos não é harness executável

O primeiro diagnóstico encontrou o plano de design e instruções gerais, mas nenhum sensor ou CI. O scanner classificou a estrutura como L0. A correção é conectar comandos realmente executados, testes das políticas e feedback local/CI; a existência dos arquivos não substitui a verificação do comportamento.

## 06/11/2026: validar o commit que será enviado

A revisão independente encontrou que checks sobre o disco poderiam aprovar uma correção unstaged enquanto o HEAD enviado continuava errado. O pre-push passou a exigir árvore limpa e SHA igual ao HEAD. Um teste de integração cobre sucesso fast-forward, recusa de outro SHA e alterações staged/unstaged. O scanner estrutural não detectou essa falha; a revisão comportamental foi necessária.

## 06/11/2026: contratos visuais também precisam de integração

Classes genéricas de legenda colidiram entre o CSS global dos casos e o componente de arquitetura. A revisão visual encontrou a legenda reduzida a uma largura de ponto; nomes próprios do componente eliminaram a colisão. A inspeção responsiva também encontrou órbitas decorativas fora da viewport e sobreposição da etiqueta com a legenda do retrato. Conferir o resultado nas larguras acordadas, além do typecheck.

O GSAP restaurava scroll-behavior inline quando as animações eram revertidas. O modo reduzido passou a ter prioridade explícita sobre esse estilo, validada no navegador. Não basta desligar as timelines e presumir que todo movimento foi removido.
