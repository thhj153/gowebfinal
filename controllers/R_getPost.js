const BlogPost = require("../models/BlogPost.js");
const Category = require("../models/Category.js");
const Comment = require("../models/Comment");
module.exports = async (req, res) => {
  let postID = req.params.id;
  const comments = await Comment.find({}).populate("userid");
  console.log(comments);
  const blogpost = await BlogPost.findById(postID).populate("category");
  const categoryID = blogpost.category._id;
  const userInfo = req.session.User;
  req.session.selectedPost = blogpost;
  const cat = await Category.findById(categoryID);
  const catName = cat.name;
  const categories = await Category.find({});
  res.render("post", {
    catName,
    userInfo,
    blogpost,
    categories,
    comments,
  });
};
