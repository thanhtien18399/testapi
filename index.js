const express=require('express');
const app =express();
const mongoose=require('mongoose')
require("dotenv/config")
const body =require("body-parser")

app.use(body.json())
//middle ware


//import the router
const postRouter=require("./routes/posts")

app.use('/cam',postRouter)
app.get('/',(req,res)=>{
    res.send("hello word!!");
})
app.listen(process.env.Port||4000)
//create a listening port
async function connect(){
    try {
    await mongoose.connect(process.env.DB_CONNECTION,
     {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Connect successfully");
    } catch (error) {
        console.log("Connect failure");
    }
}
connect();

