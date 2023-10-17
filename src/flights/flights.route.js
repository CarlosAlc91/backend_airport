import { Router } from "express"

export const router = Router()

router
  .route('/')
  .get(findAllFlights)
  .post(createFlight)

router
  .route('/:id/')
  .get(findOneFlight)
  .patch(createFlight)
  .delete(deleteFlight)
