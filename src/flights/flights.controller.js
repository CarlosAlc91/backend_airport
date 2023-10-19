//1. importacion de index.js para la captura de errroes
import { catchAsync } from "../errors/index.js"
import { FlightService } from "./flights.service.js"
import { validateFlight, validatePartialFlight } from "./flights.schema.js"


const flightService = new FlightService()

/* invocacion de la funcion catchAsync en cada funcion y se elimina el try-catch */

export const findAllFlights = catchAsync(async (req, res) => {
  const flights = await flightService.findAllFlights()
  return res.status(200).json(flights)
})

export const createFlight = catchAsync(async (req, res) => {

  const {
    hasErrror,
    errorMessage,
    flightData
  } = validateFlight(req.body)

  if (hasErrror) {
    return res.status(422).json({
      status: 'error',
      messages: errorMessage
    })
  }

  const flight = await flightService.createFlight(flightData)
  return res.status(201).json(flight)
})

export const findOneFlight = catchAsync(async (req, res) => {

  const { flight } = req

  return res.status(200).json(flight)
})

export const updateFlight = catchAsync(async (req, res) => {

  const { flight } = req
  //1. en schema se crea una validacion

  const {
    hasErrror,
    errorMessage,
    dataFlight
  } = validatePartialFlight(req.body)

  //2. condicional para saber si hay erroes
  if (hasErrror) {
    return res.status(422).json({
      status: 'error',
      message: errorMessage
    })
  }

  //3. se actualiza el flight
  const flightUpdated = await flightService.updateFlight(flight, dataFlight)

  //4. retorname el flught actualizado
  return res.status(200).json(flightUpdated)
})

export const deleteFlight = catchAsync(async (req, res) => {
  const { flight } = req
  await flightService.deleteFlight(flight)
  return res.status(204).json(null)
})