const Comment = require("../../models/Comment");

module.exports = (req, res) => {
  const { selectedPost } = req.session;

  Comment.deleteOne({ _id: req.params.id }, () => {
    return res.redirect("/posts/post/" + selectedPost._id);
  });
};
