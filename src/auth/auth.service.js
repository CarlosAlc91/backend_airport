/* service creatin */
//1. imports
import User from './user.model.js'

//2. class export
export class AuthService {
  //1.
  async createUser(data) {
    return await User.create(data)
  }
}