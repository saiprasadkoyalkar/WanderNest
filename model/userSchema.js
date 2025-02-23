import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phn: {type: Number, required: true, unique: true}
})

export const userModel= mongoose.model("userModel",userSchema)