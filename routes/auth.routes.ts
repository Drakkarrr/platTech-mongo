import express from "express"
import { login } from "../controllers/auth.controller.js"

const router: express.Router = express.Router()
router.post("/login", login)

export default router