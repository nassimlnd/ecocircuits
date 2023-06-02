import React, {useEffect, useState} from "react";
import ConnectedLayout from "../../../layouts/ConnectedLayout";
import {useParams} from "react-router-dom";
import {Breadcrumb, Table} from "flowbite-react";
import logo from "../../../assets/logo.png";
import OrdersService from "../../../services/OrdersService";
import CustomersService from "../../../services/CustomersService";
import Producers from "../producers/Producers";
import ProducersService from "../../../services/ProducersService";
import ProductsService from "../../../services/ProductsService";

function OrdersDetails() {
    const params = useParams();
    const [order, setOrder] = useState({});
    const [customer, setCustomer] = useState({});
    const [producers, setProducers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const responseDetails = await OrdersService.getOrdersDetails(params.id);
            setOrder(responseDetails.data);
            console.log(responseDetails.data);

            const responseCustomer = await CustomersService.get(responseDetails.data.idClient);
            setCustomer(responseCustomer.data);

            setProducts(responseDetails.data.orderProductDetails);
        }
        fetchData();
    }, []);

    return (<>
        <ConnectedLayout>
            <div className="flex-grow">
                <div className="p-4">
                    <Breadcrumb>
                        <Breadcrumb.Item
                            href="/dashboard"
                        >
                            Tableau de bord
                        </Breadcrumb.Item>
                        <Breadcrumb.Item
                            href={"/orders"}
                        >
                            Commandes
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Détails de la commande n°{params.id}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="flex p-4 overflow-x-hidden">
                    <div className="bg-white dark:bg-gray-800 md:w-1/2 shadow rounded-lg dark:text-white p-12">
                        <div className="flex mb-8">
                            <div className="w-1/2">
                                <div className="text-xl font-bold">COMMANDE #{params.id}</div>
                            </div>
                            <div className="text-right w-1/2 space-y-0.5">
                                <div className="text-xl font-bold">EcoCircuits</div>
                                <div>1 rue de la Paix</div>
                                <div>75000 Paris</div>
                                <div>France</div>
                            </div>
                        </div>
                        <div className="font-bold text-xl">Facturé à</div>
                        <div className="italic text-gray-500 dark:text-gray-400 mt-2">
                            <div>{customer.nom} {customer.prenom}</div>
                            <div>1 rue de la paix, 75000 PARIS</div>
                            <div>{customer.email}</div>
                            <div>{customer.telephone}</div>
                        </div>

                        <div className="relative overflow-x-auto sm:rounded-lg mt-12">
                            <Table hoverable={true}>
                                <Table.Head>
                                    <Table.HeadCell>
                                        Produit
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Quantité
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Prix unitaire
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Prix total
                                    </Table.HeadCell>
                                </Table.Head>

                                <Table.Body className="divide-y">
                                    {products.map((product) => (<>
                                        <Table.Row
                                            className="bg-white dark:bg-gray-800 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700"
                                            key={product.idProduit}
                                        >
                                            <Table.Cell className="flex flex-col">
                                                {product.libelle}
                                            </Table.Cell>
                                            <div className="ml-8 mb-4">Fourni par :
                                                {product.orderProductProducers.map((producer) => (
                                                    <div>
                                                        {producer.libelle} | Quantité : {producer.quantite}
                                                    </div>
                                                ))}
                                            </div>
                                            <Table.Cell>
                                                {product.quantite}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {product.prix ? product.prix : "-"} €
                                            </Table.Cell>
                                            <Table.Cell>
                                                {product.prix && product.quantite ? product.prix * product.quantite : "-"} €
                                            </Table.Cell>
                                        </Table.Row>
                                    </>))}
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </ConnectedLayout>
    </>)
}

export default OrdersDetails;