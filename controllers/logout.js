module.exports = (req, res) => {
  sess = req.session;
  req.session.destroy((err) => {
    res.redirect("/");
  });
};

// destroy all session data including user id
