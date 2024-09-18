import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import errorHandler from "../utils/error.js"

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


// Signing in new user
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
