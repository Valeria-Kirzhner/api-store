import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          Home
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a class="nav-link" href="http://localhost:3000/api/list">
                List
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="http://localhost:3000/api/create">
                New
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a class="nav-link" href="http://localhost:3000/signin">
                Signin
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="http://localhost:3000/signin">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="http://localhost:3000/signin">
                Bussiness
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
