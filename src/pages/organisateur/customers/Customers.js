import React, {useEffect, useState} from "react";
import ConnectedLayout from "../../../layouts/ConnectedLayout";
import {Breadcrumb, Button, Pagination, Spinner, Table} from "flowbite-react";
import {HiHome, HiPencil, HiPencilAlt, HiTrash} from "react-icons/hi";
import AddProductModal from "../../../components/products/AddProductModal";
import EditProductModal from "../../../components/products/EditProductModal";
import DeleteProductModal from "../../../components/products/DeleteProductModal";
import CustomersService from "../../../services/CustomersService";
import AddCustomerModal from "../../../components/customers/AddCustomerModal";
import DeleteCustomerModal from "../../../components/customers/DeleteCustomerModal";
import EditCustomerModal from "../../../components/customers/EditCustomerModal";

/**
 * Page des clients
 * @returns {JSX.Element}
 * @constructor
 */
function Customers() {
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchData = async () => {
        setCustomers([]);
        setLoading(true);
        const response = await CustomersService.getAll();
        setCustomers(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    var totalPages = Math.ceil(customers.length / 10);

    return (
        <ConnectedLayout>
            <div className="flex-grow dark:bg-gray-800 ">
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
                            <Breadcrumb.Item>
                                Clients
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Clients</h1>
                    </div>
                    <div className="block items-center justify-between space-y-2 sm:space-y-0 sm:flex">
                        <div>
                            <form className="flex items-center w-96">
                                <label htmlFor="simple-search" className="sr-only">Rechercher un client</label>
                                <div className="relative w-full">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Rechercher un client" required/>
                                </div>
                                <button type="submit"
                                        className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                    <span className="sr-only">Rechercher</span>
                                </button>
                            </form>
                        </div>
                        <div>
                            <>
                                <AddCustomerModal fetchCustomers={fetchData}/>
                            </>
                        </div>


                    </div>
                </div>
                <div>
                    {!loading ? (<div className="relative overflow-x-auto sm:rounded-lg">
                            <Table hoverable={true}>
                                <Table.Head>
                                    <Table.HeadCell>
                                        Numéro
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Nom
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Prénom
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Email
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Actions
                                    </Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {customers.slice(0, 10).map((customer) => (
                                        <Table.Row
                                            className="cursor-pointer bg-white dark:bg-gray-800 dark:text-white font-semibold border-b border-gray-200 dark:border-gray-700"
                                            key={customer.id}>
                                            <Table.Cell
                                                onClick={() => window.location.href = "/customers/" + customer.id}>
                                                {customer.id}
                                            </Table.Cell>
                                            <Table.Cell
                                                onClick={() => window.location.href = "/customers/" + customer.id}>
                                                {customer.nom}
                                            </Table.Cell>
                                            <Table.Cell
                                                onClick={() => window.location.href = "/customers/" + customer.id}>
                                                {customer.prenom}
                                            </Table.Cell>
                                            <Table.Cell
                                                onClick={() => window.location.href = "/customers/" + customer.id}>
                                                {customer.email}
                                            </Table.Cell>
                                            <Table.Cell className="flex space-x-2">
                                                <EditCustomerModal customer={customer} fetchCustomers={fetchData}/>
                                                <DeleteCustomerModal id={customer.id} fetchCustomers={fetchData} />
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>

                            <div className="mb-4">
                                <Pagination
                                    nextLabel="Suivant"
                                    previousLabel="Précédent"
                                    className="text-center"
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={(page) => {
                                        console.log(page)
                                    }}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="text-center pt-40 flex items-center justify-center space-x-3">
                            <Spinner
                                aria-label="Extra large spinner example"
                                size="xl"
                                className="text-center"
                            />
                            <span className="dark:text-white">Chargement...</span>
                        </div>
                    )}
                </div>
            </div>
        </ConnectedLayout>
    )
}

export default Customers;