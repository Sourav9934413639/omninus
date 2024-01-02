import mongoose from 'mongoose';
import { register } from '../controllers/register.js';
const productSchema=new mongoose.Schema({
    images: 
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
  
    price:{
        type:Number,
        required:true
    },

    description:String,

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:register
    }
})
export const products=mongoose.model("products",productSchema);