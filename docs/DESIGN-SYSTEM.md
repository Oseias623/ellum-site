---
version: alpha
name: ELLUM-design-system
description: "Identidade web para a ELLUM, Escola Crista Classica. Usa a clareza minimalista do Apple design como referencia de composicao, mas preserva a alma visual da marca: azul-marinho profundo, dourado discreto, fundo claro, tipografia classica, fotografia editorial e atmosfera academica crista."

colors:
  navy: "#051D33"
  navy-soft: "#0C2A47"
  navy-muted: "#24384D"
  gold: "#C4965F"
  gold-soft: "#D8B987"
  ivory: "#FAF8F3"
  parchment: "#F4EFE6"
  white: "#FFFFFF"
  ink: "#161616"
  ink-muted: "#5E5A54"
  stone: "#D9D2C7"
  leather: "#704728"
  success: "#2E6B4E"
  danger: "#9E3D33"
  on-navy: "#FFFFFF"
  on-gold: "#051D33"

typography:
  hero-display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: 0
  display-lg:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: 0
  display-md:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: 0
  editorial-italic:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: 34px
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: 0
    fontStyle: italic
  lead:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.58
    letterSpacing: 0
  body-strong:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 650
    lineHeight: 1.45
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.08em
    textTransform: uppercase
  caption:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 48px
  xxl: 72px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.pill}"
    padding: 13px 24px
  button-primary-hover:
    backgroundColor: "{colors.navy-soft}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.navy}"
    border: "1px solid {colors.gold}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-on-dark:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.pill}"
    padding: 13px 24px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.navy}"
    typography: "{typography.body-strong}"
  global-nav:
    backgroundColor: "rgba(250, 248, 243, 0.88)"
    textColor: "{colors.navy}"
    typography: "{typography.nav-link}"
    height: 68px
    borderBottom: "1px solid rgba(5, 29, 51, 0.10)"
    backdropFilter: "blur(18px)"
  hero-light:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.navy}"
    padding: "96px 24px 64px"
  section-light:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    padding: "96px 24px"
  section-parchment:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.ink}"
    padding: "96px 24px"
  section-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    padding: "96px 24px"
  statement-panel:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "88px 32px"
  image-editorial:
    rounded: "{rounded.md}"
    border: "1px solid rgba(5, 29, 51, 0.10)"
    objectFit: cover
  detail-rule:
    height: 1px
    backgroundColor: "{colors.gold}"
  info-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    border: "1px solid rgba(5, 29, 51, 0.10)"
    padding: 28px

layout:
  maxWidth: 1180px
  contentWidth: 760px
  gridGap: 24px
  heroMinHeight: "calc(100vh - 68px)"
  sectionRhythm: "large, calm, editorial"
  mobileBreakpoint: 768px
  desktopColumns:
    twoColumn: "minmax(0, 0.95fr) minmax(0, 1.05fr)"
    threeColumn: "repeat(3, minmax(0, 1fr))"

brand:
  correctName: "ELLUM"
  descriptor: "Escola Crista Classica"
  coreIdea: "Clareza contemporanea na estrutura; tradicao classica na alma visual."
  positioning: "Escola boutique crista classica, institucional, premium discreta e familiar."
  personality:
    - "Crista"
    - "Classica"
    - "Academica"
    - "Serena"
    - "Institucional"
    - "Acolhedora"
    - "Disciplinada"
  visualSignals:
    - "Monograma E com sol/luz em dourado."
    - "Azul-marinho profundo como autoridade institucional."
    - "Dourado/caqui como prestigio discreto, nunca ostentacao."
    - "Branco e marfim como clareza, respiro e zelo."
    - "Madeira, couro e biblioteca como tradicao academica."
    - "Uniformes navy, branco e caqui como prova de ordem e pertencimento."

voice:
  tone: "sereno, direto, reverente, confiante"
  sentenceStyle: "frases curtas, poucos adjetivos, ideias fortes"
  vocabulary:
    use:
      - "formacao"
      - "sabedoria"
      - "virtude"
      - "verdade"
      - "beleza"
      - "carater"
      - "familia"
      - "excelencia"
      - "Cristo"
      - "educacao crista classica"
    avoid:
      - "inovador demais"
      - "metodologia revolucionaria"
      - "alta performance infantil"
      - "tech"
      - "disruptivo"
      - "ludico colorido"

imagery:
  direction: "fotografia editorial realista, luz natural, composicao limpa e atmosfera academica"
  subjects:
    - "alunos em uniforme navy, branco ou caqui"
    - "biblioteca, livros, madeira e couro"
    - "professores com postura serena e profissional"
    - "familias em contexto escolar"
    - "salas claras com ordem visual"
  rules:
    - "Usar uma imagem principal forte por dobra, nao colagens carregadas."
    - "Evitar fotos com texto embutido quando a imagem for usada no site."
    - "Priorizar cenas reais/editoriais a ilustracoes genericas."
    - "Manter rosto, uniforme e ambiente como sinais de confianca."
    - "Nao aplicar filtros frios demais; a marca precisa de calor humano."

composition:
  appleInspired:
    - "Uma decisao principal por tela."
    - "Muito espaco em branco ou marfim."
    - "Titulos grandes, curtos e memoraveis."
    - "CTA simples e visivel."
    - "Alternancia entre secoes claras e blocos navy."
    - "Interface quase invisivel: a escola, os alunos e a mensagem devem aparecer primeiro."
  ellumSpecific:
    - "Usar serifas nos titulos para tradicao classica."
    - "Usar navy e dourado oficiais, sem azul Apple."
    - "Dourado aparece em linhas finas, icones, brasao e microdetalhes."
    - "Hero deve comunicar escola crista classica antes de qualquer promessa comercial."
    - "O site precisa parecer instituicao confiavel, nao startup educacional."

pageExamples:
  homeHero:
    eyebrow: "Escola Crista Classica"
    title: "ELLUM"
    subtitle: "Formacao integral para cultivar sabedoria, virtude e amor a verdade."
    primaryCta: "Conheca a proposta"
    secondaryCta: "Fale conosco"
    visual: "Foto editorial grande de aluno em uniforme navy/caqui em ambiente claro com livros."
  institutionalStatement:
    title: "Toda educacao forma alguem."
    body: "Na ELLUM, Cristo e o centro do conhecimento, e a vida escolar e organizada para formar mente, corpo e carater."
    background: "{colors.navy}"
  pillars:
    title: "Uma cultura escolar visivel nos detalhes"
    items:
      - title: "Verdade"
        body: "Estudo orientado por uma visao crista do mundo."
      - title: "Virtude"
        body: "Rotina, postura e disciplina a servico do carater."
      - title: "Beleza"
        body: "Ambiente, linguagem e habitos que elevam o olhar."
  contact:
    title: "Conheca a ELLUM de perto."
    body: "Fale com a escola e entenda a proposta de formacao crista classica."
    cta: "Agendar conversa"

do:
  - "Manter 70% base clara, 20% navy e 10% dourado."
  - "Usar o nome ELLUM em caixa alta nas areas institucionais."
  - "Abrir a pagina com clareza, nao com excesso de texto."
  - "Criar secoes largas, limpas e sem cartoes empilhados desnecessarios."
  - "Usar detalhes dourados com contencao."
  - "Preservar a sensacao de ordem, zelo, familia e excelencia."

dont:
  - "Nao copiar componentes, cor azul ou linguagem de produto da Apple."
  - "Nao transformar a escola em marca tech."
  - "Nao usar gradientes chamativos, sombras pesadas ou cards demais."
  - "Nao usar paleta infantil multicolorida."
  - "Nao usar dourado como fundo dominante."
  - "Nao encher a primeira dobra com paragrafos longos."
  - "Nao misturar fotos de estilos muito diferentes na mesma dobra."

accessibility:
  contrast:
    - "Texto navy em fundo marfim."
    - "Texto branco em fundo navy."
    - "Evitar texto dourado pequeno em fundo claro."
  motion:
    - "Animacoes lentas e discretas, com preferencia por fade/slide curto."
    - "Nada que comprometa leitura ou gere sensacao promocional demais."
  responsive:
    - "No mobile, reduzir titulos hero para 42px ou menos."
    - "CTAs podem quebrar em duas linhas, mas precisam manter area de toque confortavel."
    - "Imagens devem manter proporcao editorial e nao cortar rostos/uniformes."

implementationNotes:
  cssVariables:
    --ellum-navy: "#051D33"
    --ellum-gold: "#C4965F"
    --ellum-ivory: "#FAF8F3"
    --ellum-parchment: "#F4EFE6"
    --ellum-ink: "#161616"
  fontRecommendation:
    headings: "Cormorant Garamond ou similar classica"
    body: "Inter, system-ui ou similar limpa"
  firstBuildPriority:
    - "Header minimalista."
    - "Hero claro com logo/nome ELLUM e foto editorial."
    - "Bloco navy de declaracao institucional."
    - "Tres pilares."
    - "Secao cultura/uniforme."
    - "Contato simples."
---
