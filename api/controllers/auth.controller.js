import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
  const { username, password, email } = req.body;

  if (
    !username ||
    !password ||
    !email ||
    username === "" ||
    password === "" ||
    email === ""
  ) {
    res.status(400).json({
      message: "All fields are required",
      success: false,
    });
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
   res.status(500).json({
   message:"There was a problem signing up",
   error 
   });
  }
};
