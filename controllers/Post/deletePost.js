const BlogPost = require("../../models/BlogPost");

module.exports = (req, res) => {
  const { selectedPost } = req.session;
  BlogPost.deleteOne({ _id: selectedPost._id }, () => {
    return res.redirect("/");
  });
};
