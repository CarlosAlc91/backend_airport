import Passenger from './passengers.model.js'

export class PassengerService {
  /* esta clsae tiene un metodo que se llama create passenger */

  findOnePassenger() {

  }

  async findAllPassengers() {
    return await Passenger.findAll()
  }


  async createPassenger(data) {
    return await Passenger.create(data)
  }
}