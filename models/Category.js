const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  lookable: {
    type: String,
    required: true,
  }
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
