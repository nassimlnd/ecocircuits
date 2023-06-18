import React from "react";
import ConnectedLayout from "../../../layouts/ConnectedLayout";
import {useParams} from "react-router-dom";

/**
 * Page de détails d'un utilisateur
 * @returns {JSX.Element}
 * @constructor
 */
function UsersDetails() {

    const params = useParams();

    return (
        <ConnectedLayout>

        </ConnectedLayout>
    )
}

export default UsersDetails;