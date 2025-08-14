## Explicação do Projeto

Este projeto foi desenvolvido como um modelo pré-pronto de sistema de autenticação, além de servir como material de estudo. Ele foi criado utilizando as seguintes tecnologias:

- **Next.js**
- **Tailwind CSS**
- **TypeScript**
- **Prisma & PostgreSQL**
- **React Toaster** (para envio de alertas)
- **Better-Auth**

Durante o desenvolvimento, foram adicionados comentários no código para auxiliar aqueles que desejarem estudar ou modificar o projeto.

O projeto também possui 4 páginas acessáveis. São elas:

/sign-up (Cadastro)
/sign-in (Login)
/sign-out (Logoff)
/dashboard (Página após login/cadastro)

Para ter acesso a elas, basta escrever no final da URL do site o seu respectivo nome. Exemplo:
http://localhost:3000/sign-in (Página de login)

## Observações Importantes

Para que o projeto funcione corretamente, é necessário criar um arquivo `.env` na raiz da aplicação (fora de qualquer pasta existente). Nesse arquivo, você deve incluir a URL de conexão do banco de dados, que pode ser obtida facilmente pela Vercel (criadora do Next.js). A conexão pode ser feita localmente ou por meio de terceiros, mas é obrigatório o uso de um banco de dados **PostgreSQL**.

Além disso, será necessário acessar a documentação do **Better-Auth** para gerar o seu secret. [Clique aqui para acessar a documentação](https://www.better-auth.com/docs/installation).

Antes de começar a editar o projeto, instale as dependências executando o seguinte comando no terminal:

```bash
npm install
```

Ou

```bash
npm i
```

### Possíveis Adições Futuras

O projeto pode receber novas funcionalidades ao longo do tempo, como:

- Sistema de envio de e-mails;
- Sistema de envio de código de verificação;
- Sistema de autenticação em dois fatores (Two-Factor Authentication);
- Entre outros.

## Funcionalidades Adicionais

- O sistema possui um **Middleware** na rota padrão (`/dashboard`), o que impede usuários não autenticados de acessarem essa rota.
- Como o foco foi criar um sistema funcional para edição, o layout (fontes, cores, etc.) foi mantido básico, com o essencial para o funcionamento correto.

## Contribuições

O projeto está aberto para contribuições, dicas e ideias. Caso tenha sugestões, envie um e-mail para: [junio.ribeiro02@hotmail.com](mailto:junio.ribeiro02@hotmail.com).




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
