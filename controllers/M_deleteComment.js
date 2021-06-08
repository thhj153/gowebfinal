const Comment = require("../models/Comment");

module.exports = (req, res) => {
  //console.log(req.params.id);
  const { selectedPost } = req.session;

  Comment.deleteOne({ _id: req.params.id }, async (err) => {
    return res.redirect("/post/" + selectedPost._id);
  });
};
