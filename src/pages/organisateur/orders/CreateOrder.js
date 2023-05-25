import React from "react";
import ConnectedLayout from "../../../layouts/ConnectedLayout";
import {Breadcrumb, Button} from "flowbite-react";
import {HiHome, HiPlus} from "react-icons/hi";

function CreateOrder() {

    return (
        <ConnectedLayout>
            <div className="flex-grow">
                <div
                    className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                    <div className="mb-4">
                        <Breadcrumb
                            className="pb-3"
                        >
                            <Breadcrumb.Item
                                href="/dashboard"
                                icon={HiHome}
                            >
                                Tableau de bord
                            </Breadcrumb.Item>
                            <Breadcrumb.Item
                                href="/orders"
                            >
                                Commandes
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                Créer une nouvelle commande
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Créer une
                            nouvelle commande</h1>
                    </div>
                </div>
                <div className="md:flex mx-10 my-4 justify-between">
                    <div className="bg-white dark:bg-gray-800 shadow rounded w-2/5">
                        <div
                            className="border-b border-gray-200 dark:border-gray-700 dark:text-white px-6 py-4 flex justify-between items-center">
                            <h2 className="text-lg">Produits</h2>
                        </div>
                    </div>

                    <div className="bg-green-600 shadow rounded w-2/5 h-96">

                    </div>
                </div>
            </div>
        </ConnectedLayout>
    )
}

export default CreateOrder;