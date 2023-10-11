import express from "express"
import { router } from "./routes/routes.js"
import { AppError } from "./errors/appError.js"
import morgan from "morgan"
const app = express()

//middleware
app.use(express.json())
//TODO: REFACTORIZAR
app.use(morgan('dev'))
app.use('/api/v1', router)



/* validacion sino se encuntran rutas de routes.js siga buscando */
app.all('*', (req, res, next) => {
  /* METODO 1 PARA ENVIO DE ERRORES */
  /* return res.status(404).json(({
    status: 'error',
    message: `cannot find route ${req.originalUrl}`
  })) */

  /* METODO 2 PARA ENVIO DE ERRORES */
  /* implementacion de errors middleware */
  //1. creacion de instancia de la clase error
  /* const err = new Error(`cannot find route ${req.originalUrl}`)

  //2. devolucion de la clase instanciada = devuelve un objeto
  err.status = 'error'
  err.statusCode = 404

  //3. next para que el middleware siga avanzando y se agraga err para que pueda ser utilizado 
  next(err) */

  /* METODO 3 PARA ENVIO DE ERROES */
  /* USO DE LA CLASE APPERROR DE appError.js */
  //1. importacion de la clase appError.js
  //2. se hacer un next para que dentro del next se instancie la clase appError la clase recibe message y statusCode
  next(new AppError(`cannot find route ${req.originalUrl}`, 404))

})

//basurero - controlador de errores = aqui queda la basura (errores)
app.use((err, req, res, next) => {
  //en el err va a venir una propiedad que se llama statusCode en donde solo van a llegar errores de la gama del 400, si es undefined me vas a colocasr 500
  err.statusCode = err.statusCode || 500

  //aqui solo van a llegar status de error y si viene undefined le vas a colocar failed
  err.status = err.status || 'failed'

  res.status(err.statusCode).json({
    //aqui puede venir o error o failed
    status: err.status,
    message: err.message
  })
})

export default app

