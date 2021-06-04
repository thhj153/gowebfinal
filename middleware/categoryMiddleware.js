const User = require("../models/User");
const Category = require("../models/Category");

module.exports = (req, res, next) => {
  User.findById(req.session.userId, (err, user) => {
    const categories = Category.find({});
    categories.map((category) => {
      if (category.grade === user.grade) {
        next();
      } else {
        return res.redirect("/");
      }
    });
  });
};
