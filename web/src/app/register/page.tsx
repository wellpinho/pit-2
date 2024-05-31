import { Header } from "@/components/header";
import { RegisterComponent } from "@/components/register"

const Register = () => {
    return (
        <>
        <Header />
        <div className="center-center w-[80%]">
            <RegisterComponent />
        </div>
    </>
    )
}

export default Register;