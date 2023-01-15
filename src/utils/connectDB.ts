import mongoose from "mongoose";


export async function connectDB() {
    if( !process.env.MONGO_URI) console.log("No Mongoose URI specified");

    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017", () => {
        console.log("< DB connection established >");
    });
}

