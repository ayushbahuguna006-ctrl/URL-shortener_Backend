const mongoose=require ('mongoose')
function connectTomongoDb(url) {
    return mongoose.connect(url)
}
module.exports={
    connectTomongoDb
}