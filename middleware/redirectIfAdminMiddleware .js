// 수정 필요(Admin 구별)

module.exports = (req, res, next) => {
  if (req.session.userId) {
    return res.redirect("/");
  }
  next();
};
