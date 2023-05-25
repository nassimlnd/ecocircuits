import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/App.css";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./components/authentication/LoginForm";
import Orders from "./pages/organisateur/orders/Orders";
import TourneesList from "./pages/TourneesList";
import Vehicules from "./pages/Vehicules";
import Products from "./pages/organisateur/products/Products";
import Error404 from "./components/error/404";
import Home from "./pages/Home";
import AuthService from "./services/AuthService";
import Foot from "./components/Footer";
import Nav from "./components/Nav";
import NavConnected from "./components/NavConnected";
import React from "react";
import AccountInfo from "./pages/account/AccountInfo";
import OrdersDetails from "./pages/organisateur/orders/OrdersDetails";
import CreateOrder from "./pages/organisateur/orders/CreateOrder";
import TokenVerify from "./components/TokenVerify";
import Customers from "./pages/organisateur/customers/Customers";
import CustomersDetails from "./pages/organisateur/customers/CustomersDetails";
import Producers from "./pages/organisateur/producers/Producers";

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
                            <TokenVerify>
                                <Routes>
                                    <Route index element={<Dashboard/>}/>
                                    <Route path="/dashboard" element={<Dashboard/>}/>
                                    <Route path="/orders" element={<Orders/>}/>
                                    <Route path="/orders/:id" element={<OrdersDetails/>}/>
                                    <Route path="/orders/create" element={<CreateOrder/>}/>
                                    <Route path="/deliveries" element={<TourneesList/>}/>
                                    <Route path="/vehicules" element={<Vehicules/>}/>
                                    <Route path="/products" element={<Products/>}/>
                                    <Route path="/account" element={<AccountInfo/>}/>
                                    <Route path="/logout" element={<LoginForm/>}/>
                                    <Route path="/customers" element={<Customers/>}/>
                                    <Route path="/customers/:id" element={<CustomersDetails/>}/>
                                    <Route path="/producers" element={<Producers/>}/>
                                    <Route path="*" element={<Error404/>}/>
                                </Routes>
                            </TokenVerify>
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
