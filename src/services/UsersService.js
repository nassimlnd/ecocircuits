import getInstance from "../helpers/axios_helper";

let axios = getInstance();
const API_URL = axios.defaults.baseURL + "/admin/users";

/**
 * Service de gestion des utilisateurs
 */
class UsersService {

    /**
     * Récupère tous les utilisateurs
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getAllUsers() {
        return axios.get(API_URL);
    }

    /**
     * Récupère un utilisateur par son id
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getUser(id) {
        return axios.get(API_URL + "/" + id);
    }

    /**
     * Crée un utilisateur
     * @param user
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    createUser(user) {
        return axios.post(API_URL, user);
    }

    /**
     * Met à jour un utilisateur
     * @param id
     * @param user
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    updateUser(id, user) {
        return axios.put(API_URL + "/" + id, user);
    }

    /**
     * Supprime un utilisateur
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    deleteUser(id) {
        return axios.delete(API_URL + "/" + id);
    }

    /**
     * Récupère un utilisateur par son username
     * @param username
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    findByUsername(username) {
        return axios.get(API_URL + "?username=" + username);
    }

    /**
     * Récupère les rôles d'un utilisateur
     * @param id
     * @returns {Promise<any>}
     */
    async getRolesById(id) {
        const response = await axios.get(API_URL + "/" + id + "/roles");

        return response.data;
    }

    /**
     * Récupère les utilisateurs d'un rôle
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getUsersByRole(id) {
        return axios.get(axios.defaults.baseURL + "/admin/roles/" + id + "/users");
    }

    /**
     * Récupère tous les utilisateurs avec leurs rôles
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getAllUsersWithRoles() {
        return axios.get(API_URL + "/usersRoles");
    }

    /**
     * Récupère tous les utilisateurs avec leurs rôles
     * @param user
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    register(user) {
        return axios.post(axios.defaults.baseURL + "/auth/signup", user);
    }

}

export default new UsersService();