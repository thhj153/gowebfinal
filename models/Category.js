const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  /**
   * 재홍 - category_name field 재정의.
   * schema 내부에 있으므로 굳이 이름을 길게 쓸 필요는 없다고 판단
   * Category는 무엇을 위한 스키마인가요?
   */
  name: {
    type: String,
    required: true,
  },
});

//재홍 - 대소문자 변경
const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
