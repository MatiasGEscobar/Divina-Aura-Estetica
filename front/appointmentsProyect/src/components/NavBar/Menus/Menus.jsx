import { MenusStylesDiv } from "./Menus";
import { MenuStylesDiv } from "./Menu";
import { Link } from "react-router-dom";


const Menus = () => {
  return (
    <MenusStylesDiv>
      <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
      <MenuStylesDiv>Home 🏠</MenuStylesDiv>
      </Link>
      <Link style={{ textDecoration: "none", color: "inherit" }}>
      <MenuStylesDiv>Sobre nosotros 💆🏻‍♀️</MenuStylesDiv>
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <MenuStylesDiv>Mis turnos 📆</MenuStylesDiv>
      </Link>
      <Link style={{ textDecoration: "none", color: "inherit" }}>
      <MenuStylesDiv>Contacto 📱</MenuStylesDiv>
      </Link>

    </MenusStylesDiv>
  )
}

export default Menus