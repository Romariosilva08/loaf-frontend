'use client'

import { useState } from "react";
import RegisterPage from "./register/page";
import LoginPage from "./login/page";

export default function Home() {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <>
      {hasAccount ? (
        <LoginPage />
      ) : (
        <RegisterPage />
      )}
      <div className="text-center mt-4">
        {hasAccount ? (
          <p className="text-sm text-amber-700">
            Novo por aqui?
            <button
              className="ml-1 underline hover:text-amber-900"
              onClick={() => setHasAccount(false)}
            >
              Cadastre-se
            </button>
          </p>
        ) : (
          <p className="text-sm text-amber-700">
            Já tem cadastro?
            <button
              className="ml-1 underline hover:text-amber-900"
              onClick={() => setHasAccount(true)}
            >
              Entrar
            </button>
          </p>
        )}
      </div>
    </>
  );
}
