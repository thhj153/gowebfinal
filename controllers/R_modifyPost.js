const BlogPost = require("../models/BlogPost.js");
const Category = require("../models/Category.js");

module.exports = async (req, res) => {
  const { selectedPost } = req.session;
  const categories = await Category.find({});
  const blogpost = await BlogPost.findById({ _id: selectedPost._id });
  console.log(selectedPost, categories);
  // if session contains user id
  if (req.session.userId) {
    return res.render("modifyPost", {
      blogpost,
      categories,
    });
  }
  res.redirect("/auth/login");
};
