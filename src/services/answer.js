import { Answer } from '../models/answer.js'

const create = (model) => {
    const answer = new Answer(model)
    answer.save()
    return answer
}

const getAllAnswers = (surveyId) => {
    return Answer.find({ surveyId: surveyId })
}

const getAnswer = (id) => {
    return Answer.find({ _id: id })
}


const answerService = {
    create,
    getAllAnswers,
    getAnswer
}

export { answerService }