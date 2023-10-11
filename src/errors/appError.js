/* Esto siempre va a ser igual */

//1. exportacion de la clase Error
export class AppError extends Error {

  //2. constructor con mesaje y codigo de estado, este constructor es un metodo y se va a ejecutar cuando la clase sea instanciada
  constructor(message, statusCode) {
    //3. obtencion de todas las funcionalidades de la clase error. Super es como instanciar la clase error
    super(message)

    //4. propiedad statusCode = statusCode que le envien por el constructor
    this.statusCode = statusCode

    //5. si el status empieza con 4 es error, de lo contrario es fail
    this.status = `${statusCode}`.startsWith('4') ? 'error' : 'fail'

    //6. creacion de propiedad es operacional
    this.isOperational = true

    //7. captura de  toda la pila de errores con referencia la objeto
    Error.captureStackTrace(this, this.constructor)
  }
}