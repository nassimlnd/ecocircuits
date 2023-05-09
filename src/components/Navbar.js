import React, {useEffect, useState} from "react";
import {Fragment} from "react";
import {Disclosure} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import logo from "../logo2.png";
import homeLogo from "../loog_home2.png";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Navbar() {
    const [activePage, setActivePage] = useState("/dashboard");

    const navigation = [
        {name: "Tableau de bord", href: "/dashboard", current: activePage === "/dashboard"},
        {name: "Commandes", href: "/commandes", current: activePage === "/commandes"},
        {name: "Tournées", href: "/tournees", current: activePage === "/tournees"},
        {name: "Véhicules", href: "#", current: false},
        {name: "Articles", href: "#", current: false},
    ];

    useEffect(() => {
        setActivePage(window.location.pathname);
    }, []);

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    {/*<svg
                                        className="block h-8 w-auto lg:hidden"
                                        viewBox="0 0 47 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#6366f1"
                                            d="M23.5 6.5C17.5 6.5 13.75 9.5 12.25 15.5C14.5 12.5 17.125 11.375 20.125 12.125C21.8367 12.5529 23.0601 13.7947 24.4142 15.1692C26.6202 17.4084 29.1734 20 34.75 20C40.75 20 44.5 17 46 11C43.75 14 41.125 15.125 38.125 14.375C36.4133 13.9471 35.1899 12.7053 33.8357 11.3308C31.6297 9.09158 29.0766 6.5 23.5 6.5ZM12.25 20C6.25 20 2.5 23 1 29C3.25 26 5.875 24.875 8.875 25.625C10.5867 26.0529 11.8101 27.2947 13.1642 28.6693C15.3702 30.9084 17.9234 33.5 23.5 33.5C29.5 33.5 33.25 30.5 34.75 24.5C32.5 27.5 29.875 28.625 26.875 27.875C25.1633 27.4471 23.9399 26.2053 22.5858 24.8307C20.3798 22.5916 17.8266 20 12.25 20Z"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="%%GRADIENT_ID%%"
                                                x1="33.999"
                                                x2="1"
                                                y1="16.181"
                                                y2="16.181"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="%%GRADIENT_TO%%"/>
                                                <stop offset="1" stopColor="%%GRADIENT_FROM%%"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    <svg
                                        viewBox="0 0 47 40"
                                        fill="none"
                                        className="hidden h-8 w-auto lg:block"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#6366f1"
                                            d="M23.5 6.5C17.5 6.5 13.75 9.5 12.25 15.5C14.5 12.5 17.125 11.375 20.125 12.125C21.8367 12.5529 23.0601 13.7947 24.4142 15.1692C26.6202 17.4084 29.1734 20 34.75 20C40.75 20 44.5 17 46 11C43.75 14 41.125 15.125 38.125 14.375C36.4133 13.9471 35.1899 12.7053 33.8357 11.3308C31.6297 9.09158 29.0766 6.5 23.5 6.5ZM12.25 20C6.25 20 2.5 23 1 29C3.25 26 5.875 24.875 8.875 25.625C10.5867 26.0529 11.8101 27.2947 13.1642 28.6693C15.3702 30.9084 17.9234 33.5 23.5 33.5C29.5 33.5 33.25 30.5 34.75 24.5C32.5 27.5 29.875 28.625 26.875 27.875C25.1633 27.4471 23.9399 26.2053 22.5858 24.8307C20.3798 22.5916 17.8266 20 12.25 20Z"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="%%GRADIENT_ID%%"
                                                x1="33.999"
                                                x2="1"
                                                y1="16.181"
                                                y2="16.181"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="%%GRADIENT_TO%%"/>
                                                <stop offset="1" stopColor="%%GRADIENT_FROM%%"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>*/}
                                    <img className="block h-8 w-auto lg:hidden"
                                            src={logo}
                                            alt="Workflow"/>
                                    <img className="hidden h-8 w-auto lg:block"
                                            src={homeLogo}
                                            alt="Workflow"/>

                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "rounded-md px-3 py-2 text-sm font-medium"
                                                )}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute align-middle inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="flex align-middle space-x-4">
                                    <button className={classNames(
                                        "flex bg-blue-600 text-white hover:bg-blue-500 hover:text-white",
                                        "rounded-md px-3 py-2 text-sm font-medium space-x-2"
                                    )}
                                            onClick={
                                                () => {
                                                    window.location.href = '/login';
                                                }
                                            }
                                    >
                                        <span>Connexion</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                    aria-current={item.current ? "page" : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;
