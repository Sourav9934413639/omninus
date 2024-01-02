import cookieParser from 'cookie-parser';
import express from 'express';
import userRoute from './routes/userRoute.js'
import productRoute from './routes/productRoute.js'

import uploadFile from 'express-fileupload'
export const app=express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/",userRoute)
app.use("/api/v1/",productRoute)

app.use(uploadFile({
    useTempFiles:true
}))