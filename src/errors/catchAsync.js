/* fncion para la captura de errores */
//1. creacion de funcion
export const catchAsync = fn => {
  //las promesas pueden ser consumidas con el .then
  //2. utilizar el async y await como parametros del callback catchAsync de la funcion que vamos a utilizar
  //3. retorna el req, res y next en la fn 
  return (req, res, next) => {
    //con esta linea ya se estan manejando los errores
    fn(req, res, next).catch(next)
  }
}