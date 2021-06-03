const BlogPost = require("../models/BlogPost.js");
const Category = require("../models/Category.js");
const GRADE = require("../util/const.js");

module.exports = async (req, res) => {
  const blogpost = await BlogPost.findById(req.params.id).populate("userid");
  const userInfo = req.session.User;
  const categories = await Category.find({});
  // console.log(blogpost)
  if (userInfo) {
    switch (blogpost.grade) {
      case GRADE.DAKDULGI:
        if (userInfo.grade === GRADE.DAKDULGI) {
          res.render("post", {
            userInfo,
            blogpost,
            categories,
          });
        } else {
          res.redirect("/notfound");
        }
        break;
      case GRADE.GINDGI:
        if (
          userInfo.grade === GRADE.GINDGI ||
          userInfo.grade === GRADE.DAKDULGI
        ) {
          res.render("post", {
            userInfo,
            blogpost,
            categories,
          });
        } else {
          res.redirect("/notfound");
        }
        break;
      case GRADE.AMEBA:
        res.render("post", {
          userInfo,
          blogpost,
          categories,
        });
        break;
      default:
        break;
    }
  } else {
    res.redirect("/auth/login");
  }
};
