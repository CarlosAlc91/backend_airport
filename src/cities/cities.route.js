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
  .use('/:id', validateExistCity)
  .route('/:id')
  //anres de que se ejecute findOneCity, se va a ejecutar el middleware
  .get(findOneCity)
  .patch(updateCity)
  .delete(deleteCity)

