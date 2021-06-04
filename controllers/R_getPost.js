const BlogPost = require("../models/BlogPost.js");
const Category = require("../models/Category.js");
const GRADE = require("../util/const.js");

module.exports = async (req, res) => {
  const blogpost = await BlogPost.findById(req.params.id).populate("userid");
  const userInfo = req.session.User;
  const categories = await Category.find({});
  if (userInfo) {
    res.render("post", {
      userInfo,
      blogpost,
      categories,
    });
  } else {
    res.redirect("/auth/login");
  }
};
