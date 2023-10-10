import City from './cities.model.js'


export class CityService {
  //retorname todas las ciudades donde su status sea true
  async findAllCities() {
    return await City.findAll({
      where: {
        status: true
      }
    })
  }

  async createCity(data) {
    return await City.create(data)
  }

  //retorna una ciudad en donde su id sea igual al id y su status sea true
  async findOneCity(id) {
    return await City.findOne({
      where: {
        id,
        status: true
      },
      //trae la informacion mas no el modelo, pero no se podra hacer city.update
      //raw: true
    })
  }

  //se recibe la ciudad y la data a actualiza
  async updateCity(city, data) {
    return await city.update(data)
  }

  //solo se recibe la ciudad a elimnar porque se hace una eliminacion de manera logica - actualizando unicamente el status a false
  async deleteCity(city) {
    return await city.update({
      status: false
    })
  }

}