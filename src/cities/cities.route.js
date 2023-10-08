import { Router } from 'express'
import { createCity } from './cities.controller.js'

export const router = Router()

router
  .route('/')
  .get(findAllCities)
  .post(createCity)


router
  .route('/:id')
  .get(findOneCity)
  .patch(updateCity)
  .delete(deleteCity)