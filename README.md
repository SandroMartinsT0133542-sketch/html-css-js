# Ciberseguranca no Dia a Dia

Projeto UC00622 com abordagem multipágina em HTML, CSS e JavaScript.

## Páginas

- `index.html`: introdução, artigos sobre riscos, acordeões com dicas, e acesso rápido.
- `course.html`: crash course com checklist de aprendizagem.
- `tester.html`: verificador educativo de credenciais/password.
- `quiz.html`: quiz interativo com 10 perguntas aleatórias e score final `x/10`.

## Fluxo principal

1. Abrir `index.html`.
2. Navegar usando menu hamburger (mobile) ou navegação horizontal (desktop).
3. Cada secção tem acordeões com dicas úteis.
4. Clicar em Quiz para abrir modal de decisão:
   - ir primeiro para `course.html`
   - ou seguir direto para `quiz.html`
5. Em `quiz.html`, responder 10 perguntas e ver resultado final.
6. Contacto disponível em qualquer página via link "Contacto" na navegação.

## Estrutura

### Scripts

- `scripts/main.js`: lógica da index (modal de gate para quiz).
- `scripts/modal.js`: utilitários para `dialog`.
- `scripts/hamburger.js`: menu hamburger responsivo para mobile.
- `scripts/contact-modal.js`: formulário de contacto modal.
- `scripts/accordion.js`: lógica dos acordeões com dicas.
- `scripts/main-course.js`: progresso da checklist do course.
- `scripts/main-tester.js`: medidor de força de password.
- `scripts/quiz-data.js`: banco de perguntas e aleatorização.
- `scripts/quiz-engine.js`: estado do quiz e pontuação.
- `scripts/main-quiz.js`: renderização e interação do quiz.

### Styles

- `style.css`: agregador de imports.
- `styles/root.css`: variáveis globais.
- `styles/base.css`: reset e elementos base.
- `styles/layout.css`: grelhas, navegação e hamburger menu.
- `styles/components.css`: componentes reutilizáveis (cards, acordeões, etc).
- `styles/modal.css`: estilos de modals/dialogs e formulário de contacto.
- `styles/animations.css`: animações base (reveal, fade, etc).
- `styles/responsive.css`: media queries globais (900px e 620px breakpoints).
- `styles/page-index.css`: estilos específicos da index.
- `styles/page-course.css`: estilos específicos da página course.
- `styles/page-quiz.css`: estilos específicos da página quiz.
- `styles/page-tester.css`: estilos específicos da página tester.

## Features

- ✅ Navegação responsiva com hamburger menu em mobile
- ✅ Acordeões com dicas para cada secção
- ✅ Formulário de contacto modal em todas as páginas
- ✅ Quiz interativo com perguntas aleatórias
- ✅ Medidor de força de password
- ✅ Checklist educativa para crash course
- ✅ Armazenamento local de dados de contacto
- ✅ Acessibilidade completa (ARIA labels, keyboard navigation)
