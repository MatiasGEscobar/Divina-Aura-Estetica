import IAppointment from "../interfaces/IAppointment";
import users from "./userService";

const turns: IAppointment[] = [];
let id = 1;

export const getTurnsService = async ():Promise<IAppointment[]> => {
    return turns;
};

export const getTurnByIdService = async (id:number):Promise<IAppointment | null> => {
    const turn = turns.find((turn) => turn.id === id);
    if(!turn) {
        console.log("El turno no existe.");
        return null;
    }
    return turn;
};

export const createTurnService = async (turnData: IAppointment):Promise<IAppointment> => {
    if (!turnData.userId) {                                                         //Validar que el userId esté presente
        throw new Error("El turno debe estar asociado a un usuario válido.");
    }

    const userExists = users.some((user) => user.id === turnData.userId);           // Validar que el userId exista en el sistema
    if (!userExists) {
        throw new Error(`El usuario con ID ${turnData.userId} no existe.`);
    }

    
    const newTurn: IAppointment = {
        id: id,
        date: turnData.date,
        time: turnData.time,
        userId: turnData.userId,
        status: turnData.status || "pending",
    };
    turns.push(newTurn);
    id++;
    return newTurn;
};

export const cancelTurnService = async (id: number):Promise<IAppointment | null> => {
    const turn = turns.find((turn) => turn.id === id);
    if(!turn) {
        console.log("El turno no existe.");
        return null;
    }
    turn.status = "cancelled";
    return turn;
};