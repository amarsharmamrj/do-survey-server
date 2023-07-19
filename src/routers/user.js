import express from 'express'
const router = express.Router()
import { userController } from '../controllers/user.js'
import { checkUserDuplicate } from '../middlewares/checkUserDuplicate.js'
import { validateUserByEmail } from '../middlewares/validateUserByEmail.js'

const basePath = '/user'

router.post(`${basePath}`, checkUserDuplicate, userController.create)
router.put(`${basePath}`, userController.update)
router.post(`${basePath}/login`, validateUserByEmail, userController.login)
router.get(`${basePath}/:id`, userController.get)

export default router