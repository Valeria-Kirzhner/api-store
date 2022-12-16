import React from "react";
import Joi from "joi-browser";
import { useEffect, useState } from "react";
import RegistretionForm from "./RegistretionForm";

import { Redirect } from "react-router-dom";

const Signup = ({}) => {
  const schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };

  return (
    <div className="container">
      <div className="col-12 mt-4">
        <h3 className="text-secondary">Sign up page</h3>
      </div>{" "}
      <RegistretionForm />
    </div>
  );
};

export default Signup;
