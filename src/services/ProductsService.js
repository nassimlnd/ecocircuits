import React from "react";
import getInstance from "../helpers/axios_helper";

let axios = getInstance();

const API_URL = axios.defaults.baseURL + "/produits";

class ProductsService {

    getProducts() {
        return axios.get(API_URL);
    }

    getProduct(id) {
        return axios.get(API_URL + "/" + id);
    }

    createProduct(product) {
        return axios.post(API_URL, product);
    }

    updateProduct(id, product) {
        return axios.put(API_URL + "/" + id, product);
    }

    deleteProduct(id) {
        return axios.delete(API_URL + "/" + id);
    }

    getProductsByProducteur(id) {
        return axios.get(API_URL + "/producteur/" + id);
    }

}

export default new ProductsService();