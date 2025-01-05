import mongoose from "mongoose";
const catergoriesSchema = new mongoose.Schema({
    category: {type: String, required: true}
})

export const catergoriesModel= mongoose.model("catergoriesModel",catergoriesSchema)