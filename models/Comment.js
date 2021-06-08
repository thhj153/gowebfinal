const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: [String],
  userid: {
    // 작성자 정보
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  dateCommented: {
    // 댓글 작성일
    type: Date,
    default: new Date(),
  },
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
