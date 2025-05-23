# 📘 Projeto Loaf - Autenticação e Cadastro

Este é um projeto em [Next.js](https://nextjs.org) criado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Ele implementa telas de login, registro e controle de acesso de usuários.

## 🚀 Tecnologias

- [Next.js](https://nextjs.org)
- React
- TypeScript
- Tailwind CSS
- API externa (em `.env`)

## ⚙️ Pré-requisitos

- Node.js 18 ou superior
- npm, yarn, pnpm ou bun

## 🔧 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
npm install
# ou
yarn install
# ou
pnpm install


🛠️ Configuração do Ambiente
Crie um arquivo .env.local na raiz do projeto e adicione a variável da API:

env
NEXT_PUBLIC_API_URL=http://localhost:7051/api

🔒 Substitua pela URL correta da API usada na autenticação.

▶️ Rodando localmente
Execute o servidor de desenvolvimento:

npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
Acesse http://localhost:3000 no navegador para ver o app rodando.

Você pode começar a editar a página inicial em app/page.tsx. As alterações são aplicadas automaticamente.

📦 Estrutura do Projeto
/app        # Páginas e rotas do Next.js
/lib        # Funções auxiliares (ex: autenticação, chamadas de API)
/types      # Definições TypeScript
/public     # Assets públicos
