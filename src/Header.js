import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <Link to="/">
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/movies/popular" style={{ textDecoration: "none" }}>
                <span className="p-5">Popular</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
                <span className="p-5">Top Rated</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
                <span className="p-5">Upcoming</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
