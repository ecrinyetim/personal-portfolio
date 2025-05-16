import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Logo yolunu kendi dizinine göre düzelt

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sections = ["anasayfa", "hakkımda", "yetenekler", "portfolyom", "iletişim"];

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const scrollToSection = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
        closeMenu();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
            <div className="container navbar-container">

                {/* 🔥 Logo */}
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" height="40" />
                </a>

                {/* Hamburger Butonu */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menü */}
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        {sections.map((section) => (
                            <li className="nav-item" key={section}>
                                <a
                                    className="nav-link"
                                    href="#"
                                    onClick={() => scrollToSection(section)}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Sosyal İkonlar */}
                    <div className="d-flex align-items-center gap-3 social-icons">
                        <a
                            href="https://github.com/ecrinyetim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                            title="GitHub"
                        >
                            <FaGithub size={24} className="icon-hover" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ecrin-yetim-568230255/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                            title="LinkedIn"
                        >
                            <FaLinkedin size={24} className="icon-hover" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
