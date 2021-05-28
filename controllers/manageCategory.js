// 변수 전체 수정 필요

const Category = require("../models/Category.js");

module.exports = async (req, res) => {
  /**
   * Category 스키마 내부에는 userid 필드가 없어서 populate 호출 불가능. 이건 무엇을 구현하기 위함인가요?
   * 두세 개 탭을 구분하기 위해 별도의 스키마를 정의하는 거라면 다소 비효율적이라 봅니다.
   */

  const category = await Category.find({});
  // console.log(req.session)
  res.render("categories", {
    /**
     * render 함수는 페이지를 단 한 번 그려냅니다.
     * index 페이지는 home controller가 담당하고 있으므로 이 컨트롤러에서 불러내서는 안 됩니다.
     * index 페이지는 postList를 패러미터로 요구하는 페이지이므로 그대로 이동하면 렌더링 에러 납니다.
     * 탭 구분을 위한 일련의 문자열 리스트를 페이지에 추가하는 거라면 모든 다른 컨트롤러에 추가하는 식이 되어야지,
     * 별도의 컨트롤러가 만들어지는 식으로는 구현이 되지 않습니다.
     * (이 컨트롤러는 삭제하는 게 맞다고 봅니다.)
     */
    category,
  });
};
