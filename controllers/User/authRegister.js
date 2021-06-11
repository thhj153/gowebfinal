const Category = require("../../models/Category");

module.exports = async (_, res) => {
  const categories = await Category.find({});
  res.render("register", {
    categories,
  });
};
