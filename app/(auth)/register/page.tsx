import Link from "next/link"

const Register = () => {
    return (
        <div className="container mx-auto">
            <main className="flex flex-col min-h-screen w-96 pt-32 sm:pt-52">
                <h1 className="text-4xl mb-5 text-customGold font-bold">Criar conta</h1>

                <div className="flex flex-col text-customDark">
                    <label htmlFor="name">Nome</label>
                    <input
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        type="text"
                        name="name" 
                    />

                    <label htmlFor="lastname">Sobrenome</label>
                    <input
                        className="px-5 py-2 border bg-gray-200 rounded mb-5"
                        type="text" 
                        name="lastname"
                    />

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
                        Já tem uma conta? 
                        <Link
                            href="/login"
                            className="text-center font-bold ml-2">
                            Faça login
                        </Link>
                    </span>

                </div>
            </main>
        </div>
    )
}

export default Register;