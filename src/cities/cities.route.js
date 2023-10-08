import { Router } from 'express'
import {
  findAllCities,
  createCity,
  findOneCity,
  updateCity,
  deleteCity
} from './cities.controller.js'

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