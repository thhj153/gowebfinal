const Category = require("../models/Category.js");
const GRADE = require("../util/const.js");

module.exports = async (req, res) => {
  console.log(req);
  Category.remove({ name: req.body });
};
