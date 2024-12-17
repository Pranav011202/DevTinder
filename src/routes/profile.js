const express = require('express');
const profileRouter = express.Router();
const {userAuth} = require("../middlewares/auth");
const {validateProfileEditData} = require("../utils/validation");

profileRouter.get("/profile/view",userAuth, async (req, res) => {
    try {
      const user = req.user;
 
       res.send(user);
 
    } catch (err) {
       console.error("Error accessing profile:", err.message);
       res.status(400).send("Error accessing profile: " + err.message);
    }
 });

 profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
   try {
       if (!validateProfileEditData(req)) {
           throw new Error("Invalid Edit Request");
       }

       const loggedInUser = req.user;
       
       Object.keys(req.body).forEach(key => (loggedInUser[key] = req.body[key]));
       await loggedInUser.save();

      res.send(`${loggedInUser.firstName}, Your Profile updated successfully`);
   } catch (err) {
       res.status(400).send("ERROR: " + err.message);
   }
});


 module.exports = profileRouter;