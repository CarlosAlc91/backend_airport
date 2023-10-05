import { Router } from "express"
import { router as passengerRouter } from '../passengers/passenger.route.js'
import { router as citiesRouter } from "../cities/cities.route.js"


export const router = Router()

router.use('/passengers', passengerRouter)
router.use('/cities', citiesRouter)