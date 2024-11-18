const express = require("express");

const app = express();

const {adminAuth} = require("./middlewares/auth");

//middleware 

app.listen(7777 , ()=>{
    console.log("Server is listening on PORT 7777");
});
