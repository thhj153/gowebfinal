const BlogPost = require("../models/BlogPost.js");
const path = require("path");

module.exports = async (req, res) => {
  const { selectedPost } = req.session;
  let image = req.files ? req.files.image : { name: "" };
  if (req.files) {
    image.mv(
      path.resolve(__dirname, "..", "public/img", image.name),
      async (error) => {
        let noticeCheck = false;
        if (req.body.notice === "on") {
          noticeCheck = true;
        }
        await BlogPost.updateOne(
          { _id: selectedPost._id },
          {
            ...req.body,
            image: "/img/" + image.name,
            userid: req.session.userId,
            category: req.body.category,
            notice: noticeCheck,
          }
        );
      }
    );
  } else {
    let noticeCheck = false;
    if (req.body.notice === "on") {
      noticeCheck = true;
    }
    await BlogPost.updateOne(
      { _id: selectedPost._id },
      {
        ...req.body,
        userid: req.session.userId,
        category: req.body.category,
        notice: noticeCheck,
      }
    );
  }
  res.redirect("/");
};
