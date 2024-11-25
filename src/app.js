const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user"); // Import the User model

app.use(express.json());

// Signup Route
app.post("/signup", async (req, res) => {
   
   const user = new User(req.body);
   try{
      await user.save();
      res.send("User added successfully");
   } catch(err) {
      res.status(400).send("Error saving the user:" + err.message);
   }
   
   
});

//Get user by email
app.get("/user",async (req,res) =>{
   const userEmail = req.body.emailId;

   try{
      console.log(userEmail);
      const user = await User.findOne({emailId: userEmail});
      if(!user){
         res.status(404).send("User not found");
      }else{
         res.send(user);
      }
   }
   catch(err){
      res.status(400).send("Something went wrong");
   }
})

// Feed API
app.get("/feed",async(req,res)=>{
   try{
      const users = await User.find({});
      res.send(users);
   }
   catch(err){
      res.status(400).send("Something went wrong");
   }

});

app.delete("/user",async(req,res)=>{
   const userId = req.body.userId;
   try{

      const user = await User.findByIdAndDelete(userId);
      res.send("User deleted successfully");

   }catch(err){
      res.status(400).send("Something went wrong");
   }

});

app.patch("/user/:userId", async (req, res) => {
   const userId = req.params?.userId; // Extract userId from the body
   const data = { ...req.body }; // Clone the request body
   delete data.userId; // Remove userId before validation and update

   try {
      const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age","skills"]; // Allowed fields

      // Validate updates
      const isUpdateAllowed = Object.keys(data).every((key) =>
         ALLOWED_UPDATES.includes(key)
      );
      if (!isUpdateAllowed) {
         throw new Error("Update not allowed");
      }
      if(data?.skills.length > 10){
         throw new Error("Skills cannot be more than 10");
      }

      // Update the user
      const user = await User.findByIdAndUpdate(userId, data, {
         new: true, // Return the updated document
         runValidators: true, // Validate the updated fields
      });

      if (!user) {
         return res.status(404).send("User not found");
      }

      console.log(user);
      res.send("User updated successfully");
   } catch (err) {
      res.status(400).send("UPDATE FAILED: " + err.message);
   }
});

// Connect to the database and start the server
connectDB()
    .then(() => {
        console.log("Database connection established");

        app.listen(7777, () => {
            console.log("Server is listening on PORT 7777");
        });
    })
    .catch((err) => {
        console.error("Database cannot be connected:", err.message);
    });
