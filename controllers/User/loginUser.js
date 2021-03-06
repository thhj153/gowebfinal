const bcrypt = require("bcrypt");
const User = require("../../models/User");
const GRADE = require("../../util/const.js");

module.exports = async (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username }, (_, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (_, same) => {
        if (same) {
          req.session.userId = user._id;
          /**
           * 이용자 정보 표시를 위한 필드 추가.
           * 필드 추가 시 윗줄의 id를 별도로 저장할 필요는 없습니다만,
           * 다른 파일에서 수정할 부분이 생기니 일단 다음 회의때까지 두겠습니다
           */
          req.session.User = user;
          req.session.admin = user.admin;
          switch (user.grade) {
            case GRADE.SAESSAK:
              user.grade = "새싹";
              break;
            case GRADE.NAMU:
              user.grade = "나무";
              break;
            case GRADE.YEOLMAE:
              user.grade = "열매";
              break;
            default:
              user.grade = "새싹";
              break;
          }
          req.session.grade = user.grade;
          // console.log(req.session.grade);

          res.redirect("/");
        } else {
          res.redirect("/user/auth/login");
        }
      });
    } else {
      res.redirect("/user/auth/login");
    }
  });
};
