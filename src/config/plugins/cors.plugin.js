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

      //6. si el origen no se encuntra se va a retornar el callback con el null y el true
      if (!origin) {
        return callback(null, true)
      }

      //7. en caso de que no sea mi servidor o un servidor que no se acepte
      // se retorna el callback con un new Error
      return callback(new Error('Not allowed by CORS'))
    }
  }))
}