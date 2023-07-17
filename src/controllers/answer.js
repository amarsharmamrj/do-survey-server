import { answerService } from "../services/answer.js";

const create = async (req, res) => {
    try {
        const answer = await answerService.create(req.body)
        res.status(200).send(answer)
    } catch (error) {
        res.status(400).send(err)
    }
}

const getAllAnswers = async (req, res) => {
    try {
        const answer = await answerService.getAllAnswers(req.params.surveyId)
        res.status(200).send(answer)
    } catch (error) {
        res.status(400).send(err)
    }
}
const getAnswer = async (req, res) => {
    try {
        const answer = await answerService.getAnswer(req.params.id)
        res.status(200).send(answer)
    } catch (error) {
        res.status(400).send(err)
    }
}
const answerController = {
    create,
    getAllAnswers,
    getAnswer,
}

export { answerController }