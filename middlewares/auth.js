const { getUser }=require('../Service/auth')
function checkforauthentication(req,res,next){
    const tokencookie=req.cookies.token;
    req.user=null
    if(!tokencookie) return next()
        const token=tokencookie
    const user=getUser(token)
    req.user=user
    return next()
}
function restrictto(roles=[]){
    return function(req,res,next){
        if(!req.user) return res.redirect('/user/login')
        if(!roles.includes(req.user.role)) return res.end('unauthorised')
        return next()
    }
}
module.exports={checkforauthentication,restrictto}