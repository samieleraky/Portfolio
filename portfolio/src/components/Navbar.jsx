import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const pages = [
        { name: "Home", path: "/" },
        { name: "Learning Objectives", path: "/learning-objectives" },
        { name: "Notes", path: "/notes" },
        { name: "Process", path: "/process" },
        { name: "Projects", path: "/projects" },
        { name: "Reflections", path: "/reflections" },
        { name: "Resources", path: "/resources" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Portfolio</h1>
            </div>
            <ul className="navbar-links">
                {pages.map((page) => (
                    <li key={page.path}>
                        <NavLink to={page.path} end>
                            {page.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
