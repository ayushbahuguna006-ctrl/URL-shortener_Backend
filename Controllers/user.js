const {v4:uuidv4}=require ('uuid')
const {setuser}=require ('../Service/auth')
const User=require('../Models/user')
async function handleUserSignUp(req,res) {
    const {name,password,email}=req.body
    await User.create({
        name,
        email,
        password
    })
    return res.redirect("/url/home/")
}
async function handleUserLogin(req,res) {
   const {email,password}=req.body;
   const user=await User.findOne({email,password})
   if(!user){
    return res.render("login",{
        error:"invalid username or password"
    })
   }
  const sessionid=uuidv4();
  setuser(sessionid,user)
  res.cookie('uid',sessionid)
   return res.redirect("/url/home/")
}
module.exports={
    handleUserSignUp,
    handleUserLogin,
}
