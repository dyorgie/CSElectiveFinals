import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../navigation/Navbar.css"

export default function Navbar() {
  const { user } = useContext(UserContext);
  if (user === undefined) return null;

  return(
    <nav>
    <h1>Santayo</h1>

    {user ? (
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </>
    ) : (
      <NavLink to="/login"><button>Login</button></NavLink>
    )}
  </nav>
  )
 
}
