"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handlerSubmit = async (events: React.FormEvent) => {
    events.preventDefault();
    await authClient.signIn.email(
      {
        email, // user email -> Email do usuário
        password, // user password -> mínimo de 8 caracteres por padrão
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => {
          // Manda pra página Dashboard
          toast.success("Login realizado com sucesso!");
          router.push("/dashboard");
        },
        onError: (ctx) => {
          // Mensagem de erro
          alert(ctx.error.message);
        },
      }
    );
  };

  return (
    <form
      onSubmit={handlerSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md flex flex-col gap-4 text-black"
    >
      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Entrar
      </button>
    </form>
  );
}
