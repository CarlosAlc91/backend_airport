import { PassengerService } from './passenger.service.js'

/* instancia de la clase PassengerService */
const passengerService = new PassengerService()

//1. get all passengers
export const findAllPassengers = async (req, res) => {


  try {
    const passengers = await passengerService.findAllPassengers(req.body)
    return res.json(passengers)
  } catch (error) {
    return res.status(500).json(error)
  }
}

//2. create a passenger
export const createPassesnger = async (req, res) => {
  /* const passanger = req.body */
  /* aqui se pueden crear los datos, pasajero */
  try {
    const passanger = await passengerService.createPassenger(req.body)
    /* siempre a las respuestas se les pone un return, cuando se tienen 2 res en el mismo ciclo la app va a fallar porque no se pueden enviar 2 al mismo tiemopo */
    return res.status(201).json(passanger)
  } catch (error) {
    return res.status(500).json(error)
  }
}

//3. find a passenger by id
export const finsPassengerById = (req, res) => {
  const { id } = req.params

  res.json({
    message: "this endpoint will find a passenger by an id",
    id: id,
  })
}

//4. update passenger
export const updatePassenger = (req, res) => {
  const { id } = req.params

  res.json({
    message: "This endpoint updates an user",
    id,
  })
}

//5. delete passenger
export const deletePassenger = (req, res) => {
  const { id } = req.params

  res.json({
    message: "this endpoint will delete a passenger",
    id,
  })
}
