import { EnterpriseLogoStylesDiv } from "./EnterpriseLogo.js"

const EnterpriseLogo = () => {
  return (
   <a href="./index.html" style={{ textDecoration: "none", color: "inherit" }}>
    <EnterpriseLogoStylesDiv>
        <img height={50} src="https://static.thenounproject.com/png/6451249-84.png" alt="Logo Aura Divina" />
        <h1>Divina Aura</h1>
    </EnterpriseLogoStylesDiv>
   </a>

  )
}

export default EnterpriseLogo