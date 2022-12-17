const Joi = require("joi");
const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  let bodyRequest = req.body;

  if (error) return res.status(400).send(error.details[0].message);

  const sql = "select * users WHERE email=?";

  mysqlConnection.query(sql, bodyRequest.email, async (err, result, fields) => {
    if (err) {
      return res.sendStatus(400).render("Invalid email or password.");
    } else {
      const validPassword = await bcrypt.compare(
        bodyRequest.password,
        result.password
      );
      if (!validPassword)
        return res.status(400).send("Invalid email or password.");
      res.json({
        token: result.generateAuthToken(),
        /*userName: user.id,*/
        userName: result.name,
        wishlist: result.cards,
      });
    }
  });
});

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  });

  return schema.validate(req);
}

module.exports = router;
