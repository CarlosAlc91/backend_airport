//1. import zod and extractValidation
import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'

//2. creat la constante del schema
// aqui van las validaciones de los campos del modal
const flightSchema = z.object({
  /* flight_id integer [pk, increment]
    //id de las ciudades
    origin_id integer [not null]
    destination_id integer [not null]
    plane_id integer [not null]
    departure_time timestamp [not null]
    check_in timestamp
  
    status flight_status [default: 'pending'] */
  originId: z.number(),
  destinationId: z.number(),
  planeId: z.number(),
  departureTime: z.date(),
  checkIn: z.date()
})

//3. funciones pra validar
export const validateFlight = (data) => {
  //1. se obtiene la data del schema y se hace el safeparse y se envia la data
  const result = flightSchema.safeParse(data)

  //2. se destructura de extractErrorData.js
  const {
    hasErrror,
    errorMessage,
    data: flightData
  } = extractValidationData(result)

  //3. retorno de los errores y data
  return {
    hasErrror,
    errorMessage,
    flightData
  }
}

//4. validacon para la actualizacion del flight
export const validatePartialFlight = (data) => {
  //1. creacion de variable result para hacer la validacion
  const result = flightSchema.partial().safeParse(data)

  //2. obtener los resultados de la validacion
  const {
    hasErrror,
    errorMessage,
    data: dataFlight
  } = extractValidationData(result)

  //3. retorno de los resultados
  return {
    hasErrror,
    errorMessage,
    dataFlight
  }
}