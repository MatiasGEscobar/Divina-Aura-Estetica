import './Appointment.css'

const Appointment = ({date, time, description, status}) => {
    return (
        <div className = "container">
            <h4>{date}</h4>
            <h4>{time}</h4>
            <h4>{description}</h4>
            <h4 className={`status ${status.toLowerCase()}`}>
                <span className="circle"></span>
                {status}
            </h4>
        </div>
    )
}

export default Appointment;