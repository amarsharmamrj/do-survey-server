import { pollAnswerService } from "../services/pollAnswer.js";

const create = async (req, res) => {
    try {
        const answer = await pollAnswerService.create(req.body)
        res.status(200).send(answer)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getAllAnswers = async (req, res) => {
    try {
        const answer = await pollAnswerService.getAllAnswers(req.params.pollId)
        res.status(200).send(answer)
    } catch (error) {
        res.status(400).send(error)
    }
}
const getAnswer = async (req, res) => {
    try {
        const answer = await pollAnswerService.getAnswer(req.params.id)
        res.status(200).send(answer)
    } catch (error) {
        res.status(400).send(error)
    }
}
const pollAnswerController = {
    create,
    getAllAnswers,
    getAnswer,
}

export { pollAnswerController }