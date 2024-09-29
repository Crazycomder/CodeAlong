import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI)
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB