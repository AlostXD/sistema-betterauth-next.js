import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // baseURL: "http://localhost:3000",
  baseURL: "https://sistema-betterauth-next-js.vercel.app", // Troque para o domínio do seu projeto quando for para produção.
  
  
  
  // Essa baseURL pode ser colocada no .env ou manualmente colocada aqui. Lembre-se sempre de trocar as URLs entre o desenvolvimento e produção.
});

export const { signIn, signOut, signUp, useSession } = authClient;
