import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connnectDB= async ()=>{
    try{
        await mongoose.connect(process.env.DB_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true});
    }
    catch(err){
        console.log(err)
    }

}
