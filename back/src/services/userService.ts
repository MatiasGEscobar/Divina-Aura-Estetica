import UserDto from "../dtos/UserDto";
import IUser from "../interfaces/IUser";
import { createCredentialService } from "./credentialService";
const users: IUser[] = [];
let id = 0;

export const getUserService = async ():Promise<IUser[]> => {
    return users;
};

export const getUserByIdService = async (id:number):Promise<IUser | null> => {
    const user = users.find((user) => user.id === id);
    if(!user) {
        console.log("El usuario no existe.");
        return null;
    }
    return user;
};


export const createUserService = async (userData: UserDto):Promise<IUser> => {
    const credentialsId = await createCredentialService({
        name: userData.name,
        password: userData.password
    });

    const newUser: IUser = {
        id: id,
        name: userData.name,
        email: userData.email,
        birthDate: userData.birthDate,
        nDni: userData.nDni,        
        UserCredentialId: credentialsId,
    };
    users.push(newUser);
    id++;
    return newUser;
};

export default users;

