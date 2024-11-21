const mongoose = require('mongoose');

const connectDB = async() =>{
    await mongoose.connect(
        "mongodb+srv://Stoic_Savvy:xd4pwMv_%40m5JS3Q@namastenode.pz089.mongodb.net/devTinder"
    );
};

module.exports = connectDB;