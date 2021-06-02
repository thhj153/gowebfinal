const Category = require("../models/Category.js");
const GRADE = require("../util/const.js");
module.exports = async (req, res) => {
  const categories = await Category.find({});
  const grade = GRADE;
  res.render("categories", {
    categories,
    grade,
  });
};
