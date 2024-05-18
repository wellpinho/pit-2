import Image from "next/image"

export const About = () => {
    return (
        <div className="bg-[#fff] h-screen w-full">
            <div className="container mx-auto pt-20 text-center">
                <p className="text-customGold text-2xl">
                    De sabores de café florais e brilhantes a ousados e suaves
                </p>
                <h2 className="
                    text-5xl 
                    text-customDark
                    mt-10
                ">
                    Proporcionando experiências únicas de café
                </h2>

                <div className="grid grid-cols-3 mt-32 gap-4">
                    <div>
                        <div className="grid grid-cols-2 gap-4 mb-16">
                            <div className="text-right text-customDark">
                                <h4 className="font-bold text-2xl">Café Shop</h4>
                                <p className="text-lg">Nossos cafés são cuidadosamente selecionados pela qualidade, sabor e impacto social</p>
                            </div>
                            <Image 
                                src="/assets/icons/icon1.svg" 
                                width="50" 
                                height="50" 
                                alt="coffe shop" 
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-16">
                            <div className="text-right text-customDark">
                                <h4 className="font-bold text-2xl">Máquina de Café</h4>
                                <p className="text-lg">Nossos cafés são cuidadosamente selecionados pela qualidade, sabor e impacto social</p>
                            </div>
                            <Image 
                                src="/assets/icons/icon2.svg" 
                                width="50" 
                                height="50" 
                                alt="coffe shop" 
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-right text-customDark">
                                <h4 className="font-bold text-2xl">Alta Qualidade</h4>
                                <p className="text-lg">Nossos cafés são cuidadosamente selecionados pela qualidade, sabor e impacto social</p>
                            </div>
                            <Image 
                                src="/assets/icons/icon3.svg" 
                                width="50" 
                                height="50" 
                                alt="coffe shop" 
                            />
                        </div>
                    </div>
                    <div>
                        <Image
                            width={800}
                            height={800} 
                            src="/assets/home_kafe_three_services 1.svg" 
                            alt="home" 
                            className="min-w-[45rem] md:ml-[-156px]"
                        />
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-4 mb-16">
                            <div className="flex justify-end items-baseline">
                                <Image 
                                    src="/assets/icons/icon4.svg" 
                                    width="50" 
                                    height="50" 
                                    alt="coffe shop" 
                                />
                            </div>
                            <div className="text-left text-customDark">
                                <h4 className="font-bold text-2xl">A xícara perfeita</h4>
                                <p className="text-lg">Nossos cafés são cuidadosamente selecionados pela qualidade, sabor e impacto social</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-16">
                            <div className="flex justify-end items-baseline">
                                <Image 
                                    src="/assets/icons/icon5.svg" 
                                    width="50" 
                                    height="50" 
                                    alt="coffe shop" 
                                />
                            </div>
                            <div className="text-left text-customDark">
                                <h4 className="font-bold text-2xl">Café Barista</h4>
                                <p className="text-lg">Nossos cafés são cuidadosamente selecionados pela qualidade, sabor e impacto social</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex justify-end items-baseline">
                                <Image 
                                    src="/assets/icons/icon6.svg" 
                                    width="50" 
                                    height="50" 
                                    alt="coffe shop" 
                                />
                            </div>
                            <div className="text-left text-customDark">
                                <h4 className="font-bold text-2xl">Grãos de qualidade</h4>
                                <p className="text-lg">Nossos cafés são cuidadosamente selecionados pela qualidade, sabor e impacto social</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}