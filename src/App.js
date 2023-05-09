import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import CommandesList from "./components/CommandesList";
import TourneesList from "./components/TourneesList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/commandes" element={<CommandesList />} />
          <Route path="/tournees" element={<TourneesList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
