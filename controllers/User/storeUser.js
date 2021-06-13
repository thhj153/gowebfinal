const User = require("../../models/User");

module.exports = (req, res) => {
  User.create(
    {
      ...req.body,
      grade: "새싹",
      admin: false,
    },
    (error, user) => {
      if (error) {
        console.log("create error!" + error);
        return res.redirect("/user/auth/register");
      }
      res.redirect("/");
    }
  );
};
