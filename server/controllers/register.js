import { sendCookie } from '../Utility/sendCookie.js';

import bcrypt from 'bcrypt';
import { User } from '../model/user.js';
export const register=async(req,res)=>{
    const {name,email,password}=req.body;
    let user=await User.findOne({email});
    if(user){
        return res.status(400).json({
            success:false,
            message:"Already Registered, Go and Login"
        })
    }
    const hashedPassword=await bcrypt.hash(password,10);
    user= await User.create({name,email,password:hashedPassword});  
    sendCookie(res,user,"Registered Successfully ...",201);
    
}
