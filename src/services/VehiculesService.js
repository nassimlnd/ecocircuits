import React from "react";
import getInstance from "../helpers/axios_helper";

let axios = getInstance();
const API_URL = axios.defaults.baseURL + "/vehicules";

/**
 * Service de gestion des véhicules
 */
class VehiculesService {

    /**
     * Récupère la liste des véhicules
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getVehicules() {
        return axios.get(API_URL);
    }

    /**
     * Récupère un véhicule par son id
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getVehicule(id) {
        return axios.get(API_URL + "/" + id);
    }

    /**
     * Crée un véhicule
     * @param vehicule
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    createVehicule(vehicule) {
        return axios.post(API_URL, vehicule);
    }

    /**
     * Met à jour un véhicule
     * @param id
     * @param vehicule
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    updateVehicule(id, vehicule) {
        return axios.put(API_URL + "/" + id, vehicule);
    }

    /**
     * Supprime un véhicule
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    deleteVehicule(id) {
        return axios.delete(API_URL + "/" + id);
    }

    /**
     * Récupère la liste des véhicules d'un producteur
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getVehiculesByProducteur(id) {
        return axios.get(API_URL + "/producteur/" + id);
    }

}

export default new VehiculesService();