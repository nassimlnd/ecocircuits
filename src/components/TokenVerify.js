import React from "react";
import AuthService from "../services/AuthService";

/**
 * Vérifie si le token est valide
 * @param children
 * @returns {JSX.Element|boolean}
 * @constructor
 */
function TokenVerify({children}) {

    const user = AuthService.getCurrentUser();

    if (user) {
        if (AuthService.tokenIsValid()) {
        } else {
            AuthService.logout();
            window.location.href = "/login";
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