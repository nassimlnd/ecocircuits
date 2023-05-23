import React, {useEffect, useState} from 'react';
import {Sidebar} from "flowbite-react";
import {HiChartPie, HiShoppingCart, HiTruck, HiUsers} from "react-icons/hi";
import {FaShoppingBasket} from "react-icons/fa";
import AuthService from "../services/AuthService";

function Sidenav() {

    const user = AuthService.getCurrentUser();
    const [activePage, setActivePage] = useState("/");

    useEffect(() => {
        setActivePage(window.location.pathname);
    }, []);

    useEffect(() => {
        var element = document.querySelector('[aria-label="Sidebar"]');
        element.children[0].classList.remove("rounded");
    });

    return (
        <>
            <Sidebar className="border-r border-gray-200 dark:border-gray-700 text-base font-normal">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="/dashboard"
                            icon={HiChartPie}
                            active={activePage === "/dashboard" || activePage === "/"}
                        >Tableau de bord</Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="/orders"
                            icon={HiShoppingCart}
                            active={activePage === "/orders"}
                        >Commandes</Sidebar.Item>
                        <Sidebar.Item
                            href="/products"
                            icon={FaShoppingBasket}
                            active={activePage === "/products"}
                        >Produits</Sidebar.Item>
                        <Sidebar.Item
                            href="/vehicules"
                            icon={HiTruck}
                            active={activePage === "/vehicules"}
                        >Véhicules</Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="/producteurs"
                            icon={HiShoppingCart}
                            active={activePage === "/admin/producteurs"}
                        >Producteurs</Sidebar.Item>
                        <Sidebar.Item
                            href="/customers"
                            icon={HiUsers}
                            active={activePage === "/customers"}
                        >
                            Clients
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    {AuthService.isAdmin() && (
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="/admin/users"
                            icon={HiUsers}
                            active={activePage === "/admin/users"}
                        >Utilisateurs</Sidebar.Item>
                    </Sidebar.ItemGroup>)}
                </Sidebar.Items>
            </Sidebar>
        </>
    )

}

export default Sidenav;