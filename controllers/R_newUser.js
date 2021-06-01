
const Category = require("../models/Category.js");


module.exports = async(req, res) =>{
    const categories = await Category.find({});
    res.render('register', {
        cate
    })
}