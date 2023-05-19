import axios from "axios";

function getInstance() {
    axios.defaults.baseURL = 'https://circuitscourts-production.up.railway.app/api';

    if (localStorage.getItem('user')) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken;
        return axios;
    } else return axios;
}

export default getInstance;
