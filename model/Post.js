const mongoose =require("mongoose")

const PostSchema =mongoose.Schema({
    name:String,
    des:String,
    type:String,
})
module.exports=mongoose.model("cam",PostSchema)