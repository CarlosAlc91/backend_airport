/* *validaciones */
//1. imports
import z from 'zod'
import { extractValidationData } from '../common/utils/extractErrorData.js'
//2. object creation for validation
const registerUserSchema = z.object({
  fullname: z
    .string()
    .min(3, { message: 'Name is too short' })
    .max(100, { message: 'name is too long' }),
  email: z
    .string()
    .email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(8, { message: 'password is too short' }),
  gender: z
    .enum([
      'male',
      'female',
      'prefer not to say'
    ]),
  role: z
    .enum([
      'receptionist',
      'admin',
      'developer',
      'manager',
      'user'
    ]),

})

//3. 
const loginUserSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(8, { message: 'password is too short' }),
})

//4. validations for registerUserSchema
export const validateRegister = data => {
  const result = registerUserSchema.safeParse(data)

  const {
    hasErrror,
    errorMessage,
    data: userData
  } = extractValidationData(result)

  return {
    hasErrror,
    errorMessage,
    userData
  }
}

//5. validations for loginUserSchema
export const validateLogin = data => {
  const result = registerUserSchema.safeParse(data)

  const {
    hasErrror,
    errorMessage,
    data: userData
  } = extractValidationData(result)

  return {
    hasErrror,
    errorMessage,
    userData
  }
}