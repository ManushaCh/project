const exp=require("express")
const Doctor=require("../models/Doctor")
const doctorApp=exp.Router()
const expressAsyncHandler = require("express-async-handler")
const bcryptjs=require("bcryptjs")
const jwt= require("jsonwebtoken")
doctorApp.use(exp.json())
require("dotenv").config()
//get doctors list
//get doctors
doctorApp.get('/getdoctors',expressAsyncHandler(async(req,res)=>{

    //we have to call on model and no need toArray //if any thing returns query try to use exec() method on them
    //exec() is optional
    let doctors = await Doctor.find().exec()

    res.send({message:"doctorsData",payload:doctors})
}))

//get  doctors by username
//get user by username
doctorApp.get('/getdoctors/:username',expressAsyncHandler(async(req,res)=>{
    //get username from url
    let usernameFromUrl=req.params.username
     //find user by username
     let doctorFromDb = await Doctor.findOne({username:usernameFromUrl}).exec()
 
     //if user not found, it returns null
     if(doctorFromDb==null){
         res.status(404).send({message:"doctor not found"})
     }
     //if user existed
     else{
         res.status(200).send({message:"doctor existed",payload:doctorFromDb})
     }
     
 }))







module.exports = doctorApp