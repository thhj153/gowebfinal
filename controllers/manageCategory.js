// 변수 전체 수정 필요

const Category = require("../models/Category.js");

module.exports = async (req, res) => {
  const categories = await Category.find({});
  // console.log(req.session)
  res.render("categories", {
    categories,
  });
};
