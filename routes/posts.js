const express=require('express');
const router =express.Router();

const Post =require("../model/Post")
//get all the post
router.get("/",async(req,res)=>{
    try {
        //find()-> get all the đata
        const Cams=await Post.find();
        res.json(Cams)
    } catch (error) {
        res.json({message:erro})
    }
})

router.post('/',async(req,res)=>{
    const post=new Post({
        name:req.body.name,
        des:req.body.des,
        type:req.body.type
    })
    try {
       const saveCam= await post.save();
       res.json(saveCam);
    } catch (error) {
        res.json({message:error})
    }
})

// get a specific postx 

router.get("/:camID",async(req,res)=>{
    try {
        //find()-> get all the đata
        const Cams= await Post.findById(req.params.camID);
        res.json(Cams)
    } catch (error) {
        res.json({message:error})
    }
})

///update the specific post
router.patch("/:camID",async(req,res)=>{
    try {
        const updatePost=await Post.updateOne(
            {
                _id:req.params.camID,

            },
            {
                $set:{
                    name:req.body.name,
                    des:req.body.des,
                    type:req.body.type
                }
            }
        )
        res.json(updatePost)
    } catch (error) {
        
    }
})

///delete

router.delete("/:camID",async(req,res)=>{
    try {
        //find()-> get all the đata
        const removePost= await Post.deleteOne({ _id : req.params.camID });
        res.json(removePost)
    } catch (error) {
        res.json({message:error})
    }
})

module.exports=router;

