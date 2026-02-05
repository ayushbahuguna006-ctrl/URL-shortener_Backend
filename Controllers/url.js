const shortid = require ('shortid');
const url=require('../Models/url')
async function handleGenerateNewShortUrl(req,res) {
    const body=req.body
    if(!body.url) return res.status(400).json({error:'url is required'})
        const shortID=shortid.generate()
    await url.create({
        shortid:shortID,
        redirectURL:body.url,
        VisitHistory:[],
    })
    const allurl=await url.find({})
    return res.render('home',{id:shortID,url:allurl})
}
async function handleGetAnalysis(req,res) {
    const shortid=req.params.shortid
    const result=await url.findOne({shortid})
    return res.json({
        TotalClicks:result.VisitHistory.length
    })
}
module.exports={
    handleGenerateNewShortUrl,
    handleGetAnalysis
}
