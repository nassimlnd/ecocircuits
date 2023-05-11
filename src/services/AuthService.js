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

    logout() {
        localStorage.removeItem("user");
    }

}

export default new AuthService();