const BlogPost = require('../../models/BlogPost.js')
const Category = require("../../models/Category.js")

module.exports = async (req,res) =>{

    let categoryID = req.params.id;

    const blogposts =  await BlogPost.find({'category' : categoryID}).populate('category').populate('userid');
    const userInfo = req.session.User;
    
    const cat = await Category.findById(categoryID);
    console.log(cat);
    const catName = cat.name;

    const categories = await Category.find({});
    
    res.render('postList', {
        catName,
        userInfo,
        blogposts,
        categories
    })
}