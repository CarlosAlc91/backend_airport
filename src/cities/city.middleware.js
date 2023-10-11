/* middleware es una funcion que recibe request, response y next */

import { CityService } from "./cities.service.js"
import { AppError, catchAsync } from '../errors/index.js'

//3. instanciar la ciudad
const cityService = new CityService()

//1. creacion de funcion
export const validateExistCity = catchAsync(async (req, res, next) => {
  //2. importing middleware to cities.route
  //4. obtener el codigo que  se va a reciclar
  const { id } = req.params

  //5. buscar una ciudad
  const city = await cityService.findOneCity(id)

  //6. validar si la ciudad existe o no
  if (!city) {

    //retornamos la clase new AppError que importamos de catchAsync
    return next(new AppError(`City with id ${id} not found`, 404))
  }

  //7. modificar el objeto req
  req.city = city

  //8. sigue a la siguiente ruta
  next()
})