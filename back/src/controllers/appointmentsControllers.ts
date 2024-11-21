import { Request, Response } from "express";

export const getAppointmentsController = async (req: Request, res: Response) => {
    res.send("Obtener el listado de todos los turnos de todos los usuarios");
};

export const getappointmentByIdController = async (req: Request, res: Response) => {
    res.send("Obtener el detalle de un turno específico");
};

export const createAppointmentController = async (req: Request, res: Response) => {
    res.send("Agendar un nuevo turno");
};

export const cancelAppointmentController = async (req: Request, res: Response) => {
    res.send("Cambiar el estatus de un turno a “cancelled”");
};