import React, {useEffect, useState} from "react";
import ConnectedLayout from "../../../layouts/ConnectedLayout";
import {Breadcrumb, Button, Label, Select, Table, TextInput} from "flowbite-react";
import {HiHome, HiPlus} from "react-icons/hi";
import CustomersService from "../../../services/CustomersService";
import AddProductModal from "../../../components/orders/AddProductModal";

function CreateOrder() {
    const [loading, setLoading] = useState(false);

    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);

    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);

    const goStep2 = () => {
        setStep1(false);
        setStep2(true);
        document.getElementById("step1").classList.remove("bg-blue-700")
        document.getElementById("step1").classList.add("bg-gray-300");
        document.getElementById("step2").classList.remove("bg-gray-300");
        document.getElementById("step2").classList.add("bg-blue-700");
    }

    const goStep3 = () => {
        setStep2(false);
        setStep3(true);
        document.getElementById("step2").classList.remove("bg-blue-700")
        document.getElementById("step2").classList.add("bg-gray-300");
        document.getElementById("step3").classList.remove("bg-gray-300");
        document.getElementById("step3").classList.add("bg-blue-700");
    }

    const nextStep = () => {
        if (step1) {
            goStep2();
        }
        if (step2) {
            console.log('ok')
            goStep3();
        }
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
                        <div className="flex justify-center space-x-2 pt-4">
                            <div id="step1" className="h-1 w-8 bg-blue-700">
                            </div>
                            <div id="step2" className="h-1 w-8 bg-gray-300">
                            </div>
                            <div id="step3" className="h-1 w-8 bg-gray-300">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 dark:text-white p-8">
                    {step1 && (
                        <>
                            <div
                                className="text-xl font-medium border-b border-gray-200 dark:border-gray-700 pb-4">Étape
                                1 : Informations du
                                client
                            </div>

                            <div id="form"
                                 className="md:flex md:space-x-4 md:justify-center space-y-2 md:-space-y-0 md:pt-12 pt-4 md:pl-4">
                                <div className="p-8 rounded md:w-1/2">
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
                                            {customers.map((customer) => (
                                                <option
                                                    key={customer.id}
                                                >
                                                    {customer.nom} {customer.prenom}
                                                </option>
                                            ))}
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
                        </>
                    )}
                    {step2 && (
                        <>
                            <div
                                className="text-xl font-medium border-b border-gray-200 dark:border-gray-700 pb-4">Étape
                                2 : Contenu de la commande
                            </div>

                            <div id="form"
                                 className="md:flex md:space-x-4 md:justify-center space-y-2 md:-space-y-0 md:pt-12 pt-4 md:pl-4">
                                <div className="p-8 rounded md:w-2/3">
                                    <div
                                        className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
                                        <div className="text-lg font-medium">Produits</div>
                                        <div>
                                            <AddProductModal products={products} setProducts={setProducts}/>
                                        </div>
                                    </div>
                                    <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
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
                                                {
                                                    products.map((product) => (
                                                        <Table.Row key={product.id}>
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
                                                        </Table.Row>
                                                    ))
                                                }
                                            </Table.Body>
                                        </Table>
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
                        </>
                    )}
                </div>
            </div>
        </ConnectedLayout>
    )
}

export default CreateOrder;