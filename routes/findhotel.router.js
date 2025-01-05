import { Router } from "express";
import { hotelModel } from "../model/hotelSchema.js"; 
const router=Router();

router.route('/:id').get(async (req,res)=>{
    try{
        const {id}=req.params;
        const data=await hotelModel.findById(id);
        data ? res.json(data) : res.status(400).json({message: "NO DATA FOUND"});
    }
    catch(err){
        res.json({message: "I am not able to fetch Catergories data Bro: ", error: err});
    }

    
})

export default router;