const BlogPost = require("../models/BlogPost.js");
const path = require("path");

module.exports = (req, res) => {
  let image = req.files.image;

  const user = req.session;
  console.log(user);
  image.mv(
    path.resolve(__dirname, "..", "public/img", image.name),
    async (error) => {
      await BlogPost.create({
        ...req.body,
        image: "/img/" + image.name,
        userid: req.session.userId,
      });
      res.redirect("/");
    }
  );
};
