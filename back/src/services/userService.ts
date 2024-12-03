import UserDto from "../dtos/UserDto";
import { Credential } from "../entities/Credential";
import { User} from "../entities/user";
import userRepository from "../repository/userRepository";
import { createCredentialService } from "./credentialService";


export const getUserService = async (): Promise<User[]> => { 
    const users = await userRepository.find({
        relations: {
            appointments: true,
        }
    });
    return users;
};

export const getUserByIdService = async (id: number): Promise<User> => { 
    const Finduser = await userRepository.findOne({where: {id}, relations: ["credential"]});
    if(!Finduser) {
        throw Error("El usuario no existe.");
    }
    return Finduser;
};


export const createUserService = async (userData: UserDto): Promise<User> => {
    const newCredential: Credential = await createCredentialService({
        username: userData.username,
        password: userData.password
    });
    const newUser: User = await userRepository.create(userData);
    newUser.credential = newCredential;
    await userRepository.save(newUser);
    return newUser;
};

export const FinduserService = async (credentialId: number): Promise<User | null> => {
    const user = await userRepository.findOneBy({credential:{id: credentialId}});
    return user;
}


