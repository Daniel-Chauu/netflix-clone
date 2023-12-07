import 'dotenv/config'
import { MongoClient, Db, ServerApiVersion } from 'mongodb'

const env = process.env
const username = env.DB_USERNAME
console.log('🚀 ~ username:', username)
const password = env.DB_PASSWORD
console.log('🚀 ~ password:', password)
const dbname = env.DB_NAME
console.log('🚀 ~ dbname:', dbname)

const uri = `mongodb+srv://${username}:${password}@netflix.v6rs9rm.mongodb.net/?retryWrites=true&w=majority`

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
      }
    })
    this.db = this.client.db(dbname)
  }
  async connect() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await this.client.connect()
      // Send a ping to confirm a successful connection
      await this.client.db('admin').command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } finally {
      // Ensures that the client will close when you finish/error
      // await client.close()
    }
  }
}

const database = new DatabaseService()
export default database
