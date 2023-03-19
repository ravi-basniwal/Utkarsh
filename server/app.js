const express = require('express')
// explain express 
const app = express()
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')
mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo db")
})
mongoose.connection.on('error',(err)=>
{
    console.log("error ",err)
})
const PORT = 5000

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log("server is running",PORT)
})