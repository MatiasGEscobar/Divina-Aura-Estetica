import { Request, Response } from "express";
import { getAppointmentsService, getAppointmentByIdService, createAppointmentService, cancelAppointmentService } from "../services/appointmentService";

export const getAppointmentsController = async (req: Request, res: Response) => { 
    try {
    const appointments = await getAppointmentsService();
    res.status(200).json(appointments);
} catch (error: any) {
    res.status(404).json({ error: error.message });
}
};

export const getappointmentByIdController = async (req: Request, res: Response) => {
    try {
    const turn = await getAppointmentByIdService(req.body.id);
    if(!turn) {
        res.status(404).json({ message: "El turno no existe" });
    } else {
        res.status(200).json(turn);
    }
} catch (error) {
    res.status(404).json({ message: "Error al obtener turno" });
}
};

export const createAppointmentController = async (req: Request, res: Response): Promise<any> => {
  const { date, time, description, status, userId } = req.body;
    try {
    const newAppointment = await createAppointmentService({
        date, time, description, status, userId
    });
    return res.status(201).json(newAppointment);
}   catch (error) {
    res.status(400).json({ message: "Error al crear turno" });
}
};

export const cancelAppointmentController = async (req: Request, res: Response) => {
    try {
    const appointmentId = await cancelAppointmentService(req.body.id);
    if(!appointmentId) {
        res.status(404).json({ message: "El turno no existe" });
    } else {
        res.status(200).json({ message: "Turno cancelado" });
    }
} catch (error) {
    res.status(404).json({ message: "Error al cancelar turno" });
}
};