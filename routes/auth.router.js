import { Router } from "express";
import CryptoJS from "crypto-js";
import { userModel } from "../model/userSchema.js";
import jwt from "jsonwebtoken";
const router=Router();

router.route('/signup').post(async (req,res)=>{
    try{
        const newUser= new userModel({username: req.body.username,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString(),
            email: req.body.email,
            phn: req.body.phn});

        
        const user=await newUser.save();
        user ? res.status(201).json(user) : res.status(400).json({message: "Unable to insert the user in DB"});
    }
    catch(err){
        res.status(500).json({message: "Connection issue ", error: err});
    }

    
})

router.route('/login').post(async (req,res)=>{
    try{
        
        const user=await userModel.findOne({phn: req.body.phn});
        if(!user)
            return res.status(400).json({message: "No Registered Phone Number"});

        const pwd= req.body.password;
        var decryptedPassword=CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
        console.log("Decreted: ", decryptedPassword, "actual: ",pwd);
        decryptedPassword!==pwd && res.status(400).json({message: "Invalid Password"});

        //TOKEN CREATION
        const {password,...rest}=user._doc;
        const accessToken =jwt.sign( {username: user.username}, process.env.ACESSTOKEN_SECRET_KEY );

        res.status(200).json({message: "Succesfully logged In and created its respective access token ", accToken: accessToken, remaining: rest});

    }
    catch(err){
        res.status(500).json({message: "Connection issue ", error: err});
    }


    
})

export default router;



// var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// // Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);