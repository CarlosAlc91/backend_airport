import City from './cities.model.js'


export class CityService {

  async findAllCities() {

  }

  async createCity(data) {
    return await City.create(data)
  }

  async findOneCity() {

  }
  async updateCity() {

  }
  async deleteCity() {

  }

}