import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./AppRoutes";
import "./Styles/Navbar.css";
import "./App.css"; // Common styles for all pages

export default function App() {
    return (
        <Router>
            <Navbar />
            <div className="page-container">
                <AppRoutes />
            </div>
        </Router>
    );
}