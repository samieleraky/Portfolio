import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Reflections } from "./pages/Reflections";
import { Process } from "./pages/Process";
import { Notes } from "./pages/Notes";

export const AppRoutes = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/reflections">Reflections</Link>
                <Link to="/process">Process</Link>
                <Link to="/notes">Notes</Link>
            </nav>




            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reflections" element={<Reflections />} />
                <Route path="/process" element={<Process />} />
                <Route path="/notes" element={<Notes />} />
            </Routes>
        </>
    );
};