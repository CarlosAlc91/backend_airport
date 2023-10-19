//1. import
import { DataTypes } from "sequelize"
import sequelize from '../config/database/database.js'

//2. modelo de usuario
const User = sequelize.define('users', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  fullname: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.ENUM(
      'male',
      'female',
      'prefer not to say'
    ),
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM(
      'receptionist',
      'admin',
      'developer',
      'manager',
      'user'
    ),
    allowNull: false,
    defaultValue: 'user'
  },
  changedPasswordAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
})

export default User