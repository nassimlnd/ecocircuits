import React from 'react';
import {Avatar, Dropdown, Navbar} from "flowbite-react";
import feuille from "../assets/feuille.png";
import AuthService from "../services/AuthService";

function NavConnected() {
    const user = AuthService.getCurrentUser();

    const handleSidebar = () => {
        var sidebar = document.getElementById("sidebar-mobile");
        if (sidebar.classList.contains("hidden")) {
            sidebar.classList.remove("hidden");
        } else {
            sidebar.classList.add("hidden");
        }
    }

    return (
        <div className="items-center dark:bg-gray-800">
            <Navbar fluid={true} rounded={false} className="fixed z-30 w-full bg-white border-b border-gray-200 h-16 py-3.5 dark:bg-gray-800 dark:border-gray-700">
                <Navbar.Brand>
                    <button id="sidebarMobileButton"
                            onClick={handleSidebar}
                            className="p-2 mr-3 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <svg id="toggleSidebarMobileClose" className="hidden w-6 h-6" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <img
                        src={feuille}
                        className="mr-3 h-6 sm:h-9"
                        alt="EcoCircuits"
                        />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar size="sm"
                                       src="https://avatars.githubusercontent.com/u/8186664?v=4"/>}
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
                </div>
                <Navbar.Collapse>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavConnected;