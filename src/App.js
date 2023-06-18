import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/App.css";
import {React, lazy} from "react";
import AuthService from "./services/AuthService";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const LoginForm = lazy(() => import("./components/authentication/LoginForm"));
const Orders = lazy(() => import('./pages/organisateur/orders/Orders'));
const Vehicules = lazy(() => import("./pages/organisateur/vehicules/Vehicules"));
const Products = lazy(() => import("./pages/organisateur/products/Products"));
const Error404 = lazy(() => import("./components/error/404"));
const Home = lazy(() => import("./pages/Home"));
const Foot = lazy(() => import("./components/Footer"));
const Nav = lazy(() => import("./components/navigation/Nav"));
const NavConnected = lazy(() => import("./components/navigation/NavConnected"));
const AccountInfo = lazy(() => import("./pages/account/AccountInfo"));
const OrdersDetails = lazy(() => import("./pages/organisateur/orders/OrdersDetails"));
const CreateOrder = lazy(() => import("./pages/organisateur/orders/CreateOrder"));
const TokenVerify = lazy(() => import("./components/TokenVerify"));
const Customers = lazy(() => import("./pages/organisateur/customers/Customers"));
const CustomersDetails = lazy(() => import("./pages/organisateur/customers/CustomersDetails"));
const Producers = lazy(() => import("./pages/organisateur/producers/Producers"));
const Users = lazy(() => import("./pages/admin/users/Users"));
const UsersDetails = lazy(() => import("./pages/admin/users/UsersDetails"));
const ProductDetails = lazy(() => import("./pages/organisateur/products/ProductDetails"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

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
                                <Route path="/aboutus" element={<AboutUs />}/>
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
                                    <Route path="/orders/pending" element={<Orders/>}/>
                                    <Route path="/orders/:id" element={<OrdersDetails/>}/>
                                    <Route path="/orders/create" element={<CreateOrder/>}/>
                                    {/*<Route path="/deliveries" element={<TourneesList/>}/>*/}
                                    <Route path="/vehicules" element={<Vehicules/>}/>
                                    <Route path="/products" element={<Products/>}/>
                                    <Route path="/products/:id" element={<ProductDetails/>}/>
                                    <Route path="/account" element={<AccountInfo/>}/>
                                    <Route path="/logout" element={<LoginForm/>}/>
                                    <Route path="/customers" element={<Customers/>}/>
                                    <Route path="/customers/:id" element={<CustomersDetails/>}/>
                                    <Route path="/producers" element={<Producers/>}/>
                                    <Route path="*" element={<Error404/>}/>
                                    {AuthService.isAdmin() && (
                                        <>
                                            <Route path="/admin/users" element={<Users/>}/>
                                            <Route path="/admin/users/:id" element={<UsersDetails />}/>
                                        </>
                                    )}
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
