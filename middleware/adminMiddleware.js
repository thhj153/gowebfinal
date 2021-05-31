const User = require("../models/User");

module.exports = (req, res, next) => {
  User.findById(req.session.userId, (error, user) => {
    if (error || !user) {
      if (!req.session.admin) {
        return res.redirect("/");
      }
    }

    next();
  });
};
