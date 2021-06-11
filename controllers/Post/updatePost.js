const BlogPost = require("../../models/BlogPost");
const path = require("path");

module.exports = async (req, res) => {
  const { selectedPost } = req.session;
  let image = req.files ? req.files.image : { name: "" };
  let noticeCheck = false;
  if (req.body.notice === "on") {
    noticeCheck = true;
  }
  if (req.files) {
    image.mv(
      path.resolve(__dirname, "..", "public/img", image.name),
      async () => {
        await BlogPost.updateOne(
          { _id: selectedPost._id },
          {
            title: req.body.title,
            image: "/img/" + image.name,
            body: req.body.body.split("\r\n").filter(Boolean),
            userid: req.session.userId,
            category: req.body.category,
            notice: noticeCheck,
          }
        );
      }
    );
  } else {
    await BlogPost.updateOne(
      { _id: selectedPost._id },
      {
        title: req.body.title,
        body: req.body.body.split("\r\n").filter(Boolean),
        userid: req.session.userId,
        category: req.body.category,
        notice: noticeCheck,
      }
    );
  }
  res.redirect("/posts/post/" + selectedPost._id);
};
