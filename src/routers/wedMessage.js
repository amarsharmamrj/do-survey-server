import express from 'express'
const router = express.Router()
import { wedMessageController } from '../controllers/wedMessage.js'


router.post(`/message`, wedMessageController.create)

export default router