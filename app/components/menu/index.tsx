import { Items } from "./items"
import { items } from '@/app/data/items'

export const MwnuItems = () => {
    return (
        <div className="h-screen w-full bg-[url('/assets/bg.svg')]">
            <div className="container mx-auto">
                <h2 className="text-center text-6xl pt-32 pb-10">
                    Temos orgulho de oferecer nossos cafés exclusivos
                </h2>

                <div className="grid grid-cols-3 mt-20">
                    <div>
                        <Items 
                            title={items[0].name}
                            description={items[0].description}
                            price={items[0].price}
                        />
                        <Items 
                            title={items[1].name}
                            description={items[1].description}
                            price={items[1].price}
                        />
                        <Items 
                            title={items[2].name}
                            description={items[2].description}
                            price={items[2].price}
                        />
                        <Items 
                            title={items[3].name}
                            description={items[3].description}
                            price={items[3].price}
                        />
                    </div>
                    <div>
                    <Items 
                            title={items[4].name}
                            description={items[4].description}
                            price={items[4].price}
                        />
                        <Items 
                            title={items[5].name}
                            description={items[5].description}
                            price={items[5].price}
                        />
                        <Items 
                            title={items[6].name}
                            description={items[6].description}
                            price={items[6].price}
                        />
                        <Items 
                            title={items[7].name}
                            description={items[7].description}
                            price={items[7].price}
                        />
                    </div>
                    <div>
                    <Items 
                            title={items[8].name}
                            description={items[8].description}
                            price={items[8].price}
                        />
                        <Items 
                            title={items[9].name}
                            description={items[9].description}
                            price={items[9].price}
                        />
                        <Items 
                            title={items[10].name}
                            description={items[10].description}
                            price={items[10].price}
                        />
                        <Items 
                            title={items[11].name}
                            description={items[11].description}
                            price={items[11].price}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}