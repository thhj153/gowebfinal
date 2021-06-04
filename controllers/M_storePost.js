const BlogPost = require("../models/BlogPost.js");
const path = require("path");

module.exports = (req, res) => {
  let image = req.files.image;
  

  image.mv(
    path.resolve(__dirname, "..", "public/img", image.name),
    async (error) => {
      console.log(req.body.notice);
      let noticeCheck = false
      if(req.body.notice==='on'){
        noticeCheck = true
      }
      await BlogPost.create({
        ...req.body,
        image: "/img/" + image.name,
        userid: req.session.userId,
        category:req.body.category,
        notice:noticeCheck
      });
      res.redirect("/");
    }
  );
};
