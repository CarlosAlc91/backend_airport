import { Router } from "express"
import { router as passengerRouter } from '../passengers/passenger.route.js'
import { router as citiesRouter } from "../cities/cities.route.js"
import { router as flightsRouter } from '../flights/flights.route.js'
import { router as planesRouter } from '../planes/planes.route.js'


export const router = Router()

router.use('/passengers', passengerRouter)
router.use('/cities', citiesRouter)
router.use('/flights', flightsRouter)
router.use('/planes', planesRouter)