# Rodolfo dos Santos

Portfólio pessoal de engenharia de software, arquitetura, pagamentos e liderança.

Base de desenvolvimento com Astro estático, TypeScript estrito, GSAP e harness executável. A apresentação visual completa ainda está em construção.

## Começar

Use a versão Node da .nvmrc:

```sh
npm ci
npm run dev
```

## Trabalhar e entregar

Este projeto usa **commit e push diretamente na main, sem pull requests**.

```sh
npm run verify
npm run harness
git add <arquivos-da-entrega>
git diff --cached
git commit -m "Descreve a entrega"
git push origin main
```

O push aciona o CI. O deploy do Pages é manual e separado, depois da revisão da apresentação. Não usar force push nem contornar os hooks.

## Contexto

- [Harness e operação](HARNESS.md)
- [Avaliação: L4, 103/105](docs/HARNESS-SCORE.md)
- [Estado para retomar](docs/ESTADO.md)
- [Cartões de implementação](docs/IMPLEMENTACAO.md)
- [Plano do projeto](docs/PLANO.md)
- [Referências e skills](docs/REFERENCIAS.md)
- [Regras para contribuir](AGENTS.md)

Destino planejado: https://rodolfo-santos.github.io

O GitHub Pages hospedará o site. O README do perfil terá uma apresentação visual e um link para ele; o GitHub não incorpora uma página HTML/JavaScript animada no perfil.

Use npm run harness:report para gerar a avaliação estrutural local em reports/. A nota não substitui revisão factual, visual ou de acessibilidade. Build e testes não precisam das skills instaladas no computador do autor.
