import { Request, Response, NextFunction } from "express";
import users from "../services/userService";


const verifyUserExists = (req: Request, res: Response, next: NextFunction): any => {
    const { name, email, birthDate, nDni, password } = req.body;


    if (!name || !email || !birthDate || !nDni || !password) {
        res.status(400).json({ 
        message: "Faltan datos obligatorios. Por favor verifica el cuerpo de la solicitud."
        });
    }

    const userExists = users.some(
        (user) =>
            user.name === name ||
            user.email === email ||
            user.birthDate === birthDate ||
            user.nDni === nDni ||
            user.UserCredentialId === password
    );

    if (userExists) {
        return res.status(400).json({
            message: "Alguno de los datos enviados ya está en uso. Por favor verifica el cuerpo de la solicitud.",
        });
    }
    
    next();
    
};

export default verifyUserExists;