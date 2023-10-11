/* creacion de modelo */
//1. importat datatypes
import { DataTypes } from "sequelize"
import sequelize from "../config/database/database.js"

//2. creacion de modelo
const Error = sequelize.define('error', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  stack: {
    type: DataTypes.TEXT,
    allowNull: true
  }
})

//3. exportat
export default Error