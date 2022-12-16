import React from "react";
import { useEffect, useState } from "react";

const RegistrationForm2 = ({}) => {
  const [data, setData] = useState({ email: "", password: "", name: "" });
  const [errors, setErrors] = useState({});

  return (
    <form className="mx-1 mx-md-4">
      <div className="d-flex flex-row align-items-center mb-4">
        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
        <div className="form-outline flex-fill mb-0">
          <input type="text" id="form3Example1c" className="form-control" />
          <label className="form-label" htmlFor="form3Example1c">
            Your Name
          </label>
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
        <div className="form-outline flex-fill mb-0">
          <input type="email" id="form3Example3c" className="form-control" />
          <label className="form-label" htmlFor="form3Example3c">
            Your Email
          </label>
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
        <div className="form-outline flex-fill mb-0">
          <input type="password" id="form3Example4c" className="form-control" />
          <label className="form-label" htmlFor="form3Example4c">
            Password
          </label>
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
        <div className="form-outline flex-fill mb-0">
          <input
            type="password"
            id="form3Example4cd"
            className="form-control"
          />
          <label className="form-label" htmlFor="form3Example4cd">
            Repeat your password
          </label>
        </div>
      </div>

      <div className="form-check d-flex justify-content-center mb-5">
        <input
          className="form-check-input me-2"
          type="checkbox"
          value=""
          id="form2Example3c"
        />
        <label className="form-check-label" htmlFor="form2Example3">
          I agree all statements in <a href="#!">Terms of service</a>
        </label>
      </div>

      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <button type="button" className="btn btn-primary btn-lg">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm2;
