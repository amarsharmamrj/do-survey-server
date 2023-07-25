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

const update = async (req, res) => {
    try {
        console.log("model controller:", req.body)
        const survey = await surveyService.update(req.body)
        res.status(201).send(survey)
    } catch (error) {
        console.log("update survey:", error)
        res.status(400).send(error)
    }
}

const getAll = async (req, res) => {
    try {
        const surveys = await surveyService.getAll(req.params.userId)
        res.status(200).send(surveys)
    } catch (error) {
        console.log("error in getAll for survey:", error)
    }
}

const getSurvey = async (req, res) => {
    try {
        const survey = await surveyService.getSurvey(req.params.id)
        res.status(200).send(survey)
    } catch (error) {
        console.log("error in get survey:", error)
        res.status(400).send(error)        
    }
}

const deleteSurvey = async (req, res) => {
    try {
        const survey = await surveyService.deleteSurvey(req.params.id)
        res.status(200).send(survey)
    } catch (error) {
        console.log("error in get survey:", error)
        res.status(400).send(error)        
    }
}


const surveyController = {
    create,
    update,
    getAll,
    getSurvey,
    deleteSurvey
}

export {
    surveyController
}