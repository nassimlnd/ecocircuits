import React from "react";
import Sidenav from "../components/navigation/Sidenav";
import ConnectedLayout from "../layouts/ConnectedLayout";

/**
 * Page du tableau de bord
 * @returns {JSX.Element}
 * @constructor
 */
function Dashboard() {

    return (
        <ConnectedLayout>
            <div className="flex-grow">
                <div className="dark:text-white p-4 dark:bg-gray-800">
                    <div className="text-xl font-medium">Tableau de bord</div>
                </div>

                <div className="">

                </div>
            </div>
        </ConnectedLayout>
    )
}

export default Dashboard;