import { LoginFormComponent } from "./loginForm";

const Login = () => {
    return (
        <div className="container mx-auto">
            <main className="flex flex-col min-h-screen w-96 pt-32 sm:pt-52">
                <h1 className="text-4xl mb-5 text-customGold font-bold">Entrar</h1>

                <LoginFormComponent />
            </main>
        </div>
    )
}

export default Login;