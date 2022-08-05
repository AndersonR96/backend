import { Router } from "express";
import { Controllers } from "../controllers/index.js";

const Cost = Router();

Cost.get('', Controllers.Cost.get)
Cost.get('/:id', Controllers.Cost.getById)
Cost.post('', Controllers.Cost.create)
Cost.put('/:id', Controllers.Cost.update)
Cost.delete('/:id', Controllers.Cost.delete)

export default Cost;
