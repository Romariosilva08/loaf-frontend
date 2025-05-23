import { LoginDTO, RegisterDTO } from "../types/usuario";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://localhost:7051/api";

export async function login(data: LoginDTO) {
  const res = await fetch(`${BASE_URL}/usuarios/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Email ou senha inválidos.");
  return await res.json(); 
}

export async function register(data: RegisterDTO) {
  const res = await fetch(`${BASE_URL}/usuarios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Erro ao registrar usuário.");
  return await res.json();
}

export async function getUsers(token: string) {
  const res = await fetch(`${BASE_URL}/usuarios`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error("Não foi possível carregar usuários.");
  return await res.json();
}
