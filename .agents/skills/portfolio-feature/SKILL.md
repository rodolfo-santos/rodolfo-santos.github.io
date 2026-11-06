---
name: portfolio-feature
description: Construir ou ajustar seções visuais e animações de scroll deste portfólio, seguindo o plano editorial e verificando desktop, celular e redução de movimento.
---

# Construção do portfólio

Leia docs/ESTADO.md e o cartão em docs/IMPLEMENTACAO.md. Use docs/PLANO.md para direção visual e docs/REFERENCIAS.md para design e GSAP. Preserve contribuições e cronologia; só trabalhe com conteúdo preparado para publicação.

Para uma seção nova, defina sua função na narrativa e a interação que justifica o movimento. Implemente primeiro a leitura sem JavaScript; adicione GSAP como melhoria. Registrar ScrollTrigger antes do uso, agrupar por breakpoint com matchMedia e reverter ao desmontar. Não combinar scrub com toggleActions no mesmo trigger.

Use fotografia real confirmada ou um espaço editorial claramente provisório. Não inventar identidade, depoimentos ou métricas. Originais e candidatos continuam fora do repositório.

Execute npm run verify e npm run harness. Faça inspeção visual no navegador em desktop e celular; teste teclado e prefers-reduced-motion. Se não puder inspecionar, registre a lacuna e não chame a entrega de revisada visualmente.

Atualize docs/ESTADO.md e siga .agents/skills/portfolio-main/SKILL.md para entregar por commit e push direto na main, sem PR.
