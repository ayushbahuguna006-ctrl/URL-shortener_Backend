const express=require ('express')
const app=express()
const url=require('./Models/url')
const router=require ('./Routes/url')
const {connectTomongoDb}=require('./DB-Connection/url')
connectTomongoDb('mongodb://127.0.0.1:27017/shorturl').then(()=>{console.log('DB connected')})
app.use(express.json())  //middleware
app.use('/url',router)
app.get("/:shortid",async(req,res)=>{
    const shortid=req.params.shortid;
  const entry= await url.findOneAndUpdate({
        shortid:shortid
    },{
        $push:{
            VisitHistory:{
                timestamp:Date.now()
            }
        }
    },  { new: true } )
      
    res.redirect(entry.redirectURL);
})


app.listen(8000,()=>{console.log("server started")})