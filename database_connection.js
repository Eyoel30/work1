import 'dotenv/config'

import Pool from 'pg'

const db = new pg.Pool({
  user: process.env.DB_user,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE ,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

export default db