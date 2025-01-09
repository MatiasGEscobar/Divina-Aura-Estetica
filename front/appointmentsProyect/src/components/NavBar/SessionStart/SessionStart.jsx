import { SessionStartStylesDiv } from "./SessionStart.js"
import { Link } from "react-router-dom"

const SessionStart = () => {
  return (
    <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
    <SessionStartStylesDiv>
            <img height={50} src="https://static.thenounproject.com/png/7308895-84.png" alt="Logo de Inicio de Sesión" />
    </SessionStartStylesDiv>
    </Link>
  )
}

export default SessionStart