const BlogPost = require("../models/BlogPost.js");
const Category = require("../models/Category.js");

module.exports = async (req, res) => {
  let postID = req.params.id;

  const blogpost = await BlogPost.findById(postID).populate("category");
  const categoryID = blogpost.category._id;
  const userInfo = req.session.User;
  req.session.selectedPost = blogpost;
  const cat = await Category.findById(categoryID);
  // console.log(cat);
  const catName = cat.name;

  const categories = await Category.find({});
  // console.log(blogpost)
  /**
   * category 별로 포스트를 모아 보여주는 화면이 필요.
   * index.ejs를 활용하면 될까 싶긴 합니다.
   *
   * 작동할지 안할지 잘 모르겠네요.
   */
  res.render("post", {
    catName,
    userInfo,
    blogpost,
    categories,
  });
};
