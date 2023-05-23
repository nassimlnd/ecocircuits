import {Fragment, React, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {ExclamationTriangleIcon} from "@heroicons/react/24/outline";
import {Button, Spinner, TextInput} from "flowbite-react";
import {HiMail} from "react-icons/hi";
import CustomersService from "../../services/CustomersService";

export default function AddCustomerModal({fetchCustomers}) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [successAnimation, setSuccessAnimation] = useState(false);
    const [errorAnimation, setErrorAnimation] = useState(false);

    const cancelButtonRef = useRef(null);

    const addCustomer = async (event) => {
        setLoading(true);
        let customer = {
            nom: document.getElementById("customerLastName").value,
            prenom: document.getElementById("customerFirstName").value,
            email: document.getElementById("email").value,
            telephone: document.getElementById("customerPhoneNumber").value,
        }
        const response = await CustomersService.create(customer);
        console.log(response);
        setLoading(false);
        if (response.status === 201) {
            setSuccessAnimation(true);
            setTimeout(() => {
                setOpen(false);
                fetchCustomers();
            }, 1500);
            setTimeout(() => {
                setSuccessAnimation(false);
            }, 1600);
        } else {
            setErrorAnimation(true);
            setTimeout(() => {
                setOpen(false);
                setErrorAnimation(false);
            }, 2000);
        }

        event.preventDefault();
    }

    return (
        <>
            <style>
                {".checkmark__circle {\n" +
                    "  stroke-dasharray: 166;\n" +
                    "  stroke-dashoffset: 166;\n" +
                    "  stroke-width: 2;\n" +
                    "  stroke-miterlimit: 10;\n" +
                    "  stroke: #7ac142;\n" +
                    "  fill: none;\n" +
                    "  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n" +
                    "}\n" +
                    ".checkmark {\n" +
                    "  width: 56px;\n" +
                    "  height: 56px;\n" +
                    "  border-radius: 50%;\n" +
                    "  display: block;\n" +
                    "  stroke-width: 2;\n" +
                    "  stroke: #fff;\n" +
                    "  stroke-miterlimit: 10;\n" +
                    "  margin: 10% auto;\n" +
                    "  box-shadow: inset 0px 0px 0px #7ac142;\n" +
                    "  animation: fill 0.4s ease-in-out 0.4s forwards,\n" +
                    "  scale 0.3s ease-in-out 0.9s both;\n" +
                    "}\n" +
                    ".checkmark__check {\n" +
                    "  transform-origin: 50% 50%;\n" +
                    "  stroke-dasharray: 48;\n" +
                    "  stroke-dashoffset: 48;\n" +
                    "  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n" +
                    "}\n" +
                    "@keyframes stroke {\n" +
                    "  100% {\n" +
                    "    stroke-dashoffset: 0;\n" +
                    "  }\n" +
                    "}\n" +
                    "@keyframes scale {\n" +
                    "  0%,\n" +
                    "  100% {\n" +
                    "    transform: none;\n" +
                    "  }\n" +
                    "  50% {\n" +
                    "    transform: scale3d(1.1, 1.1, 1);\n" +
                    "  }\n" +
                    "}\n" +
                    "@keyframes fill {\n" +
                    "  100% {\n" +
                    "    box-shadow: inset 0px 0px 0px 30px #7ac142;\n" +
                    "  }\n" +
                    "}\n"}
            </style>

            <Button onClick={() => setOpen(true)}>Ajouter un client</Button>

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
                                        {!loading && !successAnimation && !errorAnimation ? (
                                            <div>
                                                <div
                                                    className="flex items-start justify-between rounded-t px-5 pt-5 border-b border-gray-200 !p-6 dark:border-gray-700">
                                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                                        <strong>Ajouter un client</strong>
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
                                                            strokeWidth="0"
                                                            viewBox="0 0 24 24"
                                                            aria-hidden="true"
                                                            className="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M6 18L18 6M6 6l12 12"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <form onSubmit={addCustomer}>
                                                    <div className="p-6">
                                                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                                            <div><label
                                                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                htmlFor="customerLastName">Nom</label>
                                                                <div className="flex mt-1">
                                                                    <div className="relative w-full"><input
                                                                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                        id="customerLastName" name="customerLastName"
                                                                        placeholder="François" required={true}/></div>
                                                                </div>
                                                            </div>
                                                            <div><label
                                                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                htmlFor="customerFirstName">Prenom</label>
                                                                <div className="flex mt-1">
                                                                    <div className="relative w-full"><input
                                                                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                        id="customerFirstName" name="customerFirstName"
                                                                        placeholder="Claude" required={true}/></div>
                                                                </div>
                                                            </div>
                                                            <div><label
                                                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                htmlFor="email">Email</label>
                                                                <div className="flex mt-1">
                                                                    <div className="relative w-full"><TextInput
                                                                        icon={HiMail}
                                                                        id="email"
                                                                        type="email"
                                                                        placeholder="claude.françois@ecocircuits.com"
                                                                        required={true}
                                                                    /></div>
                                                                </div>
                                                            </div>
                                                            <div><label
                                                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                htmlFor="price">Numéro de téléphone</label>
                                                                <div className="flex mt-1">
                                                                    <div className="relative w-full"><input
                                                                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                        id="customerPhoneNumber"
                                                                        name="customerPhoneNumber"
                                                                        type="number"
                                                                        placeholder="+33612345678" required={true}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div
                                                        className="flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600 border-t">
                                                        <button
                                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg"
                                                            type="submit"><span
                                                            className="flex items-center rounded-md text-sm px-3 py-2">Ajouter le client</span>
                                                        </button>
                                                        <button
                                                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg"
                                                            type="button"
                                                            onClick={() => setOpen(false)}
                                                        ><span
                                                            className="flex items-center rounded-md text-sm px-3 py-2">Annuler</span>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>) : (
                                            <div
                                                className="flex items-start justify-between rounded-t px-5 pt-5 px-3 pt-3 pb-0">
                                                {loading && (
                                                    <div
                                                        className="flex flex-col items-center pt-4 mx-auto gap-y-6 text-center">
                                                        <Spinner
                                                            aria-label="Extra large spinner example"
                                                            size="xl"
                                                            className="text-center mb-4 mt-8"
                                                        />
                                                        <p className="text-lg mb-8 text-gray-500 dark:text-gray-300">
                                                            Création en cours...
                                                        </p>
                                                    </div>)}
                                                {successAnimation && (
                                                    <div
                                                        className="flex flex-col items-center pt-4 mx-auto gap-y-6 text-center">
                                                        {/*<svg stroke="currentColor" fill="none" stroke-width="0"
                                                         viewBox="0 0 24 24" className="text-7xl text-green-600"
                                                         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    <svg className="fill-green-500 h-16 w-16 animate-jump-in animate-once animate-ease-out animate-normal animate-fill-forwards"
                                                        xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" id="Flat">
                                                        <path d="M174.89307,101.2384a3.99936,3.99936,0,0,1-.13184,5.65528l-58.666,56a3.99989,3.99989,0,0,1-5.52343,0l-29.334-28a4,4,0,0,1,5.52344-5.78711l26.57227,25.36377,55.90429-53.36377A3.99936,3.99936,0,0,1,174.89307,101.2384Zm53.10644,26.76172a100,100,0,1,1-100-100A100.113,100.113,0,0,1,227.99951,128.00012Zm-8,0a92,92,0,1,0-92,92A92.10447,92.10447,0,0,0,219.99951,128.00012Z"/>
                                                    </svg>*/}
                                                        <svg
                                                            className="checkmark"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 52 52"
                                                        >
                                                            <circle className="checkmark__circle" cx="26" cy="26" r="25"
                                                                    fill="none"/>
                                                            <path
                                                                className="checkmark__check"
                                                                fill="none"
                                                                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                                            />
                                                        </svg>
                                                        <p className="text-lg pb-8 dark:text-gray-300">
                                                            Client crée avec succès !
                                                        </p>
                                                    </div>
                                                )}
                                                {errorAnimation && (
                                                    <div
                                                        className="flex flex-col items-center pt-4 mx-auto gap-y-6 text-center">
                                                        <div
                                                            className="mb-4 mt-10 rounded-full border-4 border-red-600">
                                                            <svg className="fill-red-600"
                                                                 stroke="currentColor" fill="none" stroke-width="0"
                                                                 viewBox="0 0 24 24" className="text-7xl text-red-600"
                                                                 height="1em" width="1em"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                      stroke-width="2"
                                                                      d="M6 18L18 6M6 6l12 12"></path>
                                                            </svg>
                                                        </div>

                                                        <p className="text-lg mb-8 dark:text-gray-300">
                                                            Une erreur est survenue lors de la création du client.
                                                        </p>
                                                    </div>)}
                                            </div>)}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
        ;
}
