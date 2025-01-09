import { EnterpriseLogoStylesDiv } from "./EnterpriseLogo.js"
import { Link } from "react-router-dom"

const EnterpriseLogo = () => {
  return (
    <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
      <EnterpriseLogoStylesDiv>
        <img height={50} src="https://static.thenounproject.com/png/6451249-84.png" alt="Logo Aura Divina" />
        <h1>Divina Aura</h1>
      </EnterpriseLogoStylesDiv>
    </Link>

  )
}

export default EnterpriseLogo