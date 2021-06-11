const BlogPost = require("../../models/BlogPost.js");
const Category = require("../../models/Category.js");

module.exports = async (req, res) => {
  const blogposts = await BlogPost.find({}).populate("userid");
  const userInfo = req.session.User;
  const categories = await Category.find({});

  res.render("index", {
    userInfo,
    blogposts,
    categories,
  });
};
