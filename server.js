import express from 'express';
import { randomBytes } from 'crypto';
import hotelRouter from "./routes/hotel.router.js";
import hotelDataAddedToDBRouter from './routes/dataimport.router.js';
import catergoriesRouter from './routes/categories.router.js';
import catergoriesDataAddedToDBRouter from './routes/dataimportcategories.router.js';
import findHotelRouter from './routes/findhotel.router.js';
import authRouter from './routes/auth.router.js';
import wishlistRouter from './routes/wishlist.router.js';
import mongoose from 'mongoose';
import { connnectDB } from './config/dbconfig.js';

const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("MICROSOFT ...");
})
app.use('/api/auth',authRouter);
app.use('/api/Storehotels',hotelDataAddedToDBRouter);
app.use('/api/hotels',hotelRouter);
app.use('/api/Storecatergories',catergoriesDataAddedToDBRouter);
app.use('/api/catergories',catergoriesRouter);
app.use('/api/hotels',findHotelRouter);
app.use('/api/wishlist',wishlistRouter);

const PORT=1430;


connnectDB();
mongoose.connection.once("open",()=>{
    console.log("DB connection is Established Bro");

// console.log(randomBytes(64).toString('hex'));


    app.listen(process.env.PORT || PORT, ()=>{
        console.log("BRO FINALLY YOU ARE LOADING THE ****** FILE");
    }
    )
})

