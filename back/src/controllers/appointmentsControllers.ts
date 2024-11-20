import { Request, Response } from "express";

export const getAppointmentsController = (req: Request, res: Response) => {
    res.send("Obtener el listado de todos los turnos de todos los usuarios");
};

export const getappointmentByIdController = (req: Request, res: Response) => {
    res.send("Obtener el detalle de un turno específico");
};

export const createAppointmentController = (req: Request, res: Response) => {
    res.send("Agendar un nuevo turno");
};

export const cancelAppointmentController = (req: Request, res: Response) => {
    res.send("Cambiar el estatus de un turno a “cancelled”");
};