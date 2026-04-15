# Ciberseguranca no Dia a Dia

Projeto UC00622 com abordagem multipagina em HTML, CSS e JavaScript.

## Paginas

- `index.html`: introducao, artigos sobre riscos e acesso rapido.
- `course.html`: crash course com checklist de aprendizagem.
- `tester.html`: verificador educativo de credenciais/password.
- `quiz.html`: quiz interativo com 10 perguntas aleatorias e score final `x/10`.

## Fluxo principal

1. Abrir `index.html`.
2. Clicar em Quiz para abrir modal de decisao:

- ir primeiro para `course.html`
- ou seguir direto para `quiz.html`

3. Em `quiz.html`, responder 10 perguntas e ver resultado final.

## Estrutura

### Scripts

- `scripts/main.js`: logica da index (modal de gate para quiz).
- `scripts/modal.js`: utilitarios para `dialog`.
- `scripts/main-course.js`: progresso da checklist do course.
- `scripts/main-tester.js`: medidor de forca de password.
- `scripts/quiz-data.js`: banco de perguntas e randomizacao.
- `scripts/quiz-engine.js`: estado do quiz e pontuacao.
- `scripts/main-quiz.js`: renderizacao e interacao do quiz.

### Styles

- `style.css`: agregador de imports.
- `styles/root.css`: variaveis globais.
- `styles/base.css`: reset e elementos base.
- `styles/layout.css`: grelhas e navegacao.
- `styles/components.css`: componentes reutilizaveis.
- `styles/modal.css`: estilos de modais/dialog.
- `styles/animations.css`: animacoes base.
- `styles/responsive.css`: media queries globais.
- `styles/page-index.css`: estilos especificos da index.
- `styles/page-course.css`: estilos especificos da pagina course.
- `styles/page-quiz.css`: estilos especificos da pagina quiz.
- `styles/page-tester.css`: estilos especificos da pagina tester.
