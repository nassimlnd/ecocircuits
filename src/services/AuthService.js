import getInstance from "../helpers/axios_helper";

let axios = getInstance();

const API_URL = axios.defaults.baseURL + "/auth";

class AuthService {
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
                switch (error.response.status) {
                    case 400:
                        console.log("ERROR 400 : " + error.response.data);
                }
            });

    }

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

    logout() {
        localStorage.removeItem("user");
    }

    getAuthHeader() {
        return {Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken};
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getCurrentUserRoles() {
        return JSON.parse(localStorage.getItem('user')).roles;
    }

    isOrga() {
        return localStorage.getItem('user') !== null && JSON.parse(localStorage.getItem('user')).roles.includes("ROLE_ORGA");
    }

    isProd() {
        return localStorage.getItem('user') !== null && JSON.parse(localStorage.getItem('user')).roles.includes("ROLE_PROD");
    }

    isAdmin() {
        return localStorage.getItem('user') !== null && JSON.parse(localStorage.getItem('user')).roles.includes("ROLE_ADMIN");
    }

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