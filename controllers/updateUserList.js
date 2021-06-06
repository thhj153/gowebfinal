const User = require("../models/User");

module.exports = async (req, res) => {
   
    console.log(req.userList);

  for (let i = 0; i < req.userList.length; ++i) {
    await User.updateOne({ name: userList[i].id }, { grade: userList[i].grade });
  }
};
