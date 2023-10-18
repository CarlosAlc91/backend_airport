import { catchAsync } from "../errors"
import { validatePlane } from "./planes.schema"
import { PlaneService } from "./planes.service"

const planeService = new PlaneService()

export const findAllPlanes = catchAsync(async (req, res) => {

  const planes = await planeService.findAllPlanes()
  return res.status(200).json(planes)
})

export const createPlane = catchAsync(async (req, res) => {
  //1. destructuracion de la validacion de planes.schema
  const {
    hasErrror,
    errorMessage,
    planeData
  } = validatePlane(req.body)

  //2.condicional para errores
  if (hasErrror) {
    return res.status(422).json({
      status: 'error',
      messages: errorMessage
    })
  }
  //3. una vez creadas las validaciones en plane.schema, se agrega planeData como parametro de planeService.createPlane
  const plane = await planeService.createPlane(planeData)
  return res.status(201).json(plane)
})

export const findOnePlane = catchAsync(async (req, res) => { 
  //1. se agrega el plane destructurado del middleware
})
export const updatePlane = catchAsync(async (req, res) => { })
export const deletePlane = catchAsync(async (req, res) => { })
