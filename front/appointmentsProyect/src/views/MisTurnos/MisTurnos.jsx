import { useEffect, useState } from "react";
import Appointment from "../../components/Appointment/Appointment";
import axios from "axios";


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