# TODO

## Skills de diseño para agentes de IA

Candidatos evaluados para mejorar las decisiones de diseño/UI/animación al
trabajar en este proyecto con agentes de IA (Claude Code y similares).

- ✅ **emilkowalski/skills** — Instalado (`npx skills@latest add
  emilkowalski/skills`). 12 skills en `.agents/skills/` con symlinks desde
  `.claude/skills/`: `animate`, `animate-expo`, `animation-vocabulary`,
  `apple-design`, `ask-sonner`, `emil-design-eng`,
  `find-animation-opportunities`, `improve-animations`, `pick-ui-library`,
  `prototype`, `review-animations`, `write-swift`. Ver `skills-lock.json`.

- ⏳ **pbakaus/impeccable** — Pendiente. `npx impeccable install` descarga
  los skills desde `impeccable.style`, dominio bloqueado por la política de
  red de este entorno remoto (`CONNECT tunnel failed, 403 — organization
  policy`). Instalar desde un entorno sin ese bloqueo (ej. máquina local)
  corriendo: `npx impeccable install`.

Descartado: `dietrichgebert/ponytail` — no es una herramienta de diseño
visual, sino un plugin que hace que el agente escriba código más minimalista
(no aplica al objetivo de mejorar el diseño del sitio).

## Otros candidatos evaluados (aún no instalados)

- **senlindesign/taste-skill** — reverse-engineering del "taste" de diseño
  de un sitio de referencia (tokens + el porqué). Requiere Playwright MCP
  como dependencia (`claude mcp add playwright -s user -- npx -y
  @playwright/mcp@latest --isolated`) y se instala globalmente en
  `~/.claude/skills/taste` (no dentro del repo). Pendiente de decidir si se
  instala.
- **Playwright oficial (Microsoft)** — para tests E2E / screenshots del
  sitio. Pendiente de instalar como devDependency (`@playwright/test`).
- Nota: `leonxlnx/taste-skill` fue descartado por métricas de estrellas
  sospechosas (~81.9k en un repo de nicho poco conocido) — no instalar sin
  verificar mejor su autenticidad.
