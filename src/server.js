import { envs } from './config/environments/environments.js'
import app from './app.js'
import { authenticate, synchronize, } from './config/database/database.js'

async function main() {
  try {
    await authenticate()
    await synchronize()
  } catch (error) {
    console.error(error)
  }
}

main()

//app listener
app.listen(envs.PORT, () => {
  console.log(
    `server running on port ${envs.PORT}`
  )
})