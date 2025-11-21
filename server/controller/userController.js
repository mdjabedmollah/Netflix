
import { User } from "../model/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";
export const Login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if((!email || !password)){
            return res.status(400).json({
                success:false,
                message:"All field required"
            })
        }
        const user =await User.findOne({email})
        if(!user){
             return res.status(400).json({
                success:false,
                message:"User not found"
            })
        }
        const isMath=await bcrypt.compare(password, user.password); 
        if(!isMath){
              return res.status(400).json({
                success:false,
                message:"Invalid username or password"
            })
        }
        const tokenData={
            id:user._id
        }
        const token =await jwt.sign(tokenData,process.env.screact_key,{expiresIn:"1d"})
        return res.status(200).cookie("token",token,{httpOnly:true}).json({
            success:true,
            message:`Login successful  ${user.fullname}`,
        })
    } catch (error) {
        console.log("error is login ")
          return res.status(400).json({
                success:false,
                message:error.message
            })
    }
}
export const Register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({
        message: "All data required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already Exist",
        success: false,
      });
    }
    const hash =await bcrypt.hash(password, 10);
    const newUser =await User.create({
      fullname,
      email,
      password:hash
    });
     await newUser.save()
    return res.status(200).json({
        success:true,
        message:"Register successful"
    })
  } catch (error) {
    console.log("Register error ");
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
export const logout=async (req,res)=>{
    try {
        return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
            success:true,
            message:"Logout successful"
        })
    } catch (error) {
        
    }
}