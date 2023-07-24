import surveyRouter from './src/routers/survey.js'
import answerRouter from './src/routers/answer.js'
import userRouter from './src/routers/user.js'
import pollRouter from './src/routers/poll.js'
import pollAnswerRouter from './src/routers/pollAnswer.js'
import express from 'express'

const baseRouter = express.Router()

baseRouter.use(surveyRouter)
baseRouter.use(answerRouter)
baseRouter.use(userRouter)
baseRouter.use(pollRouter) 
baseRouter.use(pollAnswerRouter) 

export default baseRouter