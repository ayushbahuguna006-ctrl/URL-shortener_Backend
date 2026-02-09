const mongoose=require('mongoose')
const URlSchema=new mongoose.Schema({
    shortid:{type:String,required:true,unique:true},
    redirectURL:{type:String,required:true},
    VisitHistory:[{timestamp:{type:Number}}],
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})
  const url=mongoose.model("url",URlSchema)
  module.exports= url
  