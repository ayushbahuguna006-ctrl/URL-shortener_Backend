const express=require ('express')
const app=express()
const path=require('path')
const url=require('./Models/url')
const router=require ('./Routes/url')
const {connectTomongoDb}=require('./DB-Connection/url')
connectTomongoDb('mongodb://127.0.0.1:27017/shorturl').then(()=>{console.log('DB connected')})
app.set('view engine','ejs')
app.set('Views',path.resolve('../Views'))
app.use(express.urlencoded({ extended: false }))   //helps in parsing human readable format 
app.use(express.json())  //middleware //helps in sending json format parsing
app.use('/url',router)
app.get("/url/home",async(req,res)=>{
     await res.render("home")
})
app.get("/:shortid",async(req,res)=>{
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