import React, {useEffect, useState} from 'react';
import {Sidebar} from "flowbite-react";
import {HiChartPie, HiShoppingCart} from "react-icons/hi";

function Sidenav() {

    const [activePage, setActivePage] = useState("/");

    useEffect(() => {
        setActivePage(window.location.pathname);
    }, []);

    return (
        <>
            <Sidebar className="rounded-none">
                <Sidebar.Items className="rounded-none">
                    <Sidebar.ItemGroup className="rounded-none">
                        <Sidebar.Item
                            href="/dashboard"
                            icon={HiChartPie}
                            active={activePage === "/dashboard"}
                        >Tableau de bord</Sidebar.Item>
                        <Sidebar.Item
                            href="/orders"
                            icon={HiShoppingCart}
                            active={activePage === "/orders"}
                        >Commandes</Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </>
    )

}

export default Sidenav;