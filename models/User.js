const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const GRADE = require("../util/const.js");
const UserSchema = new Schema({
  username: {
    // pass in config object. and put in validation rules
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    require: true,
  },
  admin: {
    type: Boolean,
    require: true,
  },
});

// note: no lambda func! (not work!)
UserSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
