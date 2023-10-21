//1. import catchAsync from index.js
import { catchAsync } from '../errors/index.js'
import { AuthService } from './auth.service.js'
import { validateRegister } from './user.schema.js'

//3. class instantiation
const authService = new AuthService()

//2. export login and register:
//2.1 register
export const register = catchAsync(async (req, res, next) => {
  //1. refactor from validateRegister
  const {
    hasError,
    errorMessage,
    userData
  } = validateRegister(req.body)

  //2. conditional for errors
  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessage
    })
  }

  //3. create user into auth.service.js
  //4. 
  const user = await authService.createUser(userData)

  //5. return
  return res.status(201).json(user)
})

export const login = catchAsync(async (req, res, next) => {

})

