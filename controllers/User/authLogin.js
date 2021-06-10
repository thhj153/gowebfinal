const Category = require("../../models/Category");

module.exports = async (req, res) =>{
    const categories = await Category.find({});
    res.render('login', {
        categories
    })
}