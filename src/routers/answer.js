import express from 'express'
import { answerController } from '../controllers/answer.js'
const router = express.Router()

const basePath = '/answer'

router.post(`${basePath}`, answerController.create)
router.get(`${basePath}/:id`, answerController.getAnswer)
router.delete(`${basePath}/:id`, answerController.deleteAnswer)
router.get(`${basePath}/allAnswers/:surveyId`, answerController.getAllAnswers)
router.get(`${basePath}/allAnswers/:surveyId`, answerController.getAllAnswers)

export default router