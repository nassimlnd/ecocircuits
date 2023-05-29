import React from 'react';
import logo from "../assets/logo.png";
import {Button} from "flowbite-react";
import Package from "../assets/svg/Package.svg";
import DeliveryTruck from "../assets/svg/DeliveryTruck.svg"
import BarChart from "../assets/svg/BarChart.svg"

class Home extends React.Component {

    render() {
        return (
            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div className="grid border-b border-gray-200 dark:border-gray-700 py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="place-self-center mr-auto lg:col-span-7">
                            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">EcoCircuits</h1>
                            <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Une
                                nouvelle ère pour les circuits courts : découvrez notre plateforme tout-en-un, optimisée
                                pour les producteurs, qui simplifie la gestion des stocks, des commandes et des
                                tournées, pour une expérience fluide et rentable.</p>
                            <a href="/aboutus"
                               className="bg-blue-600 hover:bg-blue-500 inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Découvrir
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </a>
                            <a href="/contact"
                               className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Contactez-nous
                            </a>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src={logo} className="object-cover w-full h-56 sm:h-96"
                                 alt="mockup"></img>
                        </div>
                    </div>
                </section>
                <div className="dark:bg-gray-900 dark:text-white">
                    <div className="md:flex md:space-x-3 md:space-y-0 space-y-2 py-8 px-4 mx-auto max-w-screen-xl">
                        <div className="bg-white md:w-1/3 p-8 dark:bg-gray-800 dark:rounded">
                            <div className="flex pb-4 items-center space-x-5">
                                <div>
                                    <img src={BarChart} className="w-12" alt="Emoji graph en barre"/>
                                </div>
                                <div className="text-lg font-medium">
                                    Visualisez et gérez vos stocks en temps réel !
                                </div>
                            </div>
                            <div className="border-t text-gray-500 dark:text-gray-400 pt-4 border-gray-200 dark:border-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                                libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                                imperdiet. Duis sagittis ipsum. Praesent mauris.
                            </div>
                            <div className="pt-4">
                                <Button>
                                    En savoir plus
                                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        <div className="bg-white md:border-l md:dark:border-0 border-gray-200 md:w-1/3 p-8 dark:bg-gray-800 dark:rounded">
                            <div className="flex pb-4 items-center space-x-5">
                                <div>
                                    <img src={Package} className="w-16" alt="Emoji boite"/>
                                </div>
                                <div className="text-lg font-medium">
                                    Gérez vos commandes et vos tournées en quelques clics !
                                </div>
                            </div>
                            <div className="border-t text-gray-500 dark:text-gray-400 pt-4 border-gray-200 dark:border-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                                libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                                imperdiet. Duis sagittis ipsum. Praesent mauris.
                            </div>
                            <div className="pt-4">
                                <Button>
                                    En savoir plus
                                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        <div className="bg-white md:border-l md:dark:border-0 border-gray-200 md:w-1/3 p-8 dark:bg-gray-800 dark:rounded">
                            <div className="flex pb-4 items-center space-x-5">
                                <div>
                                        <img src={DeliveryTruck} className="w-16"/>
                                </div>
                                <div className="text-lg font-medium">
                                    Automatisez vos tournées et optimisez vos livraisons !
                                </div>
                            </div>
                            <div className="border-t text-gray-500 dark:text-gray-400 pt-4 border-gray-200 dark:border-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                                libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                                imperdiet. Duis sagittis ipsum. Praesent mauris.
                            </div>
                            <div className="pt-4">
                                <Button>
                                    En savoir plus
                                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default Home;