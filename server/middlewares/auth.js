import { User } from "../model/user.js";
import jwt from 'jsonwebtoken';
export const isAuthenticated=async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return res.status(400).json({
            success:false,
            message:"Login first"
        })
    }
    const decoded_JWT=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decoded_JWT._id);
    next();
}