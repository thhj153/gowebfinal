const BlogPost = require("../../models/BlogPost");
const Category = require("../../models/Category");

module.exports = async (req, res) => {
  const { selectedPost } = req.session;
  const categories = await Category.find({});
  const blogpost = await BlogPost.findById({ _id: selectedPost._id });
  console.log(selectedPost, categories);
  // if session contains user id
  if (req.session.userId.toString() == blogpost.userid) {
    return res.render("modifyPost", {
      blogpost,
      categories,
    });
  } else {
    return res.render("notfound");
  }
};
