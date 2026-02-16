import logoTienda from "../assets/animeStoreChile.svg";
import CartWigdet from "./CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active fw-bold" : "nav-link"
        }
        to="/"
      >
        <img
          src={logoTienda}
          className="navbar-logo"
          alt="Anime Store Chile"
          style={{ height: "40px" }}
        ></img>
      </NavLink>

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active fw-bold" : "nav-link"
            }
            to="/"
          >
            Catalogo
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active fw-bold" : "nav-link"
            }
            to="/category/ofertas"
          >
            Ofertas
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active fw-bold" : "nav-link"
            }
            to="/category/figuras-accion"
          >
            Figuras de Acción
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active fw-bold" : "nav-link"
            }
            to="/category/cartas-tgc"
          >
            Cartas TCG
          </NavLink>
        </li>
      </ul>

      <CartWigdet></CartWigdet>
    </nav>
  );
};

export default Navbar;
