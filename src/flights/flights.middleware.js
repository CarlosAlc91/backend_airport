import { FlightService } from "./flights.service.js"
import { AppError, catchAsync } from '../errors/index.js'

const flightService = new FlightService()

export const validateExistFlight = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const flight = await flightService.findOneFlight(id)

  if (!flight) {
    return next(new AppError(`Flight with id ${id} not found`, 404))
  }

  req.flight = flight

  next()
})