import mongoose from "mongoose";

export async function connectDB() {
    let isConnected = false
    if (isConnected) return "DB is aready connected";
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB CONNECTED SUCCESSFULLY");
        
        if (connect.connection.readyState == 1) isConnected = true;
    } catch (error) {
        console.log(error);
        
    }
    
}