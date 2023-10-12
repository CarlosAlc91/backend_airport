//1. importacion de cors
import cors from 'cors'


//2. exportacion de funcion la cual va a recibir app y acceptedOrigins
export const enableCors = (app, acceptedOrigins) => {
  //3.
  app.use(cors({
    //4. despues de crear accepted_origins en app.js
    origin: (origin, callback) => {
      //5. si acceptedOrigins incluye origin voy a retornar una funcion callback que va a devolver un null y true
      if (acceptedOrigins.include(origin)) {
        return callback(null, true)
      }
    }
  }))
}