import { Router } from "express";
import { Controllers } from "../controllers/index.js";

const Customer = Router();

Customer.get('', Controllers.Provider.get)
Customer.get('/:id', Controllers.Provider.getById)
Customer.post('', Controllers.Provider.create)
Customer.put('/:id', Controllers.Provider.update)
Customer.delete('/:id', Controllers.Provider.delete)

export default Customer;
