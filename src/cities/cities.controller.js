import { CityService } from "./cities.service.js"
import { validateCity } from "./city.schema.js"

const cityService = new CityService()


export const createCity = async (req, res) => {
  try {

    /* DESTRUCTURACION DE VALIDACION */
    const { hasErrror,
      errorMessage,
      cityData
    } = validateCity(req.body)
    //condicional para error
    //si existe un error voy a retornar una respuesta con el status 422 en un objeto json con los mensajes de error
    if (hasErrror) {
      return res.status(422).json({
        status: 'error',
        massages: errorMessage
      })
    }
    //una vez hecha las validaciones en citySchema, se agrega cityData 
    const city = await cityService.createCity(cityData)
    return res.status(201).json(city)
  } catch (error) {
    return res.status(500).json(error)
  }
}