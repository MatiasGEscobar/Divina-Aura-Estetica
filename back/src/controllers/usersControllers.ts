import { Request, Response } from "express";
import { createUserService, getUserService, getUserByIdService } from "../services/userService";

export const getUsersController = async (req: Request, res: Response) => {
    const users = await getUserService();
    res.status(200).json(users);
};

export const getUserByIdController = async (req: Request, res: Response) => {
    const user = await getUserByIdService(req.body.id);
    if(!user) {
        res.status(404).json({ message: "El usuario no existe" });
    } else {
        res.status(200).json(user);
    }
};

export const registerUserController = async (req: Request, res: Response): Promise<void> => {
    const { id, name, surname, dateOfBirth, phone, address, email, userCredentialsId } = req.body;
    try {
        const newUser = await createUserService(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el usuario", error });
    }
};

export const loginUserController = async (req: Request, res: Response) => {
    res.send("Login del usuario a la aplicación");
};