"use client"


import React from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

type Props = {
  width?: string;
}

 function LogoutButton({ width }: Props) {
  const router = useRouter();

  async function handleLogout() {
    await authClient.signOut();
    toast.success("Logout feito com sucesso!");
    router.push("/");
  }

  return (
    <button
      onClick={handleLogout}
      className={`px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer ${width || "w-auto"}`}
    >
      Sair
    </button>
  );
}

export default function SignOut() {
    const router = useRouter()
  return (
    <>
        <div className="flex items-center justify-center min-h-screen text-black">
            <div className="flex flex-col items-center justify-center bg-white p-8 rounded shadow-md w-96 gap-4">
                <h1 className='text-xl font-bold'>Deseja desconectar sua conta?</h1>
                <p>Ao desconectar, você precisará fazer login novamente para acessar sua conta.</p>
                <div className="flex gap-4 mt-4">
                    <button
                        onClick={() => router.push('/dashboard')}
                        className='px-4 py-2 bg-black text-white rounded hover:bg-gray-600 transition cursor-pointer w-24'
                    >
                    Continar
                    </button>
                    <LogoutButton width="w-24"/>
                </div>
            </div>
        </div>
    </>
  )
}