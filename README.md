# TCC 2023 — Frontend (SSR vs CSR vs SSG)

Trabalho de Conclusão de Curso — **Fernando Jung Bereza** (2023).

Repositório **arquivado**: código do experimento publicado para consulta no GitHub. Não há deploy ativo nem manutenção planejada.

## Status do projeto

| Item | Situação |
|------|----------|
| Site em produção | **Offline** — antes rodava em `fernandobereza.tech` |
| API | **Offline** — antes em `api.fernandobereza.tech` |
| Este repositório | Frontend (Next.js) |
| Backend | Repositório separado — ver [Backend (API)](#backend-api) |

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

A API que alimentava este frontend era um projeto à parte (Node/JSON Server ou similar, conforme o TCC).

- Se o backend já estiver no GitHub, adicione o link aqui: `https://github.com/FernandoJungBereza/<nome-do-repo-backend>`
- O frontend chama rotas no padrão `GET /ServerRender`, `GET /ClientRender`, `GET /StaticRender` e `GET /…/:id` (mesmo contrato em cada modo).

Para rodar o frontend **sem** a API antiga, as páginas abrem, mas listas e artigos ficam vazios.

## Rodar localmente (opcional)

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Para apontar para outra API, seria necessário alterar as URLs de `fetch` nos arquivos em `src/app/*/page.tsx` e `src/app/*/artigo/[id]/page.tsx` (hoje ainda referenciam `api.fernandobereza.tech`, desativado).

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
