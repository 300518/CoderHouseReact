import logoTienda from "../assets/animeStoreChile.svg";
import CartWigdet from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src={logoTienda}
          className="navbar-logo"
          alt="Anime Store Chile"
          style={{ height: "40px" }}
        ></img>
      </Link>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Catalogo
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/ofertas">
            Ofertas
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/figuras-accion">
            Figuras de Acción
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/cartas-tgc">
            Cartas TCG
          </Link>
        </li>
      </ul>

      {/* <a className="navbar-brand" href="">
        <img
          src={logoTienda}
          href="#"
          className="navbar-logo"
          alt="Anime Store Chile"
          style={{ height: "40px" }}
        ></img>
      </a>
      <div className="navbar-nav me-auto">
        <a className="nav-link" href="#">
          Catalogo
        </a>
        <a className="nav-link" href="#">
          Ofertas
        </a>
        <a className="nav-link" href="#">
          Figuras de Acción
        </a>
        <a className="nav-link" href="#">
          Cartas TCG
        </a>
      </div>
      */}
      <CartWigdet></CartWigdet>
    </nav>
  );
};

export default Navbar;
