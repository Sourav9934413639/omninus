import { sendCookie } from "../Utility/sendCookie.js";
import { User } from "../model/user.js";
import bcrypt from 'bcrypt';
export const login=async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        return res.status(400).json({
            success:false,
            message:"Invalid email or password"
        })
    }
    
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({
            success:false,
            message:"Invalid email or password"
        })
    }
    sendCookie(res,user,`Welcome ${user.name}`)
}