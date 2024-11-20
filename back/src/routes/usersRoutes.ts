import { Router } from "express";
import {getUsersController, getUserByIdController, registerUserController, loginUserController} from "../controllers/usersControllers";

const userRoutes: Router = Router();

userRoutes.get("/", getUsersController);
userRoutes.get("/:id", getUserByIdController);
userRoutes.post("/register", registerUserController);
userRoutes.post("/login", loginUserController);

export default userRoutes;