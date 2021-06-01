const Category = require("../models/Category.js");
const GRADE = require("../util/const.js");

module.exports = async (req, res) => {
  await Category.remove({ name: req.body });
  const grade = GRADE;
};
