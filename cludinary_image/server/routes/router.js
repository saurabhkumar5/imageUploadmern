// const express = require("express");
// const router = new express.Router();
// const multer = require("multer");
// const cloudinary = require("../helper/cloudinaryconfig")
// const moment = require("moment")
// const users = require("../model/userSchema")


// const imgconfig = multer.diskStorage({
//        destination:(req,file,callback)=>{
//         callback(null,"./uploads")
//        },
//        filename:(req,file,callback)=>{
//            callback(null,`image-${Date.now()}.${file.originalname}`)
//        }
// })

// //img filter
// const isImage = (req,file,callback)=>{
//     if(file.mimetype.startsWith("image")){
//         callback(null,true)
//     }else{
//         callback(new Error("only image is allow"))
//     }
// }

// const upload = multer({
//     storage:imgconfig,
//     fileFilter:isImage
// })

// router.post("/register",upload.single("photo"),async(req,res)=>{

// // console.log(req.file)
// const upload = await cloudinary.uploader.upload(req.file.path)
// // console.log(upload)

// const {name} = req.body;

// try{
//    const date = moment(new Date()).format("YYYY-MM-DD");

//    const userdata = new users({
//     imgpath:upload.secure_url
//    });
//    await userdata.save();
//    res.status(200).json(userdata)
// } catch (error){
//     res.status(400).json(error)

// }


// })


// //user get data

// router.get("/getdata",async(req,res)=>{
//     try{
//         const getUser = await users.find();
//         res.status(200).json(getUser)
//     }catch (error){
//         res.status(400).json(error)
//     }
// })

// module.exports = router;