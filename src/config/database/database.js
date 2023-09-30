import { Sequelize } from "sequelize"
import { envs } from "../environments/environments.js"

const sequelize = new Sequelize(envs.DB_URI, {
  logging: false
})

/* authenticate */
export async function authenticate() {
  try {
    await sequelize.authenticate()
    console.log("Conection established 😀")
  } catch (error) {
    throw new Error("Error al autenticar", error)
  }
}

/* syncronize */
export async function synchronize() {
  try {
    await sequelize.sync()
    console.log("Conection synced 😎")
  } catch (error) {
    throw new Error("error al sincronizar", error)
  }
}

export default sequelize