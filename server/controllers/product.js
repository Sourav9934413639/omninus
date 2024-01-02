import { products } from '../model/product.js';
import cloudinary from 'cloudinary';
cloudinary.config({
    cloud_name:'dtbido9ng',
    api_key:'319927687147448',
    api_secret:'L7_sikEKb1O9enCU0AOWvdmuYZE'
})

export const product=(req,res,next)=>{
    console.log(req.body);
    const file=req.file.photo;
    const {name,description}=req.body;
    cloudinary.uploader.upload(file.tempFilePath,async(err,result)=>{
        console.log(result)
        const addproduct=await products.create({
            price,description,image:result.url
        });
        res.status(201).json({
            success:true,
            message:"Product added successfully",
            addproduct
        })
    })
}
export const getProducts=async(req,res)=>{
    const getProducts=await products.find();
    res.status(200).json({
        success:true,
        message:"Product retrieved successfully",
        getProducts
    })
};