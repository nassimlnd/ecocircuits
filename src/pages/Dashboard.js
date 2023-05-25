import React from "react";
import Sidenav from "../components/navigation/Sidenav";
import ConnectedLayout from "../layouts/ConnectedLayout";

function Dashboard() {

    return (
        <ConnectedLayout>
            <div className="flex items-center">
                <main>
                    <h1>Tableau de bord</h1>
                </main>
            </div>
        </ConnectedLayout>
    )
}

export default Dashboard;