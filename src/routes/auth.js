const express = require('express');
const authRouter = express.Router();
const {validateSignUpData} = require("../utils/validation");
const User = require("../models/user"); // Import the User model
const bcrypt = require("bcrypt");

authRouter.post("/signup", async (req, res) => {
    try{
    //Validation of data 
    validateSignUpData(req);
 
    const {firstName , lastName , emailId ,password} = req.body;
    //Encrypt the password
 
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
 
    
    //Creating the new instance of User Model
    const user = new User({
       firstName,
       lastName,
       emailId,
       password: passwordHash,
    });
    
       await user.save();
       res.send("User added successfully");
    } catch(err) {
       res.status(400).send("Error : " + err.message);
    }
    
    
 });

 authRouter.post("/login", async(req,res) =>{
    try{
       const {emailId , password} = req.body;
 
       const user = await User.findOne({emailId : emailId});
       if (!user){
          throw new Error("Invalid Credentials");
       }
 
       const isPasswordValid = await user.validatePassword(password);
 
       if(isPasswordValid) {
 
          //Create a JWT token 
 
          const token = await user.getJWT();
          console.log(token);
 
          //Add the token to cookie and send the response back to the user
 
          res.cookie("token",token,{expires:new Date(Date.now()+ 8 * 3600000),});
          res.send("Login Successful!!!");
 
          
       }
       else{
          throw new Error("Invalid Credentials");
       }
 
    }catch(err) {
       res.status(400).send("Error : " + err.message);
    }
 });

 authRouter.post("/logout", async(req,res) =>{

   res.cookie("token",null,{
      expires: new Date(Date.now()),
   });
   res.send("Logout Successful");

 });
 
module.exports = authRouter;
