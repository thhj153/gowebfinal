const BlogPost = require("../../models/BlogPost");
const Category = require("../../models/Category");
const Comment = require("../../models/Comment");

module.exports = async (req, res) => {
  let postID = req.params.id;

  const comments = await Comment.find({ postid: postID }).populate("userid");

  const blogpost = await BlogPost.findById(postID).populate("category");
  const categoryID = blogpost.category._id;
  req.session.selectedPost = blogpost;
  const cat = await Category.findById(categoryID);
  const catName = cat.name;
  const categories = await Category.find({});
  console.log(blogpost, req.session.User._id, loggedIn);
  res.render("post", {
    catName,
    blogpost,
    categories,
    comments,
  });
};
