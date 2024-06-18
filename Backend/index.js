import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app=express();
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(err);
})

app.use("/test",)

app.listen(0,()=>{
    console.log("server started");
})