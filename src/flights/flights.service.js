import Flight from "./flights.model.js"

export class FlightService {
  async findAllFlights() {
    return await Flight.findAll({
      where: {
        status: true
      }
    })
  }

  async createFlight(data) {
    return await Flight.create(data)
  }

  async findOneFlight(id) {
    return await Flight.findOne({
      where: {
        id,
        status: true
      }
    })
  }

  async updateFlight(flight, data) {
    return await flight.update(data)
  }

  async findAllFlights(flight) {
    return await flight.update({
      status: false
    })
  }

}