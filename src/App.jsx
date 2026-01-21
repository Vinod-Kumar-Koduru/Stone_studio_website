import React from "react";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ElevationsList from "./pages/ElevationStone.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Flooring from "./pages/Flooring.jsx";
import ProductListPage from "./pages/ProductListPage.jsx";
function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductListPage />} />
        <Route path="/flooring/:category" element={<Flooring />} />
        <Route path="/elevation-stones" element={<ElevationsList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
=======
import Home from "./pages/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-black">
        <Home />
      </div>
    </>
>>>>>>> 5ebe06c890e2f351e74fb86cc61e375821ed4ff3
  );
}

export default App;
