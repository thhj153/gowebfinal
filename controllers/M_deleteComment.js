const Comment = require("../models/Comment");

module.exports = (req, res) => {
  console.log(req.body);
  Comment.deleteOne({ _id: selectedComment._id }, async (err) => {
    const { selectedPost } = req.session;
    return res.redirect("/post" + selectedPost._id);
  });
};
