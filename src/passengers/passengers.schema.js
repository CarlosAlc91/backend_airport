/* validaciones con zod */

import { json } from 'sequelize'
import z from 'zod'

export const passengerSchema = z.object({
  /* validame que sea string y tenga un minimo de 8 caracters y maximo de 10 caracteres */
  nro_passport: z.string().min(8).max(10),
  name: z.string().min(2).max(99),
  surname: z.string().min(2).max(100),
  /* errores personalizados dependiendo del errror */
  birthdate: z.string({
    invalid_type_error: 'Birthdate must have a correct format',
    required_error: 'Birthdate is required'
  }),
  /* validaciones con enum */
  genre: z.enum(['male', 'female', 'prefer not to say']),
  email: z.string().email(),
  phone: z.string().min(5).max(25),
  createdBy: z.number()
})

export function validatePassenger(data) {
  const result = passengerSchema.safeParse(data)

  const {
    hasErrror,
    errorMessage,
    data: passengerData
  } = extractValidationData(result)



  return {
    hasErrror,
    errorMessage,
    passengerData
  }
}

export const extractValidationData = (resultValidation) => {
  let errorMessage
  let data
  const hasErrror = !resultValidation.success

  if (hasErrror) errorMessage = JSON.parse(resultValidation.error.message)

  if (!hasErrror) data = resultValidation.data

  return {
    hasErrror,
    errorMessage,
    data
  }
}