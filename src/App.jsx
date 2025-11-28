import React from "react";
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
  );
}

export default App;
