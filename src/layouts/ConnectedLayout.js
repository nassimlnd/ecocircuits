import React from "react";
import Sidenav from "../components/Sidenav";

function ConnectedLayout({title, navbar, footer, children}) {

    return (
        <>
            {navbar}
            <div className="flex pt-16 items-start">
                <aside
                    className="flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full duration-75 border-r border-gray-200 lg:flex transition-width dark:border-gray-700 w-64">
                    <Sidenav/>
                </aside>
                <div className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64">
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </>
    )

}