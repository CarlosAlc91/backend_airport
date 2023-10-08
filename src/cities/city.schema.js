/* 

*  ESTA VALIDACION PUEDE SER LO MISMO PARA VALIDACIONES FUTURAS

*/

//1. import z de zod
import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'

//2. crear la constante del schema
//aqui vna las validaciones de los campos del modal 
const citySchema = z.object({
  name: z.string().min(3).max(60),
  country: z.string().min(3).max(60),
  longitude: z.number(),
  length: z.number()
})

//3. funciones para validar
export const validateCity = (data) => {
  //1. se obtine la data del schema y se hace el safeparse y se envia la darta
  const result = citySchema.safeParse(data)

  //2. se desctructura de extractErrorData.js > extractValidatinData y se le envian los resultaddos
  const {
    hasErrror,
    errorMessage,
    data: cityData
  } = extractValidationData(result)

  //3. retorno de los error y data
  return {
    hasErrror,
    errorMessage,
    cityData
  }
}