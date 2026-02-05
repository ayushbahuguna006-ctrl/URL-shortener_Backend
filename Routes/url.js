const express=require('express')
const router=express.Router()
const {handleGenerateNewShortUrl,handleGetAnalysis}=require ('../Controllers/url')
router.post("/home",handleGenerateNewShortUrl)
router.get("/analytics/:shortid",handleGetAnalysis)
module.exports=router;

