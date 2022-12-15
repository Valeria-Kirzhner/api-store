const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const _ = require("lodash");
const mysqlConnection = require("../utils/database");

router.post("/", async (req, res) => {
  let bodyRequest = req.body;
  const sql =
    "INSERT INTO users (first_name,last_name,email,password, premium) VALUES(?,?,?,?,?);";
  const values = [
    bodyRequest.first_name,
    bodyRequest.last_name,
    bodyRequest.email,
    bodyRequest.password,
    bodyRequest.premium,
  ];
  //   const salt = await bcrypt.genSalt(10);
  //   hashedPassword = await bcrypt.hash(bodyRequest.Password, salt);

  mysqlConnection.query(sql, values, (err, result, fields) => {
    if (!err) {
      res.status(200).send(result.affectedRows);
    } else {
      console.log(err);
      return res.status(400).send("User is not registered.");
    }
  });
});

module.exports = router;
