'use client'
import Link from "next/link"
import { useForm } from "react-hook-form";
import { isEmail } from 'validator'
import axios from "axios";
import { toast } from "react-toastify";
import { InputRegister } from "@/interfaces";

export const RegisterComponent = () => {
    const { register, handleSubmit } = useForm<InputRegister>();

    const onSubmit = async ({ name, email, password }: InputRegister) => {
        try {
            await axios.post('http://localhost:4000/users',{
                    name,
                    email,
                    password,
                },
            );

            toast.success("Logado com sucesso!");
        } catch (error) {
            toast("Ops, login falhou!");
        }
    }

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-4 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Criar conta
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            type="text"
                            placeholder="Nome"
                            {...register("name", { required: true })}
                        />

                        <input
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: true, validate: (value) => isEmail(value) })}
                        />

                        <input
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            type="password"
                            placeholder="Senha"
                            {...register("password", { required: true, minLength: 7 })}
                        />

                        <button 
                            type="submit"
                            className="
                                hover:bg-yellow-800
                                cursor-pointer
                                flex 
                                w-full 
                                justify-center 
                                rounded-md 
                                bg-indigo-600 
                                px-3 
                                py-1.5 
                                text-sm 
                                font-semibold 
                                leading-6 
                                text-white 
                                shadow-sm"
                            >Criar conta
                        </button>
                    </form>
                </div>

                <div className="text-grey-dark mt-6">
                    Já tem uma conta? 
                    <Link className="no-underline border-b border-blue text-indigo-600 font-bold ml-2" href="/login">
                        Faça login
                    </Link>.
                </div>
            </div>
        </div>
    )
}