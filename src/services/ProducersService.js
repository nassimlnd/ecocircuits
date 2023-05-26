import getInstance from "../helpers/axios_helper";

let axios = getInstance();

const API_URL = axios.defaults.baseURL + '/producteurs';

class ProducersService {

    getAll() {
        return axios.get(API_URL);
    }

    get(id) {
        return axios.get(API_URL + '/' + id);
    }

    create(data) {
        return axios.post(API_URL, data);
    }

    update(id, data) {
        return axios.put(API_URL + '/' + id, data);
    }

    delete(id) {
        return axios.delete(API_URL + '/' + id);
    }

    getProducersByProduct(id) {
        return axios.get(API_URL + "/produit/" + id);
    }

}

export default new ProducersService();