import express from 'express'
import { router } from './routes/customerRoutes'
const app = express()
const port = 3000
app.use(express.json())
app.use('/api/access', router)

app.listen(port,()=>{
  console.log(`server is running on ${port}`)
})