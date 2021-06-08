const BlogPost = require("../models/BlogPost.js");
const Category = require("../models/Category.js");
const Comment = require("../models/Comment");
module.exports = async (req, res) => {
  let postID = req.params.id;

  const comments = await Comment.find({postid: postID}).populate("userid");
  //console.log(comments);

  const blogpost = await BlogPost.findById(postID).populate("category");
  const categoryID = blogpost.category._id;
  req.session.selectedPost = blogpost;
  const cat = await Category.findById(categoryID);
  const catName = cat.name;
  const categories = await Category.find({});
  res.render("post", {
    catName,
    blogpost,
    categories,
    comments,
  });
};
