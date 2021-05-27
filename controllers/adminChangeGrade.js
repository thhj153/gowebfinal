const User = require("../models/User");

module.exports = async (req, res) => {
  const users = await User.find({}).populate("userid");
  res.render("admin", { users });
};
