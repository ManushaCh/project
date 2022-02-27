//create expres app
const exp = require("express")
const app = exp()
const path=require("path")

const doctorApp=require("./APIs/doctorApi")
require("dotenv").config()

const mongoose =  require("mongoose")
const dataBaseConnectionUrl = process.env.DATABASE_URL

//connecting fron-end and back-end
app.use(exp.static(path.join(__dirname,'./dist/fullstackmedico')))




//connect to database
mongoose.connect(dataBaseConnectionUrl)
.then(()=>{console.log("connected to db")})
.catch(err=>{console.log(err)})


app.use("/doctor",doctorApp)


// catch all other routes and return the index file
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/fullstackmedico/index.html'));
})


app.listen(2000,()=>{
    console.log("web server running on port 2000")
})