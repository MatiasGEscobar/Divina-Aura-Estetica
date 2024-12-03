import { DataSource } from "typeorm";
import { DB_HOST, DB_PORT, DB_USERNAME, DB_NAME, DB_PASSWORD } from "../config/envs";
import { Credential } from "../entities/Credential"
import { User } from "../entities/user"
import { Appointment } from "../entities/appointments"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    //dropSchema: true,
    logging: false,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})


