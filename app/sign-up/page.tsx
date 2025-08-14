"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  const handlerSubmit = async (events: React.FormEvent) => {
    events.preventDefault();
    await authClient.signUp.email(
      {
        email, // endereço de e-mail do usuário
        password, // senha do usuário -> mínimo de 8 caracteres por padrão
        name, // nome de exibição do usuário
        image, // URL da imagem do usuário (opcional)
        callbackURL: "/dashboard", // URL para redirecionar após o usuário verificar o e-mail (opcional)
      },
      {
        onRequest: () => {
          toast.loading("Criando sua conta...");
        },
        onSuccess: () => {
          // exibir mensagem de sucesso
          toast.success("Conta criada com sucesso!");
          // redirecionar para a página do dashboard
          router.push("/dashboard");
        },
        onError: (ctx) => {
          // exibir a mensagem de erro
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
        value={name}
        placeholder="name"
        onChange={(event) => setName(event.target.value)}
        required
      />
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
      <input
        type="text"
        value={image}
        placeholder="image"
        onChange={(event) => setImage(event.target.value)}
      />
      <button
        type="submit"
        className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Cadastrar
      </button>
    </form>
  );
}
