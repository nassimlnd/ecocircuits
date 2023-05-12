import { React, useEffect, useState } from "react";
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

  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Commandes
          </h1>
        </div>
      </header>

      <div className="relative mx-10 mt-5 md:mx-52 md:mt-10 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Numéro
              </th>
              <th scope="col" className="px-6 py-3">
                Date de commande
              </th>
              <th scope="col" className="px-6 py-3">
                Numéro client
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {commandes.map((commande) => (
                <tr
                  key={commande.id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {commande.id}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {commande.dateCommande}
                  </th>
                  <td className="px-6 py-4">{commande.idClient}</td>
                  <td className="px-6 py-4 space-x-2">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Modifier
                    </a>

                    <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Supprimer
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default CommandesList;
