import { DataTypes } from "sequelize"
import sequelize from "../config/database/database.js"

const Plane = sequelize.define('plane', {
  /* 
  //tabla = entidad planes
Table plane {
  plane_id integer [pk, increment]
  plane_number integer [not null]
  model varchar(20) [not null]
  max_capacity integer [not null]
  airline airlines [not null]
  status boolean [not null, default: true]
  created_at timestamp [default: 'now()']
}  
  */

  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    field: 'plane_id'
  },
  planeNumber: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'plane_number'
  },
  model: {
    allowNull: false,
    type: DataTypes.STRING(20)
  },
  maxCapacity: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  /* Enum airlines {
  AeroGlobe
  AeroTronix
  AeroMexico
  VivaAeroBus
  AmericanAirlines
} */
  airline: {
    allowNull: false,
    type: DataTypes.ENUM('AeroGlobe', 'AeroTronix', 'AeroMexico', 'VivaAerobus', 'AmericanAirlines', 'CanadianAirlines')
  },
  status: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
})

export default Plane