import { Router } from 'express'
import { createCity } from './cities.controller.js'

export const router = Router()

router
  .route('/')
  .post(createCity)