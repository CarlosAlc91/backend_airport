//1. import
import { envs } from "../config/environments/environments.js"

//2. create functions
/* error en desarrollo */
const sendErrorDev = (err, res) => {
  //4. 
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err
  })
}

/* error en produccion */
const sendErrorProd = async (err, res) => {

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
    sendErrorProd(err, res)
  }

  /* res.status(err.statusCode).json({
    //aqui puede venir o error o failed
    status: err.status,
    message: err.message
  }) */
}