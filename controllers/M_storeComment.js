const Comment = require("../models/Comment.js");

module.exports = async (req, res) => {
  await Comment.create({
    body: req.body.body.split("\r\n").filter(Boolean),
    userid: req.session.userId,
  });
  const { selectedPost } = req.session;
  res.redirect("/post/" + selectedPost._id);
};
