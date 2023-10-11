
import { AppError, catchAsync } from '../errors/index.js'
import { validatePartialPassenger, validatePassenger } from './passengers.schema.js'
import { PassengerService } from './passengers.service.js'

/* instancia de la clase PassengerService */
const passengerService = new PassengerService()


//1. get all passengers
export const findAllPassengers = catchAsync(async (req, res, next) => {
  const passengers = await passengerService.findAllPassengers()
  return res.json(passengers)
})

//2. create a passenger
export const createPassesnger = catchAsync(async (req, res, next) => {
  /* const passanger = req.body */
  /* aqui se pueden crear los datos, pasajero */
  const { hasErrror, errorMessage, passengerData } = validatePassenger(req.body)

  if (hasErrror) {
    return res.status(422).json({
      status: 'error',
      message: errorMessage
    })
  }

  const passanger = await passengerService.createPassenger(passengerData)
  /* siempre a las respuestas se les pone un return, cuando se tienen 2 res en el mismo ciclo la app va a fallar porque no se pueden enviar 2 al mismo tiemopo */
  return res.status(201).json(passanger)

})

//3. find a passenger by id
export const findPassengerById = catchAsync(async (req, res, next) => {

  const { id } = req.params

  const passanger = await passengerService.findOnePassenger(id)

  if (!passanger) {
    return res.status(404).json({
      status: "error",
      message: `passenger with ${id} not found ⚠️`
    })
  }

  res.json(passanger)

})

//4. update passenger
export const updatePassenger = catchAsync(async (req, res, next) => {


  //TODO: PUNTO A
  /* es mas optimo primero hacer la validaacion de los campos y despues hacer la busqueda del passenger*/
  const { hasErrror, errorMessage, passengerData } = validatePartialPassenger(req.body)

  if (hasErrror) {
    return res.status(422).json({
      status: 'error',
      message: errorMessage
    })
  }
  //1. obtener el id del passenger
  const { id } = req.params

  //2. buscar el pasajero que se va a actualizar
  const passenger = await passengerService.findOnePassenger(id)

  //TODO: PUNTO B
  //3. validar si el pasajero existe
  if (!passenger) {
    return res.status(404).json({
      status: 'error',
      message: `passenger with id ${id} not found ⚠️`
    })
  }
  //TODO: PUNTO C
  //4. si existe, se actualiza el passenger
  const passengerUpdated = await passengerService.updatePassenger(passenger, req.body)

  //5. retorno de passenger validado
  return res.json(passengerUpdated)

})

//5. delete passenger
export const deletePassenger = catchAsync(async (req, res, next) => {



  const { id } = req.params

  /* get passsenger by id */
  const passenger = await passengerService.findOnePassenger(id)

  /* validate if passsenger exists */
  if (!passenger) {
    return res.status(404).json({
      status: 'error',
      message: `passenger with id ${id} not found ⚠️`
    })
  }

  /* regeso del passenger eliminado */
  await passengerService.deletePassenger(passenger)

  return res.status(204).json(null)

})
