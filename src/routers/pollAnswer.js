import express from 'express'
import { pollAnswerController } from '../controllers/pollAnswer.js'
const router = express.Router()

const basePath = '/pollAnswer'

router.post(`${basePath}`, pollAnswerController.create)
router.get(`${basePath}/:id`, pollAnswerController.getAnswer)
router.get(`${basePath}/allAnswers/:pollId`, pollAnswerController.getAllAnswers)

export default router