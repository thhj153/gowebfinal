const Comment = require("../models/Comment.js");
const path = require("path");

module.exports = async (req, res) => {
  const { selectedPost } = req.session;
 
  await Comment.updateOne( { _id: req.params.id }, {
      body: req.body.body.split("\r\n").filter(Boolean),
      dateCommented: new Date(),
    });

  res.redirect("/post/" + selectedPost._id);
};
