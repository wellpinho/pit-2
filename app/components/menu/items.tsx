interface ITems {
    title: string
    description: string
    price: number
}

export const Items = ({ title, description, price }: ITems) => {
    const value = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    return (
        <div className="grid grid-cols-2 gap-4 mb-16">
            <div className="border-dashed border-b-2 pb-2 items-center">
                <h4 className="text-2xl font-bold">{title}</h4>
                <p>{description}</p>
            </div>
            <div className="text-5xl flex">{value}</div>
        </div>
    )
}