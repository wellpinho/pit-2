import Image from "next/image"
import { ItemCoffee } from "./item"

export const MoreOrders = () => {
    return (
        <div className="h-screen w-full paddingComponent">
            <div className="container mx-auto text-center">
                <p className="text-customGold text-2xl mb-10">
                    Confira nossa seleção de cafés e produtos em destaque
                </p>
                <h2 className="text-6xl text-customDark">
                    Aqui você pode comprar nossos produtos em destaque
                </h2>

                <div className="flex justify-center carousel rounded-box gap-4 mt-20">
                    <ItemCoffee 
                        image="/assets/coffee.svg" 
                        title="Caramel Macchiato" 
                        price={8} 
                    />
                    <ItemCoffee 
                        image="/assets/coffee1.svg" 
                        title="Mocha" 
                        price={9} 
                    />
                    <ItemCoffee 
                        image="/assets/coffee2.svg" 
                        title="French Vanilla" 
                        price={8} 
                    />
                    <ItemCoffee 
                        image="/assets/coffee3.svg" 
                        title="Latte" 
                        price={6} 
                    />
                </div>
            </div>
        </div>
    )
}