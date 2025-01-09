import { Column, Entity, OneToOne, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Appointment } from "./appointments";
import { Credential } from "./Credential";

@Entity({name: "users"})

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
    length: 100,
    })
    name: string;

    @Column({
    length: 100,
    })
    email: string;

    @Column("date")
    birthDate: Date;

    @Column("numeric")
    nDni: number;

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential;

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[];
}
