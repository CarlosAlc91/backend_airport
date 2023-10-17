//1. impor datatypes and sequelize
import { DataTypes } from "sequelize"
import sequelize from "../config/database/database.js"

//2. create model
const Flight = sequelize.define('flight', {
  /* flight_id integer [pk, increment]
  //id de las ciudades
  origin_id integer [not null]
  destination_id integer [not null]
  plane_id integer [not null]
  departure_time timestamp [not null]
  check_in timestamp

  status flight_status [default: 'pending'] */

  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    field: 'flight_id'
  },
  originId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'city_id'
  },
  destinationId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'destination_id'
  },
  planeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'plane_id'
  },
  departureTime: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'departure_time'
  },
  checkIn: {
    allowNull: false,
    type: DataTypes.DATE
  },
  /* 
  Enum flight_status {
  pending
  inProgress
  done
  cancelled
  delayed
}
  */
  status: {
    allowNull: false,
    type: DataTypes.ENUM('pending', 'inProgress', 'done', 'cancelled', 'delayed')
  }
})

//3. export model
export default Flight