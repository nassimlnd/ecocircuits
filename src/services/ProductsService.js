import React from "react";
import getInstance from "../helpers/axios_helper";

let axios = getInstance();
const API_URL = axios.defaults.baseURL + "/produits";

/**
 * Service de gestion des produits
 */
class ProductsService {

    /**
     * Récupère la liste des produits
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getProducts() {
        return axios.get(API_URL);
    }

    /**
     * Récupère un produit par son id
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getProduct(id) {
        return axios.get(API_URL + "/" + id);
    }

    /**
     * Créer un produit
     * @param product
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    createProduct(product) {
        return axios.post(API_URL, product);
    }

    /**
     * Met à jour un produit
     * @param id
     * @param product
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    updateProduct(id, product) {
        return axios.put(API_URL + "/" + id, product);
    }

    /**
     * Supprime un produit
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    deleteProduct(id) {
        return axios.delete(API_URL + "/" + id);
    }

    /**
     * Récupère la liste des produits d'un producteur
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getProductsByProducteur(id) {
        return axios.get(API_URL + "/producteur/" + id);
    }

    /**
     * Récupère la liste des produits d'une commande
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getProductsByOrder(id) {
        return axios.get(API_URL + "/commande/" + id);
    }

}

export default new ProductsService();