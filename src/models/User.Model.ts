import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    phone:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    zodiacSign: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    DOB: {
        type: String,
        required: true,
    },
    birthTime: {
        type: String,
        required: true,
    },
    birthPlace: {
        type: String,
        required: true,
    },
});



const userModel = mongoose.model("User", userSchema);
export default userModel;
