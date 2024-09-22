import User from "../models/user.model.js"
import bcyptjs from 'bcryptjs'

export const googleSignIn = async (req,res,next)=>{
const {name,email,googlePhotoUrl} = req.body 
try {
    const user = await User.findOne({email})
    if(user){
        const token = jwt.sign( {id: user._id},process.env.JWT_SECRET)
        const {password,...rest} = user._doc;
        res.status(200).cookie('access_token',token,{
            httpOnly: true,
        }).json(rest)
    } 
    else{
        const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8) 

        const hashedPassword = bcyptjs.hashSync(generatedPassword,10)

        const newUser = new User({
            username:name.toLowerCase().split(' ').join(' ') + Math.random().toString(9).slice(-4) ,
            email,
            password : hashedPassword,
            profilePicture:googlePhotoUrl

        })
        await newUser.save()
        const token = jwt.sign( {id: user._id},process.env.JWT_SECRET)
        const {password,...rest} = user._doc;
        res.status(200).cookie('access_token',token,{
            httpOnly: true,
        }).json(rest)
    }
} catch (error) {
    next(error);
}
}