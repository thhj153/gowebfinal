const BlogPost = require("../models/BlogPost.js");
const Category = require("../models/Category.js");

module.exports = async (req, res) => {
  const categories = await Category.find({});
  const blogpost = await BlogPost.findById({});
  // if session contains user id
  if (req.session.userId) {
    return res.render("updatePost", {
      blogpost,
      categories,
    });
  }
  res.redirect("/auth/login");
};
