import React, {useEffect, useState} from "react";
import ConnectedLayout from "../../../layouts/ConnectedLayout";
import {Badge, Breadcrumb, Table} from "flowbite-react";
import {HiCheck, HiHome} from "react-icons/hi";
import {useParams} from "react-router-dom";
import CustomersService from "../../../services/CustomersService";

function CustomersDetails() {

    const params = useParams();
    const [customerOrders, setCustomerOrders] = useState([]);
    const [customer, setCustomer] = useState({});

    const fetchCustomerOrders = async () => {
        setCustomerOrders([]);
        const response = await CustomersService.getOrdersByCustomer(params.id);
        setCustomerOrders(response.data);
    }

    const getCustomer = async () => {
        const response = await CustomersService.get(params.id);
        setCustomer(response.data);
    }

    useEffect(() => {
        fetchCustomerOrders();
        getCustomer();
    }, []);


    return (<ConnectedLayout>
            <div className="p-4">
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
                        href={"/customers"}
                    >
                        Clients
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Détails du client n°{params.id}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="space-y-2 md:space-y-0 mr-4 md:flex ml-4">
                <div className="md:w-1/3 rounded-lg shadow bg-white dark:bg-gray-800">
                    <div className="border-b border-gray-200 dark:border-gray-700 p-6 dark:text-white">
                        <h1 className="font-semibold text-xl">Informations sur le client</h1>
                    </div>
                    <div className="p-6 dark:text-white">
                        <div className="flex flex-col space-y-4">
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">Nom</div>
                                <div className="font-semibold">{customer.nom}</div>
                            </div>
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">Prénom</div>
                                <div className="font-semibold">{customer.prenom}</div>
                            </div>
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">Email</div>
                                <div className="font-semibold">{customer.email}</div>
                            </div>
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">Téléphone</div>
                                <div className="font-semibold">{customer.telephone}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/3 rounded-lg shadow bg-white dark:bg-gray-800 md:ml-4">
                    <div className="border-b border-gray-200 dark:border-gray-700 p-6 dark:text-white">
                        <h1 className="font-semibold text-xl">Commandes du client</h1>
                    </div>

                    <div className="bg-gray-900 rounded-lg m-3">
                        <div className="relative overflow-x-auto sm:rounded-lg">
                            <Table hoverable={true}>
                                <Table.Head>
                                    <Table.HeadCell>
                                        Numéro
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Date de commande
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Statut
                                    </Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {customerOrders.map((order) => (<Table.Row
                                        className="cursor-pointer bg-white dark:bg-gray-800 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700"
                                        onClick={() => {
                                            window.location.href = "/orders/" + order.id;
                                        }}
                                        key={order.id}>
                                        <Table.Cell>
                                            {order.id}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {order.dateCommande}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {order.status}
                                        </Table.Cell>
                                    </Table.Row>))}
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex space-y-2 md:space-y-4">
                <div className="md:w-2/5 md:mt-4 mx-4 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow">
                    <div className="border-b border-gray-200 dark:border-gray-700 p-6 dark:text-white">
                        <h1 className="font-semibold text-xl">Adresses du client</h1>
                    </div>
                    <div
                        className="m-4 rounded-lg p-6 space-x-3 bg-gray-100 dark:bg-gray-900 flex items-center justify-start overflow-x-auto">
                        {customer.adresses && customer.adresses.map((adresse) => (
                            <div
                                key={adresse.id}
                                className="rounded hover:dark:bg-gray-700 min-w-max p-4 dark:bg-gray-800 bg-white hover:bg-gray-200"
                            >
                                <div className="flex justify-between font-medium"><div>Adresse n°{customer.adresses.indexOf(adresse) + 1}</div></div>
                                <div className="pr-12">
                                    <div>{adresse.rue}</div>
                                    <div>{adresse.codePostal} {adresse.ville}</div>
                                    <div>France</div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div
                    className="md:w-3/5 md:mt-4 ml-4 md:ml-0 mr-4 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow">
                    <div className="border-b border-gray-200 dark:border-gray-700 p-6 dark:text-white">
                        <h1 className="font-semibold text-xl">Statistiques du client</h1>
                    </div>
                    <div>
                        <div className="p-5 space-y-2">
                            <div className="flex pb-4 border-b border-gray-200 dark:border-gray-700 justify-between">
                                <div className="text-gray-500 dark:text-gray-300">Nombre de commandes</div>
                                <div className="font-semibold">{customerOrders.length}</div>
                            </div>
                        </div>
                        <div id="chart" className="">
                        </div>
                    </div>
                </div>
            </div>


        </ConnectedLayout>
    )
}

export default CustomersDetails;