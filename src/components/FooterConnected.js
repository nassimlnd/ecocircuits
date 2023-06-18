import React from 'react';
import {Footer} from "flowbite-react";

/**
 * Pied de page (connecté)
 * @returns {JSX.Element}
 * @constructor
 */
function FooterConnected() {

    return (
        <>
            <Footer container={true} className="">
                <div className="w-full">
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.LinkGroup>
                            <Footer.Link href="#">
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#">
                                Terms & Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </Footer>
        </>
    )
}

export default FooterConnected;