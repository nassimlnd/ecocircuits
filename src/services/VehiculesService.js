import React from "react";
import getInstance from "../helpers/axios_helper";

let axios = getInstance();

const API_URL = axios.defaults.baseURL + "/vehicules";

class VehiculesService {

    getVehicules() {
        return axios.get(API_URL);
    }

    getVehicule(id) {
        return axios.get(API_URL + "/" + id);
    }

    createVehicule(vehicule) {
        return axios.post(API_URL, vehicule);
    }

    updateVehicule(id, vehicule) {
        return axios.put(API_URL + "/" + id, vehicule);
    }

    deleteVehicule(id) {
        return axios.delete(API_URL + "/" + id);
    }

    getVehiculesByProducteur(id) {
        return axios.get(API_URL + "/producteur/" + id);
    }

}

export default new VehiculesService();