import express  from "express";
import { pollController } from "../controllers/poll.js";
const router = express.Router()

const basePath = '/poll'

router.post(`${basePath}/create`, pollController.create)
router.get(`${basePath}/data/:userId`, pollController.getAll)
router.get(`${basePath}/:id`, pollController.getPoll)
router.put(`${basePath}`, pollController.update)

export default router