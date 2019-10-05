const express=require("express")
const app=express()
const port=3020
app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log('listening to port ',port)
})
