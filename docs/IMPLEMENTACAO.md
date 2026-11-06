# Cartões de implementação

Usar junto com o plano visual, sem redefinir o escopo a cada sessão. Atualizar o estado do cartão com evidência verificável.

## P01: identidade e primeiro momento visual

Construir hero e diagrama conceitual com tipografia, paleta e layout responsivos. Separar conteúdo editorial dos componentes. A pessoa precisa entender quem é Rodolfo e o que constrói. Preparar o encaixe de fotografia sem inserir pessoa fictícia.

Aceite: renderização legível a 390 e 1440 px, título/ações funcionais, foco visível e screenshot real das duas composições. Fotos só entram após seleção confirmada.

## P02: narrativa e amplitude

Construir casos de pagamentos/financeiro, produtos web/publicação e IA, com problema, contribuição pessoal e efeito sustentado. Acrescentar trajetória e compartilhamento de conhecimento. Preservar empresas/cargos e evitar nomes privados ou números pendentes.

Aceite: revisão factual, linguagem compreensível para recrutadores e conteúdo útil mesmo sem JavaScript. Contatos públicos confirmados.

## P03: movimento com intenção

Conectar o diagrama à rolagem por GSAP/ScrollTrigger, coordenar a entrada e aplicar profundidade pontual. Desativar parallax e fixações inadequadas em toque/redução de movimento. Reverter animações ao trocar breakpoint.

Aceite: nenhum conteúdo fica invisível por falha de script; teclado e rolagem nativa continuam funcionando. Inspeção real dos estados normal e reduced motion. Criar teste de navegador para a interação que surgir, quando houver comportamento a proteger.

## P04: revisão e publicação

Otimizar fotos/fontes, validar contraste, navegação e links. Inspecionar 360, 390, 768, 1280 e 1440 px. Medir desempenho com condições registradas. Remover noindex da base quando o portfólio estiver pronto.

Aceite: npm run verify e npm run harness aprovados, revisão visual registrada e conteúdo publicável confirmado. Executar o deploy manual do Pages e validar o resultado. Depois acrescentar o acesso ao site no README existente do perfil, preservando o restante.

## Entrega de cada cartão

Commit e push na main. Atualizar docs/ESTADO.md com o que mudou, o que foi validado, limitações e próximo cartão. Sem etapa de PR.
