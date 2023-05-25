import React, {useEffect, useState} from 'react';
import {Navbar, Dropdown, Avatar} from "flowbite-react";
import feuille from "../../assets/feuille.png";

function Nav() {
    const [activePage, setActivePage] = useState("/");
    const user = JSON.parse(localStorage.getItem("user"));

    let navigation = null;

    if (user === null) {
        navigation = [
            {name: "Accueil", href: "/", current: activePage === "/" || activePage === "/home"},
            {name: "À propos", href: "/aboutus", current: activePage === "/aboutus"},
            {name: "Fonctionnalités", href: "/features", current: activePage === "/features"},
            {name: "Contact", href: "/contact", current: activePage === "/contact"},
        ];
    } else {
        navigation = [
            {name: "Tableau de bord", href: "/dashboard", current: activePage === "/dashboard"},
            {name: "Commandes", href: "/orders", current: activePage === "/orders"},
            {name: "Tournées", href: "/deliveries", current: activePage === "/deliveries"},
            {name: "Véhicules", href: "/vehicules", current: activePage === "/vehicules"},
            {name: "Produits", href: "/products", current: activePage === "/products"},
        ];
    }

    const handleMobileMenuClick = () => {
        var mobileMenu = document.getElementById("mobileMenu");

        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
        } else {
            mobileMenu.classList.add("hidden");
        }
    }

    useEffect(() => {
        setActivePage(window.location.pathname);
    }, []);

    return (
        <div className="items-center dark:bg-gray-800">
            <Navbar fluid={true} rounded={false} className="max-w-screen-xl mx-auto">
                <Navbar.Brand>
                    <img
                        src={feuille}
                        className="mr-3 h-6 sm:h-9"
                        alt="EcoCircuits"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">EcoCircuits</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <button id="toggleSidebarMobile" onClick={handleMobileMenuClick}
                            className="p-2 mr-3 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                        <svg id="toggleSidebarMobileClose" className="hidden w-6 h-6" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                    {user ? (
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={<Avatar size="sm" src="https://avatars.githubusercontent.com/u/8186664?v=4"/>}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">{user.username}</span>
                                <span className="block truncate text-sm font-medium">{user.email}</span>
                            </Dropdown.Header>

                            <Dropdown.Item onClick={() => window.location.href = "/account"}>Mon compte</Dropdown.Item>
                            <Dropdown.Item onClick={() => window.location.href = "/settings"}>Paramètre</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item onClick={() => window.location.href = "/logout"}>Déconnexion</Dropdown.Item>

                        </Dropdown>
                    ) : (
                        <div>
                            <button className=
                                "flex bg-blue-600 text-white hover:bg-blue-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium space-x-2 text-center inline-block"
                                    onClick={
                                        () => {
                                            window.location.href = '/login';
                                        }
                                    }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
                                </svg>

                                <span>Connexion</span>
                            </button>
                        </div>
                    )}
                </div>
                <Navbar.Collapse id="mobileMenu">
                    {navigation.map((item) => (
                        <Navbar.Link
                            key={item.name}
                            href={item.href}
                            active={item.current}
                        >
                            {item.name}
                        </Navbar.Link>
                    ))}
                </Navbar.Collapse>
            </Navbar>
        </div>)
}

export default Nav;