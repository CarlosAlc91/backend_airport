//1. imortat morgan
import morgan from "morgan"

//2. funcion para enable morgan
export const enableMorgan = (app) => {
  app.use(morgan('dev'))
}
