module.exports = (req, res) =>{
    // if session contains user id
  if(req.session.userId){
    return res.render("create");
  }
  res.redirect('/auth/login')
}