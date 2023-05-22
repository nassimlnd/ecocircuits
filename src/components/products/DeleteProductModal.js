import {Fragment, React, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {ExclamationTriangleIcon} from "@heroicons/react/24/outline";
import {Button} from "flowbite-react";
import {HiTrash} from "react-icons/hi";

export default function DeleteProductModal({id}) {
    const [open, setOpen] = useState(false);

    const cancelButtonRef = useRef(null);

    return (
        <>
            <Button onClick={() => setOpen(true)}
                    color="failure">
                <HiTrash className="mr-2 text-lg"/>
                Supprimer
            </Button>

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
                                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                                    <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
                                        <div
                                            className="flex items-start justify-between rounded-t px-5 pt-5 px-3 pt-3 pb-0">
                                            <h3 className="text-xl font-medium text-gray-900 dark:text-white"><span
                                                className="sr-only">Supprimer le produit</span></h3>
                                            <button aria-label="Close"
                                                    className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                            >
                                                <svg stroke="currentColor" fill="none" stroke-width="0"
                                                     viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5"
                                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="p-6 px-6 pb-6 pt-0">
                                            <div className="flex flex-col items-center gap-y-6 text-center">
                                                <svg stroke="currentColor" fill="none" stroke-width="0"
                                                     viewBox="0 0 24 24" className="text-7xl text-red-600"
                                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <p className="text-lg text-gray-500 dark:text-gray-300">
                                                    Êtes-vous sûr de vouloir supprimer le produit n°{id} ? Cette action
                                                    est irréversible.
                                                </p>
                                                <div className="flex items-center gap-x-3">
                                                    <Button>
                                                        Oui, je suis sûr
                                                    </Button>
                                                    <Button
                                                        color="failure"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        Non, annuler
                                                    </Button>
                                                </div>
                                            </div>
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
