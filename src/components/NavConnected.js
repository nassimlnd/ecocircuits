import React from 'react';
import {Avatar, Dropdown, Navbar} from "flowbite-react";
import feuille from "../assets/feuille.png";
import AuthService from "../services/AuthService";

function NavConnected() {
    const user = AuthService.getCurrentUser();

    return (
        <div className="items-center dark:bg-gray-800">
            <Navbar fluid={true} rounded={false} className="fixed z-30 w-full bg-white border-b border-gray-200 h-16 py-3.5 dark:bg-gray-800 dark:border-gray-700">
                <Navbar.Brand>
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