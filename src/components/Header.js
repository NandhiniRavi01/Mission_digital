import React, { useState } from "react";
import "../css/Header.css";
import Logo from "../assets/service-images/logo-box.png";
import Search from "../assets/service-images/search.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm rounded py-3 px-4">
      <div className="container">
        {/* Logo Section */}
        <div className="d-flex align-items-center">
          <h3 className="me-3">
            LO<span style={{ color: "red" }}>GO</span>
          </h3>
          <div className="nav-item ms-lg-5">
            <img
              src={Logo}
              alt="Logo"
              className="img-fluid"
              style={{ height: "30px" }}
            />
          </div>
        </div>

        {/* Toggle Button - aligned to the right on mobile/tablet */}
        <button
          className={`navbar-toggler ms-auto ${isMenuOpen ? "active" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span
            className={`navbar-toggler-icon ${isMenuOpen ? "d-none" : ""}`}
          ></span>
          <span className={`close-icon ${isMenuOpen ? "d-block" : "d-none"}`}>
            X
          </span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 g-5 fs-5">
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="/">
                My Courses
              </a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="/">
                Vision
              </a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="/">
                Service
              </a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="/">
                Careers
              </a>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-outline-danger rounded text-dark fw-normal px-3 py-2 fs-3">
                Get in Touch
              </button>
            </li>

            <li className="nav-item ms-3">
              <img
                src={Search}
                alt="Search"
                className="img-fluid"
                style={{ height: "24px" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
