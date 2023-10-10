/* middleware es una funcion que recibe request, response y next */

import { CityService } from "./cities.service.js"

//3. instanciar la ciudad
const cityService = new CityService()

//1. creacion de funcion
export const validateExistCity = async (req, res, next) => {
  //2. importing middleware to cities.route
  //4. obtener el codigo que  se va a reciclar
  const { id } = req.params

  //5. buscar una ciudad
  const city = await cityService.findOneCity(id)

  //6. validar si la ciudad existe o no
  if (!city) {
    return res.status(404).json({
      status: 'error',
      message: `City with id ${id} not found`
    })
  }

  //7. sigue a la siguiente ruta
  next()
}