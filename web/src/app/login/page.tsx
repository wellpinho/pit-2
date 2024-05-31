import { Header } from "@/components/header";
import { LoginComponent } from "@/components/login";


const Login = () => {
    return (
        <>
            <Header />
            <div className="center-center w-[80%]">
                <LoginComponent /> 
            </div>
        </>
    )
}

export default Login;