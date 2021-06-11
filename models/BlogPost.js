const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: { type: String, required: true },
  body: [String],

  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  datePosted: {
    type: Date,
    default: new Date(),
  },
  image: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  notice: {
    type: Boolean,
    require: true,
  },
});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);
module.exports = BlogPost;
