import { Router } from "express";
import { wishlistModel} from "../model/wishlistSchema.js";
import { verifyUser } from "../middleware/verifyUser.js";
const router=Router();


router.route('/').post(verifyUser, async (req,res)=>{
    try{
        const newWishlist=new wishlistModel(req.body);
        const wishlisted=await newWishlist.save();
        wishlisted ? res.json({message: "Added in the wishlist ",item: wishlisted}) : res.status(400).json({message: "Unable to add this in wishlist"});
    }
    catch(err){
        res.json({message: "I am not able to fetch Catergories data Bro: ", error: err});
    }
})

router.route('/:hotelId').delete(verifyUser,async (req,res)=>{
    try{
        const data=await wishlistModel.findByIdAndDelete(req.params.hotelId);
        console.log("Prabhas: ", data);
        data ? res.json(data) : res.status(400).json({message: "Unable to delete"});
    }
    catch(err){
        res.json({message: "I am not able to fetch wishlist  data Bro for deleted: ", error: err});
    } 
})


router.route('/').get(verifyUser, async (req,res)=>{
    try{
        const AllWishlisthotels= await wishlistModel.find({});
        AllWishlisthotels ? res.json({message: "AllWishlisthotels are ",item: AllWishlisthotels}) : res.status(400).json({message: "Unable to fetch the wishlisted hotels"});
    }
    catch(err){
        res.json({message: "I am not able to fetch Catergories data Bro: ", error: err});
    }
})

export default router;