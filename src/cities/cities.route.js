import { Router } from 'express'
import {
  findAllCities,
  createCity,
  findOneCity,
  updateCity,
  deleteCity
} from './cities.controller.js'

import { validateExistCity } from './city.middleware.js'

export const router = Router()

router
  .route('/')
  .get(findAllCities)
  .post(createCity)


router
  .route('/:id')
  //anres de que se ejecute findOneCity, se va a ejecutar el middleware
  .get(validateExistCity, findOneCity)
  .patch(updateCity)
  .delete(deleteCity)