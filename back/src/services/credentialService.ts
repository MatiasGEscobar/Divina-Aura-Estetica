import CredentialDto from "../dtos/CredentialDto";
import ICredentials from "../interfaces/ICredentials";

const credentials: ICredentials[] = [];
let id = 0;

export const createCredentialService = async (credentialData: CredentialDto):Promise<number> => {
    const newCredential: ICredentials = {
        id: id,
        username: credentialData.name,
        password: credentialData.password
    };
    credentials.push(newCredential);
    id++;
    return newCredential.id;
};

export const verifyUserAndPassword = async (username: string, password: string):Promise<number | null> => {
    const credential = credentials.find((credential) => credential.username === username);

    if(!credential) {
        console.log("El nombre de usuario no existe.");
        return null;
    }

    if(credential.password !== password) {
        console.log("La contraseña no es correcta.");
        return null;
    }

    return credential.id;
};

