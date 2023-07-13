import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
    surveyName: {
        type: String,
        required: true,
        trim: true
    },
    surveyNameStyle: {
        type: String
    },
    surveyDesc: {
        type: String,
    },
    surveyDescStyle: {
        type: String
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

const Survey = mongoose.model('Survey', surveySchema)

export { Survey }