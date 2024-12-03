import { Appointment } from "../entities/appointments";
import AppointmentsDto from "../dtos/AppointmentsDto";
import { AppDataSource } from "../config/data-source";
import appointmentRepository from "../repository/appointmentRepository";
import userRepository from "../repository/userRepository";


export const getAppointmentsService = async ():Promise<Appointment[]> => {
    const appointments = await appointmentRepository.find({
        relations: ["user"]
    });
    return appointments;
};

export const getAppointmentByIdService = async (id:number):Promise<Appointment | null> => {  //copiar la funcion de getUserByIdService
    const findappointment = appointmentRepository.findOneBy({id});
    if(!findappointment) {
        throw Error("El turno no existe.");
    }
    return findappointment;
};

export const createAppointmentService = async (appointmentData: AppointmentsDto): Promise<Appointment | void> => { 
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    
    try {
        await queryRunner.startTransaction();
        const newAppointment = await appointmentRepository.create(appointmentData);
        await queryRunner.manager.save(newAppointment);

        const user = await userRepository.findOneBy({id: appointmentData.userId});
            if (!user) throw Error("Usuario inexistente, no se puede crear el turno");

            newAppointment.user = user;
            await queryRunner.manager.save(newAppointment);
            await queryRunner.commitTransaction();
        return newAppointment;
    } catch (err) {
        await queryRunner.rollbackTransaction();
        throw Error("Error al crear el turno");
    } finally {
        await queryRunner.release();
    }
};

export const cancelAppointmentService = async (id: number): Promise<Appointment | null> => {
    const findappointment = await appointmentRepository.findOneBy({id});
    
    if(!findappointment) {
        throw Error("El turno no existe.");
    }
    findappointment.status = "cancelled";
    await appointmentRepository.save(findappointment);
    return findappointment;
};