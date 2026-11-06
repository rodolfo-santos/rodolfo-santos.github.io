---
name: portfolio-main
description: Validar e entregar mudanças deste portfólio por commit e push direto na main, sem criar branches de feature ou pull requests e sem publicar dados privados.
---

# Entrega direta na main

Confirme o checkout correto e a branch main. Leia o diff e preserve mudanças alheias. A preferência explícita é commit/push na main, sem PR e sem pedido de aprovação de PR.

Execute npm run verify e npm run harness antes do envio. Para mudanças visuais, confira a revisão de desktop/celular no estado de continuação. Não tratar score como aprovação visual ou factual.

Adicione somente os caminhos da entrega, revise git diff --cached e faça commit com mensagem clara em pt-BR. Em seguida execute git push origin main. Os hooks conferem o índice, o destino e o histórico; não usar force push ou --no-verify.

Se o remoto avançou, busque as mudanças, confira seu conteúdo e integre sem apagar trabalho. Repita os checks afetados. Se o CI falhar depois do push, corrija com novo commit na main.

Verifique o resultado do CI e registre o commit e limitações. Deploy do Pages é manual e separado: só execute quando a apresentação estiver pronta e revisada. Não publicar a página-base como portfólio concluído.
