const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user"); // Import the User model


// Signup Route
app.post("/signup", async (req, res) => {
   const user = new User({
      firstName: "Virat",
      lastName:"Kohli",
      emailId:"Vkohli@gmail.com",
      password:"Kohli123",
   });

   await user.save();
   res.send("User added successfully")
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
