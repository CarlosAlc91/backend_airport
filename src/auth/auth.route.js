//1. import
import express from "express"
//6. import login and register from auth.controller.js
import { login, register } from "./auth.controller.js"

//2. export
export const router = express.Router()

//3. go to routes.js and import auth.route.js

//4. create endpoints
router.post('/login', login)
router.post('/register', register)

//5. go to controller