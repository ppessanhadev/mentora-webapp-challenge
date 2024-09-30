## Mentora webapp challenge

Essa aplicação tem como objetivo conter toda a parte visual da aplicação de listagem de mentorias em conjunto com os feedbacks associados.

Ela funciona em conjunto com o backend desenvolvido [nesse repositório](https://github.com/ppessanhadev/mentora-backend-challenge/tree/main)

### Overview

Para o desenvolvimento, foram utilizada as seguintes ferramentas:

- [Next 14](https://nextjs.org/docs) como framework principal para o desenvolvimento do frontend
- [Tailwind CSS](https://django-ninja.dev/) para estilização geral da aplicação
- [shadcn/ui] para utilização de componentes pre-estilizados
- [zod](https://zod.dev/) e [react-hook-form](https://react-hook-form.com/) para lidar com formulários de maneira simplificada
- [prettier](https://prettier.io/) + [eslint](https://eslint.org/) para manter uma formatação consistente do código

A aplicação está deployada e funcionando na [vercel](https://render.com/), e é possivel visualizar consumindo os conteúdos do [backend](https://mentora-backend-challenge.onrender.com/api/docs)

Ao total, foram desenvolvidas apenas 2 páginas, já que acredito que fazia mais sentido incluir os comentários realizados na página de detalhes, as paginas desenvolvidas foram:

- `/`: Página home, ao qual é listado todas as mentorias com infinite loading ao se manter scrollando
- `/details/{id}`: Página de detalhes da mentoria, ao qual é possivel visualizar sua descrição, adicionar um feedback e visualizar todos os comentários realizados.

**OBS**: pelo backend ser free tier, a api "dorme" a cada 15 minutos de inatividade, então, caso não retorne de inicio, atualize a página para conseguir visualizar/atualizar o conteúdo.

### Rodando a aplicação

A aplicação foi desenvolvida com o gerenciador de pacotes [pnpm](https://pnpm.io/pt/) e o node na versão 20+, é recomendado a instalação do gerenciador para rodar a aplicacão.

**Rodando localmente**

Para rodar localmente execute os seguintes comandos:

1. `cp .env.example .env`
2. `pnpm install`
3. `pnpm dev`

A aplicacão estará rodando na url: `http://localhost:3000` caso a porta esteja disponivel.

### Possiveis melhorias

Como toda aplicação, durante o desenvolvimento acredito que existam alguns passos para tornar o webapp melhor, esses são algumas possiveis implementações para o futuro:

- [ ] Correção de bug ao enviar formulário, voltar as estrelas para 5 (atualmente é mantido seu ultimo estado)
- [ ] Correcão de timeout caso a API esteja em modo de hibernação
- [ ] Virtualizar conteúdo listado em relacão as mentorias
- [ ] Paginar com infinite loading e virtualizar conteúdo de comentários
- [ ] Atualizacão de comentários dinâmicos ao postar (publicou -> atualizou)
- [ ] Testes unitários com vitest e e2e com playwright
- [ ] Pipes de CI/CD no github actions para testes e deploy
