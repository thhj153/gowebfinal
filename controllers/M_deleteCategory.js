const Category = require('../models/Category');

module.exports = (req, res) => {
    Category.deleteOne({ 'name' : req.body.name }, async (err) => {
        const categories = await Category.find({});

        return res.redirect("/categories")
    })
} 
