const jwt = require("jsonwebtoken");

generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, biz: this.biz }, process.env.JWTSIGN);
  return token;
};

exports.validate = validateUser;
