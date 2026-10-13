# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Site institucional da **ELLUM Escola Cristã Clássica** — escola de educação cristã clássica em Juiz de Fora, MG.

- **Stack:** Next.js 16 + TypeScript + Tailwind CSS 4
- **Tipo:** Site institucional multi-página
- **Deploy target:** Vercel (recomendado)

## Commands

```bash
npm run dev      # Servidor de desenvolvimento (http://localhost:3000)
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # ESLint
```

## Architecture

```
src/
├── app/                    # App Router (Next.js)
│   ├── layout.tsx         # Layout raiz com fonts e metadata
│   ├── page.tsx           # Home
│   ├── sobre/             # Página Sobre (missão, visão, pilares)
│   ├── metodologia/       # Página Metodologia (Trivium)
│   ├── matriculas/        # Página Matrículas + Formulário
│   └── contato/           # Página Contato
├── components/
│   ├── layout/            # Header, Footer
│   └── ui/                # Button, Section (reutilizáveis)
public/
├── images/
│   ├── logo-gold.png      # Logo dourada (para fundos escuros)
│   ├── logo-navy.png      # Logo navy (para fundos claros)
│   └── missao-visao.jpg   # Imagem institucional
docs/
├── DESIGN-SYSTEM.md       # Design system completo (cores, tipografia, voz)
├── POR QUE EXISTIMOS.pdf  # Documento institucional
├── PPP Ellum*.docx        # Projeto Político Pedagógico
└── Regimento Ellum*.docx  # Regimento escolar
```

## Design System (docs/DESIGN-SYSTEM.md)

### Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `navy` | `#051D33` | Cor primária, backgrounds escuros |
| `navy-soft` | `#0C2A47` | Hover |
| `gold` | `#C4965F` | Cor de destaque, CTAs, detalhes |
| `gold-soft` | `#D8B987` | Hover de CTAs |
| `ivory` | `#FAF8F3` | Background principal claro |
| `parchment` | `#F4EFE6` | Background alternativo |
| `ink` | `#161616` | Texto principal |
| `ink-muted` | `#5E5A54` | Texto secundário |

### Tipografia

- **Títulos:** Cormorant Garamond (serif) — `font-serif`
- **Corpo:** Inter (sans-serif) — `font-sans`

### Componentes

- `<Button variant="primary|secondary|outline" size="sm|md|lg" href?>` — Botões pill
- `<Section background="ivory|parchment|navy">` — Container de seção
- `<SectionHeader title subtitle centered?>` — Título de seção

### Voz da Marca

- **Tom:** sereno, direto, reverente, confiante
- **Usar:** formação, sabedoria, virtude, verdade, beleza, caráter, família, excelência
- **Evitar:** inovador, revolucionário, tech, disruptivo, lúdico colorido

## Informações do Cliente

- **Nome:** ELLUM Escola Cristã Clássica
- **Endereço:** Av. Pres. Costa e Silva, 1740, São Pedro, Juiz de Fora - MG
- **Site atual:** https://www.ellumecc.com (Wix, sendo substituído)
- **Instagram:** @escolaellum

## Regras de Design

- 70% base clara (ivory), 20% navy, 10% dourado
- Uma decisão principal por tela
- Muito espaço em branco
- Títulos grandes, curtos e memoráveis
- Detalhes dourados com contenção (linhas finas, ícones)
- O site deve parecer instituição confiável, não startup educacional

## TODO / Pendências

- [ ] Adicionar fotos reais da escola (alunos, ambiente, equipe)
- [ ] Integrar formulários com backend (ex: Resend, EmailJS)
- [ ] Adicionar Google Maps embed na página de contato
- [ ] SEO: adicionar sitemap.xml e robots.txt
- [ ] Adicionar analytics (Google Analytics ou Plausible)
