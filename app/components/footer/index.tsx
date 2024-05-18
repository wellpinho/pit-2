import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="w-full bg-customBrown min-h-[30rem]">
            <div className="container mx-auto pt-32">
                <div className="grid grid-cols-4">
                    <div>
                        <span className="flex items-center gap-2">
                            <Image 
                                src="/assets/icons/icon6.svg" 
                                width={50} 
                                height={50} alt="logo" 
                            />
                            <p className="text-3xl">Kafe café</p>
                        </span>

                        <div className="mt-5 flex gap-2">
                            <Link href="#">
                                <Image 
                                    src="/assets/icons/Facebook.svg" 
                                    width={50} 
                                    height={50} alt="logo" 
                                />
                            </Link>
                            <Link href="#">
                                <Image 
                                    src="/assets/icons/Twitter.svg" 
                                    width={50} 
                                    height={50} alt="logo" 
                                />
                            </Link>
                            <Link href="#">
                                <Image 
                                    src="/assets/icons/Instagram.svg" 
                                    width={50} 
                                    height={50} alt="logo" 
                                />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-4xl mb-4">Empresa</h4>
                        <div className="flex flex-col text-2xl text-customGold gap-5">
                            <Link href="#">Nossa empresa</Link>
                            <Link href="#">Nosso café</Link>
                            <Link href="#">Nosso coffee stores</Link>
                            <Link href="#">stories e news</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-4xl mb-4">Serviços</h4>
                        <div className="flex flex-col text-2xl text-customGold gap-5">
                            <Link href="#">Blog</Link>
                            <Link href="#">Cardápio</Link>
                            <Link href="#">Coffee shop</Link>
                            <Link href="#">Reservas</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-4xl mb-4">Contato</h4>
                        <div className="flex flex-col text-2xl text-customGold gap-5">
                            <Link href="#">Fale conosco</Link>
                            <Link href="#">1000 S Eighth Ave, New York 0019</Link>
                            <Link href="#">Phone (646) 652-9813</Link>
                            <Link href="#">info@Kafe.com</Link>
                        </div>
                    </div>
                </div>
                <div className="opacity-10 mt-10">
                    <hr />
                </div>
                <p className="text-center mt-5">
                    © 2022 Kafe Company. All rights reserved. 
                    <span className="text-customGold">
                        <Link href="#">Privacy Policy </Link> | <Link href="#">Terms of Use</Link>
                    </span>
                </p>
            </div>
        </div>
    )
}