import { Router } from "express";
import { Controllers } from "../controllers/index.js";

const productService = Router();

productService.get('', Controllers.productService.get)
productService.get('/:id', Controllers.productService.getById)
productService.post('', Controllers.productService.create)
productService.put('/:id', Controllers.productService.update)
productService.delete('/:id', Controllers.productService.delete)


export default productService;
