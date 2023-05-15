import {React, useEffect, useState} from "react";
import {Table} from "flowbite-react";
import CommandesService from "../services/CommandesService";
import AuthService from "../services/AuthService";

function CommandesList() {

    if (!AuthService.getCurrentUser()) {
        window.location.href = "/login";
    }

    const [loading, setLoading] = useState(true);
    const [commandes, setCommandes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await CommandesService.getCommandes();
            setCommandes(response.data);
            setLoading(false);
        };
        fetchData();
    }, []);

    function redirectToCommandeDetails(id) {
        window.location.href = "/order/" + id;
    }

    return (
        <div>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Commandes
                    </h1>
                </div>
            </header>

            <div className="relative mx-10 mt-5 md:mx-72 md:mt-10 overflow-x-auto shadow-md sm:rounded-lg">
                <Table hoverable={true}>
                    <Table.Head>
                        <Table.HeadCell>
                            Numéro
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Date de commande
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Numéro du client
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Actions
                            <span className="sr-only">
                            Edit
                          </span>
                        </Table.HeadCell>
                    </Table.Head>
                    {!loading ? (
                        <Table.Body className="divide-y">
                            {commandes.map((commande) => (
                                <Table.Row className="cursor-pointer" key={commande.id}
                                           onClick={() => window.location.href = "/order/" + commande.id}>
                                    <Table.Cell>
                                        {commande.id}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {commande.dateCommande}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {commande.clientId}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <a href={"/commandes/" + commande.id + "/edit"}>
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700 transition duration-150 ease-in-out"
                                            >
                                                Modifier
                                            </button>
                                        </a>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    ) : null}
                </Table>
            </div>
        </div>
    );
}

export default CommandesList;
