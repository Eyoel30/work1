import express from 'express'
import pg from 'pg'

const app = express()
const port = 3000
const db = new pg.Client({
  user: "postgrsql",
  host: "localhost",
  database: "customers",
  password: "789456",
  port: 5432,
})

db.connect()

app.listen(port,()=>{
  console.log(`server is running on ${port}`)
})