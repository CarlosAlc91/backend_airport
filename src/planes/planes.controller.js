import { catchAsync } from "../errors/index.js"
import { validatePartialPlane, validatePlane } from "./planes.schema.js"
import { PlaneService } from "./planes.service.js"

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
  const { plane } = req

  //2. se retorna una respuesta con el status 200 y un objeto json con el plane ecnontrado
  res.status(200).json(plane)
})

export const updatePlane = catchAsync(async (req, res) => {
  //1. se agrega el middleware
  const { plane } = req

  //2. se agrega la validacion del schema
  const {
    hasErrror,
    errorMessage,
    dataPlane
  } = validatePartialPlane(req.body)

  //3. condicional para saber si hay errores
  if (hasErrror) {
    res.status(422).json({
      status: 'error',
      messages: errorMessage
    })
  }

  //4. actualizacion de plane
  const planeUpdate = await planeService.updatePlane(plane, dataPlane)

  //5. retorname el plane actualizado
  return res.status(200).json(planeUpdate)
})

export const deletePlane = catchAsync(async (req, res) => {
  //1. se agrega el middleware
  const { plane } = req

  //2. cambiar el status del plane a eliminar
  await planeService.deletePlane(plane)

  //3. 
  return res.status(204).json(null)
})
