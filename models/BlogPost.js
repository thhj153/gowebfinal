const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: String,
  body: String,
  // username: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  datePosted: {
    type: Date,
    default: new Date()
  }, 
  image: String,
  // 카테고리 별 분류를 위해 삽입한 필드
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
module.exports = BlogPost;
