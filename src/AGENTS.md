---
description: Contrato visual, editorial e de acessibilidade da interface Astro.
paths:
  - 'src/**'
---

# Interface

Leia docs/PLANO.md e o cartão atual antes de alterar a composição. Componentes em components/, conteúdo publicável em content/, estilos em styles/ e movimento em scripts/ quando essas responsabilidades surgirem; não criar componentes vazios por antecipação.

Conteúdo essencial deve estar no HTML. Preserve lang pt-BR, semântica, foco e teclado. Animação é melhoria; não esconder seções antes de confirmar que o script funciona. Em GSAP, registrar ScrollTrigger e usar matchMedia para breakpoints e redução de movimento. Não prender a rolagem no celular.

Não publicar nomes internos, fotos originais, números não confirmados ou contato privado. A primeira versão usa retrato do perfil público do titular. A página pública já tem canonical e metadados de indexação; previews de QA não devem ser publicados como rotas adicionais.
