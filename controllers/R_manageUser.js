const User = require("../models/User.js");
const GRADE = require("../util/const.js");
const Category = require("../models/Category.js");

module.exports = async (req, res) => {
  const users = await User.find({});
  const grade = GRADE;
  const categories = await Category.find({});

  // console.log(req.session)
  res.render("userlist", {
    users,
    grade,
    categories,
  });
};

