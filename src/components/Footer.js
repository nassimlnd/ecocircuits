import React from "react";
import {Footer} from "flowbite-react";
import logo from "../assets/feuille.png";

function Foot() {

    return (
    <Footer container={true} className="rounded-none static bottom-0">
        <div className="w-full">
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright
                    href="#"
                    by="EcoCircuits™"
                    year={2023}
                />
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
    </Footer>)
}

export default Foot;