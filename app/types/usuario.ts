export interface UsuarioDTO {
  id: number;
  nome: string;
  email: string;
}

export interface LoginDTO {
  email: string;
  senha: string;
}

export interface RegisterDTO {
  nome: string;
  email: string;
  senha: string;
}
