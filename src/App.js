import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/App.css";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/authentication/LoginForm";
import CommandesList from "./components/CommandesList";
import TourneesList from "./components/TourneesList";
import VehiculesList from "./components/VehiculesList";
import ProduitList from "./components/ProduitList";
import Error404 from "./components/error/404";
import Home from "./pages/Home";
import AuthService from "./services/AuthService";
import Error403 from "./components/error/403";
import Foot from "./components/Footer";
import Nav from "./components/Nav";
import NavConnected from "./components/NavConnected";
import Sidenav from "./components/Sidenav";
import React from "react";
import FooterConnected from "./components/FooterConnected";

function App() {
    const user = AuthService.getCurrentUser();

    return (
        <div className="flex flex-col h-screen dark:bg-gray-900">
            <BrowserRouter>
                {!user ? (
                    <Nav/>
                ) : (
                    <NavConnected/>
                )}

                {(!AuthService.getCurrentUser()) ? (
                    <>
                        <div className="flex-grow">
                            <Routes>
                                <Route index element={<Home/>}/>
                                <Route path="/login" element={<LoginForm/>}/>
                                <Route path="/aboutus" element={<LoginForm/>}/>
                                <Route path="/features" element={<LoginForm/>}/>
                                <Route path="/contact" element={<LoginForm/>}/>
                                <Route path="*" element={<Error404/>}/>
                            </Routes>
                        </div>
                        <Foot/>
                    </>) : (
                    <>
                        <div className="flex-grow">
                            <div className="flex pt-16 items-start">
                                <aside
                                    className="flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full duration-75 border-r border-gray-200 lg:flex transition-width dark:border-gray-700 w-64">
                                    <Sidenav/>
                                </aside>
                                <div className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64">
                                    <Routes>
                                        <Route path="/dashboard" element={<Dashboard/>}/>
                                        <Route path="/orders" element={<CommandesList/>}/>
                                        <Route path="/deliveries" element={<TourneesList/>}/>
                                        <Route path="/vehicules" element={<VehiculesList/>}/>
                                        <Route path="/products" element={<ProduitList/>}/>
                                        <Route path="/logout" element={<LoginForm/>}/>
                                        <Route path="*" element={<Error404/>}/>
                                    </Routes>
                                </div>
                            </div>
                        </div>
                        <FooterConnected/>
                    </>
                )
                }
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;
