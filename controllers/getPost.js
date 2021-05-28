const BlogPost = require('../models/BlogPost.js')
module.exports = async (req,res) =>{
    const blogpost =  await BlogPost.findById(req.params.id).populate('userid')
    const userInfo = req.session.User;
    // console.log(blogpost)
    res.render('post',{
        userInfo,
        blogpost
    })
}
