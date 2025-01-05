import { catergoriesModel } from "../model/categoriesSchema.js";
import {categories } from "../data/categories.js";
import { Router} from "express";

const router= Router();
router.route('/').post(async (req,res)=>{
    try{
        const categoriesInDB=await catergoriesModel.insertMany(categories.data);
        res.json({hello: "successfully inserted Catergories Bro "});
    }
    catch(err)
    {
        res.json({message: "I am not able to import Catergories data Bro: ", error: err});
    }
})

export default router;