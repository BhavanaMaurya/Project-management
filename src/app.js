import express from "express";
import cors from  "cors";
const app=express();
//basic configuration
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({limit:"16kb"}))
app.use(express.static("public"))

// cors configuration
app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(",")||'https://localhost:5173',
    credential:true,
    methods:["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowheaders:["Content-Type","Authorization"]
}),
);


app.get('/',(req,res)=>{
    res.send("this is a simple path");
});


app.get('/instagram',(req,res)=>{
    res.send("this is instagram");
});

export default app;