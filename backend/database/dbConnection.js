import e from "express";
import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'restaurant'
        });
        console.log(`MongoDB connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
export { dbConnection };