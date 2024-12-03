const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            minlength: 4,
            maxlength: 50,
        },
        lastName: {
            type: String,
        },
        emailId: {
            type: String,
            lowercase: true,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            validate: {
                validator: validator.isEmail,
                message: (props) => `${props.value} is not a valid email address`,
            },
        },
        password: {
            type: String,
            required: true,
            validate(value) {
                if(!validator.isStrongPassword(value)){
                    throw new Error("Enter a Strong Password: " + value);
                }
            },
        },
        age: {
            type: Number,
            min: 18,
        },
        gender: {
            type: String,
            validate(value) {
                const allowedGenders = ["male", "female", "others"];
                if (value && !allowedGenders.includes(value)) {
                    throw new Error("Gender data is not valid");
                }
            },
        },
        photoUrl: {
            type: String,
            default: "https://www.pnrao.com/wp-content/uploads/2023/06/dummy-user-male.jpg",
            validate(value) {
                if(!validator.isURL(value)){
                    throw new Error("Invalid Photo URL: " + value);
                }
            },
        },
        about: {
            type: String,
            default: "This is the default about of the user",
        },
        skills: {
            type: [String],
            default: [], // Default to an empty array
        },
    },
    {
        timestamps: true, // Adds `createdAt` and `updatedAt` fields automatically
    }
);

userSchema.methods.getJWT = async function () {
    const user = this;

    const token = await jwt.sign({_id: user._id},"DEV@Tinder$790",{
        expiresIn:"1d",
     });

     return token;
}

userSchema.methods.validatePassword = async function (passwordInputByUser){
    const user = this;
    const passwordHash = user.password;
    const isPasswordValid = await bcrypt.compare("password" , passwordHash);
    return isPasswordValid;
}

const User = mongoose.model("User", userSchema);

module.exports = User;
