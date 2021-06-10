const User = require("../../models/User");
const Category = require("../../models/Category");
const GRADE = require("../../util/const.js");

module.exports = async (req, res) => {
  const users = await User.find({});
  const grade = GRADE;
  const categories = await Category.find({});
  if (req.session.admin) {
    res.render("admin", { users, grade, categories });
  } else {
    res.redirect("/");
  }
};
