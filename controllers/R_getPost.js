const BlogPost = require('../models/BlogPost.js')
const Category = require("../models/Category.js")

module.exports = async (req,res) =>{
    const blogpost =  await BlogPost.findById(req.params.id).populate('userid')
    const userInfo = req.session.User;
    const categories = await Category.find({});
    // console.log(blogpost)
    res.render('post', {
        userInfo,
        blogpost,
        categories
    })
}
