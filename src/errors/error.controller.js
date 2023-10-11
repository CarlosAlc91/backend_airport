//1. import
import { envs } from "../config/environments/environments.js"
//6. importar modelo
import Error from "./error.model.js"
//11. importat apperror
import { AppError } from './appError.js'

//10. funcion handlerCastError22001 con return implicito
const handlerCastError22001 = () =>
  new AppError('Value too long for type on attribute', 400)


//2. create functions
/* error en desarrollo */
const sendErrorDev = (err, res) => {
  //4. se envia una respuesta con status => error con el codigo del status en un objeto json
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err
  })
}

/* error en produccion */
const sendErrorProd = async (err, res) => {
  //7. await del error que tenemos en error.model
  await Error.create({
    status: err.status,
    message: err.message,
    stack: err.stack
  })
  //5. validacion si el error es operacional
  if (err.isOperational) {
    //se envia una respuesta con el status del error en un objeto json con el status y el mensaje
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    })
  } else {
    //error de programcion u otro error desconocido
    console.log('Error 🧨', err)
    res.status(500).json({
      status: 'failed',
      message: 'Something went wrong'
    })
  }
}

export const globalErrorHandler = (err, req, res, next) => {
  //en el err va a venir una propiedad que se llama statusCode en donde solo van a llegar errores de la gama del 400, si es undefined me vas a colocasr 500
  err.statusCode = err.statusCode || 500

  //aqui solo van a llegar status de error y si viene undefined le vas a colocar failed
  err.status = err.status || 'failed'

  //3. conditionals
  if (envs.NODE_ENV === 'development') {
    sendErrorDev(err, res)
  }

  if (envs.NODE_ENV === 'production') {
    //8. creacion de vatiable error
    let error = err
    //9. condicional para error 22001
    if (err.parent?.code === '22001') error = handlerCastError22001()
    sendErrorProd(error, res)
  }

  /* res.status(err.statusCode).json({
    //aqui puede venir o error o failed
    status: err.status,
    message: err.message
  }) */
}