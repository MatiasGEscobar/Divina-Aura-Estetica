import { Request, Response } from "express";

export const getUsersController = (req: Request, res: Response) => {
    res.send("Obtener el listado de todos los usuarios");
};

export const getUserByIdController = (req: Request, res: Response) => {
    res.send("Obtener el detalle de un usuario específico");
};

export const registerUserController = (req: Request, res: Response) => {
    res.send("Registro de un nuevo usuario");
};

export const loginUserController = (req: Request, res: Response) => {
    res.send("Login del usuario a la aplicación");
};