import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#">
            <span className="text-white fs-5 fst-italic fw-bold">
              User Management System
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex gap-3">
            <Link to="/" className="btn btn-light fst-italic">
              <i className="bi bi-house-door-fill me-2"></i>
              Home
            </Link>

            <Link to="/adduser" className="btn btn-light fst-italic">
              + Add User
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
