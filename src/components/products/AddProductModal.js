import {Fragment, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {ExclamationTriangleIcon} from "@heroicons/react/24/outline";
import {Button} from "flowbite-react";

/**
 * Modal d'ajout de produit
 * @returns {JSX.Element}
 * @constructor
 */
export default function AddProductModal() {
    const [open, setOpen] = useState(false);

    const cancelButtonRef = useRef(null);

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
                                    className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-xl">
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
                                                    <div><label
                                                        className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        htmlFor="productName">Libelle</label>
                                                        <div className="flex mt-1">
                                                            <div className="relative w-full"><input
                                                                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                id="productName" name="productName"
                                                                placeholder="Betterave crue"/></div>
                                                        </div>
                                                    </div>
                                                    <div><label
                                                        className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        htmlFor="category">Type</label>
                                                        <div className="flex mt-1">
                                                            <div className="relative w-full"><input
                                                                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                id="category" name="category" placeholder="Légumes"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div><label
                                                        className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        htmlFor="brand">TVA</label>
                                                        <div className="flex mt-1">
                                                            <div className="relative w-full"><input
                                                                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                id="brand" name="brand" placeholder="5%"/></div>
                                                        </div>
                                                    </div>
                                                    <div><label
                                                        className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        htmlFor="price">Prix</label>
                                                        <div className="flex mt-1">
                                                            <div className="relative w-full"><input
                                                                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                id="price" name="price" type="number"
                                                                placeholder="3 €"/></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label
                                                            className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                            htmlFor="reference">Référence</label>
                                                        <div className="flex mt-1">
                                                            <div className="relative w-full"><input
                                                                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                id="reference" name="reference" placeholder="BETCRU"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label
                                                            className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                            htmlFor="origineProduction">Origine production</label>
                                                        <div className="flex mt-1">
                                                            <div className="relative w-full"><input
                                                                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                id="origineProduction" name="origineProduction"
                                                                placeholder="Indre et loire"/></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label
                                                            className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                            htmlFor="origineTransformation">Origine
                                                            transformation</label>
                                                        <div className="flex mt-1">
                                                            <div className="relative w-full"><input
                                                                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                id="origineTransformation" name="origineTransformation"
                                                                placeholder="Indre et loire"/></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label
                                                            className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                            htmlFor="agriculture">Agriculture</label>
                                                        <div className="flex mt-1">
                                                            <div className="relative w-full"><input
                                                                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                id="agriculture" name="agriculture"
                                                                placeholder="Biologique"/></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label
                                                            className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                            htmlFor="conditionnement">Conditionnement</label>
                                                        <div className="flex mt-1">
                                                            <div className="relative w-full"><input
                                                                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                id="conditionnement" name="conditionnement"
                                                                placeholder="Cagette"/></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label
                                                            className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                            htmlFor="poids">Poids (en kg)</label>
                                                        <div className="flex mt-1">
                                                            <div className="relative w-full"><input
                                                                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                id="poids" name="poids"
                                                                placeholder="5 kg"/></div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                        <div
                                            className="flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600 border-t">
                                            <Button href="#">
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
    );
}
