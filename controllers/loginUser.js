const bcrypt = require("bcrypt");
const User = require("../models/User");
const GRADE = require("../util/const.js");

module.exports = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
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
          req.session.grade = user.grade;
          console.log(req.session.grade);

          res.redirect("/");
        } else {
          res.redirect("/auth/login");
        }
      });
    } else {
      res.redirect("/auth/login");
    }
  });
};
