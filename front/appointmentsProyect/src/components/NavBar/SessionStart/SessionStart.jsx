import { SessionStartStylesDiv } from "./SessionStart.js"

const SessionStart = () => {
  return (
    <SessionStartStylesDiv>
        <a href="/">
            <img height={50} src="https://static.thenounproject.com/png/7308895-84.png" alt="Logo de Inicio de Sesión" />
        </a>
        {/* <h1>Bienvenido</h1>
        <form action="/login" method="POST">
            <input type="text" name="username" placeholder="Usuario" required>
            <input type="password" name="password" placeholder="Contraseña" required>
            <button type="submit">Iniciar Sesión</button>
        </form> */}
    </SessionStartStylesDiv>
  )
}

export default SessionStart