const Appointment = ({date, time, description, status}) => {
    return (
        <>
            <h3>{date}</h3>
            <h3>{time}</h3>
            <h3>{description}</h3>
            <h3>{status}</h3>
        </>
    )
}

export default Appointment;