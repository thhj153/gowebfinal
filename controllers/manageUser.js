const User = require("../models/User.js");
const GRADE = require("../util/const.js");

module.exports = async (req, res) => {
  const users = await User.find({});
  const grade = GRADE;
  // console.log(req.session)
  res.render("userlist", {
    users,
    grade,
  });
};
