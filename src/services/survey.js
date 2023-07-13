import { Survey } from '../models/survey.js'

const create = async (model) => {
    console.log("model:", model)
    const survey = new Survey(model)
    survey.save()
    return survey
}

const update = async (model) => {
    console.log("model:", model)
    return Survey.findByIdAndUpdate(model.id, model)
}


const getAll = () => {
    return Survey.find({}).sort({ "createdAt": -1 })
}


const getSurvey = (id) => {
    return Survey.find({ _id: id })
}

const surveyService = {
    create,
    update,
    getAll,
    getSurvey
}
export {
    surveyService
}