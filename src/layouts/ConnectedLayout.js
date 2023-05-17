import React from "react";
import Sidenav from "../components/Sidenav";
import NavConnected from "../components/NavConnected";
import FooterConnected from "../components/FooterConnected";

function ConnectedLayout({children}) {

    /*const handleSidebar = () => {
        var sidebar = document.getElementById("sidebar-mobile");
        if (sidebar.classList.contains("hidden")) {
            sidebar.classList.remove("hidden");
        } else {
            sidebar.classList.add("hidden");
        }
    }

    var button = document.getElementById("sidebar-mobile");
    button.onclick = handleSidebar;*/



    return (
        <>
            <NavConnected/>
            <div className="flex items-start">
                <aside
                    id="sidebar-mobile"
                    className="flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full duration-75 border-r border-gray-200 lg:flex transition-width rounded-none dark:border-gray-700 w-64 hidden md:block">
                    <Sidenav/>
                </aside>
                <div className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64">
                    <div className="flex h-screen pt-16  flex-col">
                        {children}
                        <div className="px-4 pt-4">
                            <FooterConnected/>
                        </div>
                        <div className="my-4">
                            <p className="text-center dark:text-white">© 2023 EcoCircuits™ - Tous droits réservés.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ConnectedLayout;