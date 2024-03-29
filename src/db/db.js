import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_STRING, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log("db connected!")
    } catch (error) {
        console.log("db connection failed!")
    }
}

export default Connection