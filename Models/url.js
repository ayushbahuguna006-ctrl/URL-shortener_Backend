const mongoose=require('mongoose')
constURlSchema=newmongoose.Schema({
    shortid:{type:String,require:true,unique:true},
    redirectURL:{type:String,require:true},
    VisitHistory:[{timestamps:}]

})