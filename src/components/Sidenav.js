import React from 'react';
import {Sidebar} from "flowbite-react";
import {HiChartPie, HiShoppingCart} from "react-icons/hi";

function Sidenav() {

    return (
        <>
            <Sidebar>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="/dashboard"
                            icon={HiChartPie}
                        >Tableau de bord</Sidebar.Item>
                        <Sidebar.Item
                            href="/orders"
                            icon={HiShoppingCart}
                        >Commandes</Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </>
    )

}

export default Sidenav;