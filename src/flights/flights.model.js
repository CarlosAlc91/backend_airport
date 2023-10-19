//1. impor datatypes and sequelize
import { DataTypes } from "sequelize"
import sequelize from "../config/database/database.js"

//2. create model
const Flight = sequelize.define('flight', {

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
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'plane_id'
  },
  departureTime: {
    type: DataTypes.TIME,
    allowNull: false,
    field: 'departure_time'
  },
  checkIn: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'check_in'
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