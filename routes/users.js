const express = require("express");
const router = express.Router();
const _ = require("lodash");
const mysqlConnection = require("../utils/database");
const helper = require("../utils/userHelper");
const auth = require("../middleware/auth");

router.get("/me", auth, async (req, res) => {
  const value = req.body.email;
  const sql = "select * users WHERE email=?";

  mysqlConnection.query(sql, value, (err, result, fields) => {
    if (!err) {
      return res.json({
        result,
        fields,
      });
    } else {
      return res.sendStatus(400).render("User is not registered.");
    }
  });
});

router.post("/", async (req, res) => {
  let bodyRequest = req.body;

  const values = [
    bodyRequest.first_name,
    bodyRequest.last_name,
    bodyRequest.email,
    hashedPassword,
    bodyRequest.premium,
  ];

  const sql =
    "INSERT INTO users (first_name,last_name,email,password,premium) VALUES(?,?,?,?,?);";
  const hashedPassword = await helper.encryptPassword(bodyRequest.password);

  mysqlConnection.query(sql, values, (err, result, fields) => {
    if (!err) {
      return res.sendStatus(200);
    } else {
      return res.sendStatus(400).render("User is not registered.");
    }
  });
});

module.exports = router;
