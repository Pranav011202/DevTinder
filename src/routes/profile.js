const express = require('express');
const profileRouter = express.Router();
const {userAuth} = require("../middlewares/auth");

profileRouter.get("/profile",userAuth, async (req, res) => {
    try {
      const user = req.user;
 
       res.send(user);
 
    } catch (err) {
       console.error("Error accessing profile:", err.message);
       res.status(400).send("Error accessing profile: " + err.message);
    }
 });

 module.exports = profileRouter;