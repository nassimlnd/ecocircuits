import React from "react";
import AuthService from "../services/AuthService";

function TokenVerify({children}) {

    const user = AuthService.getCurrentUser();

    if (user) {
        if (AuthService.tokenIsValid()) {
            console.log("Token is valid");
        } else {
            AuthService.logout();
            //window.location.href = "/login";
            return false;
        }
    }


    return (
        <div>
            {children}
        </div>
    )

}

export default TokenVerify;