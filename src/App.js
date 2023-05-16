import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/App.css";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/authentication/LoginForm";
import Orders from "./pages/Orders";
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
import ConnectedLayout from "./layouts/ConnectedLayout";
import {Navbar} from "flowbite-react";

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
                            <Routes>
                                <Route path="/dashboard" element={<Dashboard/>}/>
                                <Route path="/orders" element={<Orders/>}/>
                                <Route path="/deliveries" element={<TourneesList/>}/>
                                <Route path="/vehicules" element={<VehiculesList/>}/>
                                <Route path="/products" element={<ProduitList/>}/>
                                <Route path="/logout" element={<LoginForm/>}/>
                                <Route path="*" element={<Error404/>}/>
                            </Routes>
                        </div>
                    </>
                )
                }
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;
