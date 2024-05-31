'use client'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Image from 'next/image'
import { Navigation } from '@/data/Navigation'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-screen bg-[url('/assets/header-bg.svg')]">
            <div className='bg-[url("/assets/coffee-img.svg")] min-w-[350px] h-56 absolute left-0 top-0' />
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2 text-3xl text-gray-600 font-bold">
                            <Image
                                width={150}
                                height={150}
                                className="h-14 w-auto"
                                src="/assets/logo.svg"
                                alt=""
                            />
                            <span>Cafeteria</span>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setIsOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {Navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                        <a href="/login" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
                            Entrar <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a href="/register" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
                            Criar conta <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
                <Dialog className="lg:hidden" open={isOpen} onClose={() => setIsOpen(false)}>
                    <div className="fixed inset-0 z-50" />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {Navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="/login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Entrar
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Cadastrar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </header>
        </div>
        )
    }