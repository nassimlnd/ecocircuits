import getInstance from "../helpers/axios_helper";

let axios = getInstance();

const API_URL = axios.defaults.baseURL + "/commandes";

class OrdersService {
    async getCommandes() {
        return axios.get(API_URL);
    }

    getOrders(id) {
        return axios.get(API_URL + "/" + id);
    }

    createOrders(commande) {
        return axios.post(API_URL, commande);
    }

    updateOrders(id, commande) {
        return axios.put(API_URL + "/" + id, commande);
    }

    deleteOrders(id) {
        return axios.delete(API_URL + "/" + id);
    }

    getOrdersByProduct(id) {
        return axios.get(API_URL + "/produit/" + id);
    }

    getOrdersDetails(id) {
        return axios.get(API_URL + "/info/" + id);
    }
}

export default new OrdersService();
