const express = require("express");

const app = express();

//middleware 
app.use("/user",(req,res,next)=>{
    //Route Handler
    res.send("Route Handler 1");
    next();
},
(req,res)=>{
    res.send("Route Handler 2")
});

app.listen(7777 , ()=>{
    console.log("Server is listening on PORT 7777");
});
