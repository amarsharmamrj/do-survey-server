import express  from "express";
import { surveyController } from "../controllers/survey.js";
const router = express.Router()

const basePath = '/survey'

router.post(`${basePath}/create`, surveyController.create)
router.get(`${basePath}/data/:userId`, surveyController.getAll)
router.get(`${basePath}/:id`, surveyController.getSurvey)
router.delete(`${basePath}/:id`, surveyController.deleteSurvey)
router.put(`${basePath}`, surveyController.update)

export default router