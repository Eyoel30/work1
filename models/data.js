async function getAll(){
   let result = await db.query("SELECT * FROM customers ORDER BY customerid ASC")
  return items = result.row
}

async function add(val){
  let result = await db.query("INSERT INTO customers WHERE ")
}