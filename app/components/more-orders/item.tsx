import Image from "next/image"

interface ICooffee {
    image: string
    title: string
    price: number
}

export const ItemCoffee = ({ image, title, price }: ICooffee) => {
    const value = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return (
        <div className="flex flex-col text-customDark">
            <Image 
                width={300} 
                height={50} 
                src={image} alt={title} 
                className="mb-4"
            />
            <div className="text-xl font-bold">
                <h4>{title}</h4>
                <p>{value}</p>
            </div>
        </div> 
    )
}