
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const cloudinary = require("./helper/cloudinaryconfig")


app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://127.0.0.1:27017/uploadImage')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


    const userSchema = new mongoose.Schema({
        imgpath:{
            type:String,
            required:true
        }
    })
    
    const users = new mongoose.model("users",userSchema)
    

const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
     callback(null,"./uploads")
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
})



const upload = multer({
 storage:imgconfig,

})

app.post("/register",upload.single("photo"),async(req,res)=>{

// console.log(req.file)
const upload = await cloudinary.uploader.upload(req.file.path)
// console.log(upload)

try{


const userdata = new users({
 imgpath:upload.secure_url
});
await userdata.save();
res.status(200).json(userdata)
} catch (error){
 res.status(400).json(error)

}


})


//user get data

app.get("/getdata",async(req,res)=>{
 try{
     const getUser = await users.find();
     res.status(200).json(getUser)
 }catch (error){
     res.status(400).json(error)
 }
})



app.listen(5500,()=>console.log("server connected"))