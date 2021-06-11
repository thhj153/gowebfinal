module.exports = (req, res) => {
  sess = req.session;
  req.session.destroy(() => {
    res.redirect("/");
  });
};

// destroy all session data including user id
