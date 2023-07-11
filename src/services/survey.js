import { Survey } from '../models/survey.js'

const create = async (model) => {
    console.log("model:", model)
    const survey = new Survey(model)
    survey.save()
    return survey
}

const surveyService = {
    create,
}
export {
    surveyService
}