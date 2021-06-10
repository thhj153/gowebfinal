
const Category = require("../../models/Category");

module.exports = async(req, res) =>{
  const categories = await Category.find({});
    // if session contains user id
  if(req.session.userId){
    return res.render("create", {
      categories
    });
  }
  res.redirect('/user/auth/login')
}