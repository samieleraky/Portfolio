import React from "react";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./AppRoutes";
import "./Styles/Navbar.css";
import "./App.css";

export default function App() {
    return (
        <> {/* Fjern Router her */}
            <Navbar />
            <main className="page-container">
                <AppRoutes />
            </main>
        </>
    );
}