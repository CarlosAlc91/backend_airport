import { envs } from "../config/environments/environments.js"

/* error en desarrollo */
const sendErrorDev = (err, res) => {

}

/* error en produccion */
const sendErrorProd = async (err, res) => {

}

export const globalErrorHandler = (err, req, res, next) => {
  //en el err va a venir una propiedad que se llama statusCode en donde solo van a llegar errores de la gama del 400, si es undefined me vas a colocasr 500
  err.statusCode = err.statusCode || 500

  //aqui solo van a llegar status de error y si viene undefined le vas a colocar failed
  err.status = err.status || 'failed'

  if (envs.NODE_ENV === 'development') {
    sendErrorDev(err, res)
  }

  if (envs.NODE_ENV === 'production') {
    sendErrorProd(err, res)
  }

  res.status(err.statusCode).json({
    //aqui puede venir o error o failed
    status: err.status,
    message: err.message
  })
}