import z from "zod"
import { extractValidationData } from "../common/utils/extractErrorData.js"

const planeSchema = z.object({
  /* 
  Table plane {
  plane_id integer [pk, increment]
  plane_number integer [not null]
  model varchar(20) [not null]
  max_capacity integer [not null]
  airline airlines [not null]
  status boolean [not null, default: true]
  created_at timestamp [default: 'now()']
}
  */
  planeNumber: z.number(),
  model: z.string().min(3).max(60),
  maxCapacity: z.number(),
  airline: z.string.min(3).max(60),
  status: z.boolean()
})

export const validatePlane = (data) => {
  //1. se obtiene la data del schema y se hace el safeparse, se envia la data
  const result = planeSchema.safeParse(data)

  //2. destructuracion de extractValidationData y se envian los resultados
  const {
    hasErrror,
    errorMessage,
    data: planeData
  } = extractValidationData(result)

  //3. retorno del error y data
  return {
    hasErrror,
    errorMessage,
    planeData
  }
}

//4. validacion para la actuallizacion del plane
export const validatePartialPlane = (data) => {
  //1. creacion de variale result para hacer la validacion
  const result = planeSchema.partial().safeParse(data)

  //2. obtener los resultados de la validacion
  const {
    hasErrror,
    errorMessage,
    data: dataPlane
  } = extractValidationData(data)

  //3. retorno de los resultados
  return {
    hasErrror,
    errorMessage,
    dataPlane
  }
}