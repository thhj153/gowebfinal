const User = require("../models/User");

module.exports = async (req, res) => {

  const userList = req.body;

  for(var v in userList) {
    console.log(v, userList[v])
    if (userList.hasOwnProperty(v)) {
      item = userList[v];
      console.log(item);
    }
  } // 내용 확인용 코드.

  for (let i = 0; i < userList['length']; ++i) {
    await User.updateOne(
      { _id: userList['e[' + i + '].id'] },
      { grade: userList['e[' + i + '].grade'] }
    );
  }
  res.redirect("/userlist");
};
