import React, {Fragment, useEffect, useRef, useState} from "react";
import {Button, Label, Select} from "flowbite-react";
import {Combobox, Dialog, Transition} from "@headlessui/react";
import ProductsService from "../../services/ProductsService";
import ComboboxProducts from "./ComboboxProducts";
import {all} from "axios";

export default function AddProductModal({products, addProduct}) {
    const [open, setOpen] = useState(false);
    const [allProducts, setAllProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState({});
    const [quantite, setQuantite] = useState(1);

    const cancelButtonRef = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const responseProducts = await ProductsService.getProducts();
            setAllProducts(responseProducts.data);
        }

        fetchProducts();
    }, [])

    const handleQuantityChange = event => {
        const value = Math.max(1, Math.min(9999, Number(event.target.value)));
        setQuantite(value);
    }


    const handleAddClick = () => {
        console.log(selectedProduct);
        if (selectedProduct.libelle != null && document.getElementById("quantite").value !== "") {
            selectedProduct.quantite = document.getElementById("quantite").value;
            addProduct(selectedProduct);
            setOpen(false);
            setSelectedProduct({});
        }
    }

    return (
        <>
            <Button onClick={() => setOpen(true)}>Ajouter un produit</Button>

            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-40"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel
                                    className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                                    <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
                                        <div
                                            className="flex items-start justify-between rounded-t px-5 pt-5 border-b border-gray-200 !p-6 dark:border-gray-700">
                                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                                <strong>Ajouter un produit</strong>
                                            </h3>
                                            <button
                                                onClick={() => setOpen(false)}
                                                aria-label="Close"
                                                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                                type="button"
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    className="h-5 w-5"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="p-6">
                                            <form>
                                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                                    <div className="lg:col-span-2">
                                                        {/*<Label htmlFor="allProducts">
                                                            Produit
                                                        </Label>
                                                        <Select
                                                            id="allProducts"
                                                        >
                                                            {allProducts.map((product) => (
                                                                <option key={product.id}>
                                                                    {product.libelle}
                                                                </option>
                                                            ))}
                                                        </Select>*/}
                                                        <ComboboxProducts allProducts={allProducts} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
                                                    </div>
                                                    <div><label
                                                        className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        htmlFor="quantite">Quantité</label>
                                                        <div className="flex mt-1">
                                                            <div className="relative w-full"><input
                                                                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                id="quantite" name="quantite" type="number" value={quantite} onChange={handleQuantityChange}
                                                                placeholder="159"/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div
                                            className="flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600 border-t">
                                            <Button
                                                onClick={handleAddClick}
                                            >
                                                Ajouter le produit
                                            </Button>
                                            <Button
                                                onClick={() => setOpen(false)}
                                                color="failure"
                                            >
                                                Annuler
                                            </Button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}