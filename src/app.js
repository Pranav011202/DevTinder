const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("hello from the server")
});

app.listen(3000 , ()=>{
    console.log("Server is listening on PORT 3000");
});
