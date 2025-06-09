import express from 'express'
import {productcontroler} from '../controller/controlrout'
const app = express()
const router = app.router()

router.get('/', productcontroler.getAllcustomers)
router.post('/', productcontroler.addcustomers)
router.put('/:id', productcontroler.updateCustomers)
router.delete('/id', productcontroler.deleteCustomer)

export {router}