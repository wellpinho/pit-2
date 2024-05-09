import { Coffee } from "@phosphor-icons/react/dist/ssr";

const Banner = () => {
    return (
        <div className="
            h-[870px] 
            bg-imgBanner 
            sm:bg-center
            flex
            md:pl-72
            pl-2
            pr-2
            md:pt-60
            pt-4
        ">
            <div className="flex flex-col w-[800px]">
                <h1 className="text-xl md:text-4xl md:leading-tight mb-4">Desperte seus sentidos com o aroma sedutor e o sabor intenso do nosso café artesanal.</h1>
                <p className="mb-10">
                    Os fornecedores e produtores com quem trabalhamos estão no topo do seu jogo.
                    <br />É nosso papel levar a magia das mãos deles até a sua mesa. 
                </p>
                <button className="bg-customGold w-44 h-14 rounded-sm flex justify-center items-center gap-2">
                    <Coffee size={24} />MENU
                </button>
            </div>
        </div>
    )
}

export default Banner;