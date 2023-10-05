import { Router } from "express"
import { router as passengerRouter } from '../passengers/passenger.route.js'


export const router = Router()

router.use('/passengers', passengerRouter)