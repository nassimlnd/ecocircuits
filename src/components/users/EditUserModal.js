import {Fragment, React, useEffect, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {Button, Checkbox, Label, Spinner, TextInput} from "flowbite-react";
import {HiMail, HiPencilAlt} from "react-icons/hi";
import CustomersService from "../../services/CustomersService";
import UsersService from "../../services/UsersService";

export default function EditUserModal({user, fetchUsers}) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [successAnimation, setSuccessAnimation] = useState(false);
    const [errorAnimation, setErrorAnimation] = useState(false);

    const [admin, setAdmin] = useState(false);
    const [orga, setOrga] = useState(false);
    const [prod, setProd] = useState(false);

    const cancelButtonRef = useRef(null);

    const setRoles = () => {
        user.roles.map((role) => {
            switch (role.name) {
                case "ROLE_ADMIN":
                    setAdmin(true);
                    break;
                case "ROLE_ORGANISATEUR":
                    setOrga(true);
                    break;
                case "ROLE_PRODUCTEUR":
                    setProd(true);
                    break;
            }
        });
    }

    const handleAdminChange = () => {
        setAdmin(!admin);
    }

    const handleOrgaChange = () => {
        setOrga(!orga);
    }

    const handleProdChange = () => {
        setProd(!prod);
    }

    const onEditUser = async (event) => {
        setLoading(true);

        const userRoles = [];

        if (event.target.admin.checked) {
            userRoles.push("admin");
        }
        if (event.target.orga.checked) {
            userRoles.push("orga");
        }
        if (event.target.prod.checked) {
            userRoles.push("prod");
        }

        let newUser = {
            username: event.target.userUsername.value,
            email: event.target.userEmail.value,
            password: event.target.userPassword.value,
            roles: userRoles
        }

        console.log(newUser);

        const response = await UsersService.updateUser(user.id, newUser);
        console.log(response.data);

        setLoading(false);
        if (response.status === 200) {
            setSuccessAnimation(true);
            setTimeout(() => {
                setOpen(false);
                fetchUsers();
            }, 1500);
            setTimeout(() => {
                setSuccessAnimation(false);
            }, 1600);
        } else {
            setErrorAnimation(true);
            setTimeout(() => {
                setOpen(false);
            }, 2000);
            setTimeout(() => {
                setErrorAnimation(false);
            }, 2100);
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

            <Button
                onClick={() => {
                    setRoles();
                    setOpen(true);
                }}
            >
                <HiPencilAlt className="mr-2 text-lg"/>
                Modifier
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
                                    className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                                    <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
                                        {!loading && !successAnimation && !errorAnimation ? (
                                            <div>
                                                <div
                                                    className="flex items-start justify-between rounded-t px-5 pt-5 border-b border-gray-200 !p-6 dark:border-gray-700">
                                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                                        <strong>Modifier l'utilisateur n°{user.id}</strong>
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
                                                <form onSubmit={onEditUser}>
                                                    <div className="p-6">
                                                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                                            <div><label
                                                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                htmlFor="userUsername">Identifiant</label>
                                                                <div className="flex mt-1">
                                                                    <div className="relative w-full"><input
                                                                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                        id="userUsername" name="userUsername"
                                                                        placeholder="francois37" required={true}
                                                                        defaultValue={user.username}/></div>
                                                                </div>
                                                            </div>
                                                            <div><label
                                                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                htmlFor="userPassword">Nouveau mot de passe</label>
                                                                <div className="flex mt-1">
                                                                    <div className="relative w-full"><input
                                                                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                                                                        id="userPassword" name="userPassword"
                                                                        type="password"
                                                                        placeholder="••••••••" required={true}
                                                                    /></div>
                                                                </div>
                                                            </div>
                                                            <div><label
                                                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                htmlFor="userEmail">Email</label>
                                                                <div className="flex mt-1">
                                                                    <div className="relative w-full"><TextInput
                                                                        icon={HiMail}
                                                                        id="userEmail"
                                                                        defaultValue={user.email}
                                                                        name="userEmail"
                                                                        type="email"
                                                                        placeholder="claude.françois@ecocircuits.com"
                                                                        required={true}
                                                                    /></div>
                                                                </div>
                                                            </div>
                                                            <div><label
                                                                className="text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                htmlFor="userRoles">Rôles</label>
                                                                <div className="flex mt-1">
                                                                    <div className="relative w-full">
                                                                        <div className="flex">
                                                                            <Checkbox
                                                                                id="admin"
                                                                                name="admin"
                                                                                label="Administrateur"
                                                                                checked={admin}
                                                                                onChange={handleAdminChange}
                                                                            />
                                                                            <Label
                                                                                htmlFor="admin"
                                                                                className="ml-2 text-sm text-gray-500 dark:text-gray-300">
                                                                                Administrateur
                                                                            </Label>
                                                                        </div>
                                                                        <div className="flex">
                                                                            <Checkbox
                                                                                id="orga"
                                                                                name="orga"
                                                                                label="Organisateur"
                                                                                checked={orga}
                                                                                onChange={handleOrgaChange}
                                                                            />
                                                                            <Label htmlFor="orga"
                                                                                   className="ml-2 text-sm text-gray-500 dark:text-gray-300">
                                                                                Organisateur
                                                                            </Label>
                                                                        </div>
                                                                        <div className="flex">
                                                                            <Checkbox
                                                                                id="prod"
                                                                                name="prod"
                                                                                label="Producteur"
                                                                                checked={prod}
                                                                                onChange={handleProdChange}
                                                                            />
                                                                            <Label htmlFor="prod"
                                                                                   className="ml-2 text-sm text-gray-500 dark:text-gray-300">
                                                                                Producteur
                                                                            </Label>
                                                                        </div>
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
                                                            className="flex items-center rounded-md text-sm px-3 py-2">Modifier l'utilisateur</span>
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
                                                            Modification en cours...
                                                        </p>
                                                    </div>)}
                                                {successAnimation && (
                                                    <div
                                                        className="flex flex-col items-center pt-4 mx-auto gap-y-6 text-center">
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
                                                            Utilisateur modifié avec succès !
                                                        </p>
                                                    </div>
                                                )}
                                                {errorAnimation && (
                                                    <div
                                                        className="flex flex-col items-center pt-4 mx-auto gap-y-6 text-center">
                                                        <div
                                                            className="mb-4 mt-10 rounded-full border-4 border-red-600">
                                                            <svg className="fill-red-600 text-7xl text-red-600"
                                                                 stroke="currentColor" fill="none" strokeWidth="0"
                                                                 viewBox="0 0 24 24"
                                                                 height="1em" width="1em"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      strokeWidth="2"
                                                                      d="M6 18L18 6M6 6l12 12"></path>
                                                            </svg>
                                                        </div>

                                                        <p className="text-lg mb-8 dark:text-gray-300">
                                                            Une erreur est survenue lors de la modification de
                                                            l'utilisateur.
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
    );
}
