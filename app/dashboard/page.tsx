"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

    // O Check da sessão foi feito assim para que ele não rode duas vezes.
    const checkSession = async () => {
      try {
        // Verifica se o usuário está autenticado
        const session = await authClient.getSession()

        toast.success(`Sessão verificada com sucesso! Seja bem-vindo(a) ao Dashboard, ${session.data?.user.name}! Cadastre o restante dos dados acessando seu perfil.`);
      } catch (error) {
        console.error("Erro ao verificar sessão:", error);
        router.push("/");
      }
    }
    useEffect(() => {
      checkSession();
    },);

    // Libera para utilizar a sessão do usuário.
    const data = authClient.useSession();
    if (!data) {
      return <div className="flex justify-center items-center h-screen">Não foi possível conseguir a sua sessão.</div>;
    }

  return <div className="flex justify-center items-center h-screen">{data.data?.user.name}, parabéns! Sua conta foi cadastrada ou fez o login corretamente!</div>;
}
