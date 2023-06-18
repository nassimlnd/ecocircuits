import getInstance from "../helpers/axios_helper";

let axios = getInstance();

const API_URL = axios.defaults.baseURL + "/clients";

/**
 * Service de gestion des clients
 */
class CustomersService {

    /**
     * Récupère tous les clients
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getAll() {
        return axios.get(API_URL);
    }

    /**
     * Récupère un client par son id
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    get(id) {
        return axios.get(API_URL + "/" + id);
    }

    /**
     * Crée un client
     * @param data
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    create(data) {
        return axios.post(API_URL, data)
    }

    /**
     * Met à jour un client
     * @param id
     * @param data
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    update(id, data) {
        return axios.put(API_URL + "/" + id, data);
    }

    /**
     * Supprime un client
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    delete(id) {
        return axios.delete(API_URL + "/" + id);
    }

    /**
     * Récupère les commandes d'un client
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getOrdersByCustomer(id) {
        return axios.get(axios.defaults.baseURL + "/commandes/client/" + id);
    }
}

export default new CustomersService();