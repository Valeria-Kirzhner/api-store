const jwt = require("jsonwebtoken");
const Joi = require("joi");

generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, biz: this.biz }, process.env.JWTSIGN);
  return token;
};
function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    biz: Joi.boolean().required(),
  });

  return schema.validate(user);
}

exports.validate = validateUser;
