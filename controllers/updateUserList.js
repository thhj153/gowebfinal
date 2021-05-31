const User = require("../models/User");

module.exports = async (req, res) => {
  for (let i = 0; i < req.list.length; ++i) {
    console.log(list[i]);
    await User.updateOne({ name: list[i].user_id });
  }
};
