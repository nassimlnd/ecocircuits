import axios from "axios";

function getInstance() {
    axios.defaults.baseURL = 'http://localhost:9020/api';

    if (localStorage.getItem('user')) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken;
        return axios;
    } else return axios;
}

export default getInstance;
