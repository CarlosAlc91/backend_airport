import { CityService } from "./cities.service.js"
import { validateCity } from "./city.schema.js"

const cityService = new CityService()

export const findAllCities = async (req, res) => {
  try {
    const cities = await cityService.findAllCities()

    return res.status(200).json(cities)

  } catch (error) {

    return res.status(500).json(error)
  }
}

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

export const findOneCity = async (req, res) => {
  try {
    //1. recibir el id que viene de la req.params
    const { id } = req.params
    //2.
    const city = await cityService.findOneCity(id)
    //3. condicional - sino se encuentra la ciudad, retorna una respues con el status 404 en un objeto json
    if (!city) {
      return res.status(404).json({
        status: 'error',
        message: `City with id ${id} not found`
      })
    }
    //4. retorna una respuesta con el status 200 y un objeto jsson con la ciudad encontrada
    return res.status(200).json(city)

  } catch (error) {
    return res.status(500).json(error)
  }
}

export const updateCity = async (req, res) => {
  try {
//1. en schema se crea una validacion 
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const deleteCity = async (req, res) => {
  try {
    //1. traer el id de la req.params
    const { id } = req.params

    //2. busqueda de la ciudad
    const city = await cityService.findOneCity(id)

    //3. conficional si existe o no la ciudad
    if (!city) {
      return res.status(404).json({
        status: 'error',
        message: `City with id ${id} not found`
      })
    }

    //4. cambiar el status de la ciudad a eliminar
    // el city service, recibe la  ciudad, se actualiza y cambia el status a false
    await cityService.deleteCity(city)

    //5. esto se pone ya que no hay nada que enviar pero ayuda a la optimizacion
    return res.status(204).json(null)

  } catch (error) {
    return res.status(500).json(error)
  }
}
