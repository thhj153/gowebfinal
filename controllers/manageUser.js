const User = require('../models/User.js')

// 아래 요소 DB에 맞게 수정부탁 드립니다.
module.exports = async (req, res) =>{
    const user = await User.find({}).populate('userid')  
    // console.log(req.session)      
    res.render('userlist',{
        user,
    });
}