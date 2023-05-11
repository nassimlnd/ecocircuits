import React, {useEffect, useState} from "react";
import {Fragment} from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Bars3Icon, XMarkIcon, BellIcon} from "@heroicons/react/24/outline";
import logo from "../logo2.png";
import homeLogo from "../loog_home2.png";
import avatarLogo from "../assets/avatar.png";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Navbar() {
    const [activePage, setActivePage] = useState("/");
    const user = localStorage.getItem("user");

    let navigation = null;

    console.log(activePage);

    if (user === null) {
        navigation = [
            {name: "Accueil", href: "/", current: activePage === "/" || activePage === "/home"},
            {name: "À propos", href: "/aboutus", current: activePage === "/aboutus"},
            {name: "Fonctionnalités", href: "/fonctionnalites", current: activePage === "/fonctionnalites"},
            {name: "Contact", href: "/contact", current: activePage === "/contact"},
        ];
    } else {
        navigation = [
            {name: "Tableau de bord", href: "/dashboard", current: activePage === "/dashboard"},
            {name: "Commandes", href: "/commandes", current: activePage === "/commandes"},
            {name: "Tournées", href: "/tournees", current: activePage === "/tournees"},
            {name: "Véhicules", href: "/vehicules", current: activePage === "/vehicules"},
            {name: "Produits", href: "/produits", current: activePage === "/produits"},
        ];
    }


    useEffect(() => {
        setActivePage(window.location.pathname);
    }, []);

    return (
        <Disclosure as="nav" className={/*activePage === "/" ? ("bg-white") : ("bg-gray-800")*/ "bg-gray-800"}>
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
                            <div className="flex sm:flex-2 flex-1 items-center justify-center sm:items-stretch">
                                <div className="sm:absolute sm:align-middle sm:inset-y-0 sm:left-0 flex flex-shrink-0 items-center">
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
                                    {
                                        user ? (
                                            <div
                                                className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                                {/*<button
                                                    type="button"
                                                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                >
                                                    <span className="sr-only">View notifications</span>
                                                    <BellIcon className="h-6 w-6" aria-hidden="true"/>
                                                </button>*/}

                                                {/* Profile dropdown */}
                                                <Menu as="div" className="relative ml-3">
                                                    <div>
                                                        <Menu.Button
                                                            className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                            <span className="sr-only">Open user menu</span>
                                                            <img
                                                                className="h-8 w-8 max-w-fit rounded-full"
                                                                src={avatarLogo}
                                                                alt=""
                                                            />
                                                        </Menu.Button>
                                                    </div>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items
                                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <Menu.Item>
                                                                {({active}) => (
                                                                    <a
                                                                        href="/account"
                                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                    >
                                                                        Mon compte
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({active}) => (
                                                                    <a
                                                                        href="/settings"
                                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                    >
                                                                        Paramètres
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({active}) => (
                                                                    <a
                                                                        href="/logout"
                                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                    >
                                                                        Se déconnecter
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </div>
                                        ) : (
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
                                        )
                                    }
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
                                )
                            )}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
        ;
}

export default Navbar;
