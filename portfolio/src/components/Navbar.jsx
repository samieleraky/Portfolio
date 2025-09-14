import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const pages = [
        { name: "Home", path: "/" },
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

            {/* Hamburger button */}
            <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </div>

            <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                {pages.map((page) => (
                    <li key={page.path}>
                        <NavLink
                            to={page.path}
                            end
                            onClick={() => setIsOpen(false)} // close menu on click
                        >
                            {page.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
