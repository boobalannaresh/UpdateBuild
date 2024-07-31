import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Portal from "./components/Portal";
import Customers from "./components/Customers";
import Dashboard from "./components/Dashboard";
import Suppliers from "./components/Suppliers";
import Logistic from "./components/Logistic";

function App() {
  return (
<>
   
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/portal" element={<Portal />}>
        <Route path="dashboard" element={<Main/>} />
        <Route path="customer" element={<Customers/>} />
        <Route path="supplier" element={<Suppliers/>} />
        <Route path="logistic" element={<Logistic/>} />
      </Route>

     
    </Routes>

    </>
  );
}

export default App;
