import express from 'express'
import 'dotenv/config'
import database from './services/database.service'

const app = express()
const PORT = process.env.PORT
database.connect()

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT} : http://localhost:${PORT} `)
})
