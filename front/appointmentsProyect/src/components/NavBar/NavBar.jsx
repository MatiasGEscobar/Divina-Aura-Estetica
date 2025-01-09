import SessionStart from "./SessionStart/SessionStart.jsx";
import {NavbarStylesDiv} from "./NavBar.js";
import  EnterpriseLogo from "./EnterpriseLogo/EnterpriseLogo.jsx";
import Menus from "./menus/Menus.jsx";



const NavBar = () => {
  return (
    <NavbarStylesDiv>
      <EnterpriseLogo />
      <Menus />
      <SessionStart />
    </NavbarStylesDiv>
  )
}

export default NavBar