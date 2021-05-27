const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const CategorySchema = new Schema({
  category_name: String,
});

const Category = mongoose.model("category", CategorySchema);

module.exports = Category;
