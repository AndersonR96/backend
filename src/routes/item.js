import { Router } from "express";
import { Controllers } from "../controllers/index.js";

const Item = Router();

Item.get('', Controllers.Item.get)
Item.get('/:id', Controllers.Item.getById)
Item.post('', Controllers.Item.create)
Item.put('/:id', Controllers.Item.update)
Item.delete('/:id', Controllers.Item.delete)


export default Item;
