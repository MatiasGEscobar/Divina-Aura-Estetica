import { useEffect, useState } from "react";
import Appointment from "../../components/Appointment/Appointment";
import axios from "axios";
import { AppointmentsStylesDiv } from "./MisTurnos";


const MisTurnos = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3000/appointments")
        .then((response) => {
          setAppointments(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);


    return (
      <AppointmentsStylesDiv>
      <h1>Turnos de:  {appointments.map ((appointment) => {return appointment.user.name})}</h1>
      {
        appointments.length ? (
          appointments.map((appointment) => {
            return ( <Appointment key={appointment.id} {...appointment} /> )
          })
        ) : ( <h3>No hay turnos</h3> )
      }
    </AppointmentsStylesDiv>
  );


}

export default MisTurnos;