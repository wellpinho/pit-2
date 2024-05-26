'use client'

import { signOut } from "next-auth/react";

const BtnSignout = () => {
    return (
        <button 
            onClick={() => signOut()}
            className="
                bg-customGold
                text-[#fff]
                px-10
                py-2
                rounded
                hover:bg-customDark
        ">Sair</button>
    )
}

export { BtnSignout }