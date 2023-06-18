import React from 'react';
import Vegetables from "../assets/jpg/aboutus/pexels-maria-orlova-4946763.jpg"

/**
 * Page à propos
 * @returns {JSX.Element}
 * @constructor
 */
function AboutUs() {

    return (
        <>
            <div className="flex-grow py-8 px-4 mx-auto dark:text-white max-w-screen-xl">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <div className="flex items-center">
                        <div className="w-1/2">
                            <div className="text-sm font-semibold">A PROPOS</div>
                            <div className="text-5xl font-extrabold pr-2">
                                EcoCircuits est une plateforme qui permet d'aider les producteurs dans leur gestion de stock et de commandes.
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img src={Vegetables} className="rounded shadow h-96 mx-auto"/>
                        </div>
                    </div>
                </div>
                <div className="pt-4">

                </div>
            </div>
        </>
    )
}

export default AboutUs;