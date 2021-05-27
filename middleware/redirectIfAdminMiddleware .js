// 수정 필요(Admin)

module.exports = (req, res, next) =>{
    if(req.session.userId){
      return res.redirect('/') 
    }
    next()
}