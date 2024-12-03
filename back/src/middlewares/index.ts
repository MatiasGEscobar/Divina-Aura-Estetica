import { Request, Response, NextFunction } from "express";
import userRepository from "../repository/userRepository";


const verifyUserExists = async (req: Request, res: Response, next: NextFunction): Promise<void | any> => {
    const { name, email, birthDate, nDni, username, password } = req.body;


    if (!name || !email || !birthDate || !nDni ||!username || !password) {
        res.status(400).json({ 
        message: "Faltan datos obligatorios. Por favor verifica el cuerpo de la solicitud."
        });
    }

    const userExists = await userRepository.findOneBy({name, email, birthDate, nDni});

    if (userExists) {
        return res.status(400).json({
            message: "Alguno de los datos enviados ya está en uso. Por favor verifica el cuerpo de la solicitud.",
        });
    }
    
    next();
    
};

export default verifyUserExists;