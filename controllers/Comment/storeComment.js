const Comment = require("../../models/Comment.js");

module.exports = async (req, res) => {

  const { selectedPost } = req.session;
  await Comment.create({
    body: req.body.body.split("\r\n").filter(Boolean),
    userid: req.session.userId,
    postid: selectedPost._id,
  });

  res.redirect("/posts/post/" + selectedPost._id);
};
