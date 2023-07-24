import { PollAnswer } from '../models/pollAnswer.js'

const create = (model) => {
    const answer = new PollAnswer(model)
    answer.save()
    return answer
}

const getAllAnswers = (pollId) => {
    return PollAnswer.find({ pollId: pollId })
}

const getAnswer = (id) => {
    return PollAnswer.find({ _id: id })
}


const pollAnswerService = {
    create,
    getAllAnswers,
    getAnswer
}

export { pollAnswerService }