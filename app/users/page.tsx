'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface User {
    id: number;
    nome: string;
    email: string;
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState("")
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            setError("Token não encontrado")
            router.push("/login")
            return
        }

        fetch("https://localhost:7051/api/usuarios", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                if (!res.ok) throw new Error("Erro ao buscar usuários")
                return res.json()
            })
            .then(data => setUsers(data))
            .catch(err => {
                console.error(err)
                setError("Erro ao buscar usuários")
            })
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem("token")
        router.push("/login")
    }

    const handleView = (userId: number) => {
        alert(`Visualizar usuário ID: ${userId}`)
    }

    const handleEdit = (userId: number) => {
        alert(`Editar usuário ID: ${userId}`)
    }

    if (error) return (
        <div className="min-h-screen bg-amber-50 p-8 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl border-4 border-amber-100 max-w-md w-full text-center">
                <div className="text-red-600 mb-4 flex justify-center">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <p className="text-xl text-amber-900 mb-4">{error}</p>
                <button
                    onClick={handleLogout}
                    className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                >
                    Voltar ao Login
                </button>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-amber-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-amber-900 flex items-center gap-2">
                        <svg
                            className="w-6 h-6 md:w-8 md:h-8 text-amber-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Fornada de Usuários
                    </h1>
                    <button
                        onClick={handleLogout}
                        className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all flex items-center gap-2 text-sm md:text-base"
                    >
                        <svg className="w-4 h-4 text-amber-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sair do Forno
                    </button>
                </div>

                <div className="bg-white rounded-xl border-4 border-amber-100 overflow-hidden shadow-lg">
                    <table className="w-full hidden md:table">
                        <thead className="bg-gradient-to-r from-amber-100 to-amber-50">
                            <tr>
                                <th className="px-4 md:px-6 py-3 text-left text-amber-900 font-semibold">ID</th>
                                <th className="px-4 md:px-6 py-3 text-left text-amber-900 font-semibold">Nome</th>
                                <th className="px-4 md:px-6 py-3 text-left text-amber-900 font-semibold">Email</th>
                                <th className="px-4 md:px-6 py-3 text-left text-amber-900 font-semibold">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-amber-100">
                            {users.map(user => (
                                <tr key={user.id} className="hover:bg-amber-50 transition-colors">
                                    <td className="px-4 md:px-6 py-3 text-amber-700">{user.id}</td>
                                    <td className="px-4 md:px-6 py-3 font-medium text-amber-900">{user.nome}</td>
                                    <td className="px-4 md:px-6 py-3 text-amber-700">{user.email}</td>
                                    <td className="px-4 md:px-6 py-3">
                                        <div className="flex gap-2">
                                            <button 
                                                onClick={() => handleView(user.id)}
                                                className="p-2 text-amber-600 hover:bg-amber-100 rounded-lg"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </button>
                                            <button 
                                                onClick={() => handleEdit(user.id)}
                                                className="p-2 text-amber-600 hover:bg-amber-100 rounded-lg"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="md:hidden p-4 space-y-4">
                        {users.map(user => (
                            <div key={user.id} className="bg-white p-4 rounded-lg border-2 border-amber-100">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-medium text-amber-900">{user.nome}</h3>
                                        <p className="text-sm text-amber-700">{user.email}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => handleView(user.id)}
                                            className="p-1 text-amber-600 hover:bg-amber-100 rounded-lg"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                        <button 
                                            onClick={() => handleEdit(user.id)}
                                            className="p-1 text-amber-600 hover:bg-amber-100 rounded-lg"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <p className="text-xs text-amber-500">ID: {user.id}</p>
                            </div>
                        ))}
                    </div>

                    {users.length === 0 && (
                        <div className="p-8 text-center text-amber-700">
                            <svg className="w-16 h-16 mx-auto mb-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                            Nenhum usuário encontrado na fornada
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}