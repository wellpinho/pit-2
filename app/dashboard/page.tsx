import { BtnSignout } from "../components/btnSignout";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await getServerSession();

    if (!session) {
        redirect('/')
    }
    return (
        <BtnSignout />
    )
}

export default Dashboard;