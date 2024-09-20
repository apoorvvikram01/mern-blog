import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
username:{
    type:String,
   
    unique:true,
},
email:{
    type:String,
    required:true,
    unique:true,
},
password:{
    type:String,
    required:true,
  
},
profilePicture:{
    type:String,
    default: "https://www.freepik.com/free-photos-vectors/default-profile-pic"
}

},{timestamps:true})

const user = mongoose.model('User',userSchema);
export default user;