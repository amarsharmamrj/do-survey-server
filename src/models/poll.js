import mongoose from "mongoose";

const pollSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    pollName: {
        type: String,
        required: true,
        trim: true
    },
    start_date: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    questions: {
        type: String
    }
}, {
    timestamps: true
})

const Poll = mongoose.model('Poll', pollSchema)

export { Poll }