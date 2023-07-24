import mongoose from "mongoose";

const pollAnswerSchema = new mongoose.Schema({
    pollId: {
        type: String,
        required: true
    },
    pollName: {
        type: String
    },
    submitter: {
        type: String
    },
    answers: {
        type: String
    }
})

const PollAnswer = mongoose.model('PollAnswer', pollAnswerSchema)

export { PollAnswer }