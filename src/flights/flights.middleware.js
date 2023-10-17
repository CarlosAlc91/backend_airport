import { AppError } from "../errors/appError.js"
import { catchAsync } from "../errors/catchAsync.js"
import { FlightService } from "./flights.service.js"

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