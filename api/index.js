import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"

const app = express();
app.use(express.json());

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

app.use('/api/user',userRoute)
app.use('/api/auth',authRoute)


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
} )