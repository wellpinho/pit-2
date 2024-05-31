import Image from "next/image"

export const LoginComponent = () => {
    return (
        <div className="w-full h-screen bg-[url('/assets/header-bg.svg')]">
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <Image
                                width={150}
                                height={150}
                                className="mx-auto h-10 w-auto"
                                src="/assets/logo.svg"
                                alt="Your Company"
                            />
                            <h2 className="mt-4 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Entrar
                            </h2>
                        </div>

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

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Entrar
                            </button>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Não tem uma conta? 
                        <a className="no-underline border-b border-blue text-blue-600 font-bold ml-2" href="/register">
                            Crie uma
                        </a>.
                    </div>
                </div>
            </div>
        </div>
    )
}