const express = require("express");
const router = express.Router();
const _ = require("lodash");
const mysqlConnection = require("../utils/database");
const helper = require("../utils/userHelper");

router.post("/", async (req, res) => {
  let bodyRequest = req.body;
  const sql =
    "INSERT INTO users (first_name,last_name,email,password,premium) VALUES(?,?,?,?,?);";

  const hashedPassword = await helper.encryptPassword(bodyRequest.password);

  const values = [
    bodyRequest.first_name,
    bodyRequest.last_name,
    bodyRequest.email,
    hashedPassword,
    bodyRequest.premium,
  ];

  mysqlConnection.query(sql, values, (err, result, fields) => {
    if (!err) {
      console.log("registred");
      return res.sendStatus(200);
    } else {
      console.log(err);
      return res.sendStatus(400).render("User is not registered.");
    }
  });
});

module.exports = router;
