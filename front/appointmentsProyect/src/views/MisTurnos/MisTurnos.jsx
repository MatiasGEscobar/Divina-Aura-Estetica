import AppointmentsPreCharge from "../../helpers/myAppointments";
import { useState } from "react";
import Appointment from "../../components/Appointment/Appointment";

const MisTurnos = () => {

    const [appointments, setAppointments] = useState(AppointmentsPreCharge);

  return (
    <>
      <h1>Sus Turnos</h1>
      {
      appointments.length ? (
        appointments.map((appointment) => {
            return ( <Appointment key={appointment.id} {...appointment} /> )
        })
      ) : ( <h1>No hay turnos</h1> )
    }
    </>
  );

}

export default MisTurnos;