const User = require("../models/User");

module.exports = async (req, res) => {
  console.log(req.userList);
  const userList = req.body.userList;

  for (let i = 0; i < userList.length; i += 2) {
    await User.updateOne({ name: userList[i] }, { grade: userList[i] });
  }
};
