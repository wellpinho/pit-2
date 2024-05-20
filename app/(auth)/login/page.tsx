import Link from "next/link"

const Login = () => {
    return (
        <div className="container mx-auto">
            <main className="flex flex-col min-h-screen w-96 pt-32 sm:pt-52">
                <h1 className="text-4xl mb-5 text-customGold font-bold">Entrar</h1>

                <div className="flex flex-col text-customDark">
                    <label htmlFor="email">Email</label>
                    <input
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        type="email" 
                    />

                    <label htmlFor="email">Senha</label>
                    <input
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        type="password" 
                    />

                    <button className="
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

                </div>
            </main>
        </div>
    )
}

export default Login;