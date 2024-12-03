import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/appointments";

const appointmentRepository = AppDataSource.getRepository(Appointment);

export default appointmentRepository;