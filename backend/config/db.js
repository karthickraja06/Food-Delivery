import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://karthickrajab03:Vidyalaya005@cluster0.j7wfu.mongodb.net/food-del').then(()=>console.log("DBconnect"));
}