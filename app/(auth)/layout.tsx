import Header from "../components/header";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full">
            <Header />
            <main className="flex justify-center">
                <div className="w-full sm:w-[35rem] px-10">
                { children }
                </div>
            </main>
        </div>
    )
}

export default LoginLayout;