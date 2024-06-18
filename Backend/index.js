import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/products.js';
const app=express();
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
})

app.use("/test",router)

app.listen(process.env.PORT,()=>{
    console.log(`server started ${process.env.PORT}`);
})