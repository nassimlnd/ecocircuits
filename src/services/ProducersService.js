import getInstance from "../helpers/axios_helper";

let axios = getInstance();
const API_URL = axios.defaults.baseURL + '/producteurs';

/**
 * Service de gestion des producteurs
 */
class ProducersService {

    /**
     * Récupère tous les producteurs
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getAll() {
        return axios.get(API_URL);
    }

    /**
     * Récupère un producteur par son id
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    get(id) {
        return axios.get(API_URL + '/' + id);
    }

    /**
     * Créé un producteur
     * @param data
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    create(data) {
        return axios.post(API_URL, data);
    }

    /**
     * Met à jour un producteur
     * @param id
     * @param data
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    update(id, data) {
        return axios.put(API_URL + '/' + id, data);
    }

    /**
     * Supprime un producteur
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    delete(id) {
        return axios.delete(API_URL + '/' + id);
    }

    /**
     * Récupère tous les producteurs d'un produit
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getProducersByProduct(id) {
        return axios.get(API_URL + "/produit/" + id);
    }

    /**
     * Récupère tous les producteurs d'une commande
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getProducersByOrder(id) {
        return axios.get(API_URL + "/commande/" + id);
    }
}

export default new ProducersService();