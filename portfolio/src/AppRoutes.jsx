import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Reflections } from "./pages/Reflections";
import { Process } from "./pages/Process";
import { Notes } from "./pages/Notes";
import { Projects } from "./pages/Projects";
import { Resources } from "./pages/Resources";
import { LearningGoals } from "./pages/LearningGoals"; 

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Default route til Home */}
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />

            {/* Definer andre routes her */ }
            
            <Route path="/notes" element={<Notes />} />
            <Route path="/process" element={<Process />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/reflections" element={<Reflections />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/learninggoals" element={<LearningGoals />} />
        </Routes>
    );
};