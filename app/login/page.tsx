'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../lib/api";
import { saveToken } from "../lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const result = await login({ email, senha });
      saveToken(result.token);
      router.push("/users");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido");
      }
    }
  }

  return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
        <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur opacity-30"></div>

        <form onSubmit={handleSubmit} className="relative bg-white rounded-lg shadow-xl p-8 space-y-6 border-4 border-amber-100">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <svg
                className="w-16 h-16 text-amber-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-amber-900 font-[Pacifico]">
              Loaf
              <span className="block text-xl text-amber-600 mt-1">Acesso à Loaf</span>
            </h1>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-amber-50 border-2 border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              />
              <svg className="absolute right-3 top-3.5 w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-amber-50 border-2 border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
              />
              <svg className="absolute right-3 top-3.5 w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-800 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">{error}</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-lg font-semibold shadow-md transition-all transform hover:scale-[1.02]"
          >
            Entrar no Espaço
            <span className="ml-2">🔥</span>          
          </button>

          <p className="text-center text-sm text-amber-700">
            Novo por aqui?
            <a href="/register" className="ml-1 underline hover:text-amber-900">Comece sua fornada</a>
          </p>
        </form>
      </div>
    </main>
  );
}