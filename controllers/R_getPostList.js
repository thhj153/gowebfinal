const BlogPost = require('../models/BlogPost.js')
const Category = require("../models/Category.js")

module.exports = async (req,res) =>{
    let categoryID = "";
    let hrefData = location.href.split('?');
    if(hrefData.length > 1) {
        categoryID += hrefData[1].split('=')[1];
    }
    const blogpost =  await BlogPost.find({'category' : categoryID});
    const userInfo = req.session.User;
    const categories = await Category.find({});
    // console.log(blogpost)
    /**
     * category 별로 포스트를 모아 보여주는 화면이 필요.
     * index.ejs를 활용하면 될까 싶긴 합니다.
     * 
     * 작동할지 안할지 잘 모르겠네요.
     */
    res.render('postList', {
        userInfo,
        blogpost,
        categories
    })
}