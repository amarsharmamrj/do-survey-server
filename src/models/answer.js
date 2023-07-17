import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    surveyId: {
        type: String,
        required: true
    },
    surveyName: {
        type: String
    },
    surveyDesc: {
        type: String
    },
    submitter: {
        type: String
    },
    answers: {
        type: String
    }
})

const Answer = mongoose.model('Answer', answerSchema)

export { Answer }