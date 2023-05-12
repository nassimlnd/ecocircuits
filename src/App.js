import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import CommandesList from "./components/CommandesList";
import TourneesList from "./components/TourneesList";
import VehiculesList from "./components/VehiculesList";
import ProduitList from "./components/ProduitList";
import Error404 from "./components/404";
import Home from "./components/Home";
import AuthService from "./services/AuthService";
import Error403 from "./components/403";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    {(!AuthService.getCurrentUser()) ? (
                        <>
                            <Route index element={<Home/>}/>
                            <Route path="/login" element={<LoginForm/>}/>
                            <Route path="/aboutus" element={<LoginForm/>}/>
                            <Route path="/features" element={<LoginForm/>}/>
                            <Route path="/contact" element={<LoginForm/>}/>
                            <Route path="*" element={<Error403 />}/>
                        </>) : (
                        <>
                            <Route path="/dashboard" element={<Dashboard/>}/>
                            <Route path="/commandes" element={<CommandesList/>}/>
                            <Route path="/tournees" element={<TourneesList/>}/>
                            <Route path="/vehicules" element={<VehiculesList/>}/>
                            <Route path="/produits" element={<ProduitList/>}/>
                            <Route path="/logout" element={<LoginForm/>}/>
                            <Route path="*" element={<Error404/>}/>
                        </>
                    )
                    }
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
