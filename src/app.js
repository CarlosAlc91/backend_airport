import express from "express"
import { router } from "./routes/routes.js"
const app = express()

//middleware
app.use(express.json())
app.use('/api/v1', router)

/* validacion sino se encuntran rutas de routes.js siga buscando */
app.all('*', (req, res, next) => {
  return res.status(404).json(({
    status: 'error',
    message: `cannot find route ${req.originalUrl}`
  }))
})

export default app

