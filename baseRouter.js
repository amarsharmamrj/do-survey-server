import surveyRouter from './src/routers/survey.js'
import express from 'express'

const baseRouter = express.Router()

baseRouter.use(surveyRouter)

export default baseRouter