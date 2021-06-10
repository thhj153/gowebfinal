const Category = require("../../models/Category");

module.exports = (req, res) => {
  Category.deleteOne({ name: req.body.name }, async (err) => {
    return res.redirect("/categories");
  });
};
