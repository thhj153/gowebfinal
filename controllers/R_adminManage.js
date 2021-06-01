const User = require("../models/User");
const GRADE = require("../util/const");

module.exports = async (req, res) => {
  const users = await User.find({});
  const grade = GRADE;
  if (req.session.admin) {
    res.render("admin", { users, grade });
  } else {
    res.redirect("/");
  }
};
