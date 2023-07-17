import express from 'express'
import { answerController } from '../controllers/answer.js'
const router = express.Router()

const basePath = '/answer'

router.post(`${basePath}`, answerController.create)
router.get(`${basePath}/:id`, answerController.getAnswer)
router.get(`${basePath}/allAnswers/:surveyId`, answerController.getAllAnswers)

export default router