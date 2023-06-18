import getInstance from "../helpers/axios_helper";

let axios = getInstance();
const API_URL = axios.defaults.baseURL + "/auth";

/**
 * Service d'authentification
 */
class AuthService {
    /**
     * Fonction de connexion d'un utilisateur avec son username et son mot de passe
     * @param username
     * @param password
     */
    login(username, password) {
        axios.post(API_URL + "/login", {
            username: username,
            password: password
        })
            .then((response) => {
                console.log(response);
                if (response.status === 400) {
                    console.log("test")
                    console.log(response.data.error);
                } else {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    window.location.href = "/dashboard";
                    return response.data;
                }
            })
            .catch(error => {
                console.log(error);
                switch (error.response.status) {
                    case 400:
                        console.log("ERROR 400 : " + error.response.data);
                }
            });

    }

    /**
     * Fonction d'inscription d'un producteur
     * @param username
     * @param password
     * @param email
     */
    registerProd(username, password, email) {
        axios.post(API_URL + "/register", {
            username: username,
            password: password,
            email: email,
            "roles": ["prod"]
        })
            .then((response) => {
                window.location.href = "/login";
                return response.data;

            })
            .catch(error => {
                switch (error.response.status) {
                    case 400:
                        console.log("ERROR 400 : " + error.response.data);
                }
            });
    }

    /**
     * Fonction d'inscription d'un organisateur
     * @param username
     * @param password
     * @param email
     */
    registerOrga(username, password, email) {
        axios.post(API_URL + "/register", {
            username: username,
            password: password,
            email: email,
            "roles": ["orga"]
        })
            .then((response) => {
                window.location.href = "/login";
                return response.data;

            })
            .catch(error => {
                switch (error.response.status) {
                    case 400:
                        console.log("ERROR 400 : " + error.response.data);
                }
            });
    }

    /**
     * Fonction de déconnexion d'un utilisateur
     */
    logout() {
        localStorage.removeItem("user");
    }

    /**
     * Fonction qui retourne le header d'authentification de l'utilisateur connecté pour les requêtes HTTP sécurisées à l'API
     * @returns {{Authorization: string}}
     */
    getAuthHeader() {
        return {Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken};
    }

    /**
     * Fonction qui retourne l'utilisateur connecté
     * @returns {any}
     */
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    /**
     * Fonction qui retourne les rôles de l'utilisateur connecté
     * @returns {[string]|[string]|*}
     */
    getCurrentUserRoles() {
        return JSON.parse(localStorage.getItem('user')).roles;
    }

    /**
     * Fonction qui vérifie si l'utilisateur est organisateur
     * @returns {boolean}
     */
    isOrga() {
        return localStorage.getItem('user') !== null && JSON.parse(localStorage.getItem('user')).roles.includes("ROLE_ORGA");
    }

    /**
     * Fonction qui vérifie si l'utilisateur est producteur
     * @returns {boolean}
     */
    isProd() {
        return localStorage.getItem('user') !== null && JSON.parse(localStorage.getItem('user')).roles.includes("ROLE_PROD");
    }

    /**
     * Fonction qui vérifie si l'utilisateur est admin
     * @returns {boolean}
     */
    isAdmin() {
        return localStorage.getItem('user') !== null && JSON.parse(localStorage.getItem('user')).roles.includes("ROLE_ADMIN");
    }


    /**
     * Fonction qui vérifie si le token de l'utilisateur précédent est valide
     * @returns {string|boolean}
     */
    tokenIsValid() {
        if (localStorage.getItem('user') !== null) {
            let token = JSON.parse(localStorage.getItem('user')).accessToken;
            let base64Url = token.split('.')[1];
            let base64;
            let exp;
            try {
                let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                let exp = JSON.parse(window.atob(base64)).exp;

                let now = new Date();
                now = Math.round(now.getTime() / 1000);

                return exp > now;
            } catch (e) {
                console.log(e);
                return false;
            }

        } else {
            return "Vous n'êtes pas connecté";
        }
    }

}

export default new AuthService();