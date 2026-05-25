# TCC 2023 — Frontend (SSR vs CSR vs SSG)

Trabalho de Conclusão de Curso — **Fernando Jung Bereza** (2023).

Repositório **arquivado**: código do experimento publicado para consulta no GitHub. Não há deploy ativo nem manutenção planejada.

## Status do projeto

| Item | Situação |
|------|----------|
| Site em produção | **Offline** — antes rodava em `fernandobereza.tech` |
| API | **Offline** — antes em `api.fernandobereza.tech` |
| Este repositório | Frontend (Next.js) |
| Backend | [api-fernando](https://github.com/FernandoJungBereza/api-fernando) (**offline** em produção) |

Durante o TCC, frontend e API estavam no ar como um site real; os testes de desempenho (Lighthouse, carga, etc.) foram feitos contra esse ambiente. Hoje o domínio e a infraestrutura foram desligados; o valor do repo é o **código e a documentação do trabalho**.

## Objetivo do trabalho

Comparar **Server-Side Rendering**, **Client-Side Rendering** e **geração estática (SSG/ISR)** na mesma aplicação (portal de artigos), para analisar qual abordagem faz mais sentido conforme o cenário (SEO, primeiro carregamento, carga no servidor, etc.).

| Rota | Renderização | Tema (conteúdo fictício) |
|------|--------------|---------------------------|
| `/ServerRender` | SSR — `fetch` no servidor, sem cache | Viagens |
| `/ClientRender` | CSR — `fetch` no navegador | Universo |
| `/StaticRender` | SSG + revalidação a cada 10s | Culinária |

Cada rota tem listagem e `/artigo/[id]`, com o mesmo formato de dados (`src/interfaces/index.ts`).

## Stack

Next.js 13 (App Router) · React 18 · TypeScript · Tailwind CSS

## Backend (API)

Repositório: **[api-fernando](https://github.com/FernandoJungBereza/api-fernando)** — Express na porta 4000, dados em `serverside.json`, `clientside.json` e `staticrender.json`.

O frontend chama `GET /ServerRender`, `GET /ClientRender`, `GET /StaticRender` e `GET /…/:id` (em produção era `https://api.fernandobereza.tech`, hoje desligado).

Para ver o site **com conteúdo** em máquina local: suba a API e aponte os `fetch` deste repo para `http://localhost:4000` (detalhes no README da API).

## Rodar localmente (opcional)

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

As URLs de `fetch` ainda apontam para `api.fernandobereza.tech` (domínio desativado). Para testar com a API local, use `http://localhost:4000` — veja [api-fernando](https://github.com/FernandoJungBereza/api-fernando).

## Estrutura

```
src/app/          # Páginas ServerRender, ClientRender, StaticRender
src/components/   # Navbar, Footer, layout
src/interfaces/   # Tipos dos artigos
db.json           # Textos de apoio sobre cada tipo de render (não usado em runtime)
public/           # Assets e verificação Google Search Console (época do deploy)
```

## Autor

**Fernando Jung Bereza** — [GitHub](https://github.com/FernandoJungBereza)
