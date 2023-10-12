//1. importacion de cors
import cors from 'cors'


//2. exportacion de funcion la cual va a recibir app y acceptedOrigins
export const enableCors = (app, acceptedOrigins) => {
  //3.
  app.use(cors())
}