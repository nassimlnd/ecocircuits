import React, {useEffect, useMemo, useState} from "react";
import ConnectedLayout from "../../../layouts/ConnectedLayout";
import {Breadcrumb, Button, Label, Select, Spinner, Table, TextInput} from "flowbite-react";
import {HiHome, HiPlus} from "react-icons/hi";
import CustomersService from "../../../services/CustomersService";
import AddProductModal from "../../../components/orders/AddProductModal";
import ProducersService from "../../../services/ProducersService";
import {GoogleMap, Marker, MarkerF, useLoadScript} from "@react-google-maps/api";
import Geocode from "react-geocode"
import {Tab, Transition} from "@headlessui/react";

function CreateOrder() {
    const [loading, setLoading] = useState(false);

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyDEgpThm6jo_dKSlszn-iFF8io81KgEgXo",
    })

    const center = useMemo(() => ({lat: 47.383274, lng: 0.689797}), []);

    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);

    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);
    const [producers, setProducers] = useState([]);

    const showProducersOnMap = (product_id) => {

    }

    const handlePositionChange = event => {
        //console.log(event)
    }

    const goStep2 = () => {
        setStep1(false);
        setStep2(true);
        document.getElementById("step1").classList.remove("bg-blue-700")
        document.getElementById("step1").classList.add("bg-gray-300");
        document.getElementById("step1").classList.add("dark:bg-gray-700");
        document.getElementById("step2").classList.remove("bg-gray-300");
        document.getElementById("step2").classList.remove("dark:bg-gray-700");
        document.getElementById("step2").classList.add("bg-blue-700");
    }

    const goStep3 = () => {
        setStep2(false);
        setStep3(true);
        document.getElementById("step2").classList.remove("bg-blue-700")
        document.getElementById("step2").classList.add("bg-gray-300");
        document.getElementById("step2").classList.add("dark:bg-gray-700");
        document.getElementById("step3").classList.remove("bg-gray-300");
        document.getElementById("step3").classList.remove("dark:bg-gray-700");
        document.getElementById("step3").classList.add("bg-blue-700");
    }

    const nextStep = async () => {
        if (step1) {
            goStep2();
        }
        if (step2) {
            goStep3();
            setLoading(true);
            await fetchProducersByProducts();
            setLoading(false);
            console.info("loaded")
        }
    }

    const addProduct = async (selected) => {
        setLoading(true)
        products.push(selected);
        await setProducts(products);
        console.log(products);
        setLoading(false);
        console.warn("products")
    }

    const fetchProducersByProducts = async () => {
        products.map(async (product) => {
            const response = await ProducersService.getProducersByProduct(product.id);
            console.log(response.data);
            product.producers = response.data;
        })

        setProducts(products);
    }


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const responseCustomers = await CustomersService.getAll();
            setCustomers(responseCustomers.data);
            setLoading(false);
        }

        fetchData();
    }, [])

    if (!isLoaded) return <div>Loading...</div>

    return (<ConnectedLayout>
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
                    <div className="flex justify-center space-x-2 pt-4">
                        <div id="step1" className="h-1 w-8 bg-blue-700">
                        </div>
                        <div id="step2" className="h-1 w-8 bg-gray-300 dark:bg-gray-700">
                        </div>
                        <div id="step3" className="h-1 w-8 bg-gray-300 dark:bg-gray-700">
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-900 dark:text-white">
                {step1 && (<>
                    <div
                        className="text-xl bg-white dark:bg-gray-800 font-medium border-b border-gray-200 dark:border-gray-700 p-8">Étape
                        1 : Informations du
                        client
                    </div>

                    <div id="form"
                         className="md:flex md:space-x-4 md:justify-center space-y-2 md:-space-y-0 md:pt-12 pt-4 md:pl-4">
                        <div className="p-8 rounded-lg bg-white dark:bg-gray-800 shadow md:w-1/2">
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                                <Label
                                    className="text-lg"
                                    htmlFor="customers"
                                >
                                    Choix du client
                                </Label>
                                <Select
                                    id="customers"
                                    required>
                                    {customers.map((customer) => (<option
                                        key={customer.id}
                                    >
                                        {customer.nom} {customer.prenom}
                                    </option>))}
                                </Select>
                            </div>
                            <div className="pt-3">
                                <div className="font-medium">Adresse de livraison</div>
                                <div className="pt-4 space-y-3 flex flex-col items-center">
                                    <TextInput
                                        id="deliveryAddress"
                                        className="w-2/3"
                                        placeholder="Adresse"
                                    />
                                    <TextInput id="deliveryPostalCode" className="w-2/3"
                                               placeholder="Code Postal"/>
                                    <TextInput id="deliveryCity" className="w-2/3" placeholder="Ville"/>
                                </div>
                            </div>
                            <div className="pt-12 flex flex-col items-center">
                                <Button
                                    onClick={nextStep}
                                >
                                    Suivant
                                </Button>
                            </div>
                        </div>
                    </div>
                </>)}
                {step2 && (<>
                    <div
                        className="text-xl p-8 bg-white dark:bg-gray-800 font-medium border-b border-gray-200 dark:border-gray-700">Étape
                        2 : Contenu de la commande
                    </div>


                    <div id="form"
                         className="md:flex md:space-x-4 md:justify-center space-y-2 md:-space-y-0 md:pt-12 pt-4 md:pl-4 px-4">
                        <div
                            className="flex-col p-8 rounded-lg dark:bg-gray-800 bg-white mb-4 shadow md:w-2/3 h-noscroll pb-12">
                            <div
                                className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
                                <div className="text-lg font-medium">Produits</div>
                                <div>
                                    <AddProductModal products={products} addProduct={addProduct}/>
                                </div>
                            </div>
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 h-4/5">
                                <Table hoverable={true}>
                                    <Table.Head>
                                        <Table.HeadCell>
                                            Numéro
                                        </Table.HeadCell>
                                        <Table.HeadCell>Libellé</Table.HeadCell>
                                        <Table.HeadCell>Référence</Table.HeadCell>
                                        <Table.HeadCell>Quantité</Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body>
                                        {!loading ? (products.map((product) => (<Table.Row
                                            className="bg-white dark:bg-gray-800 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700"
                                            key={product.id}>
                                            <Table.Cell>
                                                {products.indexOf(product) + 1}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {product.libelle}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {product.reference}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {product.quantite}
                                            </Table.Cell>
                                        </Table.Row>))) : (<>
                                            <div
                                                className="text-center pt-40 flex items-center justify-center space-x-3">
                                                <Spinner
                                                    aria-label="Extra large spinner example"
                                                    size="xl"
                                                    className="text-center"
                                                />
                                                <span className="dark:text-white">Chargement...</span>
                                            </div>
                                        </>)}
                                    </Table.Body>
                                </Table>
                            </div>

                            <div className="pt-4 flex flex-col items-center">
                                <Button
                                    onClick={nextStep}
                                >
                                    Suivant
                                </Button>
                            </div>
                        </div>
                    </div>
                </>)}

                {!loading && step3 && isLoaded && (<>

                    <div
                        className="text-xl font-medium border-b border-gray-200 dark:border-gray-700 p-8 bg-white dark:bg-gray-800">Étape
                        3 : Affectation des producteurs
                    </div>
                    <div className="flex-grow m-8">
                        <div className="md:flex md:space-x-8 space-y-4 md:space-y-0">
                            <div className="md:w-1/3 bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
                                <div className="h-fit border-b border-gray-200 dark:border-gray-700 pb-3">
                                    <div className="text-lg font-medium">Produits</div>
                                </div>
                                <div className="pt-3 h-4/5">
                                    <Table hoverable={true}>
                                        <Table.Head>
                                            <Table.HeadCell>
                                                Numéro
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                Produit
                                            </Table.HeadCell>
                                            <Table.HeadCell>
                                                Quantité
                                            </Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body className="bg-gray-50">
                                            {products.map((product) => (
                                                <Table.Row className="bg-white cursor-pointer"
                                                           onClick={showProducersOnMap(product.id)}>
                                                    <Table.Cell>
                                                        {products.indexOf(product) + 1}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        {product.libelle}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        {product.quantite}
                                                    </Table.Cell>
                                                </Table.Row>
                                            ))}
                                        </Table.Body>
                                    </Table>
                                </div>
                                <div
                                    className="flex flex-col items-center h-1/4 border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
                                    <Button>
                                        Suivant
                                    </Button>
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <GoogleMap zoom={10} center={center}
                                           mapContainerClassName="h-noscroll rounded-lg shadow">
                                    {
                                        /*products.map((product) => (
                                            product.producers.map((producer) => (
                                                <MarkerF position={{lat: producer.latitude, lng: producer.longitude}}
                                                         onClick={() => {
                                                             console.log("CLICKKKKKKKKKKKKKKKKK");
                                                         }}
                                                         draggable={true}
                                                         onPositionChanged={handlePositionChange}
                                                />
                                            ))
                                        ))*/
                                    }
                                </GoogleMap>
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
        </div>
    </ConnectedLayout>)
}

export default CreateOrder;