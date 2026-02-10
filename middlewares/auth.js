const { getuser }=require('../Service/auth')
async function restricttologgedinuseronly(req,res,next){
    const userUid=req.cookies.uid
    if(!userUid) return res.redirect('/user/login')
        const user=getuser(userUid)
    if(!userUid)  return res.redirect('/user/login')
        req.user=user
    next()
}
async function checkauth(req,res,next){
    const userUid=req.cookies.uid
     const user=getuser(userUid)
      req.user=user
    next()
}
module.exports={restricttologgedinuseronly,checkauth}