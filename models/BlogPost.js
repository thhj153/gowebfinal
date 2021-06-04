const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: String,
  body: String,
  
  userid: { // 작성자 정보
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  datePosted: { // 글 작성일
    type: Date,
    default: new Date()
  }, 

  image: String, // 글 이미지
  
  category: { // 카테고리
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
module.exports = BlogPost;
