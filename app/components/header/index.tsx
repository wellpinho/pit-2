import { Basket, CoffeeBean } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Header = () => {
    return (
<header className="p-4 bg-customBrown">
	<div className="container flex h-20 mx-auto justify-between">
		<div className="w-[67%] flex justify-between">
			<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" 
                className="flex items-center p-2 text-3xl">
                <CoffeeBean size={32} /> <span>Kafe café</span>
			</a>
			<ul className="items-stretch hidden space-x-3 lg:flex">
				<li className="flex">
					<a href="/" className="flex items-center px-4 -mb-1">Home</a>
				</li>
				<li className="flex">
					<a href="#" className="flex items-center px-4 -mb-1">Serviços</a>
				</li>
				<li className="flex">
					<a href="#" className="flex items-center px-4 -mb-1">Sobre</a>
				</li>
                <li className="flex">
					<a href="#" className="flex items-center px-4 -mb-1">Blog</a>
				</li>
                <li className="flex">
					<a href="#" className="flex items-center px-4 -mb-1">Contato</a>
				</li>
			</ul>
		</div>
		<div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="px-4 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
				<Link href="/cart"><Basket size={32} /></Link>
            </button>
            <button className="px-4 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
				<Link href="/login">Entrar</Link>
			</button>
			<button className="px-4 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
			<Link href="/register">Cadastrar</Link>
			</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    )
}

export default Header;