import CredentialDto from "../dtos/CredentialDto";
import { Credential } from "../entities/Credential";
import credentialRepository from "../repository/credentialRepository";


export const createCredentialService = async (credentialData: CredentialDto): Promise<Credential> => {
    const newCredential: Credential = await credentialRepository.create(credentialData);
    await credentialRepository.save(newCredential);
    return newCredential;
};


export const verifyUserAndPassword = async (credentialDto: CredentialDto): Promise<Credential> => {
    const {username, password} = credentialDto;
    const foundCredential: Credential | null = await credentialRepository.findOneBy({username});
    if(!foundCredential) {
        throw Error("Usuario no existe");
    }else if(foundCredential && foundCredential.password !== password) {
        throw Error("Contraseña incorrecta");
    }else {
        return foundCredential;
    }
};



