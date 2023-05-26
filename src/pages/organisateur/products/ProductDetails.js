import React, {useEffect, useState} from "react";
import ConnectedLayout from "../../../layouts/ConnectedLayout";
import {useParams} from "react-router-dom";
import ProductsService from "../../../services/ProductsService";
import ProducersService from "../../../services/ProducersService";
import {Badge, Breadcrumb, Table, Tooltip} from "flowbite-react";
import {HiHome} from "react-icons/hi";
import OrdersService from "../../../services/OrdersService";

function ProductDetails() {
    const params = useParams();
    const [product, setProduct] = useState({});
    const [productProducers, setProductProducers] = useState([]);
    const [productOrders, setProductOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalStock, setTotalStock] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const response = await ProductsService.getProduct(params.id);
            const responseProducers = await ProducersService.getProducersByProduct(params.id);
            const responseOrders = await OrdersService.getOrdersByProduct(params.id);

            setProduct(response.data);
            setProductProducers(responseProducers.data);
            setProductOrders(responseOrders.data);

            let total = 0;
            responseProducers.data.forEach(producer => {
                total += producer.quantite;
            });

            setTotalStock(total);

            console.log(response.data);
            console.log(responseProducers.data);
            console.log(responseOrders.data);
            setLoading(false);
        }

        fetchProduct();
    }, []);

    return (
        <ConnectedLayout>
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
                        href={"/products"}
                    >
                        Produits
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Détails du produits n°{params.id}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="space-y-2 md:space-y-0 mr-4 md:flex ml-4">
                <div className="md:w-2/3 rounded-lg shadow bg-white dark:bg-gray-800">
                    <div className="border-b border-gray-200 dark:border-gray-700 p-6 dark:text-white">
                        <h1 className="font-semibold text-xl">Informations sur le produit</h1>
                    </div>
                    <div className="md:flex p-6 dark:text-white md:space-y-0 space-y-4 md:space-x-3">
                        <div
                            className="flex flex-col md:w-1/2 space-y-4 md:border-r border-gray-200 dark:border-gray-700">
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">Libellé</div>
                                <div className="font-semibold">{product.libelle}</div>
                            </div>
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">TVA</div>
                                <div className="font-semibold">{product.tva}</div>
                            </div>
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">Référence</div>
                                <div className="font-semibold">{product.reference}</div>
                            </div>
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">Origine production</div>
                                <div className="font-semibold">{product.origineProduction}</div>
                            </div>
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">Prix</div>
                                <div className="font-semibold">{product.prix ? (product.prix) : "-"}</div>
                            </div>
                        </div>
                        <div className="flex flex-col md:w-1/2 space-y-4 md:pl-4">
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">Origine transformation</div>
                                <div className="font-semibold">{product.origineTransformation}</div>
                            </div>
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">Agriculture</div>
                                <div className="font-semibold">{product.agriculture}</div>
                            </div>
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">Type de produit</div>
                                <div className="font-semibold">{product.typeProduit}</div>
                            </div>
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">Conditionnement</div>
                                <div className="font-semibold">{product.conditionnement}</div>
                            </div>
                            <div className="block">
                                <div className="text-gray-500 dark:text-gray-300">Date limite d'utilisation optimale
                                </div>
                                <div className="font-semibold">{product.dluo ? (product.dluo) : "-"}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3 rounded-lg shadow bg-white dark:bg-gray-800 md:ml-4">
                    <div className="border-b border-gray-200 dark:border-gray-700 p-6 dark:text-white">
                        <h1 className="font-semibold text-xl">Commandes du produit</h1>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg m-3 pb-4">
                        <div className="relative sm:rounded-lg">
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
                                    {productOrders.map((order) => (
                                        <Table.Row
                                            className="cursor-pointer bg-white dark:bg-gray-800 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700"
                                            onClick={() => {
                                                window.location.href = "/producers/" + order.id;
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
                <div className="md:w-3/5 md:mt-4 mx-4 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow">
                    <div className="border-b border-gray-200 dark:border-gray-700 p-6 dark:text-white">
                        <h1 className="font-semibold text-xl">Producteurs du produits</h1>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg m-3 pb-4">
                        <div className="relative overflow-x-auto sm:rounded-lg">
                            <Table hoverable={true}>
                                <Table.Head>
                                    <Table.HeadCell>
                                        Numéro
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Libellé
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Stock
                                    </Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {productProducers.map((producer) => (
                                        <Table.Row
                                            className="cursor-pointer bg-white dark:bg-gray-800 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700"
                                            onClick={() => {
                                                window.location.href = "/producers/" + producer.id;
                                            }}
                                            key={producer.id}>
                                            <Table.Cell>
                                                {producer.id}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {producer.nom}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Tooltip content={producer.quantite}>
                                                    <Badge
                                                        color={producer.quantite > 0 ? "green" : "red"}>
                                                        {producer.quantite > 0 ? "En stock" : "En rupture"}
                                                    </Badge>
                                                </Tooltip>
                                            </Table.Cell>
                                        </Table.Row>))}
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
                <div
                    className="md:w-2/5 md:mt-4 ml-4 md:ml-0 mr-4 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow">
                    <div className="border-b border-gray-200 dark:border-gray-700 p-6 dark:text-white">
                        <h1 className="font-semibold text-xl">Statistiques du produits</h1>
                    </div>
                    <div>
                        <div className="p-5 space-y-2">
                            <div className="flex pb-4 border-b border-gray-200 dark:border-gray-700 justify-between">
                                <div className="text-gray-500 dark:text-gray-300">Nombre de commandes</div>
                                <div className="font-semibold">{productOrders.length}</div>
                            </div>
                            <div className="flex pb-4 border-b border-gray-200 dark:border-gray-700 pt-2 justify-between">
                                <div className="text-gray-500 dark:text-gray-300">Stock total du produit</div>
                                <div className="font-semibold">{totalStock}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </ConnectedLayout>
    );
}

export default ProductDetails;
