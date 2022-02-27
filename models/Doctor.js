const mongoose=require("mongoose")
//create user schema
const doctorSchema= new mongoose.Schema({
   
    username:{type:String,required:[true,"username is required"]},
    password:{type:String,required:[true,"password is required"]},
    city:{type:String,required:[true,"city is required"]},
    consultationFee:{type:Number,required:[true,"consultationFee is required"]},
    phoneno:{type:Number,required:[true,"phone number is required"]},
    specialization:{type:String,required:[true,"specialization is required"]},
    experience:{type:Number,required:[true,"experience is required"]},
    name:{type:String,required:[true,"name is required"]}
    },
    
    {collection:'doctorcollection'}
    )

//create user model
const doctorModel = mongoose.model("doctor",doctorSchema)
//export model
module.exports=doctorModel