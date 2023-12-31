//importacion de index.js
import { catchAsync } from "../errors/index.js"
import { CityService } from "./cities.service.js"
import { validateCity, validatePartialCity } from "./city.schema.js"

const cityService = new CityService()

/* se invoca la funcion catchAsync en cada funcion y se elimina el try-catch */
export const findAllCities = catchAsync(async (req, res) => {

  const cities = await cityService.findAllCities()

  return res.status(200).json(cities)

})

export const createCity = catchAsync(async (req, res) => {

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

})

export const findOneCity = catchAsync(async (req, res) => {

  /* //1. recibir el id que viene de la req.params
  const { id } = req.params
  //2.
  const city = await cityService.findOneCity(id)
  //3. condicional - sino se encuentra la ciudad, retorna una respues con el status 404 en un objeto json
  if (!city) {
    return res.status(404).json({
      status: 'error',
      message: `City with id ${id} not found`
    })
  } */

  //agregamos la ciudad destructurada del middleware
  const { city } = req

  //4. retorna una respuesta con el status 200 y un objeto jsson con la ciudad encontrada
  return res.status(200).json(city)


})

export const updateCity = catchAsync(async (req, res) => {

  /* //2. traernos el id del reeq.params
  const { id } = req.params */
  //agregamos el middleware
  const { city } = req
  //1. en schema se crea una validacion 
  const {
    hasErrror,
    errorMessage,
    cityData
  } = validatePartialCity(req.body)

  //2. condicional para saber is hay erroress
  if (hasErrror) {
    return res.status(422).json({
      status: 'error',
      massage: errorMessage
    })
  }

  /* //3. buscar a la ciudad
  const city = cityService.findOneCity(id)

  //4. condicional para saber si hay ciudad o no
  if (!city) {
    return res.status(404).json({
      status: 'error',
      message: `City with id ${id} not found`
    })
  } */

  //5. actualiza la ciudad
  const cityUpdated = await cityService.updateCity(city, cityData)

  //6. retorname la ciudad actualizada
  return res.status(200).json(cityUpdated)
})

export const deleteCity = catchAsync(async (req, res) => {
  /* //1. traer el id de la req.params
  const { id } = req.params

  //2. busqueda de la ciudad
  const city = await cityService.findOneCity(id)

  //3. conficional si existe o no la ciudad
  if (!city) {
    return res.status(404).json({
      status: 'error',
      message: `City with id ${id} not found`
    })
  } */
  // nos traemos la city del middleware
  const { city } = req
  //4. cambiar el status de la ciudad a eliminar
  // el city service, recibe la  ciudad, se actualiza y cambia el status a false
  await cityService.deleteCity(city)

  //5. esto se pone ya que no hay nada que enviar pero ayuda a la optimizacion
  return res.status(204).json(null)

})
