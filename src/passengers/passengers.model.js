import { DataTypes } from "sequelize"
import sequelize from "../config/database/database.js"
/* Aqui estamos creando a un pasajero */
//los modelos van con p mayuscula, asi sabemos que e un modelo
/* tabla = entidad */
const Passenger = sequelize.define("passenger", {/*  */
  /* propiedades */
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    field: "passenger_id",
  },
  nro_passport: {
    type: DataTypes.BIGINT,
    unique: true,
    allowNull: false,
    field: "nro_passport",
  },
  name: {
    /* aqui asignamos un varchar */
    type: DataTypes.STRING(100),
    /*  allowNull: false, */
    /* como es el mosmo nkombre no se pone el field */
  },
  surname: {
    type: DataTypes.STRING(100),
    /* allowNull: false, */
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  /* tipo de dato enum */
  genre: {
    type: DataTypes.ENUM("male", "female", "prefer not to say"),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "created_by",
  },
  photo: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "sinfoto",
  },
  /* el status es mejor al ultimo */
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
})

export default Passenger
