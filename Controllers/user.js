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
   return res.redirect("/url/home/")
}
module.exports={
    handleUserSignUp,
    handleUserLogin,
}
