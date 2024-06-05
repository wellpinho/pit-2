import { getProducts } from "@/context/queryData"
import { IProduct } from "@/interfaces"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export const ProductComponent = async () => {
    const products = await getProducts();
    console.log(products)

    return (
        <div className="bg-white h-screen">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <Image 
                                src={'/'}
                                alt="" 
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <Link href="#">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        Basic Tee
                                    </Link>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">Black</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">$35</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}