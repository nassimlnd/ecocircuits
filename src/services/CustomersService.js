import getInstance from "../helpers/axios_helper";

let axios = getInstance();

const API_URL = axios.defaults.baseURL + "/clients";

class CustomersService {

    getAll() {
        return axios.get(API_URL);
    }

    get(id) {
        return axios.get(API_URL + "/" + id);
    }

    create(data) {
        return axios.post(API_URL, data)
    }

    update(id, data) {
        return axios.put(API_URL + "/" + id, data);
    }

    delete(id) {
        return axios.delete(API_URL + "/" + id);
    }

    getOrdersByCustomer(id) {
        return axios.get(axios.defaults.baseURL + "/commandes/client/" + id);
    }
}

export default new CustomersService();