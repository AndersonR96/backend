import { Router } from "express";
import { Controllers } from "../controllers/index.js";

const User = Router();

User.get("/", Controllers.User.get);
User.get("/:id", Controllers.User.getById);
User.post("/", Controllers.User.create);
User.put("/:id", Controllers.User.update);
User.delete("/:id", Controllers.User.delete);

export default User;
