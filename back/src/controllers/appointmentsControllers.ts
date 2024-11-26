import { Request, Response } from "express";
import { getTurnsService, getTurnByIdService, createTurnService, cancelTurnService } from "../services/turnsService";

export const getAppointmentsController = async (req: Request, res: Response) => {
    const turns = await getTurnsService();
    res.status(200).json(turns);
};

export const getappointmentByIdController = async (req: Request, res: Response) => {
    const turn = await getTurnByIdService(req.body.id);
    if(!turn) {
        res.status(404).json({ message: "El turno no existe" });
    } else {
        res.status(200).json(turn);
    }
};

export const createAppointmentController = async (req: Request, res: Response) => {
    const turn = await createTurnService(req.body);
    res.status(201).json(turn);
};

export const cancelAppointmentController = async (req: Request, res: Response) => {
    const turn = await cancelTurnService(req.body.id);
    if(!turn) {
        res.status(404).json({ message: "El turno no existe" });
    } else {
        res.status(200).json(turn);
    }
};