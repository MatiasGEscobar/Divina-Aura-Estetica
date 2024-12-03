import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity({
    name: "appointments"
})

export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("date")
    date: Date;

    @Column("time")
    time: Date;

    @Column("text")
    description: string;

    @Column({
        default: "active",
    })
    status: string;

    @ManyToOne(() => User, (user) => user.appointments)
    user: User;
}