import { Router } from "express"
import {
  findAllPlanes,
  createPlane,
  findOnePlane,
  updatePlane,
  deletePlane
} from './planes.controller.js'

import { validatePlaneId } from './planes.middleware.js'

export const router = Router()

router
  .route('/')
  .get(findAllPlanes)
  .post(createPlane)

router
  .use('/:id', validatePlaneId)
  .route('/:id')
  .get(findOnePlane)
  .patch(updatePlane)
  .delete(deletePlane)