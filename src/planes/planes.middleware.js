//1. importacion de PlaneService e index.js
import { AppError, catchAsync } from "../errors/index.js"
import { PlaneService } from "./planes.service.js"

//2. instanciar el plane
const planeService = new PlaneService()

//3. creacion de funcion para validar avion por id
export const validatePlaneId = catchAsync(async (req, res, next) => {
  //4. obtener el codigo que se va a reciclar
  const { id } = req.params

  //5. buscar un plane
  const plane = await planeService.findOnePlane(id)

  //6. validar si el plane existe
  if (!plane) {
    return next(new AppError(`Plane with id ${id} not found`, 404))
  }

  //7. modificacion del objeto req
  req.plane = plane

  //8. sigue a la siguiente ruta
  next()
})