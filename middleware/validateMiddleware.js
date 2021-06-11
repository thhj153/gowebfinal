module.exports = (req, res, next) => {
  if (req.body.title == null || req.body.body == null) {
    return res.redirect("/posts/new");
  }
  next();
};
