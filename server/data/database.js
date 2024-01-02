import mongoose from 'mongoose';
export const db_connect=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/omninos").then(()=>{
    console.log(`Database Connected Successfully to port ${mongoose.connection.host}`);
}).catch((error)=>{
    console.log(`Database not connected due to ${error}`);
})
};