interface IAppointment {
    id: number;
    date: Date;
    time: Date;
    userId: number;
    status: string;
}

export default IAppointment;