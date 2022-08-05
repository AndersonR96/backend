import { Router } from "express";
import { Controllers } from "../controllers/index.js";

const Provider = Router();

Provider.get('', Controllers.Provider.get)
Provider.get('/:id', Controllers.Provider.getById)
Provider.post('', Controllers.Provider.create)
Provider.put('/:id', Controllers.Provider.update)
Provider.delete('/:id', Controllers.Provider.delete)

export default Provider;
