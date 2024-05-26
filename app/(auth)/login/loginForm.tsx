'use client'

import { signIn } from "next-auth/react";
import Link from "next/link"
import { useSearchParams } from "next/navigation";

export const LoginFormComponent = () => {
    const searchParams = useSearchParams();
    const error  = searchParams.get('error');

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)

        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        }
        
        signIn('credentials', {
            ...data,
            callbackUrl: '/dashboard',
        })
    }

    return (
        <form onSubmit={login} className="flex flex-col text-customDark">
            <label htmlFor="email">Email</label>
            <input
                className="px-5 py-2 border bg-gray-200 rounded mb-5"
                type="email" 
                name="email"
            />

            <label htmlFor="email">Senha</label>
            <input
                className="px-5 py-2 border bg-gray-200 rounded mb-5"
                type="password" 
                name="password"
            />

            <button type="submit" className="
                bg-customGold 
                font-bold 
                py-4 
                rounded
                hover:bg-customDark 
                transition-all 
                hover:text-[#fff]
            ">
                Entrar
            </button>
            { error === "CredentialsSignin" && <p className="text-red-400">Erro no email ou password</p>}

            <div className="flex items-center my-5">
                <div className="flex-1 border-t border-gray-500"></div>
                <div className="px-2 text-gray-800">O</div>
                <div className="flex-1 border-t border-gray-500"></div>
            </div>

            <span>
                Não tem uma conta? 
                <Link
                    href="/register"
                    className="text-center font-bold ml-2">
                    Crie uma
                </Link>
            </span>
        </form>
    )
}