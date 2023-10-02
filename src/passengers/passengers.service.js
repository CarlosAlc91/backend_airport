import Passenger from './passengers.model.js'

export class PassengerService {
  /* esta clsae tiene un metodo que se llama create passenger */

  async findOnePassenger(id) {
    return await Passenger.findOne({
      where: {
        id,
      }
    })
  }

  async findAllPassengers() {
    return await Passenger.findAll()
  }

  async createPassenger(data) {
    return await Passenger.create(data)
  }

  async updatePassenger(id) {
    return await Passenger.update({
      where: {
        id,
      }
    })
  }
}