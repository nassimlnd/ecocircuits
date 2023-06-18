import getInstance from "../helpers/axios_helper";

let axios = getInstance();
const API_URL = axios.defaults.baseURL + "/commandes";

/**
 * Service de gestion des commandes
 */
class OrdersService {

    /**
     * Récupère toutes les commandes
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    async getCommandes() {
        return axios.get(API_URL);
    }

    /**
     * Récupère une commande par son id
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getOrders(id) {
        return axios.get(API_URL + "/" + id);
    }

    /**
     * Créer une commande
     * @param commande
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    createOrders(commande) {
        return axios.post(API_URL, commande);
    }

    /**
     * Met à jour une commande
     * @param id
     * @param commande
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    updateOrders(id, commande) {
        return axios.put(API_URL + "/" + id, commande);
    }

    /**
     * Supprime une commande
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    deleteOrders(id) {
        return axios.delete(API_URL + "/" + id);
    }

    /**
     * Récupère toutes les commandes d'un client
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getOrdersByProduct(id) {
        return axios.get(API_URL + "/produit/" + id);
    }

    /**
     * Récupère toutes les commandes d'un client
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getOrdersDetails(id) {
        return axios.get(API_URL + "/info/" + id);
    }
}

export default new OrdersService();
