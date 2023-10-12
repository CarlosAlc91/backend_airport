import express from "express"
import { router } from "./routes/routes.js"
import { AppError } from "./errors/appError.js"
import morgan from "morgan"
import { envs } from "./config/environments/environments.js"
import { globalErrorHandler } from "./errors/error.controller.js"
import { enableCors } from "./config/plugins/cors.plugin.js"

const app = express()

//2. se  va a agregar importaar a enableCors
const ACCEPTED_ORIGINS = ['http://localhost:8080', 'http://localhost:4200', '']

//middleware
app.use(express.json())
//TODO: REFACTORIZAR
//morgan siempre va antes de las rutas
//si node_env es igual a 'development' se ejecuta morgan en desarrollo
if (envs.NODE_ENV === 'development') {

  app.use(morgan('dev'))
}

//1. importando enableCors de plugins
enableCors(app, ACCEPTED_ORIGINS)
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
app.use(globalErrorHandler)

export default app

