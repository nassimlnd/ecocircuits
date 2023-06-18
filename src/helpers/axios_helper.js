import axios from "axios";

/**
 * Fonction qui permet de créer une instance d'axios avec le token de l'utilisateur
 * @returns {AxiosStatic | axios.AxiosStatic | axios}
 */
function getInstance() {
    //axios.defaults.baseURL = 'https://circuitscourts-production.up.railway.app/api';
    axios.defaults.baseURL = 'http://localhost:9020/api';

    if (localStorage.getItem('user')) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken;
        return axios;
    } else return axios;
}

export default getInstance;
