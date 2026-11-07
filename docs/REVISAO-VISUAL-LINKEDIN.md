# Integração visual do LinkedIn

07/11/2026.

A home recebeu galeria com UniAlphaville, UniASP e Melhor Escola, logos das empresas junto à trajetória e uma fotografia da palestra de Performance Web na FATEC Jacareí. O botão principal leva à galeria. As páginas de publicação, marketplaces, arquitetura financeira e conciliação apresentam as imagens pertinentes com legendas e texto alternativo. A aquisição e as ressalvas estão em ASSETS.md.

As imagens complementam os seis casos e não substituem sua narrativa de contribuição. Datas históricas, autoria e resultados pendentes não foram alterados com base em números visíveis no LinkedIn. Não foram adicionadas dependências nem chamadas externas no navegador do visitante.

Validação automatizada: npm run verify (privacidade, lint, formatação, tipos, dez testes, build das sete páginas e links/IDs) e harness-score. O harness permanece L4, 103/105 (98%), uma medida estrutural do repositório.

Revisão no Chrome nativo: galeria desktop em três colunas e acesso pelo botão Conheça meu trabalho; acesso da imagem ao caso de publicação; imagens e legendas nas páginas; leitura da galeria em uma coluna em modo responsivo de 390 pixels. A fotografia da palestra e os logos na cronologia também foram inspecionados. A conexão do navegador usada na rodada anterior ficou indisponível, então a inspeção foi concluída por controles nativos do mesmo Chrome. Uma configuração de zoom acumulada na emulação foi corrigida antes de registrar a evidência mobile; ela não motivou alteração no CSS.

Evidências desta rodada: evidence/linkedin-gallery-desktop.png, evidence/linkedin-gallery-mobile.png, evidence/linkedin-speaking.png e evidence/linkedin-career.png. As imagens incluem o contexto do navegador e o modo responsivo no celular. O texto e as imagens são gerados no HTML; a rodada anterior verificou cópias de home/caso sem scripts e o controle de movimento. Não foram feitas novas medições de desempenho em campo nesta rodada.
