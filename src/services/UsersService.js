import getInstance from "../helpers/axios_helper";

let axios = getInstance();

const API_URL = axios.defaults.baseURL + "/admin/users";

class UsersService {

    getAllUsers() {
        return axios.get(API_URL);
    }

    getUser(id) {
        return axios.get(API_URL + "/" + id);
    }

    createUser(user) {
        return axios.post(API_URL, user);
    }

    updateUser(id, user) {
        return axios.put(API_URL + "/" + id, user);
    }

    deleteUser(id) {
        return axios.delete(API_URL + "/" + id);
    }

    findByUsername(username) {
        return axios.get(API_URL + "?username=" + username);
    }

    async getRolesById(id) {
        const response = await axios.get(API_URL + "/" + id + "/roles");

        return response.data;
    }

    getUsersByRole(id) {
        return axios.get(axios.defaults.baseURL + "/admin/roles/" + id + "/users");
    }

    getAllUsersWithRoles() {
        return axios.get(API_URL + "/usersRoles");
    }

    register(user) {
        return axios.post(axios.defaults.baseURL + "/auth/signup", user);
    }

}

export default new UsersService();