import surveyRouter from './src/routers/survey.js'
import answerRouter from './src/routers/answer.js'
import express from 'express'

const baseRouter = express.Router()

baseRouter.use(surveyRouter)
baseRouter.use(answerRouter)

export default baseRouter