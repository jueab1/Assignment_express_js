// ✔✔✔File Downlaod✔✔✔✔

let express= require("express")
let app = express()

app.post("/",(req,res)=>{
    res.download("./download/loading.jpg")
})
app.listen(8000,function () {
    console.log("server run success")
})



// ✔✔Make a post API with URL query,body & headers properties

// ✔✔✔✔✔query

const express= require("express")
const app = express()

app.post("/",(req,res)=>{
    let firstname= req.query.firstname
    let lastname= req.query.lastname
    res.send(firstname+" "+lastname)
})
app.listen(8000,function () {
    console.log("server run success")
})


// 👀👀HEADER

app.post("/",(req,res)=>{
    const username= req.header("username")
    const password= req.header("password")
    res.send("username:"+username+"password"+password)
})
app.listen(8000,function () {
    console.log("server run success")
})



// ✔✔✔✔✔BODY
let express= require("express")
let bodyparser= require("body-parser")
let app = express()
app.use(bodyparser.json())

app.post("/",(req,res)=>{
    let jsondata= req.body
    let jsonstring= JSON.stringify(jsondata)
    res.send(jsonstring)
})
app.listen(8000,function () {
    console.log("server run success")
})







// ✔✔✔Make file upload  api support png,jpg

let express= require("express")
let multer= require("multer")

let app = express()
let storage= multer.diskStorage({
    destination:function (req,file,callback) {
        callback(null,"./uploads")
    },
    filename:function (req,file,callback) {
        callback(null,file.originalname)
    }
})
let upload= multer({storage:storage}).single("myfile")

app.post("/",(req,res)=>{
    upload(req,res,function (error) {
        if(error){
            res.send("file upload failed")
        }
        else {
            res.send("file upload success")
        }
    })
})

app.listen(8000,function () {
    console.log("server run success")
})