import { Router } from "express";
import {getUsersController, getUserByIdController, registerUserController, loginUserController} from "../controllers/usersControllers";
import verifyUserExists from "../middlewares";

const userRoutes: Router = Router();

userRoutes.get("/", getUsersController);
userRoutes.get("/:id", getUserByIdController);
userRoutes.post("/register",verifyUserExists, registerUserController);
userRoutes.post("/login", loginUserController);

export default userRoutes;