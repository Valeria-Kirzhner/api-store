import React from "react";
import { useEffect, useState } from "react";

const RegistretionForm = ({}) => {
  const [data, setData] = useState({ email: "", password: "", name: "" });
  const [errors, setErrors] = useState({});

  return (
    <div className="mb-3 row justify-content-center">
      <div class="mb-3">
        <label for="fname" class="form-label">
          First Name
        </label>
        <input
          type="text"
          class="form-control"
          id="fname"
          aria-describedby="first-name"
        />
      </div>
      <div class="mb-3">
        <label for="lname" class="form-label">
          Last Name
        </label>
        <input
          type="text"
          class="form-control"
          id="lname"
          aria-describedby="last-name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="email"
        />
        <div id="message-foremail" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">
          Password
        </label>
        <div id="message-foremail" class="form-text">
          Must have at least 6 characters.
        </div>
        <input
          type="text"
          class="form-control"
          id="password"
          aria-describedby="password"
        />
      </div>

      <button type="submit" className="btn btn-primary col-sm-10">
        Submit
      </button>
    </div>
  );
};

export default RegistretionForm;
