import axios from "axios";

const API_URL = "http://localhost:9020/api/commandes";

class CommandesService {
  async getCommandes() {
    try {
      return await CommandesService.getCommandes();
    } catch (error) {
      console.log(error);
    }

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
export default new CommandesService();
