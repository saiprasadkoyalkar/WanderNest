import { Router } from "express";
import { hotelModel } from "../model/hotelSchema.js"; 
const router=Router();

router.route('/').get(async (req,res)=>{
    try{
        const categoryID=req.query.category;
        let data;
        if(categoryID)
        {
            data=await hotelModel.find({category: categoryID});
        }
        else{
            data=await hotelModel.find({});
        }
        data ? res.json(data) : res.status(400).json({message: "NO DATA FOUND"});
    }
    catch(err){
        res.json({message: "I am not able to fetch Hotels data Bro: ", error: err});
    }

    
})

export default router;