import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand fs-2 fw-bold" href="#">edu<span className="co-color">co</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active fw-bold" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/service">
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
</nav>
      
  );
};

export default Header;
