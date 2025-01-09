interface AppointmentDto {
    date: Date;
    time: Date;
    description: string;
    userId: number;
    status: "active 🟢" | "cancelled 🔴";
}

export default AppointmentDto;