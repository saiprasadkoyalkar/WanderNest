import { hotelModel } from "../model/hotelSchema.js";
import { hotels } from "../data/hotels.js";
import { Router} from "express";

const router= Router();
router.route('/').post(async (req,res)=>{
    try{
        const hotelDB= await hotelModel.insertMany(hotels.data);
        res.json({hello: "successfully inserted Hotels Bro "});
    }
    catch(err)
    {
        res.json({message: "I am not able to import Hotels data Bro: ", error: err});
    }
})

export default router;