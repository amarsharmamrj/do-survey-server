import express  from "express";
import { surveyController } from "../controllers/survey.js";
const router = express.Router()

const basePath = '/survey'

router.post(`${basePath}/create`, surveyController.create)

export default router