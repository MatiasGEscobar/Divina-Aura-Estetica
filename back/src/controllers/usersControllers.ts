import { Request, Response } from "express";
import { createUserService, getUserService, getUserByIdService } from "../services/userService";
import { verifyUserAndPassword } from "../services/credentialService";
import { FinduserService } from "../services/userService";
import { User } from "../entities/user";

export const getUsersController = async (req: Request, res: Response) => { 
    try {
    const users: User[] = await getUserService();
    res.status(200).json(users);
    } catch (error: any) {
        res.status(400).json({ error: error.message }); 
    }
};

export const getUserByIdController = async (req: Request, res: Response) => { 
    try {
        const {id} = req.params;
        const user: User | null = await getUserByIdService(Number(id));
    if(!user) {
        res.status(404).json({ message: "El usuario no existe" });
    } else {
        res.status(200).json(user);
    }
    } catch (error: any) {
        res.status(404).json({ error: error.message });
    }
};

export const registerUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, birthDate, nDni, username, password } = req.body;
        const newUser: User = await createUserService({name, email, birthDate, nDni, username, password});
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const loginUserController = async (req: Request, res: Response): Promise<any> => {
    try {
        const { username, password } = req.body;
        const result = await verifyUserAndPassword({username, password});
        const user = await FinduserService(result.id);
        return res.status(200).json({ login: true, user });
        
    }catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
};