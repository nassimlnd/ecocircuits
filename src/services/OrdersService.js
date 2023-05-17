import getInstance from "../helpers/axios_helper";

let axios = getInstance();

const API_URL = axios.defaults.baseURL + "/commandes";

class OrdersService {
  async getCommandes() {
    return axios.get(API_URL);
  }

  getCommande(id) {
    return axios.get(API_URL + "/" + id);
  }

  createCommande(commande) {
    return axios.post(API_URL, commande);
  }

  updateCommande(id, commande) {
    return axios.put(API_URL + "/" + id, commande);
  }

  deleteCommande(id) {
    return axios.delete(API_URL + "/" + id);
  }
}
export default new OrdersService();
