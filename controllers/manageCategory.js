// 변수 전체 수정 필요

const Category = require('../models/Category.js');

module.exports = async (req, res) =>{
    const category = await Category.find({}).populate('userid')  
    // console.log(req.session)      
    res.render('index',{
        category,
    });
}