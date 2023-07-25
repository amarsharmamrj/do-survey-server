import { answerService } from "../services/answer.js";

const create = async (req, res) => {
    try {
        const answer = await answerService.create(req.body)
        res.status(200).send(answer)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getAllAnswers = async (req, res) => {
    try {
        const answer = await answerService.getAllAnswers(req.params.surveyId)
        res.status(200).send(answer)
    } catch (error) {
        res.status(400).send(error)
    }
}
const getAnswer = async (req, res) => {
    try {
        const answer = await answerService.getAnswer(req.params.id)
        res.status(200).send(answer)
    } catch (error) {
        res.status(400).send(error)
    }
}
const deleteAnswer = async (req, res) => {
    try {
        const answer = await answerService.deleteAnswer(req.params.id)
        res.status(200).send(answer)
    } catch (error) {
        res.status(400).send(error)
    }
}
const answerController = {
    create,
    getAllAnswers,
    getAnswer,
    deleteAnswer,
}

export { answerController }