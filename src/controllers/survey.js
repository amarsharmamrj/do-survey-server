import { surveyService } from "../services/survey.js";

const create = async (req, res) => {
    try {
        console.log("model controller:", req.body)
        const survey = await surveyService.create(req.body)
        res.status(201).send(survey)
    } catch (error) {
        console.log("create survey:", error)
        res.status(400).send(error)
    }
}

const surveyController = {
    create
}

export {
    surveyController
}