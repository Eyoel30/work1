import db from "../database_connection"

const data = {
  async getAll() {
    let result = await db.query('SELECT * FROM customers ORDER BY customerid ASC')
    return items = result.row
  },

  async add(val) {
    const { fname, lname, email, joindate, lastlogin, isactive, totalorder, average, fevoright } = val
    let { row } = await db.query('INSERT INTO customers (firstname, lastname, email, joindate, lastlogin, isactive, totalorder, avarageordervalue, fevoriteproductcategory ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [fname, lname, email, joindate, lastlogin, isactive, totalorder, average, fevoright])
    return row[0]
  },

  async update(id, val) {
    const { fname, lname, email, joindate, lastlogin, isactive, totalorder, average, fevoright } = val
    const { row } = await db.query('UPDATE customers SET firstname = $1, lastname = $2, email = $3, joindate = $4, lastlogin = $5, isactive = $6, totalorder = $7, avarageordervalue = $8, fevoriteproductcategory = $9 WHERE customerid = $10 RETURNING *',[fname, lname, email, joindate, lastlogin, isactive, totalorder, average, fevoright, id])
    return row[0]
  },
  async delete(id){
    const {row} = await db.query('DELETE FROM customer WHERE customerid = $1 RETURNING *',[id])
    return row[0]
  }
}

export {data}


