import mongoose from "mongoose";
const wislistSchema = new mongoose.Schema({
    hotelId: {type: String, required: true}
})

export const wishlistModel= mongoose.model("wislistModel",wislistSchema)