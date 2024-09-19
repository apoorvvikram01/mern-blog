import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import errorHandler from "../utils/error.js"
import jwt from "jsonwebtoken";
import { response } from "express";

export const signup = async (req, res,next) => {
  const { username, password, email } = req.body;

  if (
    !username ||
    !password ||
    !email ||
    username === "" ||
    password === "" ||
    email === ""
  ) {
    next (errorHandler(400,"All fields are required"))
  }

// Hashing  password
const hashedPassword = bcryptjs.hashSync(password,10)


// Saving in new user
  const newUser = new User({ username,
    password:hashedPassword,
     email });

  try {

    await newUser.save();

    res.status(200).json({
      message: "Signed  up successfully",
      success: true,
    });
  } catch (error) {
   next(error);
   
  }
};


//Sigining in user
export const signin = async (req,res,next)=>{
const {email, password} = req.body;

if(!email || !password || email ==="" || password === ""){
  next(errorHandler(400,"Invalid username or password"))
}
try {
  const validUser = await User.findOne({email});
  if(!validUser){
   return next(errorHandler(404,"Invalid email or password"))
  }
  const validPassword = bcryptjs.compareSync(password,validUser.password);
  if(!validPassword){
   return next(errorHandler(400,"Invalid email or password"))
  }
  const token = jwt.sign(
    {id: validUser._id},
    process.env.JWT_SECRET,
    {expiresIn : '7d'}
  )

  const {password:pass,...rest} = validUser._doc;

  res.status(200).cookie('token',token,{
httpOnly: true
  }).json(rest)

} catch (error) {
  next(error);
}
}
