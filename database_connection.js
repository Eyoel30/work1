import Pool from 'pg'

const db = new pg.Pool({
  user: "postgrsql",
  host: "localhost",
  database: "customers",
  password: "789456",
  port: 5432,
})

export default db