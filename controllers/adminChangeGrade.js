const User = require("../models/User");
const GRADE = require("../util/const");

module.exports = async (req, res) => {
  const users = await User.find({}).populate("userid");
  const grade = GRADE;

  res.render("admin", { users, grade });
};
