import { Router } from "express";
import {getAppointmentsController, getappointmentByIdController, createAppointmentController, cancelAppointmentController} from "../controllers/appointmentsControllers";

const appointmentRoutes: Router = Router();

appointmentRoutes.get("/", getAppointmentsController);
appointmentRoutes.get("/:id", getappointmentByIdController);
appointmentRoutes.post("/schedule", createAppointmentController);
appointmentRoutes.put("/cancel/:id", cancelAppointmentController);

export default appointmentRoutes;