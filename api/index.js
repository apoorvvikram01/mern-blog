import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

dotenv.config([]);

const PORT = process.env.PORT || 8000 ;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to Mongodb successfully")
})
.catch((err)=>{
    console.log(err)
});

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})