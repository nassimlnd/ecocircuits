import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/App.css";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./components/authentication/LoginForm";
import Orders from "./pages/Orders";
import TourneesList from "./pages/TourneesList";
import Vehicules from "./pages/Vehicules";
import Products from "./pages/Products";
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
import AccountInfo from "./pages/AccountInfo";
import OrdersDetails from "./pages/orders/OrdersDetails";

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
                                <Route index element={<Dashboard/>}/>
                                <Route path="/dashboard" element={<Dashboard/>}/>
                                <Route path="/orders" element={<Orders/>}/>
                                <Route path="/order/:id" element={<OrdersDetails />}/>
                                <Route path="/deliveries" element={<TourneesList/>}/>
                                <Route path="/vehicules" element={<Vehicules/>}/>
                                <Route path="/products" element={<Products/>}/>
                                <Route path="/account" element={<AccountInfo/>}/>
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
