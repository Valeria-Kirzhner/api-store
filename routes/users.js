const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const _ = require("lodash");
const mysqlConnection = require("../utils/database");

router.post("/", async (req, res) => {
  let bodyRequest = req.body;
  const sql =
    "SET @Id = ?;SET @FirstName = ?;SET @LastName = ?;SET @Email = ?;SET @Password = ?;SET @Premium = ?; CALL Add_or_Update_QB(@Id, @FirstName, @LastName, @Email, @Password, @Premium);";
  mysqlConnection.query(
    sql,
    [
      bodyRequest.Id,
      bodyRequest.FirstName,
      bodyRequest.LastName,
      bodyRequest.Email,
      bodyRequest.Password,
      bodyRequest.Premium,
    ],
    (err, results, fields) => {
      if (!err) {
        results.forEach((element) => {
          if (element.constructor == Array) res.send(element);
        });
      } else {
        console.log(err);
      }
    }
  );

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  res.send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
