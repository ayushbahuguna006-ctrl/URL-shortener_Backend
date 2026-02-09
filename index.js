const express=require ('express')
const app=express()
app.use(express.urlencoded({ extended: false }))   //helps in parsing human readable format 
app.use(express.json())  //middleware helps in sending json format parsing
const userroute=require ('./Routes/user')
const urlroute=require ('./Routes/url')
app.use('/user',userroute)
const path=require('path')
const url=require('./Models/url')
app.use('/url',urlroute)
const {connectTomongoDb}=require('./DB-Connection/url')
const shortid = require('shortid')
connectTomongoDb('mongodb://127.0.0.1:27017/shorturl').then(()=>{console.log('DB connected')})
app.set('view engine','ejs')
app.set('Views',path.resolve('../Views'))
app.get("/url/home",async(req,res)=>{
      const allurl = await url.find({});  
  res.render("home", {                        
    url: allurl                     
  });
})


app.get("/url/:shortid",async(req,res)=>{
     try {
        const shortid = req.params.shortid;

        const entry = await url.findOneAndUpdate(
            { shortid },
            { $push: { VisitHistory: { timestamp: Date.now() } } },
            { new: true }
        );

        if (!entry) {
            return res.status(404).send("Short URL not found");
        }

        res.redirect(entry.redirectURL);
    } catch (err) {
        console.error("Error during redirect:", err);
        res.status(500).send("Server error");
    }
})



app.listen(8000,()=>{console.log("server started")})