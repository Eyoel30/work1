import { json } from "express";
import { data } from "../models/data";

const productcontroler = {
  async getAllcustomers(req, res) {
    try {
      const customer = await data.getAll()
      res.json(customer)
    } catch (error) {
      console.log("there is and eror", error.message)
      res.status(500).json({ error: "server error" })
    }
  },
  async addcustomers(req, res) {
    const customer = req.body
    try {
      const createCustomer = await data.add(customer)
      res.status(201).json(createCustomer)
    } catch (erro) {
      console.log("unable to add new customer", erro.message)
      res.status(500).json({ message: erro.message })
    }
  },
  async updateCustomers(req, res) {
    const update = req.body
    try {
      const updated = await data.update(update)
      res.status(201).json(updated)
    } catch (error) {
      console.log("unable to update", error.message)
      res.status(500).json({ message: error.message })
    }
  },
  async deleteCustomer(req, res) {
    const id = req.body.id
    try {
      const toDelete = await data.delete(id)
      res.status(201).json(toDelete)
    } catch (error) {
      console.log("unable to delet customer", error.message)
      res.status(500).json({ error: error.message })
    }
  }
}
export {productcontroler}
