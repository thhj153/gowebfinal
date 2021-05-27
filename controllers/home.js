const BlogPost = require('../models/BlogPost.js')

module.exports = async (req, res) =>{
    const blogposts = await BlogPost.find({}).populate('userid');
    const userInfo = req.session.User; //페이지 내 user 정보 표시를 위한 패러미터
    // console.log(req.session)      
    res.render('index',{
        userInfo,
        blogposts
    });
}