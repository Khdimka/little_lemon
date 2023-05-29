import "../styles/Nav.css";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <nav>
      <img src={require("../Assets/Logo.png")} alt="Logo" width="auto"></img>
      <ul>
        <li>
          <Link
            className={location.pathname === "/homepage" ? "here" : ""}
            to="/homepage"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/about" ? "here" : ""}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/menu" ? "here" : ""}
            to="/menu"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/reservation" ? "here" : ""}
            to="/reservation"
          >
            Reservation
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/orderOnline" ? "here" : ""}
            to="/orderOnline"
          >
            Order Online
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === "/login" ? "here" : ""}
            to="/login"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;