import Link from "next/link"

export const RegisterComponent = () => {
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-4 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Criar conta
                        </h2>
                    </div>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Nome e sobrenome" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Senha" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirme a senha" />

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Criar conta
                        </button>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Já tem uma conta? 
                    <Link className="no-underline border-b border-blue text-blue-600 font-bold ml-2" href="/login">
                        Faça login
                    </Link>.
                </div>
            </div>
        </div>
    )
}