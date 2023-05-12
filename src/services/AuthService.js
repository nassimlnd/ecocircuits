import axios from "axios";

const API_URL = "http://localhost:9020/api/auth";

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

}

export default new AuthService();