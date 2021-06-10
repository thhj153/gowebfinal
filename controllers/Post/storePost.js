const BlogPost = require("../../models/BlogPost");
const path = require("path");

module.exports = (req, res) => {
  let image = req.files != null ? req.files.image : null;
  let body = req.body;
  if (image != null) {
    image.mv(
      path.resolve(__dirname, "..", "public/img", image.name),
      async (error) => {
        let noticeCheck = false;
        if (req.body.notice === "on") {
          noticeCheck = true;
        }

        await BlogPost.create({
          title: req.body.title,
          image: "/img/" + image.name,
          body: req.body.body.split("\r\n").filter(Boolean),
          userid: req.session.userId,
          category: req.body.category,
          notice: noticeCheck,
        });
        res.redirect("/");
      }
    );
  } else {
    let noticeCheck = false;
    if (req.body.notice === "on") {
      noticeCheck = true;
    }

    BlogPost.create({
      title: req.body.title,
      body: req.body.body.split("\r\n"),
      userid: req.session.userId,
      category: req.body.category,
      notice: noticeCheck,
    });
    res.redirect("/");
  }
};
