import logoTienda from "../assets/animeStoreChile.svg";
import CartWigdet from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="">
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
      <CartWigdet></CartWigdet>
    </nav>
  );
};

export default Navbar;
