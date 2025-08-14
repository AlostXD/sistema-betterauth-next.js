import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // Ou "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,

    //async sendResetPassword(data, request) {

    // Send an email to the user with a link to reset their password

    //},
  },
  plugins: [nextCookies()],
  session: {
    cookieCache: {
      enabled: true,
    },
  },
  advanced: {
    defaultCookieAttributes: {
      secure: true,
      httpOnly: true,
      sameSite: "none", // Permite compartilhamento de cookies entre subdomínios via CORS
      partitioned: true, // Novos padrões de navegador exigirão isso para cookies de terceiros
    },
    trustedOrigins: [
      "https://sistema-betterauth-next-js.vercel.app" /* URL do seu domínio */,
      "http://localhost:3000",
    ],
  },
});
