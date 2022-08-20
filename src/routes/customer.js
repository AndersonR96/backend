import { Router } from "express";
import { Controllers } from "../controllers/index.js";

const Customer = Router();

Customer.get('', Controllers.Customer.get)
Customer.get('/:id', Controllers.Customer.getById)
Customer.post('', Controllers.Customer.create)
Customer.put('/:id', Controllers.Customer.update)
Customer.delete('/:id', Controllers.Customer.delete)

export default Customer;
