import Passenger from './passengers.model.js'

export class PassengerService {
  /* esta clsae tiene un metodo que se llama create passenger */

  async findAllPassengers() {
    return await Passenger.findAll()
  }

  async createPassenger(data) {
    return await Passenger.create(data)
  }

  async findOnePassenger(id) {
    return await Passenger.findOne({
      where: {
        id,
      }
    })
  }

  async updatePassenger(passenger, data) {
    return await passenger.update(data)
  }
}