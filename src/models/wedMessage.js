import mongoose from "mongoose";

const wedMessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String
    }
})

const WedMessage = mongoose.model('WedMessage', wedMessageSchema)

export { WedMessage }