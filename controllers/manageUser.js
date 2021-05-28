const User = require('../models/User.js')

/**
 * 이 컨트롤러는 무엇을 위한 것인지 명시 필요.
 * UserList를 갖고 오기 위함인지, 새롭게 정의된 User를 갖고 오기 위함인지 알아야함
 * (만약 list를 갖고오기 위함이라면 최소한 Users라고 복수형 표기하라도 해주심이...)
 * 
 * find().populate() 함수 기능은 schema에 Object를 ref하고 있는 field userid가 있을 때에만 사용가능합니다.
 * field가 없는 상태에서 populate를 하게 되면 NullRef 에러가 나서, 페이지 이동이 막힙니다.
 * 이용자 계정 정보 표시를 위해서라면 login 함수에서 req 에 계정 정보를 넣으면 됩니다.
 */
module.exports = async (req, res) =>{
    const user = await User.find({}); //리스트를 갖고 온다면 이렇게만 써도 충분합니다

    // console.log(req.session)      
    res.render('userlist',{
        user,
    });
}