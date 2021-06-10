const Category = require("../../models/Category.js");

module.exports = (req, res) => {
  Category.create(req.body, (error, category) => {
    if (error) {
      return res.redirect("/");
    }
    res.redirect("/categories");
  });
};
