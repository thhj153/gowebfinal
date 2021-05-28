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
  user.admin = true;
  switch (user.grade) {
    case GRADE.AMEBA:
      /**
       * switch문에서 null인지 아닌지 확인하는 것은 그다지 좋지 않은 방식이므로...
       * 참고로 위의 hash 함수 내부에서 next()를 호출하기 때문에 이 switch 블록은 실행이 안 됩니다;;
       */
      user.grade = "아메바";
      break;
    case GRADE.GINDGI:
      user.grade = "진드기";
      break;
    case GRADE.DAKDULGI:
      user.grade = "닭둘기";
      break;
    default:
      user.grade = "아메바";
      break;
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
