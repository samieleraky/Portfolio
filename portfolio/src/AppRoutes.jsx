import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Reflections } from "./pages/Reflections";
import { Process } from "./pages/Process";
import { Notes } from "./pages/Notes";
import { LearningObjectives } from "./pages/LearningObjectives";
import { Projects } from "./pages/Projects";
import { Resources } from "./pages/Resources";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning-objectives" element={<LearningObjectives />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/process" element={<Process />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/reflections" element={<Reflections />} />
            <Route path="/resources" element={<Resources />} />
        </Routes>
    );
};