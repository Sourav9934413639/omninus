import mongoose from 'mongoose';
import validator from 'validator';
const registerSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        trim:true,
        validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error('Invalid email address');
        }
    }
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }

})
export const User =mongoose.model("register",registerSchema);