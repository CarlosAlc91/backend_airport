import { Router } from "express"
import {
  findAllFlights,
  createFlight,
  findOneFlight,
  updateFlight,
  deleteFlight
} from './flights.controller.js'

import { validateExistFlight } from './flights.middleware.js'

export const router = Router()

router
  .route('/')
  .get(findAllFlights)
  .post(createFlight)

router
  .use('/:id', validateExistFlight)
  .route('/:id')
  .get(findOneFlight)
  .patch(updateFlight)
  .delete(deleteFlight)
