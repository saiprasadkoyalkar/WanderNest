import { Router } from "express";
import { catergoriesModel } from "../model/categoriesSchema.js";
const router=Router();

router.route('/').get(async (req,res)=>{
    try{
        const data=await catergoriesModel.find({});
        data ? res.json(data) : res.status(400).json({message: "NO DATA FOUND"});
    }
    catch(err){
        res.json({message: "I am not able to fetch Catergories data Bro: ", error: err});
    }

    
})

export default router;