import dotenv from "dotenv";
import app from "./app.js"
// import express from "express";
dotenv.config({
    path:"./.env",
});
// const app=express();
const port =process.env.PORT||3000

// app.get('/',(req,res)=>{
//     res.send("this is a simple path");
// });


// app.get('/instagram',(req,res)=>{
//     res.send("this is instagram");
// });

app.listen(port,()=>{
    console.log("Application is Running on "+port);
    
})